<template>
   <div class="start">
      <div
         v-for="(car, index) in sessions"
         :key="index"
         >
         <span class="d-block">
          Title: {{car.title}}
         </span>
         <span class="d-block">
           ID: {{car.id}}
         </span>
         <div class="container">
            <div class="d-inline-block" v-for="(figure, i) in car.gallery" :key="i">
              <div class="d-inline-block" v-for="(img, j) in figure.row" :key="j">
              <router-link :to="{ name: 'single', params: { slug: `${car.id}` } }">
               <figure class="d-inline-block">
                  <img class="img" :src="img.src.url" />
               </figure>
              </router-link>
              </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {

  computed: {
    ...mapGetters(['sessions']),
    ...mapState(['cars'])
  },

  async mounted () {
    await this.$store.dispatch('GET_ALL_CARS')
    setTimeout(() => {
      console.log(this.sessions[0].title)
      console.log(this.sessions, 'sessions')
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.d-inline-block{
  display: inline-block;
}

.d-block{
  display: block;
}

.figure-count{
  width:5px;
  height: 5px;
  background-color: black;
}

.img-count{
  width:5px;
  height: 5px;
  background-color: red;
}

figure{
  margin: 10px;
}

img{
  max-width: 200px;
}
</style>
