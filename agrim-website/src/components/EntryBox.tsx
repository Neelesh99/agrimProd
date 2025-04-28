import React from 'react';

interface EntryBoxProps {
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
}

const EntryBox: React.FC<EntryBoxProps> = ({
  label,
  type,
  id,
  name,
  value,
  onChange,
  required = false,
  rows = 6
}) => {
  // Common styles for both input and textarea
  const commonClasses = "w-full py-3 px-4 border border-gray-200 rounded bg-gray-50 focus:outline-none focus:ring-1 focus:ring-orange-400 border-b-2 border-orange-500";

  return (
    <div className="mb-8">
      <label htmlFor={id} className="block mb-3 font-normal text-gray-700 text-left text-lg">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          className={`${commonClasses} min-h-[150px] resize-y`}
          required={required}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={commonClasses}
          required={required}
        />
      )}
    </div>
  );
};

export default EntryBox; 