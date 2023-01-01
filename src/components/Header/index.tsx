import { GitHubLogo } from './github'
import { Arroba } from './arroba'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Li } from '../Li'
import { Button } from '../Button'

export const Header = ({ children }: any) => {
  const router = useRouter()

  const [menuOpen, setMenuOpen] = useState(false)

  const goTo = async (id: string) => {
    if (router.pathname === '/blog') {
      await router.push('/')
    }
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    })
  }

  const navMobile = () => {
    if (!menuOpen) {
      setMenuOpen(true)
    } else {
      setMenuOpen(false)
    }
  }

  return (
    <>
      <header className="flex w-full border-b border-emerald-500/[0.1] z-50 backdrop-blur-xl bg-gray-800/10  fixed">
        <div className="mx-auto container  fade_class_header  ">
          <div className="h-16 flex justify-between items-center p-8 ">
            <div className="transition-all text-center lg:w-60 lg:text-start ">
              <h1 className="text-2xl">Alisson Peixer</h1>
            </div>

            <div className="transition-all flex  lg:hidden">
              <button onClick={() => navMobile()}>
                <svg width="28" height="22" viewBox="0 0 18 12">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0.75C0 0.335786 0.335786 0 0.75 0H17.25C17.6642 0 18 0.335786 18 0.75C18 1.16421 17.6642 1.5 17.25 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75ZM0 6C0 5.58579 0.335786 5.25 0.75 5.25H17.25C17.6642 5.25 18 5.58579 18 6C18 6.41421 17.6642 6.75 17.25 6.75H0.75C0.335786 6.75 0 6.41421 0 6ZM0 11.25C0 10.8358 0.335786 10.5 0.75 10.5H9C9.41421 10.5 9.75 10.8358 9.75 11.25C9.75 11.6642 9.41421 12 9 12H0.75C0.335786 12 0 11.6642 0 11.25Z"
                    fill="white"
                    className="transition-all fill-gray-300 hover:fill-slate-100"
                  />
                </svg>
              </button>
            </div>

            <nav className="hidden lg:block">
              <ul className="flex gap-5 text-sm font-mono tracking-tighter">
                <Li body="Home" onClick={() => goTo('home')} />
                <Li body="Bio" onClick={() => goTo('bio')} />
                <Li body="Stacks" onClick={() => goTo('stack')} />
                <Li body="Projetos" onClick={() => goTo('project')} />
                <Li body="Blog" onClick={() => router.push('/blog')} />
              </ul>
            </nav>

            <div className="transition-all w-60 justify-around hidden lg:flex gap-2">
              <Button
                icon={<GitHubLogo />}
                body="GitHub"
                href="https://github.com/alissonpeixer"
                target="_blank"
              />
              <Button
                icon={<Arroba />}
                body="Contato"
                target="_blank"
                href="mailto:alissonpeixer4@gmail.com"
              />
            </div>
          </div>
        </div>
      </header>

      <div
        className={
          menuOpen
            ? 'transition-all  ease-in-out flex w-screen  h-screen backdrop-blur-xl bg-gray-800/10 absolute gap-10 z-50  p-20 flex-col justify-between lg:hidden'
            : 'transition-all translate  ease-in-out  absolute -left-full lg:hidden'
        }
      >
        <div className="w-full flex justify-end">
          <button onClick={() => navMobile()}>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="transition-all w-10 h-10 hover:stroke-slate-50 stroke-slate-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-5 text-2xl font-mono tracking-wide text-center">
          <Li body="Home" onClick={() => (goTo('home'), navMobile())} />
          <Li body="Bio" onClick={() => (goTo('bio'), navMobile())} />
          <Li body="Stacks" onClick={() => (goTo('stack'), navMobile())} />
          <Li body="Projetos" onClick={() => (goTo('project'), navMobile())} />
          <Li body="Blog" onClick={() => (router.push('/blog'), navMobile())} />
        </ul>
        <div className="transition-all items-center justify-around  flex gap-2 ">
          <Button
            icon={<GitHubLogo fill="white" />}
            body="GitHub"
            href="https://github.com/alissonpeixer"
            target="_blank"
          />
          <Button
            icon={<Arroba fill="white" />}
            body="Contato"
            target="_blank"
            href="mailto:alissonpeixer4@gmail.com"
          />
        </div>
      </div>

      {children}
    </>
  )
}
