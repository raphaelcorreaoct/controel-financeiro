import React from "react";

export default function CurrencyCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md light:bg-gray-800 light:border-gray-700 flex-1">
      <p className="mb-3 font-normal text-gray-700 light:text-gray-400">
        {label}
      </p>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 light:text-white">
        {value}
      </h5>
    </div>
  );
}
