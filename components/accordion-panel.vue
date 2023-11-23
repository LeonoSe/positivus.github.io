<script setup>
  import { ref } from 'vue';
  const props = defineProps({
    title: { type: String, required: true },
    index: { type: Number, required: true },
  });
  const showPanel = ref(false);
  const togglePanel = (event) => {
    showPanel.value = !showPanel.value;
  }
</script>

<template>
  <div class="flex items-center w-full cursor-pointer" :class="showPanel && 'pb-8'" @click.prevent="togglePanel">
    <p class="text-3xl pr-4 lg:lg:text-6xl">0{{ index + 1 }}</p>
    <h4 class="text-xl">{{ title }}</h4>
    <span class="ml-auto accordion-icon"></span>
  </div>
  <div class="pt-8 border-black border-t" v-if="showPanel">
    <slot></slot>
  </div>
</template>