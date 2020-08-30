<template>
  <div class="wrap">
    <div class="greeting-block">
      <h1 class="greeting-text">Welcome to My dictionary!</h1>
      <label for="getstarted" class="greeting-label">Start now:</label>
      <router-link class="greeting-link" tag="button" to="/home" id="getstarted">Get Started</router-link>
    </div>
    <div class="greeting-sign-up">
      <label for="signup" class="greeting-label">If you want to save a procces:</label>
      <router-link class="greeting-link" tag="button" to="/signup" id="signup">Sign Up</router-link>
    </div>
    <div class="greeting-login">
      <label for="login" class="greeting-label">If you want to continue your procces:</label>
      <router-link class="greeting-link" tag="button" to="/login" id="login">Login</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetStarted'
}
</script>

<style lang="sass" scoped>

.wrap
  max-width: 1100px
  width: 100%
  margin-left: auto
  margin-right: auto
  margin-top: 16vh
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: center
  background: $light-theme-color
  .greeting-block
    flex: 1 100%
    display: flex
    align-items: center
    flex-direction: column
    margin-bottom: 55px
    .greeting-text
      font-size: 50px
      font-weight: 400
      margin-bottom: 40px
  .greeting-sign-up
    flex: 1
    display: flex
    align-items: center
    flex-direction: column
    margin-right: 40px
      
  .greeting-login
    flex: 1
    display: flex
    align-items: center
    flex-direction: column
    margin-left: 40px
  .greeting-label
    font-size: 28px
  .greeting-link
    font-size: 26px
    letter-spacing: 0.4px
    text-decoration: none
    color: $header-bg
    width: 210px
    height: 60px
    border: 1px solid $header-bg
    border-radius: 15px
    display: flex
    justify-content: center
    align-items: center
    margin-top: 10px
    transition: 0.3s box-shadow
    &:hover
      box-shadow: 0 0 10px rgba($header-bg, 1)
</style>