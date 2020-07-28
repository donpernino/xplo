<template>
  <header>
    <div class="header-left">
        <img src="../assets/logo.png" alt="Xplo.fr" class="header-logo">
        <div class="header-left-actions">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown button
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <form class="form-inline">
                <input class=" mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="" type="submit"></button>
            </form>
        </div>
    </div>
    <button class="btn green full-h header-right-btn uppercase bold">
        Historique
    </button>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      msg: String
    }
  }
</script>