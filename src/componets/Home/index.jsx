import styled from './style.module.css';
import Menu from '../Menu';
import CardTop from './CardTop';
import CardPs from './CardPs';
import { useState } from 'react';
import CardPc from './CardPc';
import Footer from '../Footer';

function Home() {
     let [cardOpen, setCardOpen] = useState( [false, false, false] )
     let handeltOpen = ( bol ) => setCardOpen( bol );

      
     return (
          <div className={styled.home}>
               <header className={styled.header}>
                    {/* video */}
                    <video className={styled.video} autoPlay={true} loop={true} muted={true}>
                         <source src="./game.mp4" type="video/mp4" />
                    </video>
                    {/* menu */}
                    <Menu />

                    <div className={styled.infor}>
                         <h1 className={styled.title}>Los mejores Juegos del 2023</h1>
                         <p className={styled.description}>Los mejores Juegos de este año</p>
                         <button className={styled.inforBtn}>Ver mas</button>
                    </div>
               </header>
               {/* background */}
               <span className={styled.triangle} data-animate="false"></span>
               <span className={styled.circle} data-animate="false"></span>
               <span className={styled.cross} data-animate="false"></span>
               <span className={styled.square} data-animate="false"></span>

               {/* main */}
               <main className={styled.main}>
                    {/* card top */}
                    <div className={styled.contentTop}>
                         <CardTop img={'godOfWar.png'} title={'God of War Ragnarök'} content={'Únete a Kratos y Atreus en un viaje mítico en busca de respuestas antes de que llegue el Ragnarök'} />
                         <CardTop img={'mortalKombat.png'} title={'Mortal Kombat 11'} content={'Con las nuevas variantes de personaje tendrás un control sin precedentes para personalizar a tus luchadores y hacerlos únicos.'} />
                    </div>
                    {/* games PC */}
                    <h3 className={styled.h3Pc}>PC</h3>
                    <div className={styled.gamesPc}>
                         <CardPc
                              img="https://image.api.playstation.com/cdn/UP0002/CUSA08602_00/zu7qYQztIwUYzw2H8iArIzKhwsfdnDs9.png?w=620&thumb=false"
                              title="Call of Duty WWII" />
                         <CardPc
                              img="https://image.api.playstation.com/vulcan/ap/rnd/202206/0300/E2vZwVaDJbhLZpJo7Q10IyYo.png?w=230&thumb=false"
                              title="Stray" />
                         <CardPc
                              img="https://image.api.playstation.com/vulcan/ap/rnd/202010/2915/kifM3lnke5lExwRd96mIDojQ.png?w=230&thumb=false"
                              title="Horizon Forbidden West" />
                    </div>
                    {/* control */}
                    <div className={styled.control}>
                         <div className={styled.controlInfor}>
                              <h2>Festival del Juego de PlayStation Plus</h2>
                              <p>Del 15 a 24 de febrero, disfruta de grandes novedades en el Catálogo de juegos, Descuentos Dobles en PS Store, desafíos y torneos exclusivos de PS Stars y más</p>
                              <span>ver juegos</span>
                         </div>
                         <img src="control.png" alt="control"  />
                    </div>
                    {/* games ps4 */}
                    <h3 className={styled.h3}>Playstation</h3>
                    <div className={styled.gamesPs4}>
                         <CardPs
                              img="https://image.api.playstation.com/vulcan/ap/rnd/202202/2816/K6mmm89oNII1iI1aqaClO0wh.png?w=440&thumb=false"
                              video="gtaV.mp4"
                              title="GTA V"
                              content="Disfruta de la experiencia en GTA Online, un universo dinámico y en constante evolución para hasta 30 jugadores, donde podrás pasar de ser un estafador callejero a convertirte en el capo de tu propio imperio criminal."
                              handeltOpen={handeltOpen}
                              cardOpen={cardOpen}
                              i={0}
                         />
                         <CardPs
                              img="https://image.api.playstation.com/vulcan/img/rnd/202010/2618/w48z6bzefZPrRcJHc7L8SO66.png?w=440&thumb=false"
                              video="lastofus.mp4"
                              title="The Last of US"
                              content="Cinco años después de aquel peligroso viaje por un Estados Unidos que ha sido azotado por una pandemia, Ellie y Joel echaron raíces en Jackson, Wyoming."
                              handeltOpen={handeltOpen}
                              cardOpen={cardOpen}
                              i={1}

                         />
                         <CardPs
                              img="https://image.api.playstation.com/vulcan/ap/rnd/202207/2509/85p2Dwh5iDhUzRKe40QeNYh3.png?w=440&thumb=false"
                              video="evil4.mp4"
                              title="Resident Evil 4"
                              content="Seis años después de la catástrofe biológica en Raccoon City, el agente Leon S. Kennedy, uno de los supervivientes del desastre, ha sido enviado a rescatar a la hija del presidente, a quien han secuestrado."
                              handeltOpen={handeltOpen}
                              cardOpen={cardOpen}
                              i={2}
                         />
                    </div>
               </main>
             
               <Footer/>
          </div>
     );
}

export default Home;