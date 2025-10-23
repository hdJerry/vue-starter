<script setup lang="ts">
defineProps<{ placeholder: string; modelValue: string }>();
const emit = defineEmits(['update:modelValue']);

const onInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value);
};
</script>

<template>
  <input class="base-input" :placeholder="placeholder" :value="modelValue" @input="onInput" />
</template>

<style lang="scss" scoped>
.base-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
}
</style>
