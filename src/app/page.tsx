import fs from 'fs';
import Image from 'next/image';

export default function Home() {
  const item = fs.readdirSync('./logos')
  return (


    <main className="min-h-screen mx-auto container flex bg-grid bg-cover fade_class">
      <div className="flex-1 flex flex-col justify-center w-3/6 gap-3 items-start ">
        <div className='flex flex-col items-start w-full '>
          <div className='flex p-1 my-3'>
            <h3 className="text-2xl">
              Olá eu sou o Alisson,
            </h3>
          </div>
          <h1
            className="text-7xl font-extralight leading-10"
          >DESENVOLVEDOR</h1>
          <h1
            className="text-9xl font-extrabold text-shadow-md tracking-[1rem]"
          >FULLSTACK</h1>
        </div>
        <div className='flex h-7 w-auto justify-between '>
          {
            item.map((item, id) => (
              <Image
                width={40}
                height={40}
                key={id}
                src={`/${item}`}
                alt={item}
              />
            ))
          }
        </div>
      </div>


      <div className="flex items-center justify-around w-[30%]">
        <a
          href="https://github.com/alissonpeixer"
          target="_blank" rel="noopener noreferrer">
          <Image
            width={77}
            height={77}
            alt='github'
            src='/github.svg'
            className='transition-all w-[150px] h-[150px] hover:scale-110'
          />
        </a>
        <a
          href="https://www.linkedin.com/in/alissonpeixer/"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            width={77}
            height={77}
            alt='github'
            src='/linkdin.svg'
            className='transition-all w-[130px] h-[130px] hover:scale-110'
          />
        </a>
      </div>
    </main>

  )
}
