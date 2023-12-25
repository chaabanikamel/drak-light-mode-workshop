import InputForm from "./InputForm"

const InputsForms = () => {
  const initialValue= {id:uuid,email,password}
  const [inputs,setInputs] = useState(initialValue)
  const EmailInput = (e)=>(
       
             
  )
    const inputDatas = [{
      id:1,name:"Full Name",placeholder:"Enter Email" },{  id:2,name:"Email address",placeholder:"Enter Adress" },{  id:3,name:"Password",placeholder:"Password" },{  id:4,name:"Password Confirm",placeholder:"Confirm" },]
        const   inputs = inputDatas.map(inputData=>(
          <InputForm key= {inputData.id} id={inputData.id} name={inputData.name} placeholder={inputData.placeholder}/>
            
        )) 
      return (
    <div style = {{ display:"flex",alignItems:"center",justifyContent:"center"}}>
 <form>
    <fieldset>
    <legend>Register</legend>
    <div className="form-group">
      {inputs}
       
    </div>
    </fieldset>  
 </form>
 </div>
 
  )
}

export default InputsForms