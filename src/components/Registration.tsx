
import { useState } from "react";
import "./registration.css";

import * as yup from 'yup';
import store from "../utils/localforage";
import { useNavigate } from "react-router-dom";
import localForage from "localforage";


type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

const Registration = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setemail] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [password, setpassword] = useState("");
    const [vError, setVerror] = useState("");

    const navigation = useNavigate();

   const userSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().default("Tonji").nullable(),
    // sex: yup.mixed().oneOf(['male','female','other'] as const).defined(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    phoneNumber: yup.string().required()
   })
    const handleSubmit = async (e: any)=> {
      e.preventDefault()
      const userObject: UserType = {firstName, lastName, email, phoneNumber, password}
      try {
        const user = await userSchema.validate(userObject, {strict: true})
        await localForage.setItem("user", user)
        navigation("/home");
      } catch (error: any) {
        const rr = error.name + " " + error.errors[0]
        setVerror(rr)
        console.log(rr);
        return;
      }

    }

  return (
    <div className="main_container">
      {vError && <p className="vError">{vError}</p>}
        <h2>Registration Form</h2>
        <form className="form">
            <input className="input" placeholder="FirstName" name="firstName" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
            <input className="input" placeholder="Last Name" name="lastName" value={lastName} onChange={(e)=> setLastName(e.target.value)} />
            <input className="input" type="email" placeholder="Email" name="email" value={email} onChange={(e)=> setemail(e.target.value)} />
            <input className="input" placeholder="Phone Number" name="phoneNumber" value={phoneNumber} onChange={(e)=> setphoneNumber(e.target.value)} />
            <input className="input" type="password" placeholder="Password" name="password" value={password} onChange={(e)=> setpassword(e.target.value)} />

            <button className="button" onClick={(e)=> handleSubmit(e)}>Register Now</button>
        </form>
    </div>
  )
}

export default Registration