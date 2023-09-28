import {z} from 'zod'
import AutoForm, {AutoFormInputComponentProps, AutoFormSubmit} from "@/components/auto-form.tsx";
import {FormControl, FormItem, FormLabel} from "@/components/ui/form.tsx";
import {Switch} from "@/components/ui/switch.tsx";

const babySchema = z.object({
  gender: z.boolean().describe('Sexe'),
  name: z.string().min(1).max(50).describe('Prénom'),
  dateOfBirth: z.coerce.date().min(new Date(2023, 8, 27)).max(new Date(2023, 9, 29)).describe('Date de naissance'),
  weight: z.coerce.number().min(0).max(10).describe('Poids'),
  height: z.coerce.number().min(0).max(100).describe('Taille'),
})

type BabyFormData = {
  gender: boolean | string
  name: string
  dateOfBirth: Date
  weight: number
  height: number
}

const babyForm = () => {
  const handleSubmit = (data: BabyFormData) => {
    const gender = data.gender ? 'Fille' : 'Garçon'
    const newData: BabyFormData = {...data, gender}
    console.log(newData)
  }
  return (
    <>
      <h1>Bébé</h1>
      <AutoForm className={'flex flex-col items-center bg-lime-100 p-6'} onSubmit={handleSubmit} formSchema={babySchema}
                fieldConfig={{
                  name: {
                    inputProps: {
                      type: 'text',
                      placeholder: 'Obi Wan ou Leia'
                    }
                  },
                  weight: {
                    inputProps: {
                      type: 'number',
                      placeholder: 'Poids en kg',
                    }
                  },
                  height: {
                    inputProps: {
                      type: 'number',
                      placeholder: 'Taille en cm',
                    }
                  },
                  dateOfBirth: {
                    inputProps: {
                      type: 'date',
                      placeholder: 'Choisis une date'
                    }
                  },
                  gender: {
                    fieldType: ({
                                  label,
                                  field,
                                  fieldProps,
                                }: AutoFormInputComponentProps) => (
                      <>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            {label}
                          </FormLabel>
                        </div>
                        <FormItem
                          className="gender-btn flex justify-center items-center space-x-3 space-y-0 ">
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              {'Garçon'}
                            </FormLabel>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              {...fieldProps}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              {'Fille'}
                            </FormLabel>
                          </div>
                        </FormItem>
                      </>
                    ),
                  }
                }}>
        <AutoFormSubmit>Valider</AutoFormSubmit>
      </AutoForm>
    </>

  )
}

export default babyForm