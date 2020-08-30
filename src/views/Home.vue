<template>
  <build-main>
    <template v-slot:aside>
      <menu-asite></menu-asite>
    </template>
    <template v-slot:main>
      <app-search></app-search>
    </template>
  </build-main>
    
  
  
</template>

<script>
import MenuAsite from '../components/MenuAsite'
import BuildMain from '../components/BuildMain'
import Search from '../components/Search'

export default {
  name: 'Home',
  components: {
    'menu-asite': MenuAsite,
    'build-main': BuildMain,
    'app-search': Search
  }
}
</script>
<style lang="sass" scoped>
</style>
