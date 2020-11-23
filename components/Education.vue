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
        v-model="education.title" 
        name="title"
        label="Titulo"
        placeholder="Carrera, curso, postgrado"
        @change="$emit( 'update', education )"
      />
      <div class="grid grid-cols-2 gap-2">
        <FormInput 
          v-model="education.school" 
          name="school"
          label="Centro de Estudios"
          placeholder="Universidad, Instituto, Escuela ..."
          @change="$emit( 'update', education )"
        />

        <FormInput 
          v-model="education.city" 
          name="city"
          label="Ciudad"
          @change="$emit( 'update', education )"
        />
        
      </div>

      <FormInput 
        v-model="education.period" 
        name="period"
        label="Fecha de inicio y graduación"
        placeholder="Carrera, curso, postgrado"
        @change="$emit( 'update', education )"
      />
      <div class="text-right">
        <Btn @click.native.prevent="$emit( 'remove' )" class="ml-auto">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>        
          Eliminar
        </Btn>
      </div>

  </div>
  </transition>   
</template>

<script>
export default {
  props: [ 'item' ],
  data() {
    return {
      education: this.item,
    }
  },
};
</script>