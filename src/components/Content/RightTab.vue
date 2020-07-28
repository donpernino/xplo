<template>
    <div class="events-wrapper full-h">
      <h2 class="events-title bold">Évènements</h2>
      <ul class="events-list">
        <li
          v-for="event in events"
          :key="event.name"
          class="events-list-item"
        >
          <img class="events-list-item-img" :src="event.img" :alt="event.name"/>
          <div class="events-list-item-content">
            <div class="events-list-item-content-title">
              <h3 class="events-list-item-content-name bold">{{ event.name }}</h3>
              <div class="events-list-item-content-date">
                <CalendarIcon />
                <span>{{ event.date }}</span>
              </div>
            </div>
            <p class="events-list-item-content-text">{{ event.text }}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  import CalendarIcon from '../../assets/icons/calendar-icon.svg'

  export default {
    name: 'RightTab',
    components: {
      CalendarIcon
    },
    data: function() {
      return {
        events: [
          {
            img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            date: '12/08/2020',
            name: 'Évènement 1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id lobortis ante. Cras ut enim sed ipsum porta dignissim ut in arcu. Proin id erat placerat, ultrices sem non, rutrum ex. Mauris quis est orci.'
          },
          {
            img: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
            date: '7/09/2020',
            name: 'Évènement 2',
            text: 'Pusce volutpat elit turpis, ac ultricies dolor efficitur sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum mi ligula, tristique'
          },
          {
            img: 'https://images.unsplash.com/photo-1533299609664-5c3772c6adcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
            date: '8/10/2020',
            name: 'Évènement 3',
            text: 'Aliquam sit amet massa efficitur, congue turpis rutrum, varius nulla. Duis lacinia ipsum eget lectus tincidunt hendrerit. Nam.'
          },
          {
            img: 'https://images.unsplash.com/photo-1595964270729-3877dc65f4de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            date: '8/10/2020',
            name: 'Évènement 4',
            text: 'Aliquam sit amet massa efficitur, congue turpis rutrum, varius nulla. Duis lacinia ipsum eget lectus tincidunt hendrerit. Nam.'
          }
        ]
      }
    }
  }
</script>