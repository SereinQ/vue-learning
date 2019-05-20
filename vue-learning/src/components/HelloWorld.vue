<template>
   <div class="start">
      <div
         v-for="(car, index) in bmw1"
         :key="index"
         >
         <span :index="index">
         {{car.acf.session[0].title}}
         </span>
         <div class="container">
            <div class="d-inline-block" v-for="(figure, i) in car.acf.session[0].gallery"
               :key="i">
               <figure  class="d-inline-block"  v-for="(img, j) in figure.row[0]"
                  :key="j"
                  >
                  <img class="img" :src="img.url" />
               </figure>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {

    }
  },

  computed: {
    ...mapGetters(['bmw1'])
  },

  created () {
  },

  mounted () {
    this.$store.dispatch('GET_ALL_CARS')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.d-inline-block{
  display: inline-block;
}

img{
  max-width: 400px;
}
</style>
