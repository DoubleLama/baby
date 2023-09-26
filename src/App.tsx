import BabyForm from "@/components/baby-form.tsx";

const App = () => {
  return (
    <div className={'flex flex-col items-center'}>
      <h1 className={'text-center font-bold text-4xl text-zinc-600 mb-6'}>BabyChou</h1>
      <h2 className={'subtitle mb-6'}>
        Fais nous ton meilleur prono et à toi ton poids en carottes
      </h2>
      <BabyForm/>
    </div>
  )
}

export default App
