<template>
  <header class="header">
    <nav class="nav-header">
      <ul class="links-header">
        <router-link class="logo logo-header" to="/" tag="li">My dictionary</router-link>
        <router-link class="link-header" to="/login" tag="li" v-if="!isAuth">Login</router-link>
        <router-link class="link-header" to="/signup" tag="li" v-if="!isAuth">Sign Up</router-link>
        <router-link class="link-header" to="/" tag="li" v-if="isAuth">Logout</router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isAuth: false
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="sass">

  
.header
  width: 100%
  height: 100px
  background: $header-bg
  box-shadow:  0 0px 6px rgba(0, 0, 0, 0.25)
  z-index: 10
  position: relative
  .nav-header
    height: 100%
    width: 100%

    .links-header
      list-style: none
      display: flex
      width: 100%
      height: 100%
      justify-content: flex-end
      align-items: center
      color: $light-theme-color
    .logo-header
      margin-left: 50%
      transform: translate(-50%)
      margin-right: auto
      color: $light-theme-color
    .link-header  
      margin-right: 40px
      color: $light-theme-color
      width: 141px
      height: 44px
      display: flex
      justify-content: center
      align-items: center
      font-size: 20px
      border: 1px solid $light-theme-color
      box-sizing: border-box
      border-radius: 15px
      text-decoration: none
      transition: 0.3s box-shadow
      &:hover
        box-shadow: 0 0 10px rgba($light-theme-color, 0.5)
    .logo
      font-size: 60px
      font-family: 'NotoSans', 'Roboto'
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25)
      text-decoration: none
</style>