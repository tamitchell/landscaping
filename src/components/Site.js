import React from 'react'
import Hero from './Hero'
import CalltoAction from './CalltoAction'
import Works from './Works'
import Contact from './Contact'
import Footer from './Footer'


const Site = (props) => (
    <div>
    <header>
        <Hero title={props.title} />
    </header>
    <main>
        <CalltoAction img={props.img}/>
        <Works />
        <Contact />
    </main>
    <footer>
        <Footer />
    </footer>
    </div>
)

export default Site