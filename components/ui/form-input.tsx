interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  errors: string[];
}

export default function FormInput({
  type,
  placeholder,
  required,
  errors,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <input
        type={type}
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-1 px-2 focus:ring-2 ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
        placeholder={placeholder}
        required={required}
      />
      {errors.map((error, idx) => {
        return (
          <span key={idx} className="text-red-500 font-medium">
            {error}
          </span>
        );
      })}
    </div>
  );
}
