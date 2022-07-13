<style>
.rating__container {
  display: flex;
  flex-direction: row;
}

.rating__star {
  width: 1.5rem;
}
</style>

<template>
  <div data-test="star-container" class="rating__container">
    <div v-for="star in STARS" :key="star" class="rating__star">
      <IconStar data-test="star" :offset-percentage="stars[star]" :ref="(el) => addStarEls(el)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComponentPublicInstance } from "vue";
import { computed, onMounted, ref } from "vue";
import IconStar from "./icons/IconStar.vue";

const STARS = [0, 1, 2, 3, 4];
const ACTIVE_FILL_COLOR = "url(#F1g)";

const props = defineProps<{
  score: number;
}>();

const stars = computed((): number[] => {
  const score = Math.floor(props.score);
  if (score > 1) {
    const scoreHalved = props.score / 2;
    const fillCount = Math.floor(scoreHalved);
    const remainder = parseFloat((scoreHalved % 1).toString()).toFixed(2);

    const stars = [...Array(fillCount).keys()].map(() => 100);
    const remainderPercentage = +remainder * 100;

    return [...stars, remainderPercentage];
  } else {
    return [0];
  }
});

const divs = ref<Array<ComponentPublicInstance<HTMLElement>>>([]);

const addStarEls = (el: unknown) => {
  divs.value.push(el as ComponentPublicInstance<HTMLElement>);
};

onMounted(() => {
  stars.value.forEach((star: number) => {
    if (divs.value && divs.value[star]) {
      console.log('la');
      divs.value[star].$el.style.fill = ACTIVE_FILL_COLOR;
    }
  });
});
</script>
