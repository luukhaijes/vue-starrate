import { ComponentOptionsMixin, ComputedOptions, DefineComponent, MethodOptions } from "vue";

type EmitEvents = '';

interface VueStarRating {
  score?: Date
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