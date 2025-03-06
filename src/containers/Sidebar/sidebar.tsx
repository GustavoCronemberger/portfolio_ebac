import Avatar from '../../components/Avatar/avatar'
import Paragrafo from '../../components/Paragrafo/paragrafo'
import Titulo from '../../components/Titulo/titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={16}>Ana Alice</Titulo>
      <Paragrafo tipo="secundario" fontSize={14}>
        Rodrigues
      </Paragrafo>
      <Paragrafo tipo="secundario" fontSize={14}>
        anaeanali5@gmail.com
      </Paragrafo>
      <Paragrafo tipo="secundario" fontSize={14}>
        (47) 9 9718-4154
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        DESENVOLVEDORA Full Stack
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>

      {/* Adicionando a seção de habilidades */}
      <section>
        <Titulo fontSize={16}>💻 Habilidades</Titulo>
        <div>
          <img
            src="https://img.shields.io/badge/Java-007396?style=flat-square&logo=java&logoColor=white"
            alt="Java"
          />
          <img
            src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white"
            alt="Python"
          />
          <img
            src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"
            alt="JavaScript"
          />
          <img
            src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"
            alt="HTML5"
          />
          <img
            src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"
            alt="CSS3"
          />
          <img
            src="https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white"
            alt="Django"
          />
          <img
            src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white"
            alt="MySQL"
          />
          <img
            src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=spring-boot&logoColor=white"
            alt="Spring Boot"
          />
          <img
            src="https://img.shields.io/badge/Laravel-FF2D20?style=flat-square&logo=laravel&logoColor=white"
            alt="Laravel"
          />
          <img
            src="https://img.shields.io/badge/Hibernate-59666C?style=flat-square&logo=hibernate&logoColor=white"
            alt="Hibernate"
          />
          <img
            src="https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white"
            alt="PostgreSQL"
          />
          <img
            src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"
            alt="React"
          />
          <img
            src="https://img.shields.io/badge/Cypress-17202C?style=flat-square&logo=cypress&logoColor=white"
            alt="Cypress"
          />
          <img
            src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=vue.js&logoColor=white"
            alt="Vue.js"
          />
        </div>
      </section>
    </SidebarContainer>
  </aside>
)

export default Sidebar
