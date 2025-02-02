import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Footer from "@/components/dark/modern-agency/Footer";
import Lines from "@/components/dark/common/Lines";
import ProgressScroll from "@/components/dark/common/ProgressScroll";
import Cursor from "@/components/dark/common/cusor";
import LoadingScreen from "@/components/dark/common/loader";
import Navbar from "@/components/dark/creative-agency/Navbar";
import Script from "next/script";
import Testimonials from "@/components/dark/FAQS/Testimonials";
import Header from "@/components/dark/services/Header";
import Services from "@/components/dark/services/Services";
import Marquee from "@/components/dark/services/Marquee";
// import Price from "@/components/dark/services/Price";
import Process from "@/components/dark/services/Process";
// import Blog from "@/components/dark/services/Blog";

export const metadata = {
  title: "Osmia.",
  icons: {
    icon: "/dark/assets/imgs/favicon.ico",
    shortcut: "/dark/assets/imgs/favicon.ico",
    other: generateStylesheetObject([
      "/dark/assets/css/plugins.css",
      "/dark/assets/css/satoshi.css",
      "/dark/assets/css/style.css",
      "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
    ]),
  },
};

export default function ServicesPage() {
  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />

      <div id="smooth-wrapper">
        <Navbar />
        <div id="smooth-content">
          <main className="main-bg">
            <Header />
            <Services />
            <Marquee />
            {/* <Price /> */}
            <Testimonials />
            <Process />
            {/* <Blog /> */}
          </main>
          <Footer />
        </div>
      </div>

      <Script
        src="/dark/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/dark/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />
      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/plugins.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/countdown.js"
      ></Script>

      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/gsap.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/splitting.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script>

      {/* <Script src="/dark/assets/js/smoother-script.js" strategy="lazyOnload" />/ */}

      <Script src="/dark/assets/js/scripts.js"></Script>
    </body>
  );
}
