import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center" style={{ backgroundColor: '#fcb82f' }}>
      {/* Mobil görseli */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src="/404M.png"
          alt="404 Not Found"
          fill
          className="object-contain"
          priority
        />
      </div>
      {/* Desktop görseli */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/404.png"
          alt="404 Not Found"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
