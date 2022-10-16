<template>
  <g
    :transform="transformations"
    @click="handleClick"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
  >
    <image :href="data.href" width="50%" draggable="false"></image>
  </g>
</template>

<script>
export default {
  name: 'CanvasObject',
  props: {
    data: Object,
  },
  data() {
    return {
      x: 0,
      y: 0,
      width: null,
      height: null,
      dragActive: false,
      offsetX: 0,
      offsetY: 0,
    };
  },
  computed: {
    transformations() {
      return `translate(${this.x}, ${this.y})`;
    },
  },
  mounted() {
    const rect = this.$el.getBoundingClientRect();

    this.width = rect.width;
    this.height = rect.height;
    this.x = 300 - (this.width / 2);
    this.y = 300 - (this.height / 2);

    document.addEventListener('mousemove', this.handleMouseMove);
  },
  beforeUnmount(e) {
    document.removeEventListener('mousemove', this.handleMouseMove);
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    },
    handleMouseDown(e) {
      e.preventDefault();

      this.dragActive = true;

      const canvas = document.querySelector('.canvas__main').getBoundingClientRect();

      const mouseX = e.clientX - canvas.x;
      const mouseY = e.clientY - canvas.y;

      const rect = this.$el.getBoundingClientRect();

      const elX = rect.x - canvas.x;
      const elY = rect.y - canvas.y;

      this.offsetX = mouseX - elX;
      this.offsetY = mouseY - elY;
    },
    handleMouseUp(e) {
      this.dragActive = false;
    },
    handleMouseMove(e) {
      e.preventDefault();

      if(this.dragActive) {
        const canvas = document.querySelector('.canvas__main').getBoundingClientRect();

        const mouseX = e.clientX - canvas.x;
        const mouseY = e.clientY - canvas.y;

        this.x = mouseX - this.offsetX;
        this.y = mouseY - this.offsetY;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
