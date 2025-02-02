import React from 'react';
import data from '@/data/services.json';

function Services() {
  return (
    <section className="services-boxs section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Notre spécialité</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 text-u ls1">
            Ce que nous <span className="fw-200">Offre</span>
            </h2>
          </div>
        </div>
        <div className="row pt-30">
          {data.map((item, i) => (
            <div key={i} className="col-lg-3 col-md-6 items">
              <div className="item-box bg md-mb50">
                <div className="icon mb-40 opacity-5">
                  <img src={item.img} alt="" />
                </div>
                <h5 className="mb-15 text-u">
                  {item.title.split(' ')[0]} <br /> {item.title.split(' ')[1]} <br/> {item.title.split(' ')[2]}
                </h5>
                <p>{item.desc}</p>
                <p style={{fontSize: '42px', fontWeight: 'bold', color: '#00adb5'}}>{item.price}</p>
                <a href={item.link} className="rmore mt-30">
                  <span className="sub-title">En savoir plus</span>
                  <img
                    src="/dark/assets/imgs/arrow-right.png"
                    alt=""
                    className="icon-img-20 ml-5"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
