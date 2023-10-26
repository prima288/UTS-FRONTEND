import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const HomepagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 h-[832px] sm:pl-5 pl-6 relative w-screen">
        <Img
          className="absolute bottom-[0] h-[378px] object-cover right-[0]"
          src="images/img_ellipse6.png"
          alt="ellipseSix"
        />
        <div className="absolute flex flex-col font-cabin md:gap-10 gap-[131px] justify-start left-[3%] md:px-5 top-[1%] w-[37%]">
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
            <div className="flex sm:flex-1 flex-col items-center justify-start w-[28%] sm:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[75px] md:h-auto object-cover w-full"
                  src="images/img_isyourstoconquer.png"
                  alt="isyourstoconque"
                />
              </div>
            </div>
            <div className="h-[25px] md:h-[62px] sm:ml-[0] ml-[22px] sm:mt-0 mt-[37px] relative w-[18%] sm:w-full">
              <div className="absolute bg-white-A700 h-[22px] inset-x-[0] mx-auto top-[0] w-full"></div>
              <Text
                className="absolute h-full inset-y-[0] left-[0] my-auto text-xl text-yellow-A400"
                size="txtCabinRegular20"
              >
                Home
              </Text>
            </div>
            <div className="flex flex-col font-inter items-start justify-start sm:ml-[0] ml-[34px] sm:mt-0 mt-[37px]">
              <Text className="text-black-900 text-xl" size="txtInterRegular20">
                Details{" "}
              </Text>
            </div>
            <div className="flex flex-col font-cabin items-center justify-start sm:ml-[0] ml-[45px] sm:mt-0 mt-[38px]">
              <Text
                className="text-black-900 text-xl"
                size="txtCabinRegular20Black900"
              >
                Sign-up
              </Text>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[104px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
            size="txtCabinRegular30"
          >
            Teen.Talks
          </Text>
        </div>
        <Img
          className="absolute h-[743px] object-cover right-[0] top-[0] w-[55%]"
          src="images/img_ellipse4.png"
          alt="ellipseFour"
        />
        <Text
          className="absolute left-[10%] md:text-5xl text-6xl text-black-900 top-[30%] w-[35%] sm:w-full"
          size="txtCabinBold60"
        >
          Where being young is the new cool!
        </Text>
        <Button
          className="common-pointer absolute bottom-[31%] cursor-pointer font-syne leading-[normal] left-[9%] min-w-[238px] text-center text-xl"
          onClick={() => navigate("/loginweb")}
          shape="round"
          color="yellow_A400"
          size="sm"
          variant="fill"
        >
          Lets Get Started
        </Button>
      </div>
    </>
  );
};

export default HomepagePage;
