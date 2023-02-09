import Link from "next/link";
import classes from "./post-item.module.css"
import Image from "next/image";
export default function PostItem(porps){
    const { title, image, excerpt, date, slug } = porps.post

    const formattedDate = new Date(date).toDateString("en-US",{
        day:'numeric',
        month:"long",
        year:'numeric'
    })


    const imagePath = `/images/posts/${slug}/${image}`
    const linkPath = `/posts/${slug}`

    return <li className={classes.post}>
        <Link href={linkPath}>
        <div className={classes.image} >
            <Image src={imagePath} alt={title} width={300} height={200} layout="responsive"/>
        </div>
        <div>
            <h3>{title}</h3>
            <time> {formattedDate} </time>
            <p>{ excerpt}</p>
        </div>
        </Link>
    </li>
}