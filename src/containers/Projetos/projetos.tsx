import { useEffect, useState } from 'react'
import Projeto from '../../components/Projeto/projeto'
import Titulo from '../../components/Titulo/titulo'
import { Lista } from './styles'

interface Repo {
  id: number
  name: string
  language: string
  html_url: string
}

const fetchAllRepos = async (username: string): Promise<Repo[]> => {
  let page = 1
  let allRepos: Repo[] = []
  let fetching = true

  while (fetching) {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`
    )
    const repos: Repo[] = await response.json()
    if (repos.length > 0) {
      allRepos = [...allRepos, ...repos]
      page++
    } else {
      fetching = false
    }
  }

  return allRepos
}

const Projetos = () => {
  const [repos, setRepos] = useState<Repo[]>([])

  useEffect(() => {
    fetchAllRepos('AnaAlicepb').then(setRepos)
  }, [])

  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {repos.map(({ id, name, language, html_url }) => (
          <li key={id}>
            <Projeto name={name} language={language} html_url={html_url} />
          </li>
        ))}
      </Lista>
    </section>
  )
}

export default Projetos
