import styled from 'styled-components'

export const Container = styled.div`
  widht:100vw;
  height:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction:column;
  margin: 2rem 10rem 2rem 10rem;

  h2 {
    font-size: 8vw;
    color: ${props => props.theme.colors.primary};
    margin-top: 2rem;
    display: flex;
    align-items: center;
  }
  main{
    display: flex;
    align-items: center;
    flex-direction:column;
  }
  p {
    margin: 4rem auto 1rem auto;
    margin-minimum:2rem;
    font-size: 2rem;
    line-height: 1rem;
    color: ${props => props.theme.colors.primary};
  }
  img {
    widht:23rem;
    height:18rem;
  }
  cidades {
    align-items:top;
    display: flex;
  }
`
