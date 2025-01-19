export default function FormElement({
  id,
  text,
  type,
  htmlFor,
  value,
  onChange,
}) {
  return (
    <div className="mb-4">
      <label
        className="block text-sm font-medium text-gray-700"
        htmlFor={htmlFor}
      >
        {text}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required
        className="mt-1 p-3 border border-gray-300 rounded-md w-full"
        onChange={onChange}
      />
    </div>
  );
}
