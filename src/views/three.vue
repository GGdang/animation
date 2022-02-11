<template>
  <div id="three" ref="three"></div>
</template>
<script>
import * as THREE from "three";
// import gsap from "gsap";
export default {
  data() {
    return {
      canvas: null,
      scene: null,
      cube: null,
      camera: null,
      renderer: null,
    };
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
      this.renderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.$refs.three.appendChild(this.renderer.domElement);
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: "red" });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
    this.camera.position.z = 5;
    this.animate();
  },
};
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
canvas {
  width: 100%;
  height: 100%;
}
</style>