
<script>
import { defineComponent, onMounted } from 'vue';
import { useBlogStore } from '../store/blog';

export default defineComponent({
  setup() {
    const blogStore = useBlogStore();

    onMounted(() => {
      blogStore.fetchPosts();
    });

    return {
      posts: blogStore.posts.slice(0, 10),
    };
  },
});
</script>
<template>
    <div>
        <h1>Bloag Post</h1>
        <div v-if="posts">
            <ul class="post-list">
                <li v-for="post in posts" :key="post.id" class="post-item">
                    <h2 class="post-title">{{ post.title }}</h2>
                    <p class="post-body">{{ post.body }}</p>
                </li>   
            </ul>
        </div>
        <div v-else>
            Loading....
        </div>

    </div>
</template>

<style>
.post-list {
  list-style-type: none;
  padding: 0;
}

.post-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px 0;
  padding: 10px;
}

.post-title {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.post-body {
  color: #333;
}
</style>