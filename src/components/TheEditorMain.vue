<template>
  <main class="editor__main">
    <div class="editor__canvas">
      <svg ref="canvasMain" class="canvas__main" viewBox="0 0 600 600">
      </svg>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

const svgns = 'http://www.w3.org/2000/svg';

export default {
  computed: {
    ...mapGetters({
      uploadedFile: 'files/uploadedFile',
    }),
  },
  watch: {
    uploadedFile: function(newValue) {
      if (newValue) {
        this.appendImage(newValue);
      }
    },
  },
  methods: {
    appendImage(imageSrc) {
      const container = document.createElementNS(svgns, 'g');

      const image = document.createElementNS(svgns, 'image');
      image.setAttribute('width', '50%');
      image.setAttribute('href', imageSrc);

      container.appendChild(image);

      this.$refs.canvasMain.appendChild(container);
    },
  },
};
</script>

<style lang="scss" scoped>
.editor__main {
  @include flex(center, center);

  height: 100%;

  flex-grow: 1;

  background: #f1f1f1;

  .editor__canvas {
    width: 600px;
    height: 600px;

    border: 1px solid $color-primary;

    .canvas__main {
      width: 100%;
      height: 100%;

      background: #fff;
    }
  }
}
</style>
