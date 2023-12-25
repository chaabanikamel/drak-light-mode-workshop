import  { useContext } from "react";
import InputForm from "./InputForm";
import { ContextInputs } from "../contextInputs/ContextInputs";

const InputsForms = () => { 

  const { inputDatas ,handelSubmitInput} = useContext(ContextInputs);

  const inputs =
    inputDatas &&
    inputDatas.map((inputData) => (
      <InputForm
        key={inputData.id}
        id={inputData.id}
        name={inputData.name}
        placeholder={inputData.placeholder}
        ref={inputData.ref}
        onChange={inputData.onChange} 
        message={inputData.message} 
      />
    ));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form onSubmit ={handelSubmitInput}>
        <fieldset>
          <legend>Register</legend>
          <div className="form-group">{inputs}</div>
          <button type="submit" className="btn btn-info my-4  ">Submit</button>

        </fieldset>
      </form>
    </div>
  );
};

export default InputsForms;
