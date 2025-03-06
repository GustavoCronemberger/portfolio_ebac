import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos/projetos'
import Sidebar from './containers/Sidebar/sidebar'
import Sobre from './containers/Sobre/sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [usandoDark, setUsandoDark] = useState(true)

  function trocaTema() {
    setUsandoDark(!usandoDark)
  }

  return (
    <ThemeProvider theme={usandoDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
