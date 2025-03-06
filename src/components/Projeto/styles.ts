import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDefundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.corHoverBotao};
    color: ${(props) => props.theme.corTextoHover};
  }
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corDefundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  margin-bottom: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.corHoverBotao};
    color: ${(props) => props.theme.corTextoHover};
  }
`
