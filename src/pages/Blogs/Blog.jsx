import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import BlogBanner from "../../components/Blogs/BlogBanner";
import FiterdBlog from "../../components/Blogs/FiterdBlog";
import RecentBlog from "../../components/Blogs/RecentBlog";

export default function Blog({ width }) {
  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Explore Blogs</title>
        <meta
          name="description"
          content="Get info for all Blogs of 44 resources"
        />
      </Helmet>
      <BlogBanner width={width} />
      <FiterdBlog width={width} />
      <RecentBlog width={width} />
    </div>
  );
}
