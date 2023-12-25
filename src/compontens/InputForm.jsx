const InputForm = ({ id, name, placeholder, message ,onChange,ref}) => {
  return (
    <>
      <label htmlFor={id} className="form-label mt-4">
        {name}
      </label>
      <input
        type="email"
        className={`form-control ${message ? "is-invalid" : "is-valid"} `}
        id={id}
        aria-describedby="emailHelp"
        placeholder={placeholder}
        onChange={onChange}
        ref={ref}
      />
      {message && (
        <div className="invalid-feedback" >
          {message}
        </div>
      )}
    </>
  );
};

export default InputForm;
