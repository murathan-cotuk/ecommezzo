'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const checkoutSchema = z.object({
  street: z.string().min(1, 'Street address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zipCode: z.string().min(1, 'ZIP code is required'),
  country: z.string().min(1, 'Country is required'),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

interface CheckoutFormProps {
  onSubmit: (data: CheckoutFormData) => void;
  loading: boolean;
}

export default function CheckoutForm({ onSubmit, loading }: CheckoutFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Shipping Address</h2>

      <div>
        <label className="block text-sm font-medium mb-1">Street Address</label>
        <input
          {...register('street')}
          className="w-full border rounded-lg px-3 py-2"
          placeholder="123 Main St"
        />
        {errors.street && (
          <p className="text-red-600 text-sm mt-1">{errors.street.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">City</label>
        <input
          {...register('city')}
          className="w-full border rounded-lg px-3 py-2"
          placeholder="New York"
        />
        {errors.city && (
          <p className="text-red-600 text-sm mt-1">{errors.city.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">State</label>
          <input
            {...register('state')}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="NY"
          />
          {errors.state && (
            <p className="text-red-600 text-sm mt-1">{errors.state.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">ZIP Code</label>
          <input
            {...register('zipCode')}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="10001"
          />
          {errors.zipCode && (
            <p className="text-red-600 text-sm mt-1">{errors.zipCode.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Country</label>
        <input
          {...register('country')}
          className="w-full border rounded-lg px-3 py-2"
          placeholder="United States"
        />
        {errors.country && (
          <p className="text-red-600 text-sm mt-1">{errors.country.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Processing...' : 'Place Order'}
      </button>
    </form>
  );
}

