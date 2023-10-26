import React from "react";

import { Text } from "components";

const LoginWebSignininput = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_signininput.svg')" }}
      >
        <div className="h-[25px] ml-3.5 md:ml-[0] relative w-[42%]">
          <Text
            className="m-auto text-blue_gray-100 text-xl"
            size="txtInterMedium20Bluegray100"
          >
            {props?.useremailphone}
          </Text>
          <Text
            className="absolute h-full inset-[0] justify-center m-auto text-blue_gray-100 text-xl w-max"
            size="txtInterMedium20Bluegray100"
          >
            {props?.useremailphone1}
          </Text>
        </div>
      </div>
    </>
  );
};

LoginWebSignininput.defaultProps = {
  useremailphone: "Enter Email/Phone No",
  useremailphone1: "Enter Email/Phone No",
};

export default LoginWebSignininput;
