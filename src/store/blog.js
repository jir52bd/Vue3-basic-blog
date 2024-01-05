// store/blog.js
import { defineStore } from 'pinia';
import BlogService from '../services/BlogService';

export const useBlogStore = defineStore('blog', {
  state: () => ({
    posts: [],
  }),

  actions: {
    async fetchPosts() {
      try {
        const response = await BlogService.getPosts();
        this.posts = response.data;
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
  },
});
