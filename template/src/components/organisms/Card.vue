<script setup lang="ts">
import IconDocumentation from '../atoms/icons/IconDocumentation.vue';
defineProps<{ title: string; content: string }>();
</script>

<template>
  <div class="card">
    <IconDocumentation class="doc-icon" />
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-content">{{ content }}</p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  max-width: 300px;

  .doc-icon {
    color: rgb(35, 34, 34);
  }

  .card-title {
    margin-bottom: 0.5rem;
    font-weight: 600;
    font-size: 1.1rem;
    color: #121212;
  }

  .card-content {
    color: #555;
    font-size: 0.95rem;
  }
}
</style>
