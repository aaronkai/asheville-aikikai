<script>
 	import { urlFor } from '$lib/Image-url'
  export let instructor
</script>

<section class="grid grid=row md:grid-cols-2 my-8">
  <figure>
    <img src={urlFor(instructor.image.asset).width(800).height(1200)} alt="O'Sensei in ceremonial garb" title="{instructor.name}" width="400" height="600" class="w-full max-h-screen" />  
  </figure>

  <div class="p-12 flex flex-col justify-center ">
    <h2 class="font-Roboto text-gray-900 text-4xl  mb-4">Sensei {instructor.name}</h2>
    <h3 class="font-Roboto text-2xl md:text-3xl text-gray-900 ">
      {instructor.rank}
    </h3>
    <p class="mt-4 text-gray-900 text-lg leading-relaxed">{instructor.bio}</p>
  </div>
</section>

