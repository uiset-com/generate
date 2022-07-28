<template>
  <component :is="icon" :size="size" :color="color" />
</template>

<script>
import * as icons from "lucide-vue-next";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 20
    },
    color: {
      type: String,
      default: "currentColor"
    }
  },
  setup(props) {
    const icon = computed(() => icons[props.name])

    return { icon }
  }
};
</script>
