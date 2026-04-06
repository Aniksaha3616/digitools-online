import React from "react";

export default function Stats() {
  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "Premium Tools" },
    { value: "4.9", label: "Rating" },
  ];

  return (
    <section className="w-full bg-linear-to-r from-violet-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 text-center divide-y md:divide-y-0 md:divide-x divide-white/30">
        {stats.map((stat, index) => (
          <div key={index} className="py-6 md:py-0 flex flex-col items-center justify-center">
            <h3 className="text-3xl md:text-4xl font-semibold mb-2">
              {stat.value}
            </h3>
            <p className="text-sm md:text-base opacity-90">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}