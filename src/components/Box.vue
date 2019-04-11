<template>
  <div class="my-box">ここはbox ....... {{ myName }}</div>
</template>

<script lang="js">
  export default {
    name: 'box-component',
    props: {
      myName: { type: String, default: () => 'xx' }
    },
    components: {},
    computed: {},
    watch: {},
    data () {
    return {}
    },
    created () {},
    methods: {}
  }
</script>

<style lang="scss" scoped>
.my-box {
  border: 1px solid red;
  padding: 2rem;
  width: 180px;
}
</style>