import AutoForm, {AutoFormInputComponentProps, AutoFormSubmit} from "@/components/auto-form.tsx";
import {FormControl, FormItem, FormLabel} from "@/components/ui/form.tsx";
import {Switch} from "@/components/ui/switch.tsx";
import {BabyFormData, BabyFormProps, FullFormData} from "../../typings";
import {babySchema} from "@/components/schema.ts";

const BabyForm = ({user}: BabyFormProps) => {
  const handleSubmit = (data: BabyFormData) => {
    const gender = data.gender ? 'Fille' : 'Garçon'
    const newData: FullFormData = {...data, ...user, gender}
    console.log(newData)
  }

  return (
    <AutoForm className={'baby-form flex flex-col items-center bg-lime-100 p-6'} onSubmit={handleSubmit}
              formSchema={babySchema}
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
                    placeholder: 'Poids en grammes',
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
  )
}

export default BabyForm