import classes from './hero.module.css'
import Image from 'next/image'

export default function Hero(){
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/site/main1.jpg"
             alt="image"
             width={500}
             height={500}
             />
        </div>
        <h1>Hey i am Owais</h1>
        <p>I am a frontend developer.</p>
    </section>
}
