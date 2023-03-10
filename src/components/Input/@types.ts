import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface iInput {
  label: string;
  type: "text" | "email" | "password" | "number";
  placeholder?: string;
  register: UseFormRegisterReturn<string>;
  errors?: FieldError;
}