import style from './style.module.css';

function CardPc({img,title}) {
     return (
          <div className={style.cardPc}>
               <img src={img} alt="game" />
               <div className={style.stars}>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half' ></i>
               </div>
               <h3>{title}</h3>
          </div>
     );
}

export default CardPc;