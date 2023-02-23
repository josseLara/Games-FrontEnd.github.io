import style from './style.module.css';

function CardTop({img,title,content}) {
     return (
          <div className={style.cardTop}>
               <div className={style.btnCompat}>
                    <span>PC</span>
                    <span>PS4</span>
               </div>
               <div className={style.conetent}>
                    <div className={style.infor}>
                         <h2>{title}</h2>
                         <p>{content}</p>
                         <button>Ver mas</button>
                    </div>
                    <div className={style.contentImg}>
                         <img src={img} alt="" />
                    </div>
               </div>
          </div>
     );
}

export default CardTop;