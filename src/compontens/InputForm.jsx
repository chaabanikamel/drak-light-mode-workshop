
const InputForm = ({id,name,placeholder,message}) => {
    
  return ( 
   <>
      <label htmlFor={id}className="form-label mt-4">{name}</label>
      <input type="email" className="form-control" id={id} aria-describedby="emailHelp" placeholder={placeholder}/>
       {message && (<div className="invalid-feedback">{message}</div>)
    </>
  
  )
}

export default InputForm