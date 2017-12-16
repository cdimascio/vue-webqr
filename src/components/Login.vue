<template>
  <md-card>
    <md-card-content>
      <form novalidate @submit.stop.prevent="submit">
        <md-input-container>
          <label>Username</label>
          <md-input v-model="username"></md-input>
        </md-input-container>
        <md-input-container md-has-password>
          <label>Password Reveal</label>
          <md-input v-model="password" type="password"></md-input>
        </md-input-container>
      </form>
      <md-button class="md-raised md-accent" v-on:click.native="login()">Accent</md-button>
    </md-card-content>
  </md-card>
</template>

<script>
 export default {
  data() {
    return {
      username,
      password
    };
  },
  methods: {
    login() {
      setTimeout(() => {
        const { username, password } = this;
        console.log(`logged in. ${this.username} ${this.password}`)
        this.$store.dispatch('login', {
          username, password
        }).then(r => {
          console.log('woah', r)
          console.log(this.$router)
          this.$router.replace('/') //this.$route.query.redirect || '/')
        })
        
        // alert(this.password)
      }, 500)
    },
  },
};
</script>

<style scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>