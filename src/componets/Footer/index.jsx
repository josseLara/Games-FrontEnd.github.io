import style from './style.module.css';

function Footer() {
     return (
          <footer className={style.footer}>
               <div className={style.left}>
                    <img src="logo.png" alt="logo" />
                    <p>© 2023. Todos los derechos reservados.</p>
               </div>
               <ul className={style.wrapper}>
                    <li className={style.icon}>
                         <span className={style.tooltip}>Facebook</span>
                         <span><i className='bx bxl-facebook'></i></span>
                    </li>
                    <li className={style.icon}>
                         <span className={style.tooltip}>Facebook</span>
                         <span><i className='bx bxl-instagram-alt'></i></span>
                    </li>
                    <li className={style.icon}>
                         <span className={style.tooltip}>Facebook</span>
                         <span><i className='bx bxl-twitter' ></i></span>
                    </li>
               </ul>
          </footer>
     );
}

export default Footer;