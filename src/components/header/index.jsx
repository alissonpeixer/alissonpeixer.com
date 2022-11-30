import { GitHubLogo } from '../assets/GitHubLogo'
import { Arroba } from '../assets/Arroba'

const Li = ({ body, customStyle }) => {
  const cssCustom = customStyle || ''

  return (
    <li
      className={
        `transition-all hover:text-emerald-300 cursor-pointer  ` + cssCustom
      }
    >
      {body}
    </li>
  )
}

const Button = ({ body }) => {
  return <button>{body}</button>
}

export const Header = () => {
  return (
    <header className="flex w-full border-b border-emerald-500/[0.1] fixed z-50 bg-grad">
      <div className="mx-auto container  fade_class_header  ">
        <div className="h-16 flex justify-between items-center p-8 ">
          <div className="transition-all text-center lg:w-60 lg:text-start ">
            <h1 className="text-2xl">Alisson Peixer</h1>
          </div>

          <div className="transition-all flex  lg:hidden">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0.75C0 0.335786 0.335786 0 0.75 0H17.25C17.6642 0 18 0.335786 18 0.75C18 1.16421 17.6642 1.5 17.25 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75ZM0 6C0 5.58579 0.335786 5.25 0.75 5.25H17.25C17.6642 5.25 18 5.58579 18 6C18 6.41421 17.6642 6.75 17.25 6.75H0.75C0.335786 6.75 0 6.41421 0 6ZM0 11.25C0 10.8358 0.335786 10.5 0.75 10.5H9C9.41421 10.5 9.75 10.8358 9.75 11.25C9.75 11.6642 9.41421 12 9 12H0.75C0.335786 12 0 11.6642 0 11.25Z"
                fill="white"
              />
            </svg>
          </div>

          <nav className="transition-all hidden lg:flex ">
            <ul className="flex gap-5 text-sm font-mono tracking-tighter">
              <Li
                body={`< Home />`}
                customStyle={'text-base text-emerald-500 font-bold'}
              />
              <Li body="Stacks" />
              <Li body="Projetos" />
              <Li body="Blog" />
            </ul>
          </nav>

          <div className="transition-all w-60 justify-around hidden lg:flex gap-2">
            <button className="transition-all flex items-center h-full gap-2 border py-2 px-4 rounded-2xl  border-zinc-300 opacity-60 hover:opacity-100">
              <div className="w-6 h-6 ">
                <GitHubLogo />
              </div>
              GitHub
            </button>

            <button className="transition-all flex items-center h-full gap-2 border py-2 px-4 rounded-2xl  border-zinc-300 opacity-60 hover:opacity-100">
              <div className="w-6 h-6">
                <Arroba />
              </div>
              Contato
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
