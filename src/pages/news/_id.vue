<template>
  <div class="container" key="news">
    <h3>{{ title }}</h3>
    <div v-html="txt"></div>
  </div>
</template>

<script lang="js">
import axios from 'axios'
import { axiosConfig } from '~/utils/axiosConfig.js'
import https from 'https'

export default {
  name: 'news-page',
  asyncData({ $axios, route }) {
    const instance = axios.create({
      httpsAgent: new https.Agent({  
        rejectUnauthorized: false
      })
    })

    const id = route.params.id
    const url = process.env.HOST + '/wp-json/wp/v2/posts/' + id
    return instance.get(url, axiosConfig).then(res => {
      return { title: res.data.title.rendered, txt: res.data.content.rendered }
    }).catch(error => {
      console.log('asyncData error', error)
    })
  },
  components: {},
  computed: {},
  watch: {},
  data () {
    return {
      title: '',
      txt: ''
    }
  },
  created () {
  },
  methods: {}
}
</script>

<style lang="css" scoped>
h3 { 
  margin-top: 1.6rem;
  margin-bottom: 1.4rem;
}
</style>