<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <defs>
      <linearGradient y2="0%" x2="100%" y1="0%" x1="0%" :id="id">
        <stop stop-color="#f9d949" :offset="offsetPercentage + '%'" id="F1gst1" />
        <stop stop-color="#d2d5da" offset="0%" id="F1gst2" />
      </linearGradient>
    </defs>
    <path
      :fill="'url(#' + id + ')'"
      d="M 30.335938 12.546875 L 20.164063 11.472656 L 16 2.132813 L 11.835938 11.472656 L 1.664063 12.546875 L 9.261719 19.394531 L 7.140625 29.398438 L 16 24.289063 L 24.859375 29.398438 L 22.738281 19.394531 Z"
    />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from "vue";
defineProps({
  offsetPercentage: {
    required: false,
    default: 0
  }
});

const id = computed(() => 'F1g-' + parseFloat((Math.random() * 100).toString()).toFixed(0));
</script>