'use client';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import React, { useEffect } from 'react';

function Intro2() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <section className="page-intro-cerv section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 bord-thin-right rest">
            <div className="row justify-content-end rest">
              <div className="col-md-5 rest">
                <div className="cont">
                  <div className="mb-40">
                    <h2 className="fz-100 numb-font">1.</h2>
                  </div>
                  <h4>Notre mission</h4>
                  <div className="text mt-30">
                    <p>
                    Chez Osmia, notre mission est de propulser vers de nouveaux 
                    sommets les entreprises qui méritent déjà le succès, tout en 
                    accompagnant celles qui aspirent à l&apos;atteindre. Vos objectifs 
                    deviennent les nôtres, et ensemble, nous visons l&apos;excellence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-5 rest">
                <div className="img fit-img bord-thin-left">
                  <img src="/dark/assets/imgs/intro/02.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="row justify-content-end bord-thin-top rest">
              <div className="col-md-5 rest">
                <div className="img fit-img">
                  <img src="/dark/assets/imgs/intro/03.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-5 rest">
                <div className="cont bord-thin-left">
                  <div className="mb-40">
                    <h2 className="fz-100 numb-font">2.</h2>
                  </div>
                  <h4>Notre vision</h4>
                  <div className="text mt-30">
                    <p>
                    Chez Osmia, nous croyons que le succès est à la portée de 
                    chacun, mais il est réservé à ceux qui s&apos;engagent pleinement 
                    dans la voie de l&apos;excellence. Nous nous engageons à promouvoir 
                    et à soutenir ces individus, car leur réussite contribue à 
                    notre propre épanouissement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 rest">
            <div className="bord-thin-top mt-100 position-re">
              <div className="row">
                <div className="col-md-11">
                  <div className="cont">
                    <div className="mb-40">
                      <h2 className="fz-100 numb-font">3.</h2>
                    </div>
                    <h4>Pourquoi nous?</h4>
                    <div className="text mt-30">
                      <p>
                      En nous choisissant, vous optez pour une collaboration étroite avec notre équipe 
                      dévouée, qui mettra tout en œuvre pour référencer votre entreprise de manière optimale. 
                      Grâce à notre analyse approfondie, notre expertise et notre expérience, nous vous offrons 
                      une stratégie de référencement sur mesure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-dots bg-img"
                data-background="/dark/assets/imgs/patterns/dots.png"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro2;
