<template>
  <a :href=url target="_blank" class="
      flex flex-col
      justify-center
      shadow-lg
      overflow-hidden
      border-2 border-teal-300
      dark:border-slate-200
      hover:border-gray-700
      dark:hover:border-teal-300
      hover:shadow-lg
      dark:hover:bg-gray-800
    ">
    <div class="p-8">
      <div class="text-2xl font-bold">{{ title }}</div>
      <p class="mt-2 text-base font-medium text-gray-600 dark:text-slate-300">on {{ tag }}</p>
    </div>
  </a>  
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
  },
};
</script>
