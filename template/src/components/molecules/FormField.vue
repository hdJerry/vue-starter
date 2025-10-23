<script setup lang="ts">
import BaseInput from '@/components/atoms/BaseInput.vue';
import BaseButton from '@/components/atoms/BaseButton.vue';
import { ref } from 'vue';

const inputValue = ref('');
</script>

<template>
  <div class="form-field">
    <BaseInput v-model="inputValue" placeholder="Type something..." />
    <BaseButton :label="'Submit'" />
  </div>
</template>

<style lang="scss" scoped>
.form-field {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
</style>
