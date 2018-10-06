import React, {Fragment} from 'react'
import '../sass/autumn.scss'
import Hero from './Hero'
import CalltoAction from './CalltoAction'
import Works from './Works'
import Contact from './Contact'

const HeroAutumn = () => (
    <Fragment>
    <header>
        <Hero />
    </header>
    <main>
        <CalltoAction />
        <Works />
        <Contact />
    </main>
    </Fragment>
)

export default HeroAutumn