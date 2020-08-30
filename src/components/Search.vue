<template>
  <div class="search">
    <label for="" class="search-input-text">Search</label>
    <input type="text" placeholder="Type word what you want to search in your dictionary" class="search-input" v-model.trim="searchItem">
    <button class="search-button"><img src="./../../public/img/iconmonstr-magnifier-11-64.png" alt=""></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchItem: ''
    }
  }
}
</script>

<style lang="sass" scoped>

.search
  width: 100%
  height: 170px
  background: $light-theme-color
  box-shadow: 0 0 4px rgba(0 , 0 , 0, 0.25)
  display: flex
  flex-direction: row
  padding-left: 50px
  padding-top: 25px
  flex-wrap: wrap
  align-content: start
  align-items: baseline
  .search-input-text
    font-size: 22px
    margin-left: 15px
    flex: 1 100%
    margin-bottom: 0
    height: 30px
  .search-input
    position: relative
    height: 48px
    font-size: 20px
    width: 700px
    padding-left: 10px
    border: 1px solid rgba(#000000, 0.3)
    border-radius: 2px
    background: rgba(#C4C4C4, 0.3)
    &::placeholder
      font-size: 20px
    &:after
      content: ''
      position: absolute
  .search-button
    width: 70px
    height: 60px
    background: #70A1FF
    border: none
    border-radius: 10px
    margin-left: 20px
    position: relative
    top: -2px
    img 
      width: 40px
      height: 40px
</style>