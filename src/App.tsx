import BabyForm from "@/components/baby-form.tsx";
import {useState} from "react";
import UserForm from "@/components/user-form.tsx";

const App = () => {
  const [isValid, setIsValid] = useState(false)
  return (
    <div className={'flex flex-col items-center'}>
      <h1 className={'text-center font-bold text-4xl text-zinc-600 mb-6'}>BabyChou</h1>
      <h2 className={'subtitle mb-6'}>
        Fais nous ton meilleur prono et à toi ton poids en carottes
      </h2>
      {!isValid && <UserForm setIsValid={setIsValid}/>}
      {isValid && <BabyForm/>}
    </div>
  )
}

export default App
