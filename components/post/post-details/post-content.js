import PostHeader from "./post-header"
import classes from './post-content.module.css'
import ReactMarkDown from 'react-markdown'

    const DUMMY_POST =   {
        slug: "getting_started_with_nextjs",
        title: "Getting started with nextjs",
        image: "getting-started-nextjs.png",
        date: "2023-02-08",
        content: '# this is first Post'
      }

export default function PostContent(){
const imagePath  = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`


    return <article className={classes.content}>
        <PostHeader title={DUMMY_POST.title} image={imagePath}/>
        <ReactMarkDown>
        {DUMMY_POST.content}
        </ReactMarkDown>
        
    </article>
}