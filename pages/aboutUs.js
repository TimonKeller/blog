import React from 'react';
import { Layout } from '../components'

const aboutUs = () => {
    return (
        <div div className='container mx-auto mb-8'>
            <div className='lg:divide-y-2 lg:divide-slate-700'>
                <div>
                    <h1 className='text-text text-6xl text-center pb-10'>
                    About us
                    </h1>
                    <div className='flex flex-row justify-center mb-36'>
                        <p className='text-text text-xl text-center px-12'>
                            Wir sind Timon und Nathalie und zusammen sind wir (Blogname).
                            <br/>
                            Beide sind berufstätig und in unserer Freizeit viel unterwegs. 
                            So testen wir beispielsweise gerne neue Restaurants aus oder erkunden andere Länder und machen neue Erfahrungen. 
                            Im Juni 2022 haben wir uns dazu entschieden, unsere Reisen, Erfahrungen und Erinnerungen in Form eines Blogs zu teilen. Erfahrungsberichte oder Empfehlungen sind unserer Meinung nach immer etwas Wertvolles. Wir hoffen, dass wir Euch mit unseren Posts ein wenig inspirieren können und freuen uns, wenn wir vielleicht sogar ein Paar Rückmeldungen von Euch in unserem Postfach finden. :) 
                            <br/>
                            <br/>
                            Viel Spass beim Lesen!
                        </p>
                    </div>
                    <div className='px-12 grid mb-36 lg:px-0 lg:grid-cols-12 lg:gap-x-8 '>
                        <img className='self-center mb-8 lg:mb-0 lg:col-span-6' src='nathalie.jpeg'></img>
                        <span className='lg:col-span-6 self-center'> 
                            <p className='md opacity-60 mb-2'>TEXT/BILDER</p>
                            <h1 className='text-3xl mb-6'>Nathalie</h1>
                            Ich heisse Nathalie, bin 18 Jahre alt und liebe es zu Reisen, neue Kulturen kennenzulernen oder coole Restaurants zu besuchen. Städtetrips sind für mich genauso spannend wie atemberaubende Orte ausserhalb des Trubels zu entdecken. Nach jeder Reise kehre ich mit neuen Erinnerungen und Erfahrungen zurück in meine Heimat, die Schweiz, wo ich geboren und aufgewachsen bin. Timon und ich sind ein eingespieltes Team, welches sich freut, interessante Blogposts für Euch erstellen zu dürfen. 
                        </span>
                    </div>
                    <div className='px-12 grid  lg:px-0  lg:grid-cols-12 lg:gap-x-8'>
                        <span className='mb-8 lg:mb-8 lg:col-span-6 self-center  order-1 md:order-2'> 
                            <p className='md opacity-60 mb-2'>WEBSEITE</p>
                            <h1 className='text-3xl mb-6'>Timon</h1>
                            Ich heisse Timon, bin 23 Jahre alt und befinde mich momentan im letzten Semester meines iCompetence Studiums. Während den Semesterferien habe ich die Zeit genutzt, um neue Orte zu bereisen und Foodspots zu entdecken. Dank meines Studiums und unseren gemeinsamen Leidenschaften sind wir auf die Idee gekommen, diesen Blog für Euch zu erstellen und sind mit Freude und Passion dabei.
                        </span>
                        <img className='self-center lg:col-span-6 mb-8 lg:mb-0' src='timon.jpeg'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutUs

aboutUs.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
}