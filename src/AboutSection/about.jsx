function About() {
    return ( <div className="max-w-4xl mx-auto px-4">
               <h2 className="mt-8 text-center font-extrabold text-2xl m-4"
                data-aos="zoom-in-right"
                data-aos-duration="600"
                data-aos-easing="ease-in-out">About Us</h2>
               <hr className="ml-4 mr-4"/>
               <br />

               <article>
                  <section className="m-4">
                   <h3 className="font-bold text-xl underline">Mission Statement</h3>
                   <br />
                   <p>Unifinder helps Nigerian students discover universities that accept their JAMB scores for their chosen courses — saving time, stress, and guesswork.</p>
                   <br />
                   <hr />
                   <br />
                  </section>
   
   
                  <section className="m-4">
                   <h3 className="font-bold text-xl underline">The Problem</h3>
                   <p>Every year, thousands of students miss out on admission because they apply to schools with unrealistic cut-off marks or don't know their real options. Unifinder changes that.</p>
                   <br />
                   <hr />
                   <br />
                  </section>
   
                  <section className="m-4">
                   <h3 className="font-bold text-xl underline">The Vision</h3>
                   <p>Our goal is to make higher education information transparent and accessible to every Nigerian student.</p>
                   <br />
                   <hr />
                   <br />
                  </section>
                  </article>
             </div> );
}

export default About;