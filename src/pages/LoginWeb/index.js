import React from "react";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Text, Input } from "components";

const LoginWebPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
       <div
  className="bg-cover bg-no-repeat flex flex-col font-inter h-screen items-center justify-end mx-auto p-[106px] md:px-10 sm:px-5 w-full"
  style={{
    backgroundImage: "url('images/img_loginweb.png')",
    backgroundSize: "cover", // Menggunakan cover untuk mengisi seluruh layar
  }}
>
        <div className="flex flex-col items-center justify-start mt-[57px] w-3/5 md:w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-6 sm:px-5 rounded-[15px] w-full">
            <div className="flex flex-col items-center justify-start mb-[18px] w-[88%] md:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterExtraBold40"
              >
                Sign-in
              </Text>
              <Text
                className="mt-3.5 text-black-900 text-xl"
                size="txtInterMedium20"
              >
                Hey, Enter your details to get sign in to your account
              </Text>
              <div className="flex flex-col items-start justify-start mt-[33px] w-full">
              <Input
                name="emailphone"
                placeholder="Enter Email/Phone No"
                className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-100 text-left text-xl w-full"
                wrapClassName="border-2 border-blue_gray-100 border-solid w-full"
                type="email"
              ></Input>
              <div className="bg-white-A700 border-2 border-blue_gray-100 border-solid flex flex-row items-center justify-between mt-[30px] p-2 rounded-[20px] w-full">
                <Text
                  className="ml-[21px] text-blue_gray-100 text-xl"
                  size="txtInterMedium20Bluegray100"
                >
        
                    Passcode
                  </Text>
                  <Text
                    className="mr-[5px] text-black-900 text-xl"
                    size="txtInterRegular20"
                  >
                    Hide
                  </Text>
                </div>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[500px] sm:min-w-full mt-10 text-center text-xl"
                  style={{ margin:"0 auto" }}
                  shape="round"
                  color="yellow_A400"
                  size="xs"
                  variant="fill"
                >
                  Sign in
                </Button>
                <Text
                  className="mt-[15px] text-black-900 text-xl"
                  size="txtInterMedium20"
                  style={{ margin: "20px auto" }}
                >
                  - Or Sign in with -{" "}
                </Text>
                <div
                  className="common-pointer bg-white-A700 border-2 border-blue_gray-100 border-solid flex flex-row gap-10 items-center justify-center mr-[127px] mt-[21px] p-[7px] rounded-[10px] w-[51%] md:w-full"
                  onClick={() => googleSignIn()}
                  style={{ margin: "20px auto" }}
                >
                  <Img
                    className="h-[33px] md:h-auto ml-5 object-cover w-8"
                    src="images/img_google1.png"
                    alt="googleOne"
                  />
                  <Text
                    className="mr-[82px] text-black-900 text-xl"
                    size="txtInterBold20"
                    style={{ margin:"0 auto" }}
                  >
                    Google
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-end mt-[35px] w-[83%] md:w-full">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtInterMedium20"
                    style={{ margin:"0 auto" }}
                  >
                    Don’t have an account?{" "}
                  </Text>
                  <div
                    className="common-pointer flex flex-col items-start justify-start"
                    onClick={() => navigate("/registerweb")}
                  >
                    <Text
                      className="text-blue-500 text-xl"
                      size="txtInterMedium20Blue500"
                      style={{ marginLeft: "20px", marginRight: "auto" }} // Mengatur margin kiri
                    >
                      Request Now
                      
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginWebPage;
