<template>
  <section class="section is-medium">
    <div class="container has-text-centered">
      <h1 class="title">{{ $t('projects.title') }}</h1>

      <p v-html="$t('projects.introduction')"></p>
    </div>

    <ul id="posts">
      <li v-for="post in posts" :key="post.id">
        <hr />
        <b>{{ post.title }}</b>
        {{ post.body }}
      </li>
    </ul>

  </section>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        posts: []
      }
    },
    beforeRouteEnter (to, from, next) {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          next(vm => (vm.posts = response.data) )
        })
    }
  }
</script>
