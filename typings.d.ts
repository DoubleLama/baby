export type UserFormData = {
  name: string,
  phoneNumber: string,
}

export type UserFormProps = {
  setUser: (user: UserFormData) => void
}

export type BabyFormProps = {
  user: UserFormData;
}

export type BabyFormData = {
  gender: boolean | string
  name: string
  dateOfBirth: Date
  weight: number
  height: number
}

export type FullFormData = BabyFormData & UserFormData