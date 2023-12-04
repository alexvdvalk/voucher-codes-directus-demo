<script lang="ts">
  import BlogCard from "$lib/components/BlogCard.svelte";
  import type { PageData } from "./$types";
  import { dev } from "$app/environment";

  export let data: PageData;
</script>

{#each data.result as blogSection}
  <section>
    <header class="flex items-center">
      <div class="w-1/2 md:w-4/5">
        <h2 class="md:pl-1/4 pl-2 text-base md:text-center md:text-2xl">
          {blogSection.title}
        </h2>
      </div>
      <a
        href={`/blog/${blogSection.title}`}
        class="w-1/2 pr-2 text-right text-xs font-bold leading-tight text-green-700 dark:text-liquorice md:w-1/5 md:text-base"
      >
        View All {blogSection.title}</a
      >
    </header>
    <ul
      class="mb-4 w-full max-w-6xl overflow-auto whitespace-nowrap lg:mx-auto lg:flex lg:flex-wrap lg:justify-center lg:overflow-hidden lg:whitespace-normal"
    >
      {#each blogSection.blogs as card}
        <BlogCard {card} />
      {/each}
    </ul>
  </section>
{/each}

{#if dev}
  <pre>{JSON.stringify(data, null, 2)}</pre>
{/if}
