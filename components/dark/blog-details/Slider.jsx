'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import loadBackgroudImages from '@/common/loadBackgroudImages';
function Slider() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    // Cleanup function
    return () => tl.kill();
  }, []);
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div className="header blog-header section-padding pb-0">
      <div className="container mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="caption">
              <div className="sub-title fz-12">
                <a href="#0">
                  <span>SEO Optimisation ,</span>
                </a>
                <a href="#0">
                  <span>Google Ads</span>
                </a>
              </div>
              <h1 className="fz-55 mt-30">
              Bienvenue dans notre section blog : conseils d&apos;experts pour booster votre entreprise et votre présence en ligne.
              </h1>
            </div>
            <div className="info d-flex mt-40 align-items-center">
              <div className="left-info">
                <div className="d-flex align-items-center">
                  <div className="author-info">
                    <div className="d-flex align-items-center">
                      <a href="#0" className="circle-60">
                        <img
                          src="/dark/assets/imgs/blog/author.png"
                          alt=""
                          className="circle-img"
                        />
                      </a>
                      <a href="#0" className="ml-20">
                        <span className="opacity-7">Auteur</span>
                        <h6 className="fz-16">Osmia.</h6>
                      </a>
                    </div>
                  </div>
                  <div className="date ml-50">
                    <a href="#0">
                      <h6 className="fz-16">May 12, 2024</h6>
                    </a>
                  </div>
                </div>
              </div>
              <div className="right-info ml-auto">
                <div>
                  <span className="pe-7s-comment fz-18 mr-10"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="background bg-img mt-80"
        data-background="/dark/assets/imgs/blog/blogb1.jpg"
      ></div>
    </div>
  );
}

export default Slider;
