export interface BlogsResponse {
  title: string;
  blogs: Blog[];
}

export interface Blog {
  title: string;
  cover_image: string;
  type: string;
  slug: string;
  user_created: Usercreated;
  blocks: Block[];
  section: Section;
  publish_date: string;
  other_sections: OtherSection[];
}

interface OtherSection {
  blog_section_id: Section;
}

interface Section {
  title: string;
}

interface Block {
  collection: string;
  item: Item;
}

interface Item {
  id: string;
  user_created: string;
  date_created: string;
  user_updated?: string;
  date_updated?: string;
  content?: string;
  title?: string;
  image?: string;
  alt_text?: any;
}

interface Usercreated {
  first_name: string;
  last_name: string;
}
