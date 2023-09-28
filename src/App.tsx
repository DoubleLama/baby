import BabyForm from "@/components/baby-form.tsx";
import {useState} from "react";
import UserForm from "@/components/user-form.tsx";
import {defaultUser} from "@/tools.ts";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

const App = () => {
  const [user, setUser] = useState(defaultUser)
  return (
    <div className={'flex flex-col items-center'}>
      <ToastContainer/>
      <h1 className={'text-center font-bold text-6xl text-zinc-600 mb-6'}>BabyChou</h1>
      <h2 className={'subtitle mb-6'}>
        Fais nous ton meilleur prono et à toi ton poids en carottes
      </h2>
      <h3 className={'mb-3'}>
        {user === defaultUser
          ? 'Dis nous qui participe ?'
          : 'Concernant le futur bébé'}
      </h3>

      {user === defaultUser && (
        <>
          <UserForm setUser={setUser}/>
        </>
      )}
      {user !== defaultUser && (
        <>
          <BabyForm user={user} setUser={setUser}/>
        </>
      )}
    </div>
  )
}

export default App
