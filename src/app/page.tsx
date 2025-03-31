"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu } from "lucide-react";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <main className={`h-screen bg-stone-900 text-white flex flex-col items-center p-5  ${menuOpen ? 'overflow-x-hidden' : 'overflow-x-scroll'}`}>
      {/* header */}
      <header className="flex items-center justify-between p-4 bg-stone-800 fixed left-1/2 transform -translate-x-1/2 w-full container mx-auto rounded-2xl z-10 mt-2 bg-opacity-50 backdrop-blur-lg shadow-md">
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

      <nav className={`transition-all backdrop-blur-3xl opacity-30 text-center space-y-5 xl:hidden bg-stone-800 p-4 flex flex-col items-center justify-center   z-[100] w-[100%] rounded-4xl container top-28 fixed h-[80vh] transform ${menuOpen ? 'left-0 opacity-100' : 'left-[-500px] opacity-0'} ease-in-out`}>
        <a
          href="#home"
          className="border p-10  w-full border-stone-600 rounded-2xl block py-2 text-white text-xl hover:text-gray-400 transition duration-300 transform hover:scale-105"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          Sobre
        </a>
        <a
          href="#about-me"
          className="border p-10  w-full border-stone-600 rounded-2xl block py-2 text-white text-xl hover:text-gray-400 transition duration-300 transform hover:scale-105"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about-me");
          }}
        >
          Projetos
        </a>
        <a
          href="#contact"
          className="border p-10  w-full border-stone-600 rounded-2xl block py-2 text-white text-xl hover:text-gray-400 transition duration-300 transform hover:scale-105"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          Contato
        </a>
      </nav>


      {/* home section */}
      <section
        id="home"
        className="flex flex-col xl:flex-row items-center min-h-[100svh] container justify-center xl:justify-between"
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
            src="/profile.svg"
            alt="Alisson Peixer"
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

      {/* fale comigo */}
      <section
        id="contact"
        className="flex flex-col items-center min-h-screen container justify-center py-20"
      >
        <motion.div  
          className="flex flex-col space-y-7 text-center mb-10"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-semibold text-amber-50 mb-4">Contato</h2>
          <p className="text-lg xl:text-xl text-amber-100 mb-6">
            Entre em contato comigo!
          </p>
          <a href="mailto:alisson.peixer@gmail.com" className="underline">
            alisson.peixer@gmail.com
          </a>
        </motion.div>

        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        >
          <div className="flex space-x-4 mb-10">
            Ou me envie uma mensagem pelo formulário abaixo:
          </div>
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="w-full max-w-md"
          >
            <input type="hidden" name="_subject" value="Contato pelo site" />
            <input
              type="text"
              name="name"
              placeholder="Nome"
              required
              className="w-full p-4 mb-6 border rounded-md focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-4 mb-6 border rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Mensagem"
              required
              className="w-full p-4 mb-6 border rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="w-full p-4 bg-amber-500 text-white rounded-md hover:bg-amber-400"
            >
              Enviar
            </button>
          </form>
        </motion.div>
      </section>
    </main>
  );
}
