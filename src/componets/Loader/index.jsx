import { useEffect } from 'react';
import styles from './style.module.css';

// Animation
const randomInterval = ( () => {
     const random = ( min, max ) => Math.random() * ( max - min ) + min;

     return ( callback, min, max ) => {
          const time = {
               start: performance.now(),
               total: random( min, max )
          };

          const tick = now => {
               if ( time.total <= now - time.start ) {
                    time.start = now;
                    time.total = random( min, max );
                    callback();
               }
               requestAnimationFrame( tick );
          };

          requestAnimationFrame( tick );
     };
} )();

function Loader({display}) {
     // --> Animation para los span
     const allElements = document.querySelectorAll( 'span' );

     const getRandomElement = ( elements ) => {
          return elements[Math.floor( Math.random() * elements.length )];
     }
     const animate = ( elements ) => {
          const element = getRandomElement( elements );
          element.setAttribute( 'data-animate', true );
          setTimeout( () => {
               element.removeAttribute( 'data-animate' );
          }, 1200 );
     }

     useEffect( () => {
          randomInterval( () => animate( allElements ), 500, 500 );
     } );

     return (

          <div className={styles.contentLoader} style={{display:display}}>
               <span className={styles.triangle} data-animate="false"></span>
               <span className={styles.circle} data-animate="false"></span>
               <span className={styles.cross} data-animate="false"></span>
               <span className={styles.square} data-animate="false"></span>
          </div>
     );
}

export default Loader;