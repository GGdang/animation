<template>
  <div class="example-1">
    <div class="mb-10">
      <hamburger ref="hamburger"></hamburger>
    </div>
    <customBtn @action="animation1" text="animation 1"></customBtn>
  </div>
</template>
<script>
import randomNumber from '@/mixins/randomNumber'
import gsap from 'gsap'
export default {
  mixins: [randomNumber],
  components: {
    hamburger: () => import('@/assets/icon-hamburger.svg'),
    customBtn: () => import('@/components/customBtn.vue'),
  },
  methods: {
    animation1() {
      let tl = gsap.timeline()
      tl.set('.svg-hamburger', {
        scale: 0.2,
      }).to('.svg-hamburger', {
        duration: 1,
        scale: 1,
        ease: 'elastic.easeIn',
      })
      document.querySelectorAll('.cls-2').forEach((item) => {
        tl.to(item, {
          scale: this.getRandom(20),
          ease: 'circ.inOut',
        }).to(item, {
          scale: 1,
        })
      })
    },
  },
}
</script>
<style lang="scss">
$main-color: #1a528b;
$bg-color: beige;
$shadow-color: rgba(0, 0, 0, 0.5);
.example-1 {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
}
</style>
