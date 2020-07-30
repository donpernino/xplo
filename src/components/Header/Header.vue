<template>
  <header>
    <b-navbar toggleable="lg">
      <div class="header-left">
          <img src="../../assets/logo.png" alt="Xplo.fr" class="header-logo">
          <div id="js-header-left-actions" class="header-left-actions">
            <HeaderProfileDropdown
              v-bind:userPic="userPic"
              v-bind:userName="userName"
              v-bind:userNotifications="userNotifications"
            />
            <Button
              v-bind:id="'js-header-history-btn'"
              v-bind:classes="'btn white-green full-h header-history-btn uppercase bold'"
              v-bind:text="'Historique'"
              v-slot:icon
            >
              <HistoryIcon />
            </Button>
            <HeaderSearch />
        </div>
      </div>
      <!-- Navbar toggle button -->
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template>
          <HamburgerIcon />
        </template>
      </b-navbar-toggle>

      <!-- Navbar on mobile (items appended when mounted) -->
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav id="navbar-mobile" class="ml-auto">
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
  import Button from '../Button.vue'
  import HeaderProfileDropdown from './HeaderProfileDropdown.vue'
  import HeaderSearch from './HeaderSearch.vue'
  import HamburgerIcon from '../../assets/icons/hamburger-icon.svg'
  import HistoryIcon from '../../assets/icons/reverse-clock-icon.svg'

  export default {
    name: 'Header',
    props: {
      userPic: String,
      userName: String,
      userNotifications: Number
    },
    components: {
      Button,
      HeaderProfileDropdown,
      HeaderSearch,
      HamburgerIcon,
      HistoryIcon
    },
    mounted: function() {
      const navbarMobile = document.getElementById('navbar-mobile');
      const headerLeftActions = document.getElementById('js-header-left-actions');
      const headerRight = document.getElementById('js-header-right');
      const headerSearch = document.getElementById('js-header-search');
      const headerHistoryBtn = document.getElementById('js-header-history-btn');

      const navAppendQuery = () => {
        if (window.matchMedia("(max-width: 991px)").matches) {
          navbarMobile.append(headerSearch);
          navbarMobile.append(headerHistoryBtn);
        } else {
          headerLeftActions.prepend(headerSearch);
          headerRight.append(headerHistoryBtn);
        }
      }

      window.onresize = () => {
        navAppendQuery()
      }

      navAppendQuery()
    }
  }
</script>
