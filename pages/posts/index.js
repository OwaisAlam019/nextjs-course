import AllPosts from "../../components/post/all-posts";

const DUMMY_POSTS = [
    {
      slug: "getting_started_with_nextjs",
      title: "Getting started with nextjs",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJs is a React framework for production -  It makes building fullstack react application easier",
      date: "2023-02-08",
    },
    {
      slug: "getting_started_with_nextjs2",
      title: "Getting started with nextjs",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJs is a React framework for production -  It makes building fullstack react application easier",
      date: "2023-02-08",
    },
    {
      slug: "getting_started_with_nextjs3",
      title: "Getting started with nextjs",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJs is a React framework for production -  It makes building fullstack react application easier",
      date: "2023-02-08",
    },
  ];
export default function AllPostPage(){
return <AllPosts posts={DUMMY_POSTS}/>

}
