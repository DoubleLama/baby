import {AutoFormInputComponentProps} from "@/components/auto-form.tsx";
import {FormControl, FormItem, FormLabel} from "@/components/ui/form.tsx";
import {Switch} from "@/components/ui/switch.tsx";
import {BabyFormData, BabyFormProps, FullFormData} from "../../typings";
import Form from "@/components/form.tsx";
import {babySchema} from "@/components/schema.ts";
import {supabase} from "@/supabase.ts";
import {formatDate} from "@/tools.ts";

const BabyForm = ({user}: BabyFormProps) => {
  const handleSubmit = async (data: BabyFormData) => {
    const gender = data.gender ? 'Fille' : 'Garçon'
    const formattedDate = formatDate(data.dateOfBirth);
    const newData: FullFormData = {
      ...data,
      dateOfBirth: formattedDate,
      gender,
      user: {
        name: user.name,
        phoneNumber: user.phoneNumber
      }
    };
    if (user.exist && user.id) {
      const {error: updateError} = await supabase
        .from('baby_form')
        .update(newData)
        .eq('id', user.id);
      if (updateError) {
        console.error('Erreur lors de la mise à jour des données:', updateError);
        return;
      }
    } else {
      const {error: insertError} = await supabase
        .from('baby_form')
        .insert([newData]);
      if (insertError) {
        console.error('Erreur lors de l\'insertion des données:', insertError);
        return;
      }
    }
    console.log('Données enregistrées avec succès');
  }

  const fieldConfig = {
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
  }

  return (
    <Form fieldConfig={fieldConfig} handleSubmit={handleSubmit} formSchema={babySchema}/>
  )
}

export default BabyForm