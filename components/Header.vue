<template>
  
<header class="sticky  top-0 z-10 border-b border-gray-200 bg-white mb-10">
  <div class="flex items-center justify-between px-2 py-2 sm:px-6  lg:px-8">
    <div class="md:flex items-center">
      <a href="/" class="block text-red-700 flex items-center">
        <svg class="h-12 w-12 fill-current" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;" viewBox="0 0 1000 1000" x="0px" y="0px" fill-rule="evenodd" clip-rule="evenodd"><g><path class="fil0" d="M538 528c-10,-9 -23,-15 -38,-15 -14,0 -27,5 -37,14l-1 1c-9,10 -15,23 -15,38 0,25 13,41 30,48 7,3 15,4 23,4 8,0 16,-1 23,-4 17,-7 30,-23 30,-48 0,-15 -6,-28 -15,-38l0 0z"/><path class="fil0" d="M415 735l0 83 170 0 0 -83c0,-19 -8,-37 -21,-50 -13,-13 -31,-21 -51,-21l-26 0c-20,0 -38,8 -51,21 -13,13 -21,31 -21,50z"/><path class="fil0" d="M373 818l0 -83c0,-31 13,-59 34,-80l0 0c7,-8 16,-14 26,-20 -17,-16 -29,-39 -29,-69 0,-26 11,-50 28,-68l2 -1c17,-16 40,-27 66,-27 26,0 50,11 68,28l0 0c17,18 28,42 28,68 0,30 -12,53 -29,69 10,6 19,12 26,20l0 0c21,21 34,49 34,80l0 83 93 0 -24 -174c-1,-6 1,-13 6,-17l168 -176 -240 -44c-6,-1 -12,-5 -15,-11l-115 -214 -115 214c-4,7 -10,11 -16,11l-239 44 168 176c5,5 7,11 6,17l-24 174 93 0z"/></g><text x="0" y="1015" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by fibo junior</text><text x="0" y="1020" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>
        Curriculum
      </a>
    </div>

    <div class="flex text-sm space-x-2">

        <!-- <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg class="-ml-1 mr-2 h-5 w-5" x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          Guardar
        </button> -->

        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Vista Previa
        </button>

        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Descargar
        </button>

        <BtnCreate :cv="cv"/>         

    </div>
      </div>

</header>
</template>

<script>

export default {
  props: [ 'cv' ],
  data() {
    return {
    }
  },
};
</script>