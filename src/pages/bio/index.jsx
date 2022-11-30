import { ProfileInlus } from './assets/profileInlus'

export const Bio = () => {
  return (
    <section
      className="snap-start min-h-screen flex items-center px-12 shadow-2xl "
      id="bio"
    >
      <main className="transition-all lg:container lg:mx-auto h-1/2   items-center  flex flex-col lg:flex-row fade_class">
        <div className="flex-1 hidden lg:flex items-center justify-center ">
          <ProfileInlus />
        </div>
        <div className="  gap-9 text-center flex flex-col justify-center lg:text-start lg:pl-9 lg:w-1/2">
          <div className=" flex items-center justify-center h-16 lg:justify-start lg:w-1/2">
            <div className="rounded-xl  px-3 py-2 bg-radind  text-center">
              <h4 className=" text-black text-xl text-shadow-lg">Sobre mim</h4>
            </div>
          </div>

          <div className="text-start">
            <h1 className="text-3xl lg:text-5xl font-bold text-shadow-xl">
              Olá, me chamo Alisson,
            </h1>
            <p className=" lg:text-lg">
              busco sempre estar evoluindo com muita dedicação! Todo o
              conhecimento que tenho adquirido até hoje foi por base do meu
              autodidatismo e minha fascinação de sempre querer aprender mais!
              Estou na área de desenvolvimento web há 1 ano, mas tenho contato
              com o mundo da tecnologia desde os meus 11 anos.
            </p>
          </div>
        </div>
      </main>
    </section>
  )
}
