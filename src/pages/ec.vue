<template>
  <div>
    <div class="xxx">jjiijiji</div>

    <box :my-name="exName"></box>

    <div class="x" @click="change">ボタン</div>

  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import { axiosConfig } from '~/utils/axiosConfig.js'
import { Promise } from 'q'
import https from 'https'
import Box from '~/components/Box.vue'

export default {
  name: 'ec-da-yo',
  components: {
    Box
  },
  data() {
    return {
      exName: '7777777'
    }
  },
  methods: {
    change() {
      this.exName = 'ttttttttt'
      console.log('this. q', this.$route)
    }
  }
}
</script>

<style lang="scss" scoped>
.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: .3rem;
}

@media (min-width: 576px) {
  .jumbotron {
    padding: 4rem 2rem 4rem;
  }
}

h2 {
  padding-bottom: 1.2rem;
}

.bar {
  color: green;
}
</style>
