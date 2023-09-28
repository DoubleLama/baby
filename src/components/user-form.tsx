import {UserFormData, UserFormProps} from "../../typings";
import {userSchema} from "@/schema.ts";
import Form from "@/components/form.tsx";
import {checkUserExists, defaultUser} from "@/tools.ts";

const UserForm = ({setUser}: UserFormProps) => {
  const handleSubmit = async (userData: UserFormData) => {
    const userExists = await checkUserExists(userData.phoneNumber);
    if (userExists) {
      const shouldReplace = window.confirm("Tu as déjà donné ton prono.\n Tu veux le remplacer ?");
      if (shouldReplace) {
        const {exist, id} = userExists;
        setUser({...userData, exist, id});
      } else {
        setUser(defaultUser);
      }
    } else {
      setUser({...userData, exist: false});
    }
  }


  return (
    <Form handleSubmit={handleSubmit} formSchema={userSchema}/>
  )
}

export default UserForm