<style>
.rating__container {
  display: flex;
  flex-direction: row;
}

.rating__container > .rating__star {
  cursor: pointer;
}

.rating__container.rating__container--readonly > .rating__star {
  cursor: default;
}

.rating__star {
  width: 6rem;
}
</style>

<template>
  <div data-test="star-container" class="rating__container" :class="{ 'rating__container--readonly': readonly || props.starSet === 10 }">
    <div v-for="(star, i) in starsSet" :key="i" class="rating__star">
      <IconStar data-test="star"
                :data-star="i"
                :offset-percentage="star"
                @mouseenter.native="!readonly && hovering($event, true)"
                @mouseleave.native="!readonly && hovering($event, false)"
                @click="handleStarClick(i)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import IconStar from "./icons/IconStar.vue";
import { useGetStarSet } from "./composables/useGetStarSet";
import { DEFAULT_STAR_AMOUNT } from "./constants";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  score: {
    type: Number,
    default: 0
  },
  starSet: {
    type: Number,
    default: 5
  },
  readonly: {
    type: Boolean,
    default: false
  }
});

const scoreValue = ref<number>(0)
const { starsSet, generate } = useGetStarSet(props.starSet)
let animationFrameId: number | null = null;

const emits = defineEmits<{
  (e: "valueChange", value: number): void;
  (e: "update:modelValue", value: number): void;
}>();

const handleStarClick = (index: number) => {
  if (props.starSet === 5 && !props.readonly) {
    const score = index + 1;
    emits("valueChange", score);
    emits("update:modelValue", score);
    scoreValue.value = score;
  }
}

const hovering = (el: MouseEvent, hovering: boolean) => {
  let starAttr = (el.target as HTMLElement).dataset.star;
  if (starAttr && hovering) {
    const starNr = +starAttr;

    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
    }

    animationFrameId = requestAnimationFrame(() => {
      [...Array(DEFAULT_STAR_AMOUNT).keys()].forEach((star, index) => {
        starsSet.value[index] = index <= starNr ? 100 : 0;
      })
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
