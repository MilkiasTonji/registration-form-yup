import { useState } from "react";

import * as yup from 'yup';
import localForage from "localforage";
import { useNavigate } from "react-router-dom";


type UserType = {
  email: string;
  password: string;
}


const Login = () => {
    const [email, setemail] = useState("");
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
        const userObject: UserType = {email, password}
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
          <input className="input" type="email" placeholder="Email" name="email" value={email} onChange={(e)=> setemail(e.target.value)} />
          <input className="input" type="password" placeholder="Password" name="password" value={password} onChange={(e)=> setpassword(e.target.value)} />

          <button className="button" onClick={(e)=> handleSubmit(e)}>Login</button>
      </form>
  </div>
  )
}

export default Login