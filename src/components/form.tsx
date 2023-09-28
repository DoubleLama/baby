import AutoForm, {AutoFormSubmit} from "@/components/auto-form.tsx";
import {FormProps} from "../../typings";

const Form = ({fieldConfig = null, handleSubmit, formSchema}: FormProps) => {
  return (
    <AutoForm className={'baby-form flex flex-col items-center bg-purple-300 p-6 rounded-lg'} onSubmit={handleSubmit}
              formSchema={formSchema}
              fieldConfig={fieldConfig}>
      <AutoFormSubmit>Valider</AutoFormSubmit>
    </AutoForm>
  )
}

export default Form