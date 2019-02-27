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
    const id = route.params.id
    const host = process.server ? process.env.HOST : ''
    console.log('process.server', process.server)
    console.log('host', host)
    const url = host + '/wp-json/wp/v2/posts/' + id
    // const url = '/wp-json/wp/v2/posts/' + id
    return $axios.get(url, axiosConfig).then(res => {
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