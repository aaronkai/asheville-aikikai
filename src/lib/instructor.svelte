<script>
 	import { urlFor } from '$lib/image-url'
  export let instructor
</script>

<section class="grid grid=row gap-y-2 ">
  <h2 class="font-Roboto text-3xl md:text-4xl text-gray-900 text-center">Sensei {instructor.name},
    <span class="font-Roboto text-2xl md:text-3xl text-gray-900">
      {instructor.rank}
    </span>
  </h2>
  <figure>
    <img src={urlFor(instructor.image.asset).width(400).height(600)} alt="O'Sensei in ceremonial garb" title="{instructor.name}" width="400" height="600"/>
  
    <figcaption class="text-sm text-gray-500">{instructor.name}</figcaption>
  </figure>
  <p>{instructor.bio}</p>
</section>