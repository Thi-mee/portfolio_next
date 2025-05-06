"use client";
import React from "react";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  ThumbsUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import RelatedArticles from "./RelatedArticles";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  // This would normally come from your CMS or API
  const post = {
    title: "Building Scalable Cloud Architecture: Lessons from the Trenches",
    date: "2024-03-15",
    readTime: "8 min read",
    author: {
      name: "Timilehin Adenuga",
      image: "/api/placeholder/100/100",
      role: "Full Stack Developer & Cloud Architect",
    },
    tags: ["Cloud", "AWS", "Architecture"],
    content: `
In the ever-evolving landscape of cloud computing, building scalable architectures has become more crucial than ever. Through years of experience and countless projects, I've gathered valuable insights that I'm excited to share with you.

## The Foundation: Understanding Scalability

Before diving into specific implementations, it's essential to understand what we mean by "scalable architecture." In the cloud context, scalability refers to a system's ability to handle growing amounts of work by adding resources to the system.

### Key Principles:

1. **Horizontal vs. Vertical Scaling**
    When designing cloud systems, we often face the choice between scaling up (vertical) or scaling out (horizontal). While both approaches have their merits, horizontal scaling typically offers better resilience and cost-effectiveness in the long run.

2. **Stateless Applications**
    One of the fundamental principles of scalable architecture is maintaining stateless applications. This approach allows for easier scaling and maintenance, as any instance can handle any request without needing to know about previous interactions.

## Implementation Strategies

### Microservices Architecture

Breaking down monolithic applications into microservices has become a standard practice for several reasons:
- Improved scalability of individual components
- Better fault isolation
- Easier deployment and updates
- More efficient resource utilization

### Caching Strategies

Implementing effective caching is crucial for performance:
- Use Redis for session storage and frequent reads
- Implement CDN for static content
- Consider read replicas for database caching

## Monitoring and Optimization

A scalable architecture is only as good as its monitoring system. Key metrics to track:
- Response times
- Error rates
- Resource utilization
- Cost per request

## Conclusion

Building scalable cloud architecture is an iterative process that requires careful planning and continuous optimization. The key is to start with a solid foundation and gradually evolve based on real usage patterns and requirements.
    `,
    coverImage: "/api/placeholder/1200/600",
    relatedPosts: [
      {
        id: 1,
        title: "Why Microservices Matter in Cloud",
        image: "/api/placeholder/400/200",
      },
      {
        id: 2,
        title: "Cost Optimization in Cloud Computing",
        image: "/api/placeholder/400/200",
      },
    ],
  };

  console.log(post.content);
  return (
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <button className="flex items-center gap-2 text-slate-400 hover:text-blue-500 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </button>

        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-100 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-slate-400">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Cover Image */}
        <Image
          src={post.coverImage}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        {/* Author Card */}
        <Card className="bg-slate-800 border-slate-700 mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Image
                src={post.author.image}
                alt={post.author.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-slate-100 font-semibold">
                  {post.author.name}
                </h3>
                <p className="text-slate-400 text-sm">{post.author.role}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Article Actions */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-slate-800 text-slate-300">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <button className="text-slate-400 hover:text-blue-500">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="text-slate-400 hover:text-blue-500">
              <Bookmark className="w-5 h-5" />
            </button>
            <button className="text-slate-400 hover:text-blue-500">
              <ThumbsUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-blue max-w-none blog-article">
          <ReactMarkdown>{post.content}</ReactMarkdown>
          {/* {post.content.split("\n").map((paragraph, index) => (
            <p key={index} className="text-slate-300 leading-relaxed">
              {paragraph}
            </p>
          ))} */}
        </article>

        {/* Related Posts */}
        <RelatedArticles posts={post.relatedPosts} />
        {/* <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-100 mb-8">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <Card key={i} className="bg-slate-800 border-slate-700 overflow-hidden hover:border-blue-500 transition-colors">
                <img
                  src="/api/placeholder/400/200"
                  alt="Related post"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">
                    Related Article Title
                  </h3> */}
      </div>
    </div>
  );
};

export default BlogPost;
