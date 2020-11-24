<template>
  <transition 
      enter-active-class="transition ease-out duration-900"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-400"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
  >  
  <div class="space-y-4">

      <FormInput 
        v-model="work.title" 
        name="title"
        label="Titulo de la Plaza"
        placeholder="Carrera, curso, postgrado"
        @change="$emit( 'update', work )"
      />

      <div class="grid grid-cols-2 gap-2">
        <FormInput 
          v-model="work.school" 
          name="school"
          label="Centro Laboral"
          placeholder="Universidad, Instituto, Escuela ..."
          @change="$emit( 'update', work )"
        />

        <FormInput 
          v-model="work.city" 
          name="city"
          label="Ciudad"
          @change="$emit( 'update', work )"
        />
        
      </div>

      <FormInput 
        v-model="work.period" 
        name="period"
        label="Fecha de inicio y graduación"
        placeholder="Carrera, curso, postgrado"
        @change="$emit( 'update', work )"
      />

      <!-- <FlatPickr v-model="period"></FlatPickr> -->
      <div class="text-right ">
        <button 
          @click.prevent="$emit( 'remove' )" 
          class="ml-auto text-gray-500 hover:text-red-600"
        >
          Eliminar
        </button>
      </div>

  </div>
  </transition>   
</template>

<script>
// import FlatPickr from 'vue-flatpickr-component';
// import 'flatpickr/dist/flatpickr.css';
  
export default {
  props: [ 'item' ],
  // components: { FlatPickr },
  data() {
    return {
      period: null,
      work: this.item,
    }
  },
};
</script>