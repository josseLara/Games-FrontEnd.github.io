import { useEffect, useState } from 'react';
import style from './style.module.css'



function CardPs( { video, img, title, content, handeltOpen, cardOpen, i } ) {
     let [card, setCard] = useState( false );

     // si la pantalla es menor a 900px
     const [windowWidth, setWindowWidth] = useState( window.innerWidth );
     useEffect( () => {
          const handleResize = () => setWindowWidth( window.innerWidth );

          window.addEventListener( 'resize', handleResize );
       
          return () => window.removeEventListener( 'resize', handleResize );
     }, [] );
     
     // cambiar mostrar card en diferente resolucion
     useEffect(()=>{
     if ( windowWidth < 900 ) {     
          let array = [true, true, true];
          handeltOpen( array )    
          setCard(false)     
     }else{
          let array = [false, false, false];
          handeltOpen( array ) 
          setCard(true) 
     }}
     ,[windowWidth]);

     let clickImg = () => {
          if ( windowWidth > 900 ) {
               
               let array = [false, false, false];
               array[i] = card;
               handeltOpen( array )
               if(!card){
                    setTimeout(()=> setCard( !card ),1000)
               }else{
                    setCard( !card )
               }
               
          }


     }

     return (
          <div className={style.cardPs}>
               <img src={img} alt="game" onClick={() => clickImg()} />
               <div className={`${style.inform} ${!cardOpen[i] ? style.animaRever:null}`} style={{ display: !card ? 'block' : 'none', width: cardOpen[i] ? '450px' : '0px' }}>
                    {/* video */}
                    <video className={style.video} autoPlay={true} loop={true} muted={true}>
                         <source src={video} type="video/mp4" />
                    </video>
                    {/* title */}
                    <div className={style.informTitle}>
                         <h2>{title}</h2>
                         <div className={style.stars}>
                              <span>8.9</span>
                              <div className={style.star}>
                                   <i className='bx bxs-star'></i>
                                   <i className='bx bxs-star'></i>
                                   <i className='bx bxs-star'></i>
                                   <i className='bx bxs-star'></i>
                                   <i className='bx bxs-star-half' ></i>
                              </div>
                         </div>
                    </div>
                    {/* content */}
                    <p className={style.description}>{content}</p>
                    {/* types */}
                    <div className={style.btnTypes}>
                         <span>Accion</span>
                         <span>Aventura</span>
                    </div>

               </div>
          </div>
     );
}

export default CardPs;