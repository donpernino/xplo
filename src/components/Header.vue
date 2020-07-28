<template>
  <header>
    <div class="header-left">
        <img src="../assets/logo.png" alt="Xplo.fr" class="header-logo">
          <div class="header-left-actions">
            <b-dropdown id="dropdown-1" class="header-dropdown">
              <template v-slot:button-content class="header-dropdown-name-wrapper">
                <div class="header-dropdown-left">
                  <img class="header-dropdown-img" :src="userPic" :alt="userName" />
                  <span class="header-dropdown-notifs bold">{{ userNotifications }}</span>
                </div>
                <span class="header-dropdown-name medium">{{ userName }}</span>
                <svg viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6717 13.5342L12.6714 13.536C12.632 13.8441 12.5076 14.1327 12.3132 14.3601C12.3131 14.3602 12.3131 14.3602 12.313 14.3603L2.75802 25.6141C2.64164 25.7689 2.49774 25.8967 2.33431 25.9888C2.16943 26.0817 1.98852 26.1361 1.80274 26.1477C1.61695 26.1592 1.43141 26.1277 1.2578 26.0556C1.08428 25.9834 0.926997 25.8726 0.795038 25.7309L0.904805 25.6286L0.795037 25.7309C0.663115 25.5892 0.559132 25.4196 0.488574 25.233C0.418021 25.0463 0.382114 24.8459 0.382722 24.6439C0.383331 24.4419 0.420426 24.2417 0.492117 24.0556C0.563314 23.8707 0.667404 23.703 0.7989 23.5629L9.48819 13.334L0.798903 3.10514C0.667404 2.96507 0.563315 2.79729 0.492118 2.61245C0.420424 2.42631 0.383331 2.22616 0.382722 2.02414C0.382113 1.82211 0.418021 1.6217 0.488574 1.43506C0.559132 1.24841 0.663113 1.07881 0.795037 0.937157C0.926999 0.795467 1.08428 0.684591 1.2578 0.612473C1.43141 0.540319 1.61695 0.508789 1.80274 0.520369C1.98852 0.531948 2.16943 0.586309 2.33431 0.67923C2.49774 0.771336 2.64164 0.899168 2.75802 1.05398L12.3133 12.3081C12.4518 12.4709 12.5552 12.6657 12.6168 12.8775C12.6785 13.0893 12.6971 13.3136 12.6717 13.5342Z" stroke-width="0.3"/>
                </svg>
              </template>
              <b-dropdown-item href="#">Mon profil</b-dropdown-item>
              <b-dropdown-item href="#">Voir mes notifications ({{ userNotifications }})</b-dropdown-item>
              <b-dropdown-item href="#">Déconnexion</b-dropdown-item>
            </b-dropdown>
            <form class="header-search">
              <button class="header-search-btn" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
              </button>
              <input class="header-search-input" type="search" placeholder="Rechercher" aria-label="Search">
            </form>
        </div>
    </div>
    <button class="btn green full-h header-history-btn uppercase bold">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12c0 6.627-5.373 12-12 12s-12-5.373-12-12c0-.808.083-1.596.234-2.359h2.076c-.188.759-.31 1.543-.31 2.359 0 5.514 4.486 10 10 10s10-4.486 10-10-4.486-10-10-10c-2.234 0-4.292.744-5.957 1.989l2.049 2.049-7.012 1.354 1.354-7.013 2.183 2.183c2.036-1.598 4.594-2.562 7.383-2.562 6.627 0 12 5.373 12 12zm-13-6v8h7v-2h-5v-6h-2z"/></svg>
      <span>Historique</span>
    </button>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      userPic: String,
      userName: String,
      userNotifications: Number
    }
  }
</script>
