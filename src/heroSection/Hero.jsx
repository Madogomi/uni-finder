import style from "./Hero.module.css";

function Hero() {
    return ( <>
               <section className={style.hero + " max-w-4xl min-h-30 shadow-2xl"}
                data-aos="zoom-in-right"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
               >
                 <h2 className="font-bold text-xl mb-4">Find Universities That Match Your Jamb Score and Course - Instantly.</h2>
                 <p>Enter your JAMB score and preferred course to discover schools where you actually stand a chance of admission.</p>
               </section>
             </> );
}

export default Hero;