import style from "./card.module.css";

function Card({ id, name, location, course, cutOffMark, type, link, dataAosDelay }) {
    return ( 
             <div
               className={style.card + " shadow-xl/30 shadow-black m-auto mt-[1.8rem] mb-[1.8rem]"}
               key={id}
             >
               <section className="moreInfo">
                 <h3 className="text-xl font-bold text-center">{name}</h3>
                 <hr />
                 <p>Course: {course}</p>
                 <p>Cut Off Mark: {cutOffMark}</p>
                 <p>Type: {type}</p>
                 <p>Location: {location}</p><hr />
               </section>
               <a href={link}><button>Visit Site</button></a>
             </div>
            );
}

export default Card;