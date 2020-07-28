<template>
    <button :id="id" :class="classes">
        <slot name="icon"></slot>
        <span>{{ text }}</span>
    </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
        id: String,
        classes: String,
        icon: Function,
        text: String
    }
  }
</script>