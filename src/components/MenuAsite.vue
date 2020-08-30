<template>
  <aside class="aside-menu">
    <ul class="menu">
      <router-link class="menu-link" to="/home" tag="li"><span class="menu-link-text">Home</span></router-link>
      <router-link class="menu-link" to="/dictionary" tag="li"><span class="menu-link-text">My Dictionary</span></router-link>
      <router-link class="menu-link" to="/training" tag="li"><span class="menu-link-text">Training</span></router-link>
    </ul>
  </aside>
</template>

<style lang="sass" scoped>

.aside-menu
  width: 340px
  height: 100%
  background: $light-theme-color
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25)
  position: relative
  z-index: 20
  min-height: 500px
  .menu
    display: flex
    flex-direction: column
    align-items: center
    padding: 0
    margin: 0
    .menu-link
      font-size: 26px
      position: relative
      color: $main-dark-text-color
      width: 100%
      height: 100px
      display: flex
      justify-content: center
      align-items: center
      text-decoration: none
      &:hover
        background: rgba(#C8D6E5 , 0.5)
      .menu-link-text
        position: relative
        &:after
          content: ''
          transition: 0.5s
      &.router-link-active
        .menu-link-text
          color: $main-active-link-color
          &:after
            position: absolute
            bottom: -5px
            left: -10%
            width: 120%
            height: 2px
            background: $main-active-link-color
</style>