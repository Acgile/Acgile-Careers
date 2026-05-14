"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import FormField from "./FormField";
import { validatePhone } from "@/lib/utils";

const schema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First Name is required" })
    .max(15, { message: "15 characters limit reached" }),
  lastName: z
    .string()
    .min(1, { message: "Last Name is required" })
    .max(15, { message: "15 characters limit reached" }),
  email: z.string().email().max(50, { message: "50 characters limit reached" }),
  phone: z
    .string()
    .min(10, { message: "Invalid number" })
    .max(20, { message: "Invalid number" })
    .regex(validatePhone, "Invalid number"),
  message: z
    .string()
    .min(1, { message: "Your message is required" })
    .max(800, { message: "800 characters limit reached" }),
});

const ContactForm = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [failure, setFailure] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact-form", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitting(false);
        setSubmitted(true);

        setTimeout(() => {
          router.push("/thank-you");
        }, 1000);
      } else {
        setSubmitting(false);
        setSubmitted(false);
        setFailure(true);
      }
    } catch (error) {
      setFailure(true);
      console.log(error);
    } finally {
      setSubmitting(false);
      setTimeout(() => {
        setSubmitted(false);
        setFailure(false);
      }, 3000);
    }
  };
  return (
    <form className="form w-full" onSubmit={handleSubmit(onSubmit)} action="">
      <div className="flex flex-col t:flex-row gap-[10px] t:gap-[30px] ld:gap-[40px] mb-[10px] t:mb-[20px] ld:mb-[25px]">
        {/* First Name */}
        <FormField
          label="First Name"
          name="firstName"
          placeholder="Enter your first name"
          registerInput={{ ...register("firstName") }}
          errors={errors}
        />

        {/* Last Name */}
        <FormField
          label="Last Name"
          name="lastName"
          placeholder="Enter your last name"
          registerInput={{ ...register("lastName") }}
          errors={errors}
        />
      </div>

      <div className="flex flex-col t:flex-row gap-[10px] t:gap-[30px] ld:gap-[40px] mb-[10px] t:mb-[20px] ld:mb-[25px]">
        {/* Email */}
        <FormField
          label="Email"
          name="email"
          placeholder="Enter your email"
          registerInput={{ ...register("email") }}
          errors={errors}
        />

        {/* Phone */}
        <FormField
          label="Mobile Number"
          name="phone"
          placeholder="Enter your mobile number"
          registerInput={{ ...register("phone") }}
          errors={errors}
        />
      </div>

      {/* Message */}
      <div className="mb-[20px] t:mb-[40px] md:mb-[50px]">
        <FormField
          label="Your Message"
          type="textarea"
          name="message"
          placeholder="Enter your message"
          registerInput={{ ...register("message") }}
          errors={errors}
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          className="overflow-hidden relative transition-all ease-in-out duration-200 flex flex-row border-2 items-center justify-center gap-x-[10px] min-w-[135px] t:min-w-[170px] sd:min-w-[320px] py-[10px] md:py-[20px] rounded-full font-semibold bg-secondary border-secondary text-[12px] t:text-[14px] md:text-[18px] text-white shadow-[0_8px_17px_#05203926] button-hover-gradient group/button transition-all"
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
                  Send Message
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, translateX: 5, scale: 0.5 }}
                  animate={{ opacity: 1, translateX: 0, scale: 1 }}
                  exit={{ opacity: 0, translateX: 5, scale: 0.5 }}
                >
                  <svg
                    className="relative z-10 shrink-0 group-hover/button:translate-x-[5px] transition-all ease-in-out duration-200 t:w-[6px] t:h-[11px] md:w-[8px] md:h-[12px]"
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
  );
};

export default ContactForm;
