<script>
  import { urlFor } from '$lib/Image-url'
  export let image;
  export let text;
  export let cta = false;
  let visible = false;

  function handleClick() {
    visible = !visible;
  }

</script>

<!-- You can't filter a background to grayscale without getting everything in the element, but you can fake it with blendmodes: https://css-tricks.com/apply-a-filter-to-a-background-image/ -->
<div
style="background-image: linear-gradient(black, black),
url('{urlFor(image).width(2400).height(1600)}');   background-blend-mode: saturation;
"
class=" w-full h-vh50 bg-cover bg-center flex items-end  justify-center border-b-4 border-gray-900 ">

{#if text}
<div class="bg-brutalred  bg-opacity-70 border-t-2 border-gray-900 w-full grid grid-rows justify-items-center">
  {#if !visible}
    <h1 class="font-Montserrat text-4xl md:text-5xl text-gray-50 p-8 text-center uppercase " >{text}</h1>
  {/if}
     {#if cta}
      {#if !visible}
      <button
        class="bg-black bg-opacity-90  text-white text-2xl font-Roboto py-2 px-8 border border-red-700 rounded mb-4 transition duration-300 ease-in-out transform  hover:scale-105"
        on:click={handleClick}
      >
        New Member Special
      </button>
      {/if}
  
      {#if visible}
      <div class="p-6 flex flex-col bg-black bg-opacity-95 rounded my-4 border-2 border-gray-50">
        <div class="flex flex-row justify-between">
          <h2 class="inline font-Roboto text-3xl text-white flex-initial">$90 includes:</h2>
          <button
            on:click={() => (visible = false)}
            class="bg-brutalred px-2 m-1 hover:bg-red-700 rounded text-2xl self-end text-gray-900 "
            >&times;
          </button>
        </div>
        <ul class="ml-4  list-disc">
          <li class="font-Roboto text-xl text-gray-100 my-2">
            2 months of unlimited training in Aikido
          </li>
          <li class="font-Roboto text-xl text-gray-100 mb-2">
            Registration with International Aikido Federation
          </li>
          <li class="font-Roboto text-xl text-gray-100">Gi (Uniform)</li>
        </ul>
      </div>
      {/if}
    {/if}

</div>
{/if}


</div>