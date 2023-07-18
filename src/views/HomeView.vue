<script setup lang="ts">
</script>


<template>

  <article>

    <h2 class="u bold center">Ejemplo de uso de Vue Router + Pinia</h2>
  
    <p class="mt-1 max-w-30">
      Como pueden ver en este ejemplo, cuando pasamos de una vista a otra
      con <a href="https://router.vuejs.org/" target="_blank">Vue Router</a> toda la información
      del estado local del componente se pierde 
      ya que el componente vuelve a ser creado en cada navegación.
      <br><br>
      Para evitar perder información entre una vista y otra
      debemos usar una herramienta de administración de estado global para Vue
      como <a href="https://vuex.vuejs.org/" target="_blank">Vuex</a> 
      o, preferentemente, <a href="https://pinia.vuejs.org/" target="_blank">Pinia</a>.
      <br><br>
      De esta forma, no sólo podemos persistir la información entre una vista y otra
      sino también compartir el estado global de la aplicación entre todos los componentes.
      <br><br>
      Esto es muy útil para compartir información entre componentes no emparentados
      sin necesidad de tener que recurrir a largas cadenas de <i>props</i> y <i>emits</i>
      que pueden ser propensas a errores, además de que obligan a tener toda la lógica
      de la aplicación concentrada en el componente ancestro (en general, en <i>App.vue</i>).
      <br><br> 
      Por ejemplo, en un e-commerce, esto se puede usar para compartir 
      la información del carrito de compras 
      entre distintos componentes,
      mientras que la lógica del carrito puede estar dentro de una <i>store</i>
      creada con Pinia y ser reutilizada en cualquier componente.
    </p>

  </article>
</template>



