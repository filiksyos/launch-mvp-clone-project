import { CheckCircle } from "lucide-react";
import { BuyButton } from "./BuyButton";

export function PricingSection() {
  const plans = [
    {
      name: "Hobby",
      price: "$10/mo",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
      ],
    },
    {
      name: "Pro",
      price: "$30/mo",
      features: [
        "Pro Feature 1",
        "Pro Feature 2",
        "Pro Feature 3",
        "Pro Feature 4",
      ],
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      features: [
        "All Pro features",
        "Dedicated support",
        "Custom integrations",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-4">{plan.price}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <BuyButton planName={plan.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}