import React from 'react'
import { Card, LinkBotao } from './styles'
import Titulo from '../Titulo/titulo'
import Paragrafo from '../Paragrafo/paragrafo'

interface ProjetoProps {
  name: string
  language: string
  html_url: string
}

const Projeto: React.FC<ProjetoProps> = ({ name, language, html_url }) => (
  <Card>
    <Titulo>{name}</Titulo>
    <Paragrafo>{language}</Paragrafo>
    <LinkBotao href={html_url} target="_blank" rel="noopener noreferrer">
      Visualizar
    </LinkBotao>
  </Card>
)

export default Projeto
