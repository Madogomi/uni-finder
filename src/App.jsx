import { useEffect } from 'react'
import style from './App.module.css'
import Footer from './footerSection/footer'
import Header from './headerSection/header'
import AOS from 'aos'
import 'aos/dist/aos.css'
import About from './AboutSection/about'
import Homepage from './Homepage/Homepage'
import { Routes, Route } from "react-router"
import NotFound from './PageNotFound/NotFound.jsx'
import Contact from './contactPage/contact.jsx'



function App() {

  useEffect(()=> {
    AOS.init()
  }, [])

  return (
    <div className={style.main + ' relative min-h-screen pb-16'}>
        <Header />
        <main className='flex flex-col items-center mb-10'>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      <Footer />
    </div>
  )
}

export default App


/*
 Complete the link section in the google sheets database
 and make sure all the links have a "https://" in front of them
*/


/* Add a contact me page or something similar 
 so that users can tell me what courses or schools they want.
 */ 