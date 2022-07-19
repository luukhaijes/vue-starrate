import { ref } from "vue";
import { DEFAULT_STAR_AMOUNT } from "../constants";

export const useGetStarSet = (starSet: number) => {
  const starsSet = ref<number[]>([]);

  const generate = (score: number) => {
    const scoreHalved = starSet === 5 ? score : score / 2;
    const fillCount = Math.floor(scoreHalved);
    let remainder = 0
    if (scoreHalved % 1 !== 0) {
      remainder = Number(parseFloat((scoreHalved % 1).toString()).toFixed(2));
    }

    const remainderPercentage = remainder * 100;
    const stars: number[] = [];
    for (let i = 0; i < fillCount; i++) {
      stars.push(100);
    }
    stars.push(remainderPercentage);

    [...Array(DEFAULT_STAR_AMOUNT).keys()].forEach((index) => {
      starsSet.value[index] = stars[index];
    });
  }

  return {
    generate,
    starsSet
  };
};