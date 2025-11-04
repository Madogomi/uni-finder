import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import Card from "../universityCards/card";
import style from "./form.module.css";
import Skeleton from "../Skeleton/skeleton";

function Form() {
    const [jambScore, setJambScore] = useState("");
    const [course, setCourse] = useState("");
    const { loading, error, data, fetcher } = useFetch();
    const [ info, filterInfo ] = useState([]);
    const [ search, setSearch ] = useState(false);

    function submitForm(e) {
    e.preventDefault();
    filterInfo([])
    if(!data) {
        return;
    }
    if( data && jambScore && course ) {
       const filtered = data.filter( d => Number(jambScore) >= Number(d.Cut_Off_mark) && course.trim().toLowerCase() == d.Courses.trim().toLowerCase());
       const sortFilter = [...filtered].sort((a, b) => {return b.Cut_Off_mark - a.Cut_Off_mark});
       filterInfo(sortFilter);
    }
    setSearch(true);
  }
  

  useEffect(()=> {
    let active = true;
      fetcher().then(()=> {
        if(!active){
            return;
        }
      })

      return ()=> {
        active = false;
      };
    }, []);

    return (
                <section className={style.main + " max-w-6xl"}>
                    <div className={style.loader}>{ loading && <Skeleton /> }</div>
                    { !loading && !data && error && <p className={style.Error}>{error}</p>}

                    {
                        !loading && data && !error &&

                        <section>
                            <form onSubmit={(e) => submitForm(e)} className={style.form + " shadow-gray-500 shadow-xl"}>
                                <label htmlFor="jambScore">Please Input your JAMB score: </label>
                                <br />
                                <input
                                max={400}
                                min={1}
                                type="number"
                                id="jambScore"
                                required
                                value={jambScore}
                                onChange={e => setJambScore(e.target.value)}
                                />
                                <br />
                                <br />
                                <select
                                required
                                value={course}
                                onChange={e => setCourse(e.target.value)}>
                                    <option
                                    hidden
                                    value="">
                                        Please select a course
                                    </option>
                                    <option
                                    value="medicine and surgery">
                                        Medicine and Surgery
                                    </option>                        
                                    <option
                                    value="nursing">
                                        Nursing
                                    </option>
                                    <option
                                    value="pharmacy">
                                        Pharmacy
                                    </option>
                                    <option
                                    value="architecture">
                                        Architecture
                                    </option>
                                    <option
                                    value="petroleum engineering">
                                        Petroleum Engineering
                                    </option>
                                    <option
                                    value="civil engineering">
                                        Civil Engineering
                                    </option>
                                    <option
                                    value="electrical engineering">
                                        Electrical Engineering
                                    </option>
                                    <option
                                    value="computer science">
                                        Computer Science
                                    </option>
                                    <option
                                    value="accounting">
                                        Accounting
                                    </option>
                                    <option
                                    value="law">
                                        Law
                                    </option>
                                    <option
                                    value="business administration">
                                        Business Administration
                                    </option>
                                    <option
                                    value="mass communication">
                                        Mass Communication
                                    </option>
                                </select>
                                <br />
                                <br />
                                <button type="submit">Find Universities</button>
                            </form>
                            {  info.length > 0 && search && <p className={style.totalNumber}>{ info.length <= 1 ? (<span>{info.length} University will accept you with this jamb score</span>) : (<span>{info.length} Universities will accept you with this jamb score</span>) }</p> }
    
                            <div>
                                { search && error && <p style={ { "color": "red" } }>{error}</p>}
                                { info.length > 0 ? 
                                (<section className={style.cardSection}>
                                    {info.map(e => <Card key={e.ID} id={e.ID} name={e.Universities} location={e.Location} course={e.Courses} cutOffMark={e.Cut_Off_mark} type={e.Type} link={e.Links} />)}
                                 </section>
                                ): 
                                ( !loading && !error && search && 
                                  <h3 className="font-bold text-2xl">No universities found matching "{course}" with a score of {jambScore}.</h3>
                                )}
                            </div>
                        </section>

                    }


                </section>
            );
             
}

export default Form;

