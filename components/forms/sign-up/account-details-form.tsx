import { USER_REGISTRATION_FORM } from "@/constants/forms";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import FormGenerator from "../form-generator";

type Props = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

function AccountDetailsForm({ errors, register }: Props) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-gravel md:text-4xl font-bold">Account details</h2>
      </div>
      {USER_REGISTRATION_FORM.map((field) => (
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
}

export default AccountDetailsForm;
