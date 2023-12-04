<script lang="ts">
  import type { Blog } from "$lib/interfaces";
  import { url } from "$lib/directus";

  export let card: Blog;
</script>

<li
  class="mt-4 my-4 inline-block w-full whitespace-normal px-2 md:w-1/3 lg:w-1/4 transition-transform hover:scale-105"
>
  <a
    href={`/blog/${card.slug}`}
    class="w-full cursor-pointer hover:no-underline focus:no-underline active:no-underline"
    data-qa="el:articleCard"
    ><article
      class="ease-ease-in-out flex overflow-hidden rounded bg-white shadow transition-transform duration-75 lg:hover:scale-105 flex-col"
    >
      <img
        decoding="async"
        src={`${url}assets/${card.cover_image}`}
        loading="lazy"
        alt="How to make a Christmas Eve box on a budget "
        class="h-64 object-cover w-full rounded-t md:h-48"
      />
      <div class="relative p-4 text-left">
        <p
          class="inline-block rounded bg-blue-400 px-2 text-xs font-normal uppercase leading-relaxed text-white"
        >
          {card.section.title}
        </p>
        <!---->
        <div>
          <h2
            class="py-1 text-base leading-6 line-clamp-2 h-12 overflow-hidden break-words"
          >
            {card.title}
          </h2>

          <!---->
        </div>
        <div class="mt-2 flex justify-between">
          <p class="pt-2 text-xs font-normal text-gray-700">
            {card.user_created.first_name}
            {card.user_created.last_name}
          </p>
          <div class="mt-2 flex h-4 flex-row items-center">
            <svg
              class="mx-1 h-4 w-4 fill-current text-gray-700"
              alt="Calendar icon"
              data-qa="el:calendarIcon"
              role="presentation"
              focusable="false"
              tabindex="-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              ><title>Calendar icon</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22 5.5v13c0 2-1.5 3.5-3.3 3.5H5.3A3.4 3.4 0 012 18.6V5.5c0-1 .8-1.8 1.7-1.8h1.6v-1c0-.3.3-.7.7-.7.5 0 .8.4.8.8v.9h2.4v-1c0-.3.4-.7.8-.7s.8.4.8.8v.9h2.4v-1c0-.3.4-.7.8-.7s.8.4.8.8v.9h2.4v-1c0-.3.3-.7.8-.7.4 0 .7.4.7.8v.9h1.6c1 0 1.7.8 1.7 1.8zm-18.5 2v11c0 1.1.8 2 1.8 2h13.4c1 0 1.8-.9 1.8-2v-11h-17zm12.3 7.4c-.2 0-.3.1-.3.3v2.6c0 .2.1.3.3.3h2.5c.2 0 .3-.1.3-.3v-2.6c0-.2-.1-.3-.3-.3h-2.5zm-5.4.3c0-.2.2-.3.4-.3h2.4c.2 0 .4.1.4.3v2.6c0 .2-.2.3-.4.3h-2.4a.3.3 0 01-.4-.3v-2.6zM5.7 15c-.2 0-.3.1-.3.3v2.6c0 .2.1.3.3.3h2.5c.2 0 .3-.1.3-.3v-2.6c0-.2-.1-.3-.3-.3H5.7zm9.8-4.8c0-.2.1-.3.3-.3h2.5c.2 0 .3.1.3.3v2.6c0 .2-.1.3-.3.3h-2.5a.3.3 0 01-.3-.3V10zm-4.7-.3c-.2 0-.4.1-.4.3v2.6c0 .2.2.3.4.3h2.4c.2 0 .4-.1.4-.3V10c0-.2-.2-.3-.4-.3h-2.4zm-5.4.3c0-.2.1-.3.3-.3h2.5c.2 0 .3.1.3.3v2.6c0 .2-.1.3-.3.3H5.7a.3.3 0 01-.3-.3V10z"
              ></path>
            </svg>
            <p
              class="text-xs font-normal text-gray-700"
              data-qa="el:articleDateCreated"
            >
              {card.publish_date}
            </p>
          </div>
        </div>
      </div>
    </article></a
  >
</li>
<!-- <pre>{JSON.stringify(card, null, 2)}</pre> -->
