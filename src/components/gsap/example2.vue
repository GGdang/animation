<template>
  <div class="example-2 my-14">
    <div class="mb-5">
      <div class="box green"></div>
      <div class="box orange"></div>
      <div class="box grey"></div>
      <div class="box green"></div>
      <div class="box orange"></div>
      <div class="box grey"></div>
      <div class="box green"></div>
      <div class="box orange"></div>
      <div class="box grey"></div>
    </div>
    <customBtn @action="animation2" text="animation 2"></customBtn>
  </div>
</template>
<script>
import randomNumber from '@/mixins/randomNumber'
import gsap from 'gsap'
export default {
  mixins: [randomNumber],
  components: {
    customBtn: () => import('@/components/customBtn.vue'),
  },
  methods: {
    // 相同的 class name 可以在屬性用 function 來跑迴圈
    animation2() {
      let yMove = 50
      let yMove2 = 80
      let a2 = gsap.timeline()
      a2.fromTo(
        '.box',
        {
          y: (i) => {
            return i % 2 === 1 ? -yMove2 : yMove2
          },
        },
        {
          duration: 0.5,
          stagger: 0.1,
          y: (i) => {
            return i % 2 === 1 ? -yMove : yMove
          },
          rotation: (i) => {
            return i % 2 === 0 ? -this.getRandom(180) : this.getRandom(180)
          },
        },
      )
        .to(
          '.green',
          {
            backgroundColor: 'red',
            duration: 0.5,
          },
          '-=1',
        )
        .to('.box', {
          stagger: 0.1,
          delay: 1,
          duration: 0.5,
          y: 0,
          rotation: 0,
        })
        .to(
          '.green',
          {
            backgroundColor: 'green',
            duration: 0.5,
          },
          '-=1',
        )
    },
  },
}
</script>
<style lang="scss">
.example-2 {
  .box {
    display: inline-block;
    margin-right: 5px;
    width: 50px;
    height: 50px;
  }
  .green {
    background-color: green;
  }
  .orange {
    background-color: orange;
  }
  .grey {
    background-color: grey;
  }
}
</style>
