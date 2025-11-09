'use client';

import { FiAlertCircle } from 'react-icons/fi';
import Link from 'next/link';

interface ErrorProps {
  message?: string;
  showRetry?: boolean;
  onRetry?: () => void;
}

export default function Error({ message = 'Something went wrong', showRetry = true, onRetry }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
      <FiAlertCircle className="text-6xl text-red-500" />
      <h2 className="text-2xl font-bold text-gray-800">Error</h2>
      <p className="text-gray-600 max-w-md">{message}</p>
      {showRetry && (
        <div className="flex gap-4">
          {onRetry && (
            <button
              onClick={onRetry}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
            >
              Try Again
            </button>
          )}
          <Link
            href="/"
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Go Home
          </Link>
        </div>
      )}
    </div>
  );
}


