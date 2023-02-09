import { useRouter } from "next/router";
import PostContent from "../../components/post/post-details/post-content";

export default function SinglePostPage(){
    const router = useRouter()
    console.log(router);
    return <PostContent/> 
}
