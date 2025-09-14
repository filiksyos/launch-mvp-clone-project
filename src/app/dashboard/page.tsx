"use client";

import { MetricCard } from "@/components/MetricCard";
import { TopBar } from "@/components/TopBar";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const subscription = localStorage.getItem("subscription");
    if (subscription) {
      setIsSubscribed(true);
    }
  }, []);

  if (!isSubscribed) {
    return (
      <div>
        <TopBar />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p>You need to subscribe to a plan to view the dashboard.</p>
        </main>
      </div>
    );
  }

  return (
    <div>
      <TopBar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MetricCard title="Monthly Recurring Revenue" value="$1,234" change="+12% from last month" />
          <MetricCard title="Active Users" value="512" change="+20 from last month" />
          <MetricCard title="Churn Rate" value="2.5%" change="-0.5% from last month" />
        </div>
      </main>
    </div>
  );
}
