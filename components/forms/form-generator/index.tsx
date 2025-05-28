import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  type: "text" | "email" | "password";
  inputType: "select" | "input" | "textarea";
  options?: { value: string; label: string; id: string }[];
  label?: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  errors: FieldErrors<FieldValues>;
  lines?: number;
  form?: string;
  defaultValue?: string;
  showPasswordToggle?: boolean;
};

const FormGenerator = ({
  errors,
  inputType,
  name,
  placeholder,
  defaultValue,
  register,
  type,
  form,
  label,
  lines,
  options,
  showPasswordToggle,
}: Props) => {
  switch (inputType) {
    case "input":
    default:
      return (
        <div className="space-y-2">
          <Input
            id={`input-${name}`}
            type={type}
            label={label}
            placeholder={placeholder}
            form={form}
            defaultValue={defaultValue}
            showPasswordToggle={showPasswordToggle && type === "password"}
            {...register(name)}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-xs text-destructive">
                {message === "Required"
                  ? `${label || placeholder} is required`
                  : message}
              </p>
            )}
          />
        </div>
      );

    case "select":
      return (
        <div className="space-y-2">
          {label && (
            <Label
              htmlFor={`select-${name}`}
              className="text-sm font-medium text-foreground"
            >
              {label}
            </Label>
          )}
          <select
            form={form}
            id={`select-${name}`}
            className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm text-foreground shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            {...register(name)}
          >
            <option value="" disabled className="bg-background text-foreground">
              {placeholder}
            </option>
            {options?.length &&
              options.map((option) => (
                <option value={option.value} key={option.id} className="bg-background text-foreground">
                  {option.label}
                </option>
              ))}
          </select>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-xs text-destructive">
                {message === "Required"
                  ? `${label || placeholder} is required`
                  : message}
              </p>
            )}
          />
        </div>
      );

    case "textarea":
      return (
        <div className="space-y-2">
          {label && (
            <Label
              htmlFor={`textarea-${name}`}
              className="text-sm font-medium text-foreground"
            >
              {label}
            </Label>
          )}
          <Textarea
            form={form}
            id={`textarea-${name}`}
            placeholder={placeholder}
            {...register(name)}
            rows={lines || 3}
            defaultValue={defaultValue}
            className="bg-background border-input text-foreground placeholder:text-muted-foreground"
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-xs text-destructive">
                {message === "Required"
                  ? `${label || placeholder} is required`
                  : message}
              </p>
            )}
          />
        </div>
      );
  }
};

export default FormGenerator;