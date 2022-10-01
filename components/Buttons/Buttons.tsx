import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export const PrimaryButton: React.FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, ...props }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      {...props}
    >
      {children}
    </button>
  );
};
