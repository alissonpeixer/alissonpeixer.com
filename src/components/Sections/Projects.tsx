import { useEffect, useState } from 'react'
import texts from '../../config/texts.json' assert { type: 'json' }
import Link from 'next/link'

type gitApi = {
  svn_url: string
  name: string
  id: string
  topics: []
}

type projectProps = {
  erro: boolean
  loading: boolean
  data: gitApi[]
}

export const Project = () => {
  const [projects, setProjects] = useState<projectProps>({
    erro: false,
    loading: true,
    data: [],
  })

  const [text, setText] = useState(texts[2].stack)
  useEffect(() => {
    fetchProject()
  }, [])

  const fetchProject = async () => {
    setProjects(prevOld => ({ ...prevOld, loading: true }))
    const res = await fetch('https://api.github.com/users/alissonpeixer/repos')
      .then(e => e.json())
      .then(data => {
        setProjects(prevOld => ({ ...prevOld, data }))
      })
      .catch(erro => {
        setProjects(prevOld => ({ ...prevOld, erro: true, loading: false }))
      })
  }
  console.log(projects)
  return (
    <>
      {projects.loading && (
        <section
          id="project"
          className="snap-start min-h-screen flex items-center px-12 fade_class_header "
        >
          <main className="transition-all lg:container lg:mx-auto  items-center  flex flex-col lg:flex-row fade_class">
            <div className="  gap-5 text-center flex flex-col justify-center lg:text-start lg:w-1/2 lg:pl-9">
              <div className=" flex items-center justify-center  h-16 lg:justify-start lg:w-1/2">
                <div className="rounded-xl  px-3 py-2 bg-radind  text-center">
                  <h4 className=" text-black text-xl text-shadow-lg">
                    Projetos
                  </h4>
                </div>
              </div>

              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-shadow-xl">
                  São mais de {projects?.data.length} projetos que tenho em meu
                  GitHub
                </h1>
                <h2 className="text-2xl lg:text-3xl">
                  veja algum desles aqui!
                </h2>
              </div>
            </div>
            <div className="flex-1 flex pt-8 pb-8 items-center justify-center lg:justify-start  gap-3 flex-wrap">
              {projects?.data.map((item, id): any => (
                <div
                  className="transition-all rounded-xl h-1/2 px-3 bg-radind  text-center hover:scale-110"
                  key={id}
                >
                  <Link
                    className="text-black"
                    href={item.svn_url}
                    target="_blank"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </main>
        </section>
      )}
    </>
  )
}
