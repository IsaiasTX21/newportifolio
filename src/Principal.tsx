import { Header } from './hearder'
import Eu from './img/EuB.png'

export function Principal() {



   return (
      <>
         <Header />
         <div id="containerperfil">
            <div id="divimage">
               <img id='Myself' src={Eu} alt="The Creater of the portifolio" />
            </div>
            <div id="divtext">
               <span id='Helloworld'>Olá Mundo!</span>
               <p id='Hellophrase'>Te convido(a) a ver meu mundo como ele realmente funciona.</p>
               <button id='cv' type='button'><a href='https://drive.google.com/file/d/1ZNV1r4X7kJCO8wZFE9NU2wyvqu9h4NHf/view'>Curriculo</a></button>
            </div>
         </div>



         <div id='Aboutme'>

            <h1 style={{ textAlign: "center", marginTop: "15px", fontWeight: "500" }}>Sobre mim</h1>
            <br />

            <p>Sou desenvolvedor Front-End com foco na criação de interfaces modernas, responsivas e centradas na experiência do usuário. Tenho interesse em desenvolver soluções digitais bem estruturadas, funcionais e visualmente agradáveis, sempre buscando equilibrar design, desempenho e usabilidade.

               Ao longo da minha trajetória, venho aprimorando minhas habilidades técnicas e meu entendimento sobre boas práticas de desenvolvimento web, organização de código e colaboração em projetos. Gosto de trabalhar em ambientes onde posso aprender, contribuir e evoluir junto com a equipe.

               Tenho como objetivo atuar em projetos que envolvam criação e melhoria de interfaces para sites e aplicações web, especialmente em landing pages e sites institucionais, sempre priorizando acessibilidade, clareza visual e uma experiência fluida para o usuário final.

               Além das competências técnicas, valorizo trabalho em equipe, comunicação clara e comprometimento com prazos e qualidade. Estou constantemente buscando me desenvolver tanto tecnicamente quanto profissionalmente, pois acredito que a aprendizagem contínua é essencial na área de tecnologia.

               Estou motivado para fazer parte de um time onde eu possa contribuir com minhas habilidades, aprender com outros profissionais e crescer como desenvolvedor Front-End.</p>

         </div>




      </>
   )
}