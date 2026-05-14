"use client";

import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";

const validatePhone = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const uploadMaxSize = 1024 * 1024 * 5;
const formatsAllowed = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const schema = z.object({
  jobTitle: z.string().min(1).max(100),
  fullName: z
    .string()
    .min(1, { message: "Full Name is required" })
    .max(50, { message: "50 characters limit reached" }),
  email: z.string().email().max(50, { message: "50 characters limit reached" }),
  phone: z
    .string()
    .min(10, { message: "Invalid number" })
    .max(20, { message: "Invalid number" })
    .regex(validatePhone, "Invalid number"),
  address: z
    .string()
    .min(1, { message: "Address is required" })
    .max(100, { message: "100 characters limit reached" }),
  resume: z
    .any()
    .refine((files) => files?.length == 1, "CV is required")
    .refine(
      (files) => files?.[0]?.size <= uploadMaxSize,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => formatsAllowed.includes(files?.[0]?.type),
      "Only PDF and MS Word file are allowed"
    ),
});

const ApplicationForm = ({ jobTitle }) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [failure, setFailure] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = async (data) => {
    console.log("Submitting");
    setSubmitting(true);
    try {
      const formData = new FormData();

      // Append form fields to FormData
      formData.append("jobTitle", data.jobTitle);
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("address", data.address);

      // Append file
      if (data.resume && data.resume.length > 0) {
        formData.append("resume", data.resume[0]);
      }

      const response = await fetch("/api/application-form", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitting(false);
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error("Server response:", errorData);
        setSubmitting(false);
        setSubmitted(false);
        setFailure(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setFailure(true);
    } finally {
      setSubmitting(false);
      setTimeout(() => {
        setSubmitted(false);
        setFailure(false);
        reset();
      }, 3000);
    }
  };

  return (
    <div className="px-[10px] pt-[15px] pb-[25px] t:pt-[15px] t:px-[30px] t:pb-[20px] sd:px-[60px] sd:pt-[30px] sd:pb-[50px] bg-grey-fe">
      <h2 className="tracking-tight font-semibold text-[16px] t:text-[18px] sd:text-[30px] border-b border-b-grey-eb pb-[8px] t:pb-[10px] sd:pb-[25px] mb-[18px] t:mb-[15px] sd:mb-[40px]">
        Apply Now
      </h2>

      <form
        className="w-full"
        onSubmit={handleSubmit(onSubmit)}
        action=""
        encType="multipart/form-data"
      >
        <div className="flex flex-col t:flex-row gap-[12px] t:gap-x-[14px] sd:gap-[20px] mb-[10px] t:mb-[12px] sd:mb-[20px]">
          {/* Full Name */}
          <fieldset>
            <label htmlFor="fullName">Full Name:</label>
            <input
              {...register("fullName")}
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              className={
                errors.fullName
                  ? "border-[#FD473B] pr-[55px]"
                  : "border-grey-cf focus:border-secondary"
              }
            />
            {errors.fullName && (
              <>
                <p className="absolute bottom-[42px] t:bottom-[40px] sd:bottom-[70px] right-0 text-[#FD473B] text-[10px] sd:text-[11px] md:text-[13px] text-right mt-[3px]">
                  {errors.fullName.message}
                </p>
                <ErrorIcon />
              </>
            )}
          </fieldset>

          {/* Email */}
          <fieldset>
            <label htmlFor="email">Email:</label>
            <input
              {...register("email")}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className={
                errors.email
                  ? "border-[#FD473B] focus:border-[#FD473B] pr-[55px]"
                  : "border-grey-cf focus:border-secondary"
              }
            />
            {errors.email && (
              <>
                <p className="absolute bottom-[42px] t:bottom-[40px] sd:bottom-[70px] right-0 text-[#FD473B] text-[10px] sd:text-[11px] md:text-[13px] text-right mt-[3px]">
                  {errors.email.message}
                </p>
                <ErrorIcon />
              </>
            )}
          </fieldset>
        </div>

        <div className="flex flex-col t:flex-row gap-[12px] t:gap-x-[14px] sd:gap-[20px] mb-[10px] t:mb-[12px] sd:mb-[20px]">
          {/* Phone */}
          <fieldset>
            <label htmlFor="phone">Contact:</label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your mobile number"
              className={
                errors.phone
                  ? "border-[#FD473B] focus:border-[#FD473B] pr-[55px]"
                  : "border-grey-cf focus:border-secondary"
              }
            />
            {errors.phone && (
              <>
                <p className="absolute bottom-[42px] t:bottom-[40px] sd:bottom-[70px] right-0 text-[#FD473B] text-[10px] sd:text-[11px] md:text-[13px] text-right mt-[3px]">
                  {errors.phone.message}
                </p>
                <ErrorIcon />
              </>
            )}
          </fieldset>

          {/* Address */}
          <fieldset>
            <label htmlFor="address">Address:</label>
            <input
              {...register("address")}
              type="text"
              id="address"
              name="address"
              placeholder="Enter your current Address"
              className={
                errors.address
                  ? "border-[#FD473B] focus:border-[#FD473B] pr-[55px]"
                  : "border-grey-cf focus:border-secondary"
              }
            />
            {errors.address && (
              <>
                <p className="absolute bottom-[42px] t:bottom-[40px] sd:bottom-[70px] right-0 text-[#FD473B] text-[10px] sd:text-[11px] md:text-[13px] text-right mt-[3px]">
                  {errors.address.message}
                </p>
                <ErrorIcon />
              </>
            )}
          </fieldset>
        </div>

        {/* File Upload */}
        <div className="mb-[10px] t:mb-[12px] ld:mb-[25px]">
          <fieldset>
            <label className="cursor-pointer" htmlFor="resume">
              CV:
            </label>
            <input
              {...register("resume")}
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx" // Accepted file types (optional)
              className={`cursor-pointer ${
                errors.resume?.fileType || errors.resume?.fileSize
                  ? "border-[#FD473B] focus:border-[#FD473B] pr-[55px]"
                  : "border-grey-cf focus:border-secondary"
              }`}
            />
            {errors.resume && (
              <>
                <p className="absolute bottom-[42px] t:bottom-[42px] sd:bottom-[70px] right-0 text-[#FD473B] text-[10px] sd:text-[11px] md:text-[13px] text-right">
                  {errors.resume?.message || "Invalid resume file"}
                </p>
                <ErrorIcon />
              </>
            )}
          </fieldset>
          <p className="mt-[7px] sd:mt-[10px] text-[8px] sd:text-[12px] text-grey-bc">
            <span className="text-secondary font-medium">
              Allowed File Types:
            </span>{" "}
            .doc, .docx .pdf &nbsp; &nbsp;
            <span className="text-secondary font-medium">
              Max file size:
            </span>{" "}
            5MB
          </p>
        </div>

        {/* Job Title */}
        <input
          {...register("jobTitle")}
          type="hidden"
          id="jobTitle"
          name="jobTitle"
          value={jobTitle}
        />

        {/* Submit Button */}
        <div className="flex justify-center mt-[30px] sd:mt-[50px]">
          <button
            className="overflow-hidden relative transition-all ease-in-out duration-200 flex flex-row border-2 items-center justify-center gap-x-[10px] py-[10px] t:py-[8px] sd:py-[17px] px-[22px] t:px-[14px] sd:px-[35px] rounded-full font-semibold bg-secondary border-secondary text-[12px] t:text-[10px] sd:text-[16px] text-white shadow-[0_8px_17px_#05203926] button-hover-gradient group/button transition-all hover:cursor-pointer"
            type="submit"
            disabled={submitted || submitting || failure ? true : false}
          >
            <AnimatePresence mode="wait">
              {submitting && (
                <motion.span
                  initial={{ opacity: 0, translateY: 5 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  exit={{ opacity: 0, translateY: -5 }}
                  key="state-1"
                >
                  Submitting..
                </motion.span>
              )}
              {submitted && (
                <motion.span
                  initial={{ opacity: 0, translateY: 5 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  exit={{ opacity: 0, translateY: -5 }}
                  key="state-2"
                >
                  Done
                </motion.span>
              )}
              {failure && (
                <motion.span
                  initial={{ opacity: 0, translateY: 5 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  exit={{ opacity: 0, translateY: -5 }}
                  key="state-3"
                >
                  Failed to Submit
                </motion.span>
              )}
              {!submitted && !submitting && !failure && (
                <>
                  <motion.span
                    initial={{ opacity: 0, translateY: 5 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: -5 }}
                    key="state-4"
                  >
                    Submit
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, translateX: 5, scale: 0.5 }}
                    animate={{ opacity: 1, translateX: 0, scale: 1 }}
                    exit={{ opacity: 0, translateX: 5, scale: 0.5 }}
                  >
                    <svg
                      className="relative z-10 shrink-0 group-hover/button:translate-x-[5px] transition-all ease-in-out duration-200 t:w-[4px] t:h-[8px] md:w-[8px] md:h-[12px]"
                      width="5"
                      height="10"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className={`stroke-current transition-all ease-in-out duration-200 `}
                        d="M1 1L6 6L1 11"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.span>
                </>
              )}
            </AnimatePresence>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;

const ErrorIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={10}
      height={10}
      viewBox="0 0 20 20"
      className="absolute bottom-[11px] right-[10px] t:bottom-[12px] t:right-[12px] sd:bottom-[20px] sd:right-[20px] transition-all ease-in-out duration-200 pointer-events-none t:w-[13px] t:h-[13px] sd:w-[18px] sd:h-[18px]"
    >
      <path
        fill="#FD473B"
        d="M9 5h2v6H9V5Zm1 8c.283 0 .521.096.713.288.192.192.288.43.287.712 0 .283-.096.52-.288.712A.973.973 0 0 1 10 15a.965.965 0 0 1-.712-.288A.972.972 0 0 1 9 14c0-.283.096-.521.288-.713A.964.964 0 0 1 10 13Zm0-13a9.732 9.732 0 0 0-3.9.788 10.114 10.114 0 0 0-3.175 2.137c-.9.9-1.612 1.958-2.137 3.175A9.755 9.755 0 0 0 0 10c0 1.383.263 2.683.788 3.9a10.114 10.114 0 0 0 2.137 3.175c.9.9 1.958 1.612 3.175 2.137A9.755 9.755 0 0 0 10 20a9.733 9.733 0 0 0 3.9-.788 10.114 10.114 0 0 0 3.175-2.137c.9-.9 1.613-1.958 2.138-3.175A9.72 9.72 0 0 0 20 10a9.733 9.733 0 0 0-.788-3.9 10.114 10.114 0 0 0-2.137-3.175c-.9-.9-1.958-1.613-3.175-2.138A9.72 9.72 0 0 0 10 0Z"
      />
    </svg>
  );
};
