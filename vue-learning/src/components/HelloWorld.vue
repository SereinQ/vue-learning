<template>
   <div class="start">
      <div
         v-for="(car, index) in cars"
         :key="index"
         >
         <span class="d-block">
          Title: {{car.acf.session[0].title}}
         </span>
         <span class="d-block">
           ID: {{car.id}}
         </span>
          <span class="d-block">
           Slug: {{car.acf.session[0].slug}}
         </span>
         <div class="container">
            <div class="d-inline-block" v-for="(figure, i) in car.acf.session[0].gallery" :key="i">
              <div class="d-inline-block" v-for="(img, j) in figure.row" :key="j">
              <router-link :to="pageLink/car.id/car.acf.session[0].slug">
               <figure class="d-inline-block">
                  <img class="img" :src="img.src.url" />
               </figure>
              </router-link>
              </div>
            </div>
         </div>
         {{car}}
      </div>
   </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  data () {
    return {
      pageLink: 'http://tomekolszowski.com/'
    }
  },

  computed: {
    ...mapGetters(['carsMapped']),
    ...mapState(['cars'])
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
