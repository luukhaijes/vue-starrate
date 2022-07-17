<style>
.rating__container {
  display: flex;
  flex-direction: row;
}

.rating__star {
  width: 6rem;
  cursor: pointer;
}
</style>

<template>
  <div data-test="star-container" class="rating__container">
    <div v-for="star in STARS" :key="star.star" class="rating__star">
      <IconStar data-test="star"
                :data-star="star.star" :offset-percentage="star.offsetPercentage"
                :ref="(el) => addStarEls(el)"
                @mouseenter.native="hovering($event, true)"
                @mouseleave.native="hovering($event, false)"
      />
    </div>
  </div>
  {{ STARS }}
</template>

<script lang="ts" setup>
import type { ComponentPublicInstance } from "vue";
import { defineEmits, onMounted, ref } from "vue";
import IconStar from "./icons/IconStar.vue";

const getStars = () => [...Array(5).keys()].map((_, i) => ({
  star: i,
  offsetPercentage: 0
}))

const STARS = ref(getStars());

let STARS_VAL: number[] = [];

const props = defineProps({
  score: {
    type: Number,
    default: 0
  },
  starScoreStyle: {
    type: Number,
    default: 5
  }
});

defineEmits<{
  (e: "valueChange", value: number): void;
}>();

const stars = () => {
  const score = Math.floor(props.score);
  if (score > 1) {
    const scoreHalved = props.starScoreStyle === 5 ? props.score / 2 : props.score;
    const fillCount = props.starScoreStyle === 5 ? Math.floor(scoreHalved) : scoreHalved;
    const remainder = parseFloat((scoreHalved % 1).toString()).toFixed(2);

    const stars = [...Array(fillCount).keys()].map(() => 100);
    const remainderPercentage = +remainder * 100;
    STARS_VAL = [...stars, remainderPercentage];
    STARS_VAL.forEach((per, index) => {
      STARS.value[index].offsetPercentage = per;
    })
  }
};

const divs = ref<Array<ComponentPublicInstance<HTMLElement>>>([]);

const addStarEls = (el: unknown) => {
  divs.value.push(el as ComponentPublicInstance<HTMLElement>);
};

const isDefined = <T>(item: T) => !(item === undefined || item === null);

const hovering = (el: MouseEvent, hovering: boolean) => {
  let starAttr = (el.target as HTMLElement).dataset.star;
  if (starAttr && hovering) {
    const starNr = +starAttr + 1;
    console.log(starNr);
    [...Array(starNr).keys()].forEach((star, index) => {
      console.log(divs.value[star]);
      STARS.value[index].offsetPercentage = 100;
    })
  } else {
    STARS.value.forEach((star, index) => {
      STARS.value[index].offsetPercentage = STARS_VAL[index] || 0;
    })
  }
}

onMounted(() => {
  stars();
})
</script>
