<template>
  <div>
    <div class="svg1">
      <div class="example__ball"></div>
      <h1 class="example__title">Taiwan No.1!</h1>
    </div>
    <button @click="animateCircle()">Build!</button>
  </div>
</template>
<script>
import gsap from "gsap";
export default {
  methods: {
    animateCircle() {
      let tl = gsap.timeline();
      tl.set(".example__title", {
        scale: 0.2,
        autoAlpha: 0,
      })
        // 將擁有 class name .example__ball 的元素
        // scale 縮小成 0.2
        .to(".example__ball", {
          rotationX: 0,
          rotationY: 0,
          scale: 0.2,
        })
        // tween 1: 在 1 秒內旋轉 360 度，並翻轉 180 度
        // 接著回復 scale 成原始大小，中間以 Elastic.easeIn 這個 ease function 來控制動畫速度
        .to(".example__ball", 1, {
          rotationX: 360,
          rotationY: 180,
          scale: 1,
          ease: "elastic.easeIn.config(2)",
        })
        // tween 2: 跟第一個補間動畫雷同，只是這次是控制文字，並在 0.5 內完成
        .to(".example__title", 0.5, {
          autoAlpha: 1,
          scale: 1,
          ease: "back.easeOut.config(4)",
        })
        .to(".example__ball", 0, {
          rotationX: 0,
          rotationY: 0,
        });
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

.example {
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: $bg-color;
}

.example__ball {
  height: 300px;
  width: 300px;
  position: relative;
  border-radius: 50%;
  background-color: $main-color;
  box-shadow: 5px 2px 60px $shadow-color;
}

.example__title {
  text-align: center;
  position: absolute;
  top: 45%;
  transform: translateY(-45%);
  color: lighten($main-color, 50);
  text-shadow: 3px 3px 3px $shadow-color;
}

.example button {
  position: fixed;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  color: #fff;
}
</style>