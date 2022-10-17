<template>
  <main class="editor__main" @click="handleEditorClick">
    <div class="editor__canvas">
      <svg ref="canvasMain" class="canvas__main" viewBox="0 0 600 600">
        <CanvasObject
          v-for="(object, i) in canvasObjects"
          :key="i"
          ref="canvasobject"
          :data="object"
          @click="handleObjectClick($event, object)"
          @drag="handleDrag"
        />
      </svg>
    </div>
    <EditorControls />
    <div class="editor__controls">
      <ControlPoint
        v-for="(point, i) in controlPoints"
        :key="i"
        :x="point.x"
        :y="point.y"
      />
      <ControlEdge
        v-for="(edge, i) in controlEdges"
        :key="i"
        :width="edge.width"
        :height="edge.height"
        :x="edge.x"
        :y="edge.y"
      />
    </div>
  </main>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import CanvasObject from './canvas/CanvasObject.vue';
import ControlPoint from './controls/ControlPoint.vue';
import ControlEdge from './controls/ControlEdge.vue';
import EditorControls from './controls/EditorControls.vue';

const svgns = 'http://www.w3.org/2000/svg';

export default {
  components: {
    CanvasObject,
    ControlPoint,
    ControlEdge,
    EditorControls,
  },
  data() {
    return {
      dragActive: false,
      controlPoints: [],
      controlEdges: [],
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
    handleObjectClick(e, object) {
      const rect = e.target.getBoundingClientRect();

      this.controlPoints = [
        {
          x: rect.left,
          y: rect.top,
        },
        {
          x: rect.right,
          y: rect.top,
        },
        {
          x: rect.right,
          y: rect.bottom,
        },
        {
          x: rect.left,
          y: rect.bottom,
        },
      ];

      this.controlEdges = [
        {
          width: rect.width,
          height: 2,
          x: rect.left,
          y: rect.top,
        },
        {
          width: 2,
          height: rect.height,
          x: rect.right,
          y: rect.top,
        },
        {
          width: rect.width,
          height: 2,
          x: rect.left,
          y: rect.bottom,
        },
        {
          width: 2,
          height: rect.height,
          x: rect.left,
          y: rect.top,
        },
      ];

      this.SET_ACTIVE_OBJECT(object);
    },
    handleDrag(e) {
      const rect = e.target.getBoundingClientRect();

      this.controlPoints = [
        {
          x: rect.left,
          y: rect.top,
        },
        {
          x: rect.right,
          y: rect.top,
        },
        {
          x: rect.right,
          y: rect.bottom,
        },
        {
          x: rect.left,
          y: rect.bottom,
        },
      ];

      this.controlEdges = [
        {
          width: rect.width,
          height: 2,
          x: rect.left,
          y: rect.top,
        },
        {
          width: 2,
          height: rect.height,
          x: rect.right,
          y: rect.top,
        },
        {
          width: rect.width,
          height: 2,
          x: rect.left,
          y: rect.bottom,
        },
        {
          width: 2,
          height: rect.height,
          x: rect.left,
          y: rect.top,
        },
      ];
    },
    handleEditorClick(e) {
      const items = this.$refs.canvasobject.filter((ref) => {
        return e.target === ref.$el || ref.$el.contains(e.target);
      });

      if (items.length < 1) {
        this.SET_ACTIVE_OBJECT(null);
        this.controlPoints = [];
        this.controlEdges = [];
      }
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

  overflow: hidden;

  .editor__canvas {
    width: 600px;
    height: 600px;

    // border: 1px solid $color-primary;

    overflow: hidden;

    .canvas__main {
      width: 100%;
      height: 100%;

      background: #fff;

      overflow: visible;
    }
  }

  .editor__overlay {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    pointer-events: none;
  }
}
</style>
