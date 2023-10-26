import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Input, Text } from "components";

const RegisterWebPage = () => {
  const navigate = useNavigate();

  return (
    <>
     <div
  className="bg-cover bg-no-repeat flex flex-col font-inter h-screen items-center justify-end mx-auto p-[106px] md:px-10 sm:px-5 w-full"
  style={{
    backgroundImage: "url('images/img_loginweb.png')",
    backgroundSize: "cover", // Menggunakan cover untuk mengisi seluruh layar
  }}
>
<div className="bg-white-A700 flex flex-col items-center justify-start mt-0 p-6 md:px-5 rounded-[15px] w-3/5 md:w-full">
          <div className="flex flex-col items-center justify-start mb-[53px] w-[88%] md:w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterExtraBold40"
            >
              Sign-up
            </Text>
            <Text
              className="mt-[19px] text-black-900 text-center text-xl"
              size="txtInterMedium20"
            >
              Create Ur Own Account
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
                  Password
                </Text>
                <Text
                  className="mr-[3px] text-black-900 text-xl"
                  size="txtInterRegular20"
                >
                  Hide
                </Text>
              </div>
              <div className="bg-white-A700 border-2 border-blue_gray-100 border-solid flex flex-row items-center justify-between mt-8 p-1.5 rounded-[20px] w-full">
                <Text
                  className="ml-[11px] mt-[3px] text-blue_gray-100 text-xl"
                  size="txtInterMedium20Bluegray100"
                >
                  Re-password
                </Text>
                <Text
                  className="mr-[5px] text-black-900 text-xl"
                  size="txtInterRegular20"
                >
                  Hide
                </Text>
              </div>
              <Button
                className="cursor-pointer leading-[normal] min-w-[500px] sm:min-w-full ml-3.5 md:ml-[0] mt-8 text-center text-xl"
                shape="round"
                color="yellow_A400"
                size="xs"
                variant="fill"
                style={{ margin:"20px auto" }}
              >
                Sign up
              </Button>
              <div className="flex flex-row gap-3 items-start justify-end ml-24 md:ml-[0] mt-[37px] w-[71%] md:w-full">
                <Text
                  className="mt-0.5 text-black-900 text-xl"
                  size="txtInterMedium20"
                  style={{ margin: "auto" }} 
                >
                  Already have an account?{" "}
                </Text>
                <Button
  className="common-pointer bg-transparent cursor-pointer font-medium leading-[normal] mb-0.5 min-w-[104px] text-blue-500 text-center text-xl"
  onClick={() => navigate("/loginweb")}
  style={{ marginLeft: "20px", marginRight: "auto" }} // Mengatur margin kiri
>
  Click here
</Button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterWebPage;
