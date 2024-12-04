"use client";
import React, { useState } from "react";
import { Calendar, Clock, Tag, ChevronRight, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-100 mb-4">
            Insights & Perspectives
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Exploring software development, cloud architecture, and technical
            education through in-depth articles and practical guides.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg 
                         text-slate-100 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Tags Filter */}
            <div className="flex flex-wrap gap-3">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedTag === tag
                      ? "bg-blue-500 text-white"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}>
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.find((post) => post.featured) && (
          <Card className="mb-12 bg-slate-800 border-slate-700 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              <img
                src={filteredPosts.find((post) => post.featured).coverImage}
                alt="Featured post"
                className="h-full w-full object-cover"
              />
              <CardContent className="p-8">
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(
                      filteredPosts.find((post) => post.featured).date
                    ).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {filteredPosts.find((post) => post.featured).readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">
                  {filteredPosts.find((post) => post.featured).title}
                </h2>
                <p className="text-slate-300 mb-6">
                  {filteredPosts.find((post) => post.featured).excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {filteredPosts
                      .find((post) => post.featured)
                      .tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm rounded-full bg-slate-700 text-slate-300">
                          {tag}
                        </span>
                      ))}
                  </div>
                  <button className="flex items-center gap-2 text-blue-500 hover:text-blue-400">
                    Read More
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </div>
          </Card>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts
            .filter((post) => !post.featured)
            .map((post) => (
              <Card
                key={post.id}
                className="bg-slate-800 border-slate-700 overflow-hidden hover:border-blue-500 transition-colors">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-slate-700 text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center gap-2 text-blue-500 hover:text-blue-400">
                      Read More
                      <ChevronRight className="w-4 h-4" />
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
