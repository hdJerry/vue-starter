<script setup lang="ts">
import Card from '@/components/organisms/Card.vue';
</script>

<template>
  <div class="page-template">
    <Card title="Hello World" content="This is a card inside a template." />
    <Card title="Another Card" content="More content goes here." />
  </div>
</template>

<style lang="scss" scoped>
.page-template {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 2rem;
}
</style>
