<template>
  <div class="my-10 mx-auto max-w-screen-xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 xl:my-32">
    <div class="text-center">
      <h2 class="text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-4xl sm:leading-none md:text-5xl">
        Crea, descarga y comparte 
        <br>
        tu <span class="text-red-700">Curriculum Vitae</span>
      </h2>
<!--       <p class="leading-7 mt-3 max-w-md mx-auto text-base text-gray-700 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Rápido, sencillo y gratis 
      </p> -->
      <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div class="rounded-md shadow">
          <a href="#components" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-semibold rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
            Comenzar
          </a>
        </div>
        <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <a href="https://github.com/tightenco/novapackages" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-green-600 bg-white hover:text-green-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
            View example app
          </a>
        </div>
      </div>
    </div>
  </div>
  
  </template>

<script>

export default {
  props: [ 'cv' ],
};
</script>