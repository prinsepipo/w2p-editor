<template>
  <div class="editor">
    <TheEditorSidebar />
    <TheEditorMain />
  </div>
</template>

<script>
import TheEditorSidebar from './TheEditorSidebar.vue';
import TheEditorMain from './TheEditorMain.vue';

export default {
  components: {
    TheEditorSidebar,
    TheEditorMain,
  },
};
</script>

<style lang="scss" scoped>
.editor {
  height: 100vh;

  display: flex;
}
</style>
