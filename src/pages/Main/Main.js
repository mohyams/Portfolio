import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar , Landing, About, Skills, Education, Experience, Contacts, Projects, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name}</title>
            </Helmet>
            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Experience />
            <Projects />
            <Skills />
            <Achievement />
            <Contacts />
        </div>
    )
}

export default Main
