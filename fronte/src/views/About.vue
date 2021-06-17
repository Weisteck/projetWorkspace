<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ user.message }}</div>
  </div>
</template>
<script>
import axios from 'axios';

export default{
  name: 'About',
  data() {
    return {
      user: {},
    }
  },
  methods: {
    async fetchUser() {
      const user = await axios('http://localhost:8000/api/users');
      this.user = user.data;
    }
  },
  created() {
    this.fetchUser();
  }
}
</script>