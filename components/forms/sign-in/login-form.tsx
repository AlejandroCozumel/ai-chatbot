"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import FormGenerator from "../form-generator";
import { USER_LOGIN_FORM } from "@/constants/forms";

type Props = {};

const LoginForm = (props: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <div className="my-4 flex flex-col gap-2">
        <h2 className="text-gravel md:text-4xl font-bold">Login</h2>
        <p className="text-iridium md:text-sm">
          You will receive a one time password
        </p>
      </div>
      {USER_LOGIN_FORM.map((field) => (
        <FormGenerator
          key={field.id}
          {...field}
          errors={errors}
          register={register}
          name={field.name}
        />
      ))}
    </>
  );
};

export default LoginForm;
