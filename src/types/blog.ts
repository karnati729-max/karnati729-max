export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  cover_image: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}
