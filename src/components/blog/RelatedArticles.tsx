import React from "react";
import Image from "next/image";

interface RelatedPost {
  id: number;
  title: string;
  image: string;
}

interface RelatedArticlesProps {
  posts: RelatedPost[];
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ posts }) => (
  <section className="mt-12">
    <h2 className="text-2xl font-bold text-slate-100 mb-6">Related Articles</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-slate-800 rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={500}
            height={192}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-slate-100 text-lg font-semibold">
              {post.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default RelatedArticles;
