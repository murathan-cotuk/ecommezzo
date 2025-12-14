// Newsletter abonelik API endpoint
import { getSupabaseClient } from '../../../../lib/supabase';

// Unsubscribe token oluştur
function generateUnsubscribeToken(email) {
  const crypto = require('crypto');
  return crypto.createHash('sha256').update(email + Date.now()).digest('hex').substring(0, 32);
}

// Hoş geldin emaili gönder (opsiyonel)
async function sendWelcomeEmail(email, name) {
  // Burada email gönderme servisi kullanabilirsiniz
  // Şimdilik sadece log
  console.log(`Welcome email sent to: ${email} (${name})`);
}

export async function POST(request) {
  try {
    const { email, name, source = 'contact_form' } = await request.json();

    // Email validasyonu
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({
        success: false,
        message: 'Ungültige E-Mail-Adresse'
      }, { status: 400 });
    }

    const supabase = getSupabaseClient();
    const normalizedEmail = email.toLowerCase().trim();

    // Email zaten kayıtlı mı kontrol et
    const { data: existingSubscriber, error: fetchError } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .eq('email', normalizedEmail)
      .single();

    if (existingSubscriber) {
      if (existingSubscriber.status === 'active') {
        return Response.json({
          success: false,
          message: 'Diese E-Mail-Adresse ist bereits angemeldet'
        }, { status: 409 });
      } else {
        // Yeniden abone ol - mevcut kaydı güncelle
        const { error: updateError } = await supabase
          .from('newsletter_subscribers')
          .update({
            status: 'active',
            subscribed_at: new Date().toISOString(),
            source: source,
            name: name?.trim() || existingSubscriber.name || ''
          })
          .eq('email', normalizedEmail);

        if (updateError) {
          throw updateError;
        }

        // Başarılı abonelik emaili gönder (opsiyonel)
        try {
          await sendWelcomeEmail(email, name);
        } catch (error) {
          console.warn('Welcome email gönderilemedi:', error);
        }

        return Response.json({
          success: true,
          message: 'Erfolgreich für den Newsletter angemeldet!',
          subscriber: {
            email: normalizedEmail,
            subscribedAt: new Date().toISOString()
          }
        });
      }
    }

    // Yeni abone ekle
    const subscriber = {
      email: normalizedEmail,
      name: name?.trim() || '',
      source: source,
      subscribed_at: new Date().toISOString(),
      status: 'active',
      unsubscribe_token: generateUnsubscribeToken(email)
    };

    const { data: newSubscriber, error: insertError } = await supabase
      .from('newsletter_subscribers')
      .insert(subscriber)
      .select()
      .single();

    if (insertError) {
      // Unique constraint violation (email zaten var)
      if (insertError.code === '23505') {
        return Response.json({
          success: false,
          message: 'Diese E-Mail-Adresse ist bereits angemeldet'
        }, { status: 409 });
      }
      throw insertError;
    }

    // Başarılı abonelik emaili gönder (opsiyonel)
    try {
      await sendWelcomeEmail(email, name);
    } catch (error) {
      console.warn('Welcome email gönderilemedi:', error);
    }

    return Response.json({
      success: true,
      message: 'Erfolgreich für den Newsletter angemeldet!',
      subscriber: {
        email: newSubscriber.email,
        subscribedAt: newSubscriber.subscribed_at
      }
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      code: error.code
    });

    // PostgreSQL unique constraint violation (email zaten var)
    if (error.code === '23505') {
      return Response.json({
        success: false,
        message: 'Diese E-Mail-Adresse ist bereits angemeldet'
      }, { status: 409 });
    }

    return Response.json({
      success: false,
      message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  }
}
