import PostGrid from "../post/posts-grid"
import classes from "./featured-post.module.css"

export default function FeaturedPost(props){
return <section className={classes.latest} >
<h2>Featured Posts</h2>
<PostGrid posts={props.posts} />
</section> 

}