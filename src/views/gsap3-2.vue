<template>
  <div>
    <div class="svg1">
      <hamburger ref="hamburger"></hamburger>
    </div>
    <button @click="animateCircle()">Build!</button>
  </div>
</template>
<script>
import gsap from "gsap";
import hamburger from "@/assets/icon-hamburger.svg";
export default {
  components: {
    hamburger,
  },
  data() {
    return {};
  },
  methods: {
    animateCircle() {
      let tl = gsap.timeline();
      tl.set(".svg-hamburger", {
        scale: 0.2,
      }).to(".svg-hamburger", {
        duration: 1,
        scale: 1,
        ease: "elastic.easeIn",
      });
      document.querySelectorAll(".cls-2").forEach((item) => {
        tl.to(item, {
          scale: this.getRandom(20),
          ease: "circ.inOut",
        }).to(item, {
          scale: 1,
        });
      });
    },
    getRandom(x) {
      return (Math.floor(Math.random() * x) + 1) / 10;
    },
  },
};
</script>
<style lang="scss">
$main-color: #1a528b;
$bg-color: beige;
$shadow-color: rgba(0, 0, 0, 0.5);
.svg1 {
  display: flex;
  justify-content: center;
  position: relative;
}
button {
  width: 200px;
  height: 50px;
  margin-top: 40px;
}
</style>