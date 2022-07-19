import { ComponentOptionsMixin, ComputedOptions, DefineComponent, MethodOptions } from "vue";

type EmitEvents = 'update:modelValue' | 'valueChange';

interface VueStarRating {
  score?: number;
  modelValue?: number;
  starSet?: 5 | 10
}

interface PublicMethods extends MethodOptions {
}

declare const _default: DefineComponent<VueStarRating,
  {},
  {},
  ComputedOptions,
  PublicMethods,
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  EmitEvents[],
  EmitEvents,
  VueStarRating
  >

export default _default;