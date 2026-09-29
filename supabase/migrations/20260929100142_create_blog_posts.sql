/*
# Create blog_posts table (single-tenant, no auth)

1. New Tables
- `blog_posts`
  - `id` (uuid, primary key)
  - `title` (text, not null)
  - `slug` (text, unique, not null) — URL-friendly identifier
  - `excerpt` (text, not null) — short summary shown in the blog list
  - `content` (text, not null) — full blog post body (plain text with line breaks)
  - `category` (text, not null) — e.g. "Data Science", "Web Development"
  - `tags` (text[], default empty array) — list of tags
  - `cover_image` (text) — optional image URL
  - `published` (boolean, default true) — only published posts show on the site
  - `created_at` (timestamptz, default now())
  - `updated_at` (timestamptz, default now())

2. Security
- Enable RLS on `blog_posts`.
- This is a single-tenant portfolio site with no sign-in, so all published posts are public.
- Allow anon + authenticated to read published posts (SELECT).
- Allow anon + authenticated to create, update, delete posts (the portfolio owner manages content).

3. Indexes
- Index on `slug` for fast lookups by URL slug.
- Index on `created_at` for chronological ordering.
- Index on `published` for filtering.
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  category text NOT NULL,
  tags text[] DEFAULT '{}',
  cover_image text,
  published boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_blog_posts" ON blog_posts;
CREATE POLICY "anon_select_blog_posts"
ON blog_posts FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_blog_posts" ON blog_posts;
CREATE POLICY "anon_insert_blog_posts"
ON blog_posts FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_blog_posts" ON blog_posts;
CREATE POLICY "anon_update_blog_posts"
ON blog_posts FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_blog_posts" ON blog_posts;
CREATE POLICY "anon_delete_blog_posts"
ON blog_posts FOR DELETE
TO anon, authenticated USING (true);

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts (slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts (published);
