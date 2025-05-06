"use client";
import React, { useState } from "react";
import { Calendar, Clock, ChevronRight, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const BlogList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Cloud Architecture: Lessons from the Trenches",
      excerpt:
        "Discover key strategies and best practices for designing cloud infrastructures that can handle massive growth while maintaining performance and reliability.",
      date: "2024-03-15",
      readTime: "8 min read",
      tags: ["Cloud", "AWS", "Architecture"],
      coverImage: "/api/placeholder/800/400",
      featured: true,
    },
    {
      id: 2,
      title: "The Evolution of Full-Stack Development in 2024",
      excerpt:
        "Exploring the changing landscape of full-stack development, from new frameworks to emerging best practices and tools that are shaping the future.",
      date: "2024-03-10",
      readTime: "6 min read",
      tags: ["Development", "JavaScript", "Trends"],
      coverImage: "/api/placeholder/800/400",
    },
    {
      id: 3,
      title: "DevOps Automation: A Practical Guide to CI/CD",
      excerpt:
        "A comprehensive guide to implementing continuous integration and deployment pipelines that streamline your development workflow.",
      date: "2024-03-05",
      readTime: "10 min read",
      tags: ["DevOps", "Automation", "CI/CD"],
      coverImage: "/api/placeholder/800/400",
    },
  ];

  const allTags = ["all", ...new Set(blogPosts.flatMap((post) => post.tags))];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === "all" || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-slate-100">
            Insights & Perspectives
          </h1>
          <p className="mx-auto max-w-2xl text-slate-400">
            Exploring software development, cloud architecture, and technical
            education through in-depth articles and practical guides.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Search */}
            <div className="relative">
              <Search className="absolute top-1/2 left-4 -translate-y-1/2 transform text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 py-3 pr-4 pl-12 text-slate-100 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Tags Filter */}
            <div className="flex flex-wrap gap-3">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`rounded-full px-4 py-2 transition-colors ${
                    selectedTag === tag
                      ? "bg-blue-500 text-white"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.find((post) => post.featured) && (
          <Card className="mb-12 overflow-hidden border-slate-700 bg-slate-800">
            <div className="grid gap-6 md:grid-cols-2">
              <Image
                src={filteredPosts.find((post) => post.featured)!.coverImage}
                alt="Featured post"
                className="h-full w-full object-cover"
              />
              <CardContent className="p-8">
                <div className="mb-4 flex items-center gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(
                      filteredPosts.find((post) => post.featured)!.date,
                    ).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {filteredPosts.find((post) => post.featured)!.readTime}
                  </span>
                </div>
                <h2 className="mb-4 text-2xl font-bold text-slate-100">
                  {filteredPosts.find((post) => post.featured)!.title}
                </h2>
                <p className="mb-6 text-slate-300">
                  {filteredPosts.find((post) => post.featured)!.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {filteredPosts
                      .find((post) => post.featured)!
                      .tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-700 px-3 py-1 text-sm text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                  <button className="flex items-center gap-2 text-blue-500 hover:text-blue-400">
                    Read More
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </div>
          </Card>
        )}

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts
            .filter((post) => !post.featured)
            .map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden border-slate-700 bg-slate-800 transition-colors hover:border-blue-500"
              >
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-100">
                    {post.title}
                  </h3>
                  <p className="mb-4 line-clamp-3 text-slate-400">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-700 px-2 py-1 text-xs text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center gap-2 text-blue-500 hover:text-blue-400">
                      Read More
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
