<template>
  <div class="main-build">
    <div class="aside-block">
      <slot name="aside"></slot>
    </div>
    <div class="main-block">
      <slot name="main"></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>

.main-build
  width: 100%
  display: flex
  align-items: flex-start
  background: $main-bg-color
  .aside-block
    width: 340px
    margin-left: 15%
    

  .main-block
    flex: 1
    margin-left: 26px
    margin-top: 26px
  
</style>