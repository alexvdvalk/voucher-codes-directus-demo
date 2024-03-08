import { client } from "$lib/directus";
import { readItems } from "@directus/sdk";
import type { PageServerLoad } from "./$types";
import type { BlogsResponse } from "$lib/interfaces";

export const load = (async () => {
  const result = await client.request<BlogsResponse[]>(
    readItems("blog_section", {
      fields: [
        "title",
        "slug",
        "blogs.*",
        "blogs.user_created.first_name",
        "blogs.user_created.last_name",
        "blogs.title",
        "blogs.cover_image",
        "blogs.type,blogs.slug",
        "blogs.blocks.item.*",
        "blogs.blocks.collection",
        "blogs.section.title",
        "blogs.publish_date",
      ],
      filter: {
        blogs: {
          is_live: {
            _eq: true,
          },
        },
        "count(blogs)": {
          _gt: 0,
        },
      },
    })
  );
  return { result };
}) satisfies PageServerLoad;
