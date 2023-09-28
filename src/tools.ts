import {supabase} from "@/supabase.ts";
import {UserFormData} from "../typings";

export const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

export const checkUserExists = async (phoneNumber: string) => {
  const {data, error} = await supabase
    .from('baby_form')
    .select('*')
    .eq('user->>phoneNumber', phoneNumber);

  if (error) {
    console.error("Erreur lors de la vérification de l'utilisateur:", error);
    return false;
  }

  return data && data.length > 0 ? {exist: true, id: data[0].id} : false;
}
export const defaultUser: UserFormData = {
  name: '',
  phoneNumber: '',
  exist: false
}
