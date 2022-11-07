import Link from "next/link";
import Head from "next/head";



const About = () => {
    return ( 
        <><Head>
            <title>contact</title>

        </Head><div style={{ textAlign: 'center' }}>
                <h1>CONTACT INFO</h1>
                <p>WHATSAPP</p>
                <Link style={{ color: 'blueviolet' }} href="/">0827283256</Link>
                <p>LINKEDIN</p>
                <Link style={{ color: 'blueviolet' }} href="https://www.linkedin.com/in/phandavhudzi-rotshidzwa-453017224">LINKEDIN</Link>
                <p>FACEBOOK</p>
                <Link style={{ color: 'blueviolet' }} href="https://www.facebook.com/phandavhudzi.rotondwa">FACEBOOK</Link>
                <p>GITHUB</p>
                <Link style={{ color: 'blueviolet' }} href="https://github.com/ROTSHIDZWAPANDA">GITHUB</Link>
                <p style={{ color: 'blueviolet' }}>EMAIL : rotshi06@gmail.com</p>




            </div></>
     );
}
 
export default About;