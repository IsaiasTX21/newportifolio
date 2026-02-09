import { Header } from "./hearder"
import Refrigeracao from './img/Refrigeracao.png'
import Movie from "./img/Movies.png"
import Wheather from "./img/Wheather.png"



export function Projects() {
   let projects = [{
      Title: "Refrigeração",
      Photo: Refrigeracao,
      Description: "Este site foi desenvolvido para um prestador de serviços de refrigeração, com foco em clareza, confiança e facilidade de contato",
      link: "https://refrigeracao-sub-zero.netlify.app/"
   },

   {
      Title: "Filmes",
      Photo: Movie,
      Description: "Este site foi desenvolvido como uma plataforma de filmes, onde os usuários podem explorar títulos por categoria e descobrir novos filmes com facilidade. O foco principal do projeto é um design limpo, navegação intuitiva e uma experiência agradável para o usuário",
      link: "https://movie-12i6.vercel.app/"
   },

   {
      Title: "Condições climáticas",
      Photo: Wheather,
      Description: "Este projeto é uma aplicação de clima que permite aos usuários pesquisar por uma cidade e visualizar instantaneamente as condições meteorológicas atuais usando uma API pública.",
      link: "https://storied-pegasus-683f73.netlify.app/"
   }

   ]

   return (
      <>
         <Header />
         <h2 style={{ textAlign: "center", marginTop: "20px", marginBottom: "40px" }}>Meus Projetos</h2>

         {projects.map((element) => {
            return (
               <div className='containerphoto'>
                  <div className='groupsprojects'>
                     <a href={element.link}> <img className='photoprojects' src={element.Photo} alt="" /> </a>

                  </div>

                  <div className='containerdescription'>
                     <h2 className='projectstitles'>{element.Title}</h2>
                     <p className='projectdescription'>{element.Description}</p>

                  </div>
               </div>

            )
         })}


      </>
   )
}