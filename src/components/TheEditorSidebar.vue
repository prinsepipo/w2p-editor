<template>
  <aside class="editor__sidebar">
    <ul class="sidebar__action-list">
      <li class="sidebar__action-list-item">
        <button
          class="sidebar__action-button"
          type="button"
          @click="handleClickUpload"
        >Upload</button>
        <input ref="inputFile" class="sidebar__upload" type="file" @input="handleInputFile">
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations({
      ADD_CANVAS_OBJECT: 'canvas/ADD_CANVAS_OBJECT',
    }),
    handleClickUpload(e) {
      this.$refs.inputFile.click();
    },
    handleInputFile(e) {
      if (e.target.files.length < 1) {
        return;
      }

      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.ADD_CANVAS_OBJECT({
          href: reader.result,
        });
      });

      reader.readAsDataURL(e.target.files[0]);
    }
  },
}
</script>

<style lang="scss" scoped>
.editor__sidebar {
  width: 80px;
  height: 100%;

  background: #fff;

  border-right: 1px solid #dfdfdf;

  .sidebar__action-button {
    width: 64px;
    height: 64px;

    margin: 8px;

    background: transparent;

    font-size: 1rem;

    border: 0;
    border-radius: 8px;

    cursor: pointer;

    &:hover {
      background: $color-primary;
      color: #fff;
    }
  }

  .sidebar__upload {
    display: none;
  }
}
</style>
