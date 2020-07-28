<template>
    <div class="maquette-helpers">
        <button @click="toggleBodyClass('addClass', 'show-maquette')">Voir la maquette</button>
        <button @click="toggleBodyClass('removeClass', 'show-maquette')">Cacher la maquette</button>
    </div>
</template>

<script>
  export default {
    name: 'Maquettes',
    methods: {
        toggleBodyClass(addRemoveClass, className) {
            const el = document.body;

            if (addRemoveClass === 'addClass') {
                el.classList.add(className);
            } else {
                el.classList.remove(className);
            }
        },
    },
  }
</script>