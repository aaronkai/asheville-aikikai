<script>
 	import { urlFor } from '$lib/image-url'
  export let instructor
</script>

<section class="grid grid=row gap-y-4 ">
  <h2 class="font-Roboto text-4xl text-gray-900 text-center">Sensei {instructor.name}</h2>
    <h3 class="font-Roboto text-2xl md:text-3xl text-gray-900 text-center">
      {instructor.rank}
    </h3>
  
  <figure>
    <img src={urlFor(instructor.image.asset).width(400).height(600)} alt="O'Sensei in ceremonial garb" title="{instructor.name}" width="400" height="600" class="w-full my-4" />
  
    <figcaption class="text-sm text-gray-500">{instructor.name}</figcaption>
  </figure>
  <p>{instructor.bio}</p>
</section>