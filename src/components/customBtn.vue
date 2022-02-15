<template>
  <button :class="btnClass" @click="$emit('action')">
    <span :class="textClass">
      {{ text }}
    </span>
  </button>
</template>
<script>
export default {
  props: {
    btnClass: {
      type: String,
      default: 'bg-green-400 rounded-lg',
    },
    textClass: {
      type: String,
      default: 'text-white font-bold',
    },
    text: {
      type: String,
      default: 'animation',
    },
  },
}
</script>
<style lang="scss">
button {
  width: 200px;
  height: 50px;
}
</style>
