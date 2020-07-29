<template>
  <div class="map-wrapper"
    v-bind:locationPos="locationPos"
    v-bind:userPos="userPos"
  >
    <img class="map-logo" src="../../assets/map/logo.png" alt="" />
    <Button
        v-bind:id="'js-header-history-btn'"
        v-bind:classes="'btn rounded shadow white map-geolocalize-button'"
        v-slot:icon
    >
        <GeolocalizeIcon />
    </Button>
    <!-- Indication zone de recherche -->
    <div class="map-radius-indicator">
        8 km
    </div>
    <l-map
        :zoom="zoom"
        :center="latLngUserPos"
        :options="{zoomControl: false}"
        ref="map"
        @ready="doSomethingOnReady()"
    >
        <l-tile-layer
            :url="url"
            :attribution="attribution"
        />
        <l-control-zoom position="bottomright"></l-control-zoom>
        <!-- Lieu icone -->
        <l-marker
            :lat-lng="locationPos"
            :icon="pinIcon"
        ></l-marker>
        <!-- Position icone -->
        <l-marker
            :lat-lng="userPos"
            :icon="posIcon"
        ></l-marker>
        <!-- Cercle autour de la position -->
        <l-circle
            :lat-lng="userPos"
            :radius="circle.radius"
            :color="circle.color"
            :weight="circle.weight"
            :fill="circle.fill"
            :dashArray="circle.dashArray"
        ></l-circle>
    </l-map>
  </div>
</template>

<script>
    import { latLng, icon } from 'leaflet';
    import { LMap, LTileLayer, LControlZoom, LMarker, LCircle } from 'vue2-leaflet';
    import Button from '../Button.vue';
    import GeolocalizeIcon from '../../assets/icons/geolocalize-icon.svg'

    export default {
        name: "Map",
        props: {
            locationPos: Array,
            userPos: Array
        },
        components: {
            LMap,
            LTileLayer,
            LControlZoom,
            LMarker,
            LCircle,
            Button,
            GeolocalizeIcon
        },
        data() {
            return {
                zoom: 12,
                url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
                showMap: true,
                latLngUserPos: latLng(this.userPos),
                pinIcon: icon({
                    iconUrl: 'map/pin.svg',
                    iconSize: [40, 40],
                    iconAnchor: [20, 40]
                }),
                posIcon: icon({
                    iconUrl: 'map/pos.png',
                    iconSize: [36, 36],
                    iconAnchor: [18, 36]
                }),
                circle: {
                    radius: 8000,
                    color: '#be7129',
                    weight: 2,
                    fill: false,
                    dashArray: '16'
                }
            };
        },
        created() {
            //const userPosition = latLng(this.userPos);
        },
        methods: {
            doSomethingOnReady() {
                this.map = this.$refs.map.mapObject
            },
        }
    };
</script>