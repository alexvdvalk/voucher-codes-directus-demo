<script lang="ts">
  import type { LayoutData } from "./$types";
  import "../app.postcss";
  import TheNav from "$lib/components/TheNav.svelte";
  import SetTheme from "$lib/components/SetTheme.svelte";

  export let data: LayoutData;
</script>

<SetTheme>
  <TheNav />
  <div class="container mx-auto">
    <slot />
  </div>
</SetTheme>
