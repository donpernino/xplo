<template>
    <b-dropdown id="dropdown-1" class="header-dropdown">
        <template v-slot:button-content class="header-dropdown-name-wrapper">
        <div class="header-dropdown-left">
            <img class="header-dropdown-img" :src="userPic" :alt="userName" />
            <span class="header-dropdown-notifs bold">{{ userNotifications }}</span>
        </div>
        <span class="header-dropdown-name medium">{{ userName }}</span>
        <ArrowIcon />
        </template>
        <b-dropdown-item href="#">Mon profil</b-dropdown-item>
        <b-dropdown-item href="#">Voir mes notifications ({{ userNotifications }})</b-dropdown-item>
        <b-dropdown-item href="#">Déconnexion</b-dropdown-item>
    </b-dropdown>
</template>

<script>
  import ArrowIcon from '../../assets/icons/arrow-icon.svg'

  export default {
    name: 'HeaderProfileDropdown',
    components: {
      ArrowIcon
    },
    props: {
      userPic: String,
      userName: String,
      userNotifications: Number
    }
  }
</script>