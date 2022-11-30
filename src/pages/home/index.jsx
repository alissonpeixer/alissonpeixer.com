import myPicture from '../../../public/mypicture.png'

export const Home = () => {
    return (
        <section className="bg-grip-particle bg-right bg-no-repeat snap-center">

            <main className="transition-all lg:container lg:mx-auto min-h-[90vh]   items-center  flex flex-col lg:flex-row fade_class">




                <div className="w-1/2  gap-9 text-center flex flex-col justify-center lg:text-start lg:pl-9">
                    <div className=" flex items-center justify-center h-12 lg:justify-start lg:w-1/2">

                        <div className='rounded-xl h-1/2 px-3 bg-radind  text-center'>

                            <h4 className=' text-black text-shadow-lg'>
                                Desenvolvedor Full Stack
                            </h4>

                        </div>
                    </div>

                    <div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-shadow-xl">
                            Me proponha um desafio,
                        </h1>
                        <h2 className="text-2xl lg:text-3xl">
                            que le darei a solução!
                        </h2>
                    </div>


                </div>




                <div className="flex-1 flex items-center justify-center">

                    <div >
                        <img className='w-80  min-w-[320px] max-w-[400px]  drop-shadow-2xl' src={myPicture} alt="" />
                    </div>

                </div>
            </main>

        </section >
    )
}