import style from "./skeleton.module.css"

function Skeleton() {
    return ( <div className={style.contain}>
                 <div className={style.container + " shadow-gray-500 shadow-xl"}>
                    <div className={style.label}></div>
                    <div className={style.input}></div><br />
                    <div className={style.select}></div><br />
                    <div className={style.button}></div>
                 </div>
             </div> );
}

export default Skeleton;