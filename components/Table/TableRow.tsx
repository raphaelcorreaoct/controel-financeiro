import React from "react";

export default function TableRow({
  transactionName,
  category,
  value,
  id,
}: {
  transactionName: string;
  category: string;
  value: number;
  id: string;
}) {
  return (
    <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap light:text-white"
      >
        {transactionName}
      </th>
      <td className="py-4 px-6">{category}</td>
      <td className="py-4 px-6">{value}</td>
      <td className="py-4 px-6 text-right">
        <a
          href="#"
          className="font-medium text-blue-600 light:text-blue-500 hover:underline"
        >
          Editar
        </a>
        <a
          href="#"
          className="font-medium ml-3 text-red-500 light:text-blue-500 hover:underline"
        >
          Remover
        </a>
      </td>
    </tr>
  );
}
