"use client";

import React from "react";

import { FieldValues, UseFormRegister } from "react-hook-form";

type CustomCheckBoxProps = {
  id: string;
  label: string;
  disabled?: boolean;
  register: UseFormRegister<FieldValues>;
};

const CustomCheckBox = ({
  id,
  label,
  disabled,
  register,
}: CustomCheckBoxProps) => {
  return (
    <div className="w-full flex flex-row gap-2 items-center">
      <input
        type="checkbox"
        id={id}
        disabled={disabled}
        {...register(id)}
        placeholder=""
        className="cursor-pointer"
      />
      <label htmlFor={id} className="font-medium cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default CustomCheckBox;
