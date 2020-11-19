import React from 'react'
import Head from 'next/head'

import Ilheus from '../images/ponte-pontal1.jpg'
import Salvador from '../images/Elevador-Lacerda.jpg'
import VTC from '../images/olivia-flores.jpg'
import FeiradeSantana from '../images/feira-de-santana.jpg'
import BomJesusLapa from '../images/Bom-Jesus-da-Lapa.jpg'
import Irece from '../images/Irece.jpg'
import BarraEstiva from '../images/Barra-da-Estiva.jpg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container >
      <Head>
        <title>Cidades</title>

      </Head>

      <div id="cidades"><h2 >Cidades Bahia</h2></div>
        <main>
        <p>Ilhéus</p>
        <img src={Ilheus} alt="ponte pontal de ilheus"/>

        <p>Salvador</p>
        <img src={Salvador} alt="Elevador lacerda Salvador"/>

        <p>Vitória da Conquista</p>
        <img src={VTC} alt="Avenida Olivia Flores Vitória da Conquista"/>

        <p>Feira de Santana</p>
        <img src={FeiradeSantana} alt="Feira de Santana"/>

        <p>Bom Jesus da Lapa</p>
        <img src={BomJesusLapa} alt="Capela Bom Jessua da Lapa"/>

        <p>Irecê</p>
        <img src={Irece} alt="Irecê"/>

        <p>Barra da Estiva</p>
        <img src={BarraEstiva} alt="Barra da Estiva"/>


        </main>
    </Container>
  )
}
export default Home
