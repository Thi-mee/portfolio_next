import BlogList from "@/components/blog/BlogList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Umbrella Blog",
  description: "Read my latest blog posts on web development, design, and more.",
};

export default function Blog() {
  return (
    <div>
      <BlogList />
    </div>
  );
}
