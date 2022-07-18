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
    <div v-for="(star, i) in starsSet" :key="i" class="rating__star">
      <IconStar data-test="star"
                :data-star="i"
                :offset-percentage="star"
                @mouseenter.native="hovering($event, true)"
                @mouseleave.native="hovering($event, false)"
                @click="handleStarClick(i)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import IconStar from "./icons/IconStar.vue";
import { useGetStarSet } from "./composables/useGetStarSet";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  score: {
    type: Number,
    default: 0
  },
  starScoreStyle: {
    type: Number,
    default: 5
  }
});

const scoreValue = ref<number>(0)
const { starsSet, generate } = useGetStarSet(props.starScoreStyle)


const emits = defineEmits<{
  (e: "valueChange", value: number): void;
  (e: "update:modelValue", value: number): void;
}>();

const handleStarClick = (index: number) => {
  const score = index + 1;
  emits("valueChange", score);
  emits("update:modelValue", score);
  scoreValue.value = score;
}

const hovering = (el: MouseEvent, hovering: boolean) => {
  let starAttr = (el.target as HTMLElement).dataset.star;
  if (starAttr && hovering) {
    const starNr = +starAttr;

    [...Array(props.starScoreStyle).keys()].forEach((star, index) => {
      if (index <= starNr) {
        starsSet.value[index] = 100;
      }
    })
  } else {
    generate(scoreValue.value);
  }
}

watch([() => props.score, () => props.modelValue], (value) => {
  generate(value[1]);
})

onMounted(() => {
  scoreValue.value = props.score || props.modelValue;
  generate(scoreValue.value);
})
</script>
