interface IFormFieldProps {
  label: string;
  type: 'text' | 'date' | 'time' | 'select' | 'number';
  options?: string[];
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  placeholder?: string;
  error?: string; 
}

const FormField = ({ label, type, options, value, name, onChange, placeholder, error }: IFormFieldProps) => {
  return (
    <label className="form-control w-full mt-4">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      {type === 'select' ? (
        <select name={name} value={value} onChange={onChange} className="custom_input">
          <option value="" disabled>Select one</option>
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          className="custom_input"
        />
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </label>
  );
};

export default FormField;