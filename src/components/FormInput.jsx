function FormInput({label, name, type, defaultValue, placeholder, disabled}) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        name={name}
        defaultValue={defaultValue}
        className="input input-bordered "
      />
    </div>
  )
}
export default FormInput
