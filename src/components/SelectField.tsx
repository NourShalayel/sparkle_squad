
interface IProps {
  label: string;
  placeholder?:string
}
function SelectField({label}:IProps) {


  return (
   
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <select className="select select-bordered custom_input">
        <option disabled selected>
          Pick one
        </option>
        <option>Star Wars</option>
        <option>Harry Potter</option>
        <option>Lord of the Rings</option>
        <option>Planet of the Apes</option>
        <option>Star Trek</option>
      </select>
    </label>

  )
}
export default SelectField 