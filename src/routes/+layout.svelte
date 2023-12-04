<script lang="ts">
  import type { LayoutData } from "./$types";
  import "../app.postcss";
  import TheNav from "$lib/components/TheNav.svelte";

  export let data: LayoutData;
</script>

<TheNav />
<div class="container mx-auto">
  <slot />
</div>
