import { useState, useEffect } from 'react';
import { Calendar, ArrowLeft, Tag, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import type { BlogPost } from '@/types/blog';
import { SectionHeader } from '@/components/SectionHeader';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      const { data, error: fetchError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (fetchError) {
        setError('Unable to load blog posts. Please try again later.');
      } else if (data) {
        setPosts(data as BlogPost[]);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const renderContent = (content: string) => {
    const paragraphs = content.split('\n\n');
    return paragraphs.map((para, i) => {
      const trimmed = para.trim();
      if (!trimmed) return null;

      if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        const text = trimmed.slice(2, -2);
        return (
          <h4 key={i} className="text-lg font-bold text-white mt-6 mb-3 first:mt-0">
            {text}
          </h4>
        );
      }

      return (
        <p key={i} className="text-slate-400 leading-relaxed mb-4">
          {trimmed}
        </p>
      );
    });
  };

  // Full post view
  if (selectedPost) {
    return (
      <section id="blog" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSelectedPost(null)}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </button>

          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-semibold mb-4">
              {selectedPost.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
              {selectedPost.title}
            </h2>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(selectedPost.created_at)}
              </span>
            </div>
          </div>

          <div className="h-px bg-slate-700/50 my-8" />

          <div className="prose prose-invert max-w-none">
            {renderContent(selectedPost.content)}
          </div>

          {selectedPost.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-slate-700/50">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-slate-500" />
                {selectedPost.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-slate-800 text-slate-400 text-xs font-medium border border-slate-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  // Blog list view
  return (
    <section id="blog" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Thoughts & Insights"
          title="Blog"
          subtitle="My writings on data science, web development, and the learning journey."
        />

        <div className="mt-16">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="w-8 h-8 text-cyan-400 animate-spin mb-4" />
              <p className="text-slate-500">Loading posts...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-20">
              <AlertCircle className="w-8 h-8 text-rose-400 mb-4" />
              <p className="text-slate-400">{error}</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="group bg-slate-800/50 rounded-2xl p-7 border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 cursor-pointer flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.created_at)}
                    </span>
                    <span className="text-cyan-400 font-medium group-hover:underline">
                      Read more →
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
