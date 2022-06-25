import { useState, useEffect } from "react";
import axios from "axios";

import { Button } from "../../components/Button/Button";
import { InputBox } from "../../components/InputBox/InputBox";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const url = "https://staging.fastor.in/v1/pwa/user/register"
  const [number, setNumber] = useState();
  const[registerData,setRegisterData] = useState();

  const handleChange = (e) => {
    
    const mobile_number = e.target.value;
    setNumber(mobile_number);
   
  };

 

  const handelRequestOtp = async(e) => {
    e.preventDefault();
    if (number.length < 10) {
      alert("number is invalid");
    } else {

            await  axios({
                method: "POST",
                url:url,
                data:number,
                header: {"Content-Type": 'application/x-www-form-urlencoded'}

            }).then((res)=>{
                setRegisterData({res})
                navigate(`/otpScreen`,{state:number});

            }).catch((err)=>{
                    console.log(err)
            })
            

    }
  };

  return (
    <div className="grid min-h-screen place-items-center">
      <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12 ">
        <h1 className=" font-bold text-4xl">Login</h1>
        <div className="mt-6 text-gray-400">
          <h1 className="text-sm  ">Welcome back !</h1>
          <h1 className="text-sm ">Please login to continue</h1>
        </div>
        <form className="mt-6">
          <InputBox
            type="text"
            name="phone"
            handleChange={handleChange}
            lable="Mobile Number"
            placeholder="Enter Mobile Number"
            className="block w-full p-3 rounded-lg mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
          />

          <Button
            type="submit"
            btnLabelText="Request Otp"
            handleClick={handelRequestOtp}
            className="w-full py-3 mt-6 font-medium rounded-lg  text-white  bg-btnColor shadow-lg focus:outline-none  hover:shadow-none"
          />
        </form>
      </div>
    </div>
  );
};
