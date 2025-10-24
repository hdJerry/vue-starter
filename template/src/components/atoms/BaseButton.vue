<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  label: string
  type?: 'button' | 'submit'
}>();

const btnType = computed(() => props.type || 'button')
</script>

<template>
  <button :type="btnType" class="base-button">
    {{ label }}
  </button>
</template>

<style lang="scss" scoped>
.base-button {
  background-color: #007BFF;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: darken(#007BFF, 10%);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
}
</style>
