<template>
  <div>

    <div class="min-h-screen">
      <Header :cv="cv" @onSave="saved"/>
      <div class="w-full md:w-6/12 mx-auto p-4">
        <Hero/>

          <div class="mt-5 md:mt-0 ">
            <form 
              name="cv"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="cv" />
              <div class="space-y-8">

                <Box>
                    <Title label="Personal" />
                    <FormInput 
                      label="Nombre Completo" 
                      name="fullname"
                      v-model="cv.fullname" 
                    />            
                    <div class="grid grid-cols-2 gap-2">
                      <FormInput 
                        label="Correo Electronico" 
                        name="email"
                        v-model="cv.email" 
                        type="email"
                      />
                      <FormInput 
                        label="Teléfonos" 
                        name="email"
                        v-model="cv.phones" 
                      />
                    </div>
                </Box>

                <Box>
                  <Title label="Educación / Formación" />
                  <div v-if="cv.educations.length" class="space-y-10">
                      <Education 
                        v-for="(item, index) in cv.educations" :key="item.id"
                        v-bind:item="item" 
                        @remove="cv.educations.splice(index,1)"
                        @update="cv.educations.splice(index,0,skill)"
                      />
                  </div> 
                  <Btn @click.native.prevent="cv.educations.push({id: Date.now()})">
                    Nueva Formación
                  </Btn>                  
                </Box>

                <Box>
                  <Title label="Experiencia Laboral" />
                  <div v-if="cv.works.length" class="space-y-10">
                      <Work 
                        v-for="(item, index) in cv.works" :key="item.id"
                        v-bind:item="item" 
                        @remove="cv.works.splice(index,1)"
                        @update="cv.works.splice(index,0,skill)"
                      />
                  </div> 
                  <Btn 
                    @click.native.prevent="cv.works.push({id: Date.now()})">
                    Nuevo Trabajo
                  </Btn>                  
                </Box>

                <Box>
                  <Title label="Habilidades" />
                  <div v-if="cv.skills.length" class="space-y-3">
                      <Skill 
                        v-for="(item, index) in cv.skills" :key="item.id"
                        v-bind:skill-item="item" 
                        @remove="cv.skills.splice(index,1)"
                        @update="cv.skills.splice(index,0,skill)"
                      />
                  </div> 
                  <Btn @click.native.prevent="cv.skills.push({id: Date.now()})">
                    Nueva Habilidad
                  </Btn>
                </Box>

                <Box>
                  <Title label="Intereses" />
                  <div v-if="cv.interests.length" class="space-y-3">
                      <Interest 
                        v-for="(item, index) in cv.interests" :key="item.id"
                        v-bind:item="item" 
                        @remove="cv.interests.splice(index,1)"
                        @update="cv.interests.splice(index,0,skill)"
                      />
                  </div> 
                  <button 
                    class="text-blue-700 hover"
                    @click.prevent="cv.interests.push({id: Date.now()})">
                    Nuevo Interes
                  </button>
                </Box>

              </div>


            </form>
          </div>

      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      id: '',
      cv: { 
        fullname: '',
        email: '' ,
        phones: '' ,
        educations: [],
        works: [],
        interests: [],
        skills: [],
      },
    }
  },
  created(){
    if (this.cv.educations.length === 0) {
      this.cv.educations.push({id: Date.now()})
    }
    if (this.cv.works.length === 0) {
      this.cv.works.push({id: Date.now()})
    }
  },
  methods: {
    saved(cv) {
      console.log(cv)
    }
  }
};
</script>

