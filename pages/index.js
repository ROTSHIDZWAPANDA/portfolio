
import Link from 'next/link'
import Head from 'next/head'



export default function Home() {
  return (
    <><Head>
      <title>HomePage</title>

    </Head><nav>
    

        <div className='head'>

          <h1>WELCOME TO MY PERSONAL PORTFOLIO</h1>
        </div>
        <h2>ABOUT ME</h2>

        <p>My name is Phandavhudzi Rotshidzwa, and my portfolio is a representation of Static application using Next.js on 
           why I want to be a developer at SovTech. I am a final year student doing Computer science at university of Limpopo.</p>

        <h5>Projects I did so far as a Final year student at University of Limpopo</h5>

        <p>My groupmates and I did a project named Pageant Locater. The app was for models and pageant organizers
           to be able to be able to interact in a simple and safer way as nowadays models are scammed by fake pageants. 
           Tools we used to code this app was Android studio and KOTLIN. In addition, XML was used for Front-end.</p>
    
           <p>Secondly, I joined first Limpopo Hackathon competition that was hosted by TUT. We had an idea of creating an app which a patient walks with a full medical record. Target market was public hospitals.
           Materials that were used to create the app is JAVA and we did prototype  for the app with FIGMA AWS AMPLIFIER.
           The competition occurred for full 3 days without sleeping. Throughout the whole competition I learned a lot as I was doing something I love, which is software development.
          </p>
        <h2>HOBBIES</h2>

        <p>chess url: <Link href={'https://lichess.org/@/Rotshidzwa'}>https://lichess.org/@/Rotshidzwa</Link></p>

        <h2>THE REASON WHY I WANT TO BE A DEVELOPER AT SOVTECH</h2>


        <p> The reason why I want to be a software developer at SovTech is because I have worked hard to develop skills that are relevant to this industry and because this
            type of work brings me personal satisfaction.I've gained a lot of practical experience throughout my studying at University of UL and am hoping to learn more 
           at SovTech as it is one of the biggest company. I've become intimately familiar with several coding languages and participated in coding challenge.</p>
        

        <p> Thank you</p>




      </nav></>
  )
}
