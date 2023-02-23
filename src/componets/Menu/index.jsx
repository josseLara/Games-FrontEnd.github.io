import style from './style.module.css';

function Menu() {
     return ( 
          <div className={style.menu}>
          <h1 className={style.h1}>Games</h1>
          <ul className={style.ul}>
               <li>
                    <a href="">Inicio</a>
               </li>
               <li>
                    <a href="">Juegos</a>
               </li>
               <li>
                    <a href="">Acerca de nosotros</a>
               </li>
          </ul>
          </div>
      );
}

export default Menu;