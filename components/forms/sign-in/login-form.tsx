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
      <div className="flex flex-col gap-2">
        <h2 className="text-foreground md:text-4xl font-bold">Login</h2>
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