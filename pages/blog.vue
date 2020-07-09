<template>
  <div>
    <img src="/icon.png" />
    <h1>Blog</h1>
    <article v-for="(article, index) in articles" :key="`ep-${index}`">
      <hr />
      <h2>{{ article.title }}</h2>
      <details>
        <summary>
          {{ article.description }}
        </summary>
        {{ article.body }}
      </details>
      <small>{{ article.date }}</small>
    </article>
    <hr />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('blog', params.slug).fetch()
    return { articles }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

* {
  color: white;
  font-family: 'Roboto Mono';
  padding: 3px;
}

body {
  background-color: #c60c30;
  color: white;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
