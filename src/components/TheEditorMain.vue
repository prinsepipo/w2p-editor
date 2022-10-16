<template>
  <main class="editor__main">
    <div class="editor__canvas">
      <svg ref="canvasMain" class="canvas__main" viewBox="0 0 600 600">
        <CanvasObject
          v-for="(object, i) in canvasObjects"
          :key="i"
          :data="object"
          @click="handleObjectClick(object)"
        />
      </svg>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import CanvasObject from './canvas/CanvasObject.vue';

const svgns = 'http://www.w3.org/2000/svg';

export default {
  components: {
    CanvasObject,
  },
  data() {
    return {
      dragActive: false,
    };
  },
  computed: {
    ...mapGetters({
      canvasObjects: 'canvas/canvasObjects',
      activeObject: 'canvas/activeObject',
    }),
  },
  methods: {
    ...mapMutations({
      SET_ACTIVE_OBJECT: 'canvas/SET_ACTIVE_OBJECT',
    }),
    handleObjectClick(object) {
      this.SET_ACTIVE_OBJECT(object);
    },
  },
};
</script>

<style lang="scss" scoped>
.editor__main {
  @include flex(center, center);

  height: 100%;

  flex-grow: 1;

  position: relative;

  background: #f1f1f1;

  .editor__canvas {
    width: 600px;
    height: 600px;

    // border: 1px solid $color-primary;

    .canvas__main {
      width: 100%;
      height: 100%;

      background: #fff;

      overflow: visible;
    }
  }
}
</style>
