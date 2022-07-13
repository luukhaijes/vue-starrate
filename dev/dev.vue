<template>
  <div class="wrapper">
    <p>current score: {{ score }}</p>
    <StarRating class="stars" :score="score" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import StarRating from '../src/StarRating.vue';
const score = ref(8.4);
</script>

<style>
@import "./base.css";

.wrapper {
  padding: 200px;
  text-align: center;
}

.stars {
  margin: 0 auto;
}

</style>