import { useRef, useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const ContextInputs = createContext();

export const ContextProvider = ({ children }) => {
  const [inputs, setInputs] = useState([]);
  const fullName = useRef("");
  const email = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");

  const [messageFullName, setMessageFullName] = useState("");
  const [messageEmail, setMessageEmail] = useState("");
  const [messagePassword, setMessagePassword] = useState("");
  const [messageConfirmPassword, setMessageConfirmPassword] = useState("");

  const fullNameInput = (e) => {
    const inputValueName = e.target.value;
    fullName.current = inputValueName;
    inputValueName === ""
      ? setMessageFullName("Full Name is Required !")
      : inputValueName.trim().length < 3
      ? setMessageFullName("Please type more than 3 characters")
      : setMessageFullName("");
  };

  const emailInput = (e) => {
    const inputValueEmail = e.target.value;
    email.current = inputValueEmail;
    const gmailTest = /^[a-zA-Z0-9_.+-]+@gmail\.com$/;
    const testEmail = gmailTest.test(inputValueEmail);
    inputValueEmail === ""
      ? setMessageEmail("Email is Required !")
      : !testEmail
      ? setMessageEmail("Please enter a valid email ")
      : setMessageEmail("");
  };

  const passwordInput = (e) => {
    const inputValuePassword = e.target.value;
    password.current = inputValuePassword;
    const passwordTest = /[!@#$%^&*(),.?":{}|<>]/;
    const hasSpecialCharacter = passwordTest.test(inputValuePassword);

    inputValuePassword === ""
      ? setMessagePassword("Password is Required !")
      : inputValuePassword.trim().length < 8
      ? setMessagePassword("Password must be at least 8 characters long")
      : !hasSpecialCharacter
      ? setMessagePassword("Must contain at least one special character")
      : setMessagePassword("");
  };

  const confirmPasswordInput = (e) => {
    const inputValueConfirmPassword = e.target.value;
    confirmPassword.current = inputValueConfirmPassword;

    if (inputValueConfirmPassword === "") {
      setMessageConfirmPassword("Confirm Password is Required");
    } else if (inputValueConfirmPassword !== password.current) {
      setMessageConfirmPassword("Confirm password must be equal to password");
    } else {
      setMessageConfirmPassword("");
    }
  };
  const handelSubmitInput = (e) => {
    e.preventDefault();
    const myInput = {
      id: uuidv4(),
      fullName:fullName.current,
      email:email.current,
      password:email.current ,
    };
    setInputs([...inputs,myInput])
    console.log(inputs)

  };

  const inputDatas = [
    {
      id: 1,
      name: "Full Name",
      placeholder: "Enter Full Name",
      ref: fullName,
      onChange: fullNameInput,
      message: messageFullName,
    },
    {
      id: 2,
      name: "Email address",
      placeholder: "Enter Address",
      ref: email,
      onChange: emailInput,
      message: messageEmail,
    },
    {
      id: 3,
      name: "Password",
      placeholder: "Password",
      ref: password,
      onChange: passwordInput,
      message: messagePassword,
    },
    {
      id: 4,
      name: "Password Confirm",
      placeholder: "Confirm Password",
      ref: confirmPassword,
      onChange: confirmPasswordInput,
      message: messageConfirmPassword,
    },
  ];

  return (
    <ContextInputs.Provider value={{inputDatas,handelSubmitInput}}>
      {children}
    </ContextInputs.Provider>
  );
};

export default ContextProvider;
