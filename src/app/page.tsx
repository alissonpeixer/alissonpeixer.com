"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, Mail,Linkedin } from "lucide-react";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";


interface IForm {
  message: string;
  email: string;
  name: string;
}


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [response, setResponse] = useState(null);

  const [dados,setDados] = useState<IForm>({
    message: '',
    email: '',
    name: ''
  })


  const texts = [
    "Desafios são oportunidades para criar soluções incríveis.",
    "Traga seus desafios, eu trago as soluções em código.",
    "Do desafio ao código, a solução sempre aparece.",
    "Transformando problemas em soluções escaláveis e eficientes.",
    "Me mostre o problema, e eu entrego a solução.",
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('/api/contact-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    });

    const data = await res.json();
    setResponse(data.message);
  };

  return (
   <>
    <main className={`h-screen bg-stone-900 text-white flex flex-col items-center p-5 overflow-x-hidden  ${menuOpen ? 'overflow-x-hidden' : 'overflow-x-scroll'}`}>
      {/* header */}
      <header className="flex items-center justify-between p-4 bg-stone-800 fixed fixedsform -t  tranranslate-x-1/2 w-full container mx-auto rounded-2xl z-10 mt-2 bg-opacity-50 backdrop-blur-lg shadow-md">
        <h1 className="text-2xl font-bold">
          <Image
            src="/logo-a.svg"
            alt="Logo"
            width={44}
            height={44}
            className="object-contain"
          />
        </h1>
        <button className="xl:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={24} />
        </button>
        <nav className="hidden xl:flex space-x-4">
          <a
            href="#home"
            className="hover:text-gray-400"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            Home
          </a>
          <a
            href="#about-me"
            className="hover:text-gray-400"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about-me");
            }}
          >
            Sobre
          </a>
          <a
            href="#stacks"
            className="hover:text-gray-400"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("stacks");
            }}
          >
            Stacks
          </a>
          <a
            href="#contact"
            className="hover:text-gray-400"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contato
          </a>
        </nav>
      </header>

      {/* mobile menu */}
      {/* {menuOpen && (
        
      )} */}

      <nav className={`transition-all backdrop-blur-3xl  text-center space-y-5 xl:hidden bg-stone-800 p-4 flex flex-col items-center justify-center z-[400] rounded-4xl container ease-in-out fixed top-30  ${menuOpen ? 'opacity-100' : 'opacity-0'} `}>
        <a
          href="#home"
          className="border p-10  w-full border-stone-600 rounded-2xl block py-2 text-white text-xl hover:text-gray-400 transition duration-300 transform hover:scale-105"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
            setMenuOpen(false);
          }}
        >
          Home
        </a>
        <a
          href="#about-me"
          className="border p-10  w-full border-stone-600 rounded-2xl block py-2 text-white text-xl hover:text-gray-400 transition duration-300 transform hover:scale-105"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about-me");
            setMenuOpen(false);
          }}
        >
          Sobre
        </a>
        <a
          href="#Stacks"
          className="border p-10  w-full border-stone-600 rounded-2xl block py-2 text-white text-xl hover:text-gray-400 transition duration-300 transform hover:scale-105"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("Stacks");
            setMenuOpen(false);
          }}
        >
          Stacks
        </a>
        <a
          href="#contact"
          className="border p-10  w-full border-stone-600 rounded-2xl block py-2 text-white text-xl hover:text-gray-400 transition duration-300 transform hover:scale-105"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
            setMenuOpen(false);
          }}
        >
          Contato
        </a>
      </nav>


      {/* home section */}
      <section
        id="home"
        className="flex flex-col xl:flex-row items-center min-h-[100svh] container justify-center xl:justify-between w-[97vw]"
        style={{ scrollSnapAlign: "start" }}
      >
        <div className="xl:w-1/2 text-center xl:text-left">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <Badge className="bg-stone-800">Desenvolvedor FullStack</Badge>
          </motion.div>
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-4xl xl:text-6xl text-amber-50 mb-6 font-bold"
          >
            Olá, sou o Alisson Peixer
          </motion.h1>
          <motion.h3
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-2xl xl:text-2xl mb-4 text-amber-100"
          >
            <ReactTyped strings={texts} typeSpeed={70} loop />
          </motion.h3>
        </div>
        <motion.div
          className="hidden xl:block"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/profile.png"
            alt="Alisson Peixer"
            loading="lazy"
            width={400}
            height={400}
          />
        </motion.div>
      </section>

      {/* about me*/}
      <section
        id="about-me"
        className="flex flex-col xl:flex-row items-center min-h-screen container justify-center xl:justify-between py-20"
        style={{ scrollSnapAlign: "start" }}
      >
        <motion.div
          className="xl:w-1/2 text-center xl:text-left"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl xl:text-5xl font-semibold text-amber-50 mb-4">
            Sobre Mim
          </h2>
          <p className="text-lg xl:text-xl text-amber-100 mb-6">
            Sou um desenvolvedor FullStack com paixão por criar soluções
            inovadoras e eficientes. Com experiência tanto no front-end quanto
            no back-end, estou sempre em busca de desafios que me permitam
            crescer profissionalmente e entregar resultados de alta qualidade.
          </p>
        </motion.div>

        <motion.div
          className="xl:w-1/2 hidden xl:block"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        >
          {/* <Image
            src=""
            alt="About Me"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          /> */}
        </motion.div>
      </section>

      {/* stacks */}
      <section
        id="stacks"
        className="flex flex-col xl:flex-row items-center min-h-screen container justify-center xl:justify-between py-20"
        style={{ scrollSnapAlign: "start" }}
      >

        <motion.div
          className="w-screen text-center xl:text-left"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl xl:text-5xl font-semibold text-amber-50 mb-4">
            Tecnologias
          </h2>
          <p className="text-lg xl:text-xl text-amber-100 mb-6">
            Aqui estão algumas das tecnologias que utilizo / já utilizei em meus projetos:
          </p>
        </motion.div>

        <motion.div
          className="xl:w-[100%] flex flex-wrap gap-4 justify-center xl:justify-end "
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        >
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-java"></i>
            <span>Java</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <Image src='/advpl.webp' alt="advpl" width={20} height={20}/>
            <span>Advpl</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-python"></i>
            <span>Python</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-js"></i>
            <span>JavaScript</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-rust"></i>
            <span>Rust</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-django"></i>
            <span>Django</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-drf"></i>
            <span>DRF</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-angular"></i>
            <span>Angular</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-react"></i>
            <span>React</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-reactnative"></i>
            <span>React Native</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-nextjs"></i>
            <span>Next.js</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-nodejs"></i>
            <span>Node.js</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-express"></i>
            <span>Express.js</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-ts"></i>
            <span>TypeScript</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-tailwindcss"></i>
            <span>Tailwind CSS</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-php"></i>
            <span>PHP</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-mongodb"></i>
            <span>MongoDB</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-postgresql"></i>
            <span>PostgreSQL</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-microsoftsqlserver"></i>
            <span>Sql Server</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-sqlite"></i>
            <span>Sql Lite</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-mysql"></i>
            <span>MySql</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-docker"></i>
            <span>Docker</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-vue"></i>
            <span>Vue</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-nuxt"></i>
            <span>Nuxt</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-aws"></i>
            <span>AWS</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-bootstrap"></i>
            <span>Bootstrap</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-materialui"></i>
            <span>Material UI</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-git"></i>
            <span>Git</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-github"></i>
            <span>GitHub</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-firebase"></i>
            <span>Firebase</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-graphql"></i>
            <span>GraphQL</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-restapi"></i>
            <span>REST API</span>
          </Badge>
          <Badge className="bg-orange-900/[0.4] space-x-2">
            <i className="ci ci-soap"></i>
            <span>SOAP</span>
          </Badge> 
        </motion.div>
      </section>

      {/* fale comigo */}
      <section
        id="contact"
        className="flex flex-col xl:flex-row items-center min-h-screen container justify-center py-20"
      >
        <motion.div  
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="flex-1 flex flex-col  space-y-7  mb-10"
        >
          <h2 className="text-4xl font-semibold text-amber-50 mb-4">Contato</h2>
          <p className="text-lg xl:text-xl text-amber-100 mb-6">
            Entre em contato comigo!
          </p>
          <a href="mailto:alissonpeixer.contato@gmail.com" target="_blank" className="underline flex items-center space-x-3">
            <Mail size={30}/>
            <span className="text-amber-50">alissonpeixer.contato@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/alissonpeixer/"  target="_blank" className="underline flex items-center space-x-3">
            <Linkedin size={30}/>
            <span className="text-amber-50">alissonpeixer</span>
          </a>
        </motion.div>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col text-center  xl:justify-center flex-1 rounded-lg"
        >
          <div className="flex space-x-4 mb-10">
            Ou me envie uma mensagem pelo formulário abaixo:
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col"
          >
            <input type="hidden" name="_subject" value="Contato pelo site" />
            <input
              type="text"
              name="name"
              placeholder="Nome"
              required
              className="w-full p-4 mb-6 border rounded-md focus:outline-none "
              value={dados.name}
              onChange={(e) => setDados(i=> ({...i,name: e.target.value}))}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-4 mb-6 border rounded-md focus:outline-none "
              value={dados.email}
              onChange={(e) => setDados(i=> ({...i,email: e.target.value}))}
            />
            <textarea
              name="message"
              placeholder="Mensagem"
              required
              className="w-full p-4 mb-6 border rounded-md focus:outline-none "
              value={dados.message}
              onChange={(e) => setDados(i=> ({...i,message: e.target.value}))}
            />
            <button
              type="submit"
              className="w-full p-4 bg-amber-500 text-white rounded-md hover:bg-amber-400"   
            >
              Enviar
            </button>
            <div className="py-4">
              {response && <p>{response}</p>}
            </div>
          </form>
        </motion.div>
      </section>
    </main>
   </>
  );
}
