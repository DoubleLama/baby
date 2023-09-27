import {z} from 'zod'
import AutoForm, {AutoFormSubmit} from "@/components/auto-form.tsx";
import validator from 'validator';

const userSchema = z.object({
  name: z.string().min(1).max(50).describe('Prénom'),
  phoneNumber: z.string({required_error: "Pour pas participer plusieurs fois.... On te connait!"}).min(10).max(10).refine(validator.isMobilePhone).describe('Numéro de téléphone'),
})

type UserFormProps = {
  setIsValid: (isValid: boolean) => void
}
const UserForm = ({setIsValid}: UserFormProps) => {
  const handleSubmit = (data: any) => {
    setIsValid(true)
  }
  return (
    <>
      <h1>Qui participe ?</h1>
      <AutoForm className={'flex flex-col items-center bg-lime-100 p-6'} onSubmit={handleSubmit}
                formSchema={userSchema}>
        <AutoFormSubmit>Valider</AutoFormSubmit>
      </AutoForm>
    </>
  )
}

export default UserForm