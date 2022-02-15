<template>
  <div>
    <div class="svg1">
      <div>
        <hamburger ref="hamburger"></hamburger>
      </div>
      <button @click="animation1()">animation 1</button>
    </div>

    <div class="test-2">
      <div>
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
      <button @click="animation2()">animation 2</button>
    </div>
  </div>
</template>
<script>
import gsap from 'gsap'
import hamburger from '@/assets/icon-hamburger.svg'
export default {
  components: {
    hamburger,
  },
  data() {
    return {
      basicsBtn: {
        // x:
      },
    }
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
    getRandom(x) {
      return (Math.floor(Math.random() * x) + 1) / 10
    },
    // 相同的 class name 可以在屬性用 function 來跑迴圈
    animation2() {
      var yMove = 50
      let a2 = gsap.timeline()
      a2.to('.box', {
        duration: 0.5,
        y: (i) => {
          // console.log('i, elem, boxes', i, elem, boxes)
          return i % 2 === 1 ? -yMove : yMove
        },
        rotation: (i) => {
          return i % 2 === 0 ? -this.getRandom(180) : this.getRandom(180)
        },
      })
      a2.to('.box', {
        delay: 1,
        duration: 0.5,
        y: 0,
        rotation: 0,
      })
    },
  },
}
</script>
<style lang="scss">
$main-color: #1a528b;
$bg-color: beige;
$shadow-color: rgba(0, 0, 0, 0.5);
.svg1 {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
}
button {
  width: 200px;
  height: 50px;
  margin-top: 40px;
}
.test-2 {
  margin-top: 80px;
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
