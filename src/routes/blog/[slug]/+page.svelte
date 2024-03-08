<script lang="ts">
  import { url } from "$lib/directus";
  import type { PageData } from "./$types";
  import { dev } from "$app/environment";

  export let data: PageData;
</script>

<section class="mb-4 flex flex-col md:mx-auto md:max-w-6xl md:flex-row">
  <article class="relative w-full rounded bg-white p-4 md:mr-10 md:w-9/12">
    <p class="upper font-bold">
      {data.blog.section.title}
      {#each data.blog.other_sections as sec, index}
        {@const lastItem = index < data.blog.other_sections.length - 1}
        {lastItem ? "," : ""}
        {sec.blog_section_id.title}
      {/each}
    </p>
    <section>
      <h1>
        {data.blog.title}
      </h1>
      <p class="font-bold text-gray-500">
        Published on {data.blog.publish_date}
      </p>
    </section>
    <section>
      <img src={`${url}/assets/${data.blog.cover_image}`} />
    </section>
    <section>
      {#each data.blog.blocks as block}
        {#if block.collection === "blog_block_paragraph"}
          {@html block.item.content}
        {:else if block.collection === "blog_bloc_image"}
          <img
            src={`${url}/assets/${block.item.image}`}
            alt={block.item.alt_text}
          />
        {/if}
      {/each}
    </section>
  </article>
  <aside class="mt-4 w-full px-4 md:mt-0 md:w-3/12 md:px-0 bg-white">
    <div>other details</div>
  </aside>
</section>

{#if dev}
  <pre>
    {JSON.stringify(data, null, 2)}
  </pre>
{/if}
