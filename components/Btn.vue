<template>
  <button 
	  class="inline-flex justify-center py-2 px-4 border-2 border-transparent  leading-5 font-medium rounded-md text-gray-500 bg-gray-200 hover:bg-gray-300 hover:text-gray-700 focus:outline-none focus:border-gray-200 focus:shadow-outline-gray active:bg-gray-300 transition duration-150 ease-in-out">
    <slot></slot>
  </button>	
</template>

<script>
export default {
	props: [ 'color' ],
};
</script>