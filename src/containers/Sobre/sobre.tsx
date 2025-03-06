import Titulo from '../../components/Titulo/titulo'
import Paragrafo from '../../components/Paragrafo/paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre Ana ALice</Titulo>
    <Paragrafo tipo="principal">
      Sou uma profissional dedicada, com uma abordagem proativa para
      aprendizagem e a resolução de problemas. Minha capacidade de trabalhar
      tanto em projetos individuais quanto em equipe, aliada à minha vontade de
      expandir minhas habilidades, me posiciona bem para contribuir
      significativamente em qualquer equipe de desenvolvimento. Sou uma pessoa
      versátil e em constante crescimento, com uma base sólida e uma mentalidade
      de aprendizado contínuo, pronta para enfrentar qualquer desafio e
      contribuir em projetos de desenvolvimento e soluções.
    </Paragrafo>
    <GithubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=AnaAlicepb&show_icons=true&theme=dracula"
        alt="AnaAlicepb GitHub Stats"
      />
      <img
        src="https://github-readme-streak-stats.herokuapp.com/?user=AnaAlicepb&theme=dracula"
        alt="GitHub Streak"
      />
    </GithubSecao>
  </section>
)

export default Sobre
