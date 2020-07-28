<template>
    <form id="js-header-search" class="header-search">
        <button class="header-search-btn" type="submit">
          <SearchIcon />
        </button>
        <input class="header-search-input" type="search" placeholder="Rechercher" aria-label="Search">
    </form>
</template>

<script>
  import SearchIcon from '../../assets/icons/search-icon.svg'

  export default {
    name: 'HeaderSearch',
    components: {
      SearchIcon
    }
  }
</script>