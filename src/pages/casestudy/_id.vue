<template>
  <div class="container" key="news">
    <h1>導入事例</h1>
    <div class="case-title" v-html="title"></div>
    <div v-html="txt"></div>
  </div>
</template>

<script lang="js">
import axios from 'axios'
import { axiosConfig } from '~/utils/axiosConfig.js'
import https from 'https'

export default {
  name: 'casestudy-page',
  asyncData({ $axios, route }) {
    const id = route.params.id
    let host = ''

    if (!process.server) {
      host = window.location.origin
    }

    const url = host + '/wp-json/wp/v2/posts/' + id

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
h1 { 
  margin-top: 1.6rem;
  margin-bottom: 1.4rem;
}

.case-title {
  color: #a0a0a0;
}

>>> h4 {
  margin-bottom: 2rem;
}

.container {
  min-height: 500px;
}
</style>