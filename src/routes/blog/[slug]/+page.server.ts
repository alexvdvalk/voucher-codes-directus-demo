import type { PageServerLoad } from "./$types";
import { client } from "$lib/directus";
import { readItems } from "@directus/sdk";
import { error } from "@sveltejs/kit";
import type { Blog } from "$lib/interfaces";

export const load = (async ({ url, params }) => {
  const { slug } = params;
  const result = await client.request<Blog[]>(
    readItems("blog", {
      fields: [
        {
          user_created: ["first_name", "last_name"],
        },
        {
          section: ["id,title"],
        },
        "publish_date",
        "title",
        "cover_image",
        "section.title",
        {
          blocks: ["collection", "item.*"],
        },
        "*",
        "other_sections.blog_section_id.title",
      ],
      filter: {
        slug: {
          _eq: slug,
        },
        is_live: {
          _eq: true,
        },
      },
    })
  );
  if (result.length === 0) {
    throw error(404, {
      message: "Not found",
    });
  }
  return { blog: result[0] };
}) satisfies PageServerLoad;
