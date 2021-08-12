<script>
 	import { urlFor } from '$lib/Image-url';
  export let i 
  export let block
  export let toggled
  console.log({block})
  console.log({i})
</script>

<!-- <p>Hello World</p> -->

<article class="max-w-6xl mx-auto">
    <section class="grid md:grid-cols-2 " >
      <div  class="p-12 flex flex-col justify-center {i % 2 === 1 ? 'bg-red-800':''} ">
        <h2 class="text-4xl text-center mb-4 {i % 2 === 1 ? 'text-gray-50':'text-gray-900'}">{block[1]}</h2>
        {#each block[2] as element}
        {#if element.style == "normal"}
          {#each element.children as child}
            <p class=" text-lg leading-relaxed pt-4 {i % 2 === 1 ? 'text-gray-50':'text-gray-900'}">{child.text}</p>
          {/each}
        {/if}
      {/each}
      </div>

      <img
      src={urlFor(block[0].asset).width(800).height(1200)}
      alt="martial arts practice"
      width="800"
      height="1200"
      class="h-full max-h-screen {i % 2 === 1 ? 'sm:order-first':''}"
      />
    </section>
</article>