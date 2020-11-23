<template>
  <transition 
      enter-active-class="transition ease-out duration-900"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-400"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
  >  
  <div class="flex items-center space-x-2">

      <FormInput 
        v-model="interest.title" 
        name="title"
        placeholder="Tema de su interes"
        @change="$emit( 'update', interest )"
      />

      <Btn @click.native.prevent="$emit( 'remove' )">
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>        
      </Btn>

  </div>
  </transition>   
</template>

<script>

export default {
  props: [ 'item' ],
  data() {
    return {
      interest: this.item,
    }
  },
};
</script>