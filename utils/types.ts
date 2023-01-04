export interface SEO {}

export interface Menu {
  title: string;
  link: string;
}

export interface BlogType {
  title: string;
  featuredImage?: string;
  content: string;
  created_At?: Date;
  slug?: string;
}
