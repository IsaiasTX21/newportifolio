import { Link } from "react-router-dom"
export function Header() {

   return (
      <>

         <header>

            <div id="myself">
             
               <ul>
                  <li > ISAIAS </li>
               </ul>


            </div>

            <div id="containermenu" >
               <ul id="menu">
                  <Link to={"/"}> <li>Principal</li> </Link>
                  <Link to={"/Projects"}> <li>Projetos</li></Link>
                  <Link to={"/Contact"}> <li> Contatos</li> </Link>
               </ul>
            </div>

         </header>
      </>
   )
}