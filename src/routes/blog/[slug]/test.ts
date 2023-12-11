import { client } from "$lib/directus";
import type { Blog } from "$lib/interfaces";
import {
  compareContentVersion,
  readContentVersions,
  readItem,
  readItems,
} from "@directus/sdk";

const result = await client.request(
  readContentVersions({
    filter: {
      collection: { _eq: "blog" },
      item: {
        _eq: "1776f324-da86-4a10-a74b-7a75d5492195",
      },
    },
  })
);

// console.dir(result, { depth: null });

const compare = await client.request(
  compareContentVersion("d2961548-bf50-4d8e-a4f1-00d4f0947d20")
);
console.dir(compare, { depth: null });

const r = await client.request<Blog[]>(
  readItem("blog", "1776f324-da86-4a10-a74b-7a75d5492195", {
    version: "demo",
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
              block_paragraph: ["id"],
            },
          },
        ],
      },
      "*",
      "other_sections.blog_section_id.title",
    ],
  })
);

// console.dir(r, { depth: null });
