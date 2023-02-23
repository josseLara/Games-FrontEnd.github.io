import { useState } from 'react';
import style from './style.module.css';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';

function Start() {
     // crear 90 div
     let array = [];
     for ( let i = 0;i < 90;i++ ) {
          array.push( Math.random() * 40 );
     }
     // 
     let [display, setDisplay] = useState( 'hidden' );
     const navigate = useNavigate();

     return (
          <>
               <div className={style.content}>
                    <div className={style.button} onClick={() => {
                         setDisplay( 'block' )
                         setTimeout(() => {
                              navigate('/Home');
                                      }, 2001)
                                      
                    }}
                    style={{opacity:display == 'hidden' ? '1' : '0'}}
                    >
                         Start

                    </div>
                    {array.map( e => <div className={style.box} style={{ '--bar': `${e}px`, display: display }}></div> )}

               </div >
               <Loader display={display}/>
          </>
     );
}

export default Start;