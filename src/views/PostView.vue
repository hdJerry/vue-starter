<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue';

const posts = ref<{ body: string; title: string }[]>([]);
const isLoadingPosts = ref(true);

const getPosts = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataJson = await res.json();
    const fetchedData = dataJson.slice(0, 4);
    posts.value = fetchedData;
  } catch (error) {
    console.log(error);
  } finally {
    isLoadingPosts.value = false;
  }
};

const hasPosts = computed(() => !isLoadingPosts.value && posts.value.length);

onMounted(async () => {
  await getPosts();
});
</script>

<template>
  <div class="post-wrapper">
    <div v-if="isLoadingPosts" class="loading">Loading...</div>
    <div class="cards-wrapper" v-else-if="hasPosts">
      <div class="card" v-for="(post, index) in posts" :key="index">
        <h3 class="title">{{ post.title }}</h3>
        <p class="body">{{ post.body }}</p>
      </div>
    </div>
    <div class="empty-state" v-else>Opps!!!, Nothing to see here</div>
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
      border-radius: 0.5rem;
      transition: box-shadow 0.5s ease-in-out;
      &:hover {
        box-shadow: 0px 0px 5px rgba(50, 242, 155, 0.6);
      }
      cursor: pointer;
    }
  }

  .empty-state {
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    text-shadow: 2px 4px 10px rgb(251, 15, 15);
    color: white;
  }
}
</style>
