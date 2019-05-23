<template>
  <div>
    <div class="single">
      <h3>{{currentPost.acf.session[0].title}}</h3>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
         <div class="container">
            <div class="d-inline-block" v-for="(figure, i) in currentPost.acf.session[0].gallery" :key="i">
              <div class="d-inline-block" v-for="(img, j) in figure.row" :key="j">
               <figure class="d-inline-block">
                  <img class="img" :src="img.src.url" />
               </figure>
              </div>
            </div>
         </div>
         <router-link to="/">
          BACK TO LIST
          </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    // ...mapGetters(['currentPostsMapped']),
    ...mapState(['currentPost'])
  },
  mounted () {
    this.$store.dispatch('GET_POST', this.$route.params.slug)
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
