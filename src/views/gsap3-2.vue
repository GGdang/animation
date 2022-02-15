<template>
  <div>
    <example1></example1>
    <example2></example2>
    <example3></example3>
  </div>
</template>
<script>
export default {
  components: {
    example1: () => import('@/components/gsap/example1.vue'),
    example2: () => import('@/components/gsap/example2.vue'),
    example3: () => import('@/components/gsap/example3.vue'),
  },
  data() {
    return {
      basicsBtn: {
        // x:
      },
    }
  },
}
</script>
<style lang="scss"></style>
