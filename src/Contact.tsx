import { Header } from "./hearder"
import whatssap from "./img/whatsapp.png"
export function Contact() {

    return (
    <>
    <Header/>
    <div id='contact'>

             <form action="https://formsubmit.co/isaiascaetanodev@gmail.com" method="POST">
                            
               <h2>Meu contact!</h2>
              <a href="https://wa.me/5521981614216"> <img src={whatssap} alt="whatsapp" /></a>
               <label htmlFor="gmail">Seu Gmail.</label> 
               <input placeholder="Por favor, escreva seu gmail." name='gmail' id='gmail' />
               <label htmlFor="textarea" >Escreva aquilo que o seu coração deseja.</label>
               < textarea placeholder="Escreva aqui o que desejar senhor(a)." name='textarea' id='textarea' />
               <input type="hidden" name="_next" value="https://portifolio2026007.netlify.app/Return"></input>
               <button type='submit'>Enviar</button>
               



            </form>

         </div>
    
    </>)

}