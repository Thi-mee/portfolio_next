import BlogPost from "@/components/blog/BlogPost";
import React from "react";

interface BlogPostProps {
  params: {slug: string}
}
export default async function Page({ params }: BlogPostProps) {
  const slug = (await params).slug;
  console.log(slug);
  return (
    <div>
      <BlogPost />
    </div>
  );
}
