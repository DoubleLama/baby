import AutoForm, {AutoFormSubmit} from "@/components/auto-form.tsx";
import {UserFormData, UserFormProps} from "../../typings";
import {userSchema} from "@/components/schema.ts";

const UserForm = ({setUser}: UserFormProps) => {
  const handleSubmit = (data: UserFormData) => {
    setUser(data)
  }

  return (
    <AutoForm className={'baby-form flex flex-col items-center bg-lime-100 p-6'} onSubmit={handleSubmit}
              formSchema={userSchema}>
      <AutoFormSubmit>Valider</AutoFormSubmit>
    </AutoForm>
  )
}

export default UserForm