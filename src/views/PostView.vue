<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const posts = ref<{ body: string; title: string }[]>([]);
const isLoadingPosts = ref(true);

const getPosts = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataJson = await res.json();
    const fetchedData = dataJson.slice(0, 4);
    posts.value = fetchedData;
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  } finally {
    isLoadingPosts.value = false;
  }
};

onMounted(async () => {
  await getPosts();
});
</script>

<template>
  <div class="post-wrapper">
    <div v-if="isLoadingPosts" class="loading">Loading...</div>
    <div class="cards-wrapper" v-else>
      <div class="card" v-for="(post, index) in posts" :key="index">
        <h3 class="title">{{ post.title }}</h3>
        <p class="body">{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.post-wrapper {
  max-height: 700px;
  overflow-y: auto;
  padding: 1rem;
  .cards-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .card {
      padding: 1rem;
      border: 1px solid var(--color-border);
      background: var(--color-background-soft);
      box-shadow: 0 0.4px 2px rgba(195, 194, 194, 0.6);
      border-radius: 0.5rem;
    }
  }
}
</style>
