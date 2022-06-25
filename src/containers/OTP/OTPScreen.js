import { Button } from "../../components/Button/Button";
import OtpInput from "react-otp-input";
import OTPInput from "otp-input-react";
import axios from "axios";
import { useNavigate,useParams,useLocation } from "react-router-dom";

export const OTPScreen = () => {
  const url = "https://staging.fastor.in/v1/pwa/user/login";
  const navigate = useNavigate();
  const location= useLocation();
  
  

  const{state}=location;



  const loginData = {
    otp: "123456",
    phone: state,
    dial_code: "+91",
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();

    await axios({
      method: "POST",
      url: url,
      data: loginData,
      header: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => {
        console.log(res.data.data.token)
        navigate(`/offers`,{state:res.data.data.token});
      })
      .catch((err) => {
        console.log(err);
      });

  };

 

  return (
    <div className="grid min-h-screen place-items-center">
      <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12 ">
        <h1 className=" font-bold text-xl">Verification Code</h1>
        <div className="mt-6 text-gray-400">
          <h1 className="text-sm  ">
            We have sent the code verification to You Mobile Number +91123456780
          </h1>
        </div>
        <div className="mt-4 ">
          <OTPInput
            value={loginData.otp}
            otpType="number"
            autoFocus
            disabled={false}
            OTPLength={6}
            secure
            inputStyles={{
              type: "text",
              border: "1px solid",
              outline: "none",
              color: "black",
            }}
          />
        </div>

        <Button
          type="submit"
          handleClick={handleSendOtp}
          btnLabelText="continue"
          className="w-full py-3 mt-6 font-medium rounded-lg  text-white  bg-btnColor shadow-lg focus:outline-none  hover:shadow-none"
        />

        <p className="mt-4">
          Didn't recieve code ? <a href="javascript:void(0)">Request again</a>
        </p>
      </div>
    </div>
  );
};
