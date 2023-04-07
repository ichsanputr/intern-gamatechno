<template>
    <div class="experience">
        <dt>{{date}}</dt>
        <dd>{{detail}}</dd>
    </div>
</template>

<script>
export default {
    props: {
        date: String,
        detail: String
    }
}
</script>

<style lang="scss">
.experience {
    @apply grid grid-cols-7 mb-2 last:mb-0 items-center;
    dt, dd {
        @apply rounded;
    }
    dt {
        @apply col-start-1 col-end-2 py-2 px-4 bg-teal-400 text-white text-center;
        word-break: keep-all;
    }
    dd {
        @apply col-start-2 col-end-9 ml-4
    }
}
</style>