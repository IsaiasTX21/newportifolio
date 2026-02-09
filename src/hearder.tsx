import { Link } from "react-router-dom"
export function Header() {

   return (
      <>
      
         <header>
            
            <div>
               <ul>
                  <li> ISAIAS </li>
               </ul>
            </div>

            <div >
               <ul>
                     <Link to={"/"}> <li>Principal</li> </Link>
                  <Link to={"/Projects"}> <li>Projetos</li></Link>
                   <Link to={"/Contact"}> <li> Contatos</li> </Link>
               </ul>
            </div>

         </header>
      </>
   )
}