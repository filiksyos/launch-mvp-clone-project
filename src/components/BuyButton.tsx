"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function BuyButton({ planName }: { planName: string }) {
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const subscription = localStorage.getItem("subscription");
    if (subscription === planName) {
      setIsSubscribed(true);
    }
  }, [planName]);

  const handleBuy = () => {
    localStorage.setItem("subscription", planName);
    setIsSubscribed(true);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <button
      onClick={handleBuy}
      disabled={isSubscribed}
      className={cn(
        "w-full px-4 py-2 rounded-md text-white font-semibold transition-colors",
        isSubscribed
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      )}
    >
      {isSubscribed ? "Subscribed" : `Buy ${planName}`}
    </button>
  );
}