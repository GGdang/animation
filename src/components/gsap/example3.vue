<template>
  <div class="example-3">
    <h3 class="">path scrolling animation</h3>
    <examplePath></examplePath>
  </div>
</template>
<script>
// import gsap from 'gsap'
export default {
  components: {
    examplePath: () => import('@/assets/path.svg'),
  },
  methods: {},
}
</script>
<style lang="scss">
.example-3 {
  background-color: black;
}
.line {
  background-color: red;
}
</style>
