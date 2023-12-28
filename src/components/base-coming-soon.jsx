import BaseIcon from "../assets/logo.svg";
import Bitman from "../assets/hero-desktop.jpg";
import arrow from "../assets/icon-arrow.svg";
import error from "../assets/icon-error.svg";
import bit from "../assets/hero-mobile.jpg";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
const BaseComingSoon = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const toast = useToast();
  const onSubmit = (data) => {
    if (data)
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: false,
      });
  };
  return (
    <div>
      <div className="flex max-sm:flex-col">
        {/* first */}
        <div className="m-20 2xl:mx-[19rem] 2xl:my-[11rem] xl:mx-[14rem] lg:space-y-[10rem] lg:mx-10  md:space-y-[3rem] md:m-auto  max-sm:space-y-[3rem] max-sm:m-0">
          <div>
            <img
              className="w-[9.875rem] h-[2.0625rem] lg:my-20 md:my-10 max-sm:mx-[2rem] max-sm:my-[1.94rem] max-sm:w-[6.25rem] max-sm:h-[1.30538rem]"
              src={BaseIcon}
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-[33rem] lg:hidden max-sm:w-[33.6875rem] "
              src={bit}
              alt=""
            />
          </div>

          <div className="w-[27.75rem] space-y-14 font-joesfin lg:m-0 md:m-auto  max-sm:w-[19.4375rem] max-sm:m-auto">
            <div className="space-y-[2.5rem] lg:text-left md:text-center max-sm:text-center">
              <div>
                <h1
                  className="h-[4rem] text-[#CE9898] text-[4rem] font-[300] leading-[4rem] tracking-[1.08256rem]
                max-sm:text-[2.5rem] max-sm:h-[2.625rem] max-sm:leading-[2.625rem] max-sm:tracking-[0.67656rem]">
                  {" "}
                  WE&apos;RE
                </h1>
                <p
                  className="h-[8rem] text-[#423A3A] text-[4rem] font-[600] leading-[4.4375rem] tracking-[1.08256rem]
                max-sm:h-[5.25rem] max-sm:text-[2.5rem]  max-sm:leading-[2.625rem] max-sm:tracking-[0.67656rem]">
                  COMING SOON
                </p>
              </div>

              <p className="text-[#CE9898] text-[1rem] font-[400] leading-[1.75rem] max-sm:text-[0.875rem] max-sm:leading-[1.375rem]">
                {" "}
                Hello fellow shoppers! We&apos;re currently building our new
                fashion store. Add your email below to stay up-to-date with
                announcements and our launch deals.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex relative max-sm:left-8 md:left-8 lg:left-0 mb-10">
                <input
                  className="w-[25rem] h-[3.5rem] text-[1rem] pl-8 rounded-[1.75rem] border-2 border-[#CE9898] opacity-0.5 focus:outline-none focus:border-[#CE9898] focus:ring-[#CE9898]
                max-sm:w-full max-sm:h-[3rem] max-sm:text-[0.875rem] "
                  {...register("email", {
                    required: true,
                  })}
                  type="email"
                  placeholder="email address "
                />
                {errors?.email?.type === "required" && (
                  <img
                    className="relative right-20 h-[1.5rem] w-[1.5rem] rounded-[1.5rem] m-auto"
                    src={error}
                    alt=""
                  />
                )}
                <button>
                  <div
                    className=" w-[6.30rem]  rounded-full  h-[3.5rem] bg-[#CE9898] relative
                     right-[4rem]
                  max-sm:w-[4rem] max-sm:h-[3rem]">
                    <img
                      className="m-auto py-[17px] max-sm:py-3.5"
                      src={arrow}
                      alt=""
                    />
                  </div>
                </button>
              </div>
              {errors?.email?.type === "required" && (
                <p className="text-[#F96464] text-[0.8125rem] font-[400] leading-[1.75rem] ml-8 mt-1">
                  Please provide a valid email
                </p>
              )}
            </form>

            {/* <div
              className="w-[27rem] h-[3.5rem] rounded-[1.75rem] border-2 border-[#CE9898] opacity-0.5 
              max-sm:w-full max-sm:h-[3rem]">
              <button
                className="my-3.5 flex justify-between w-full text-[#CE9898] text-[1rem] font-[400] opacity-0.5
                max-sm:text-[0.875rem] ">
                <div className="mx-8"></div>
                <div
                  className="w-[6.30rem]  rounded-full  h-[3.5rem] bg-[#CE9898] relative bottom-[16px]
                  max-sm:w-[4rem] max-sm:h-[3rem] max-sm:">
                  <img
                    className="m-auto py-5 max-sm:py-3.5"
                    src={arrow}
                    alt=""
                  />
                </div>
              </button>
            </div> */}
          </div>
        </div>
        {/* second */}
        <div className=" ">
          <img
            className="2xl:w-[60rem] h-[100vh] absolute xl:w-[34.5rem] xl:right-[0rem] lg:fixed lg:w-[36rem]  max-sm:hidden max-lg:hidden"
            src={Bitman}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BaseComingSoon;
