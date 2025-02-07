interface IFormFieldProps {
  label: string;
  type: 'text' | 'date' | 'time' | 'select'|'number';
  options?: string[];
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const FormField = ({ label, type, options, value, name, onChange }: IFormFieldProps) => {
  return (
    <label className="form-control w-full mt-4">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      {type === 'select' ? (
        <select name={name} value={value} onChange={onChange} className="custom_input">
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder="Type here"
          value={value}
          name={name}
          onChange={onChange}
          className="custom_input"
        />
      )}
    </label>
  );
};
export default FormField