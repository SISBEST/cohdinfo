<template>
  <div class="container">
    <div>
      <img src="/icon.png" />
      <h1>
        Chronicles Of Hot Dog
      </h1>
      <div class="links">
        <a
          href="https://game.cohd.cf/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Play Now
        </a>
        <a
          href="https://companion.cohd.cf"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Mobile Companion
        </a>
        <br />
        <nuxt-link to="/episodes" class="button--grey">
          View Episodes
        </nuxt-link>
        <nuxt-link to="/blog" class="button--grey">
          Blog
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

* {
  color: white;
  font-family: 'Roboto Mono';
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
