import { Fragment } from "react";
import FeaturedPost from "../components/home-page/featured-post";
import Hero from "../components/home-page/hero";

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

export default function HomePage() {
  return (
    <Fragment>
      <Hero></Hero>
      <FeaturedPost posts={DUMMY_POSTS} />
    </Fragment>
  );
}
