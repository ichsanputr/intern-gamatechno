<template>
    <a :href=url target="_blank" class="
      flex flex-col
      justify-center
      shadow-lg
      overflow-hidden
      border-2 border-teal-600
      dark:border-slate-200
      hover:border-gray-700
      dark:hover:border-teal-300
      hover:shadow-lg
      dark:hover:bg-gray-800
      h-full m-auto p-2 w-full
    ">
        <div class="cardContent">
            <div class="cardInfo">
                <h3>{{project}}</h3>
                <span>{{stack}}: <i :class=icon></i></span>
            </div>
            <p>{{description}}</p>
        </div>
    </a>
</template>

<script>
export default {
    props: {
        project: String,
        stack: String,
        description: String,
        url: String,
        icon: String
    }
}
</script>

<style lang="scss">
.cardContent {
    @apply flex flex-col h-full w-full p-2 ;
    .cardInfo {
        @apply pb-4;
        > span {
            @apply block text-sm text-right;
        }
    }
    > p {
        @apply mt-auto;
    }
}
i {
    font-size: 24px
}
</style>