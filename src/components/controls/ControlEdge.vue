<template>
  <div
    class="control-edge"
    :style="{
      width: width + 'px',
      height: height + 'px',
      transform: `translate(${x - 81}px, ${y - 1}px)`
    }"
    ></div>
</template>

<script>
export default {
  name: 'ControlEdge',
  props: {
    width: Number,
    height: Number,
    x: Number,
    y: Number,
  },
};
</script>

<style lang="scss" scoped>
.control-edge {
  position: absolute;
  top: 0;
  left: 0;

  background: $color-primary;
}
</style>
