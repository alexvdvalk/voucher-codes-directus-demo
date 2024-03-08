<script lang="ts">
  import { browser } from "$app/environment";
  import { client } from "$lib/directus";
  import { readItem } from "@directus/sdk";
  import { onMount } from "svelte";

  //   client.

  let loaded = false;
  onMount(() => {
    client.request(readItem("blog_site_settings", "1")).then((r: any) => {
      if (!browser) return;
      document.documentElement.style.setProperty(`--color_main`, r.color_main);
      document.documentElement.style.setProperty(
        `--button_color`,
        r.button_color
      );
      document.documentElement.style.setProperty(
        `--button_text_color`,
        r.button_text_color
      );
      document.documentElement.style.setProperty(`--color_main`, r.color_main);
      document.documentElement.style.setProperty(
        `--color_background`,
        r.color_background
      );

      loaded = true;
      //color-mix
    });
  });
</script>

{#if loaded}
  <slot />
{/if}
