<template>
  <div class="control-point" :style="{transform: `translate(${x - 85}px, ${y - 5}px)`}"></div>
</template>

<script>
export default {
  name: 'ControlPoint',
  props: {
    x: Number,
    y: Number,
  },
};
</script>

<style lang="scss" scoped>
.control-point {
  width: 10px;
  height: 10px;

  position: absolute;
  top: 0;
  left: 0;

  background-color: $color-primary;
}
</style>
