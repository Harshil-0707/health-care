export default function InputFormElement({
  id,
  type,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700" htmlFor={id}>
        {id}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required
        placeholder={placeholder}
        className="mt-1 p-3 border border-gray-300 rounded-md w-full"
        onChange={onChange}
      />
    </div>
  );
}
