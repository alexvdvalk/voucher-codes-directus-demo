import { client } from "$lib/directus";
import type { Blog } from "$lib/interfaces";
import { readItem, readItems } from "@directus/sdk";

const result = await client.request<Blog[]>(
  readItem("blog", "1776f324-da86-4a10-a74b-7a75d5492195", {
    fields: [
      {
        user_created: ["first_name", "last_name"],
      },
      "section.title",
      "publish_date",
      "title",
      "cover_image",
      "section.title",
      {
        blocks: [
          "collection",
          {
            item: {
              block_image: ["image"],
              block_paragraph: ["content"],
            },
          },
        ],
      },
      "*",
      "other_sections.blog_section_id.title",
    ],
    filter: {
      is_live: {
        _eq: true,
      },
    },
  })
);

console.dir(result, { depth: null });
