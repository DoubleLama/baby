import {FieldConfig} from "@/components/auto-form.tsx";

export type UserFormData = {
  name: string,
  phoneNumber: string,
  exist?: boolean
  id?: string
}

export type UserFormProps = {
  setUser: (user: UserFormData) => void
}

export type BabyFormProps = {
  user: UserFormData;
}

export interface BabyFormData {
  gender: boolean | string
  name: string
  dateOfBirth: Date
  weight: number
  height: number
}

export interface FullFormData extends BabyFormData {
  user: Omit<UserFormData, 'exist'>
  dateOfBirth: string
}

export type FormProps = {
  fieldConfig?: FieldConfig;
  formSchema: any;
} & (
  | { handleSubmit: (data: BabyFormData) => void | Promise<void> }
  | { handleSubmit: (data: UserFormData) => void | Promise<void> }
  );
