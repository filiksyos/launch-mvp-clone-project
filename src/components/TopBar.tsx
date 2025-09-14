'use client';
import { useEffect, useState } from 'react';

export function TopBar() {
  const [subscription, setSubscription] = useState<string | null>(null);

  useEffect(() => {
    const handleStorageChange = () => {
      setSubscription(localStorage.getItem('subscription'));
    };

    handleStorageChange();

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">MVP Launch</h1>
        <div>
          <span className="text-gray-600">
            Subscription: {subscription || 'None'}
          </span>
        </div>
      </div>
    </header>
  );
}
