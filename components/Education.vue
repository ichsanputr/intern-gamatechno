<template>
    <div class="card educationCard">
        <div class="educationTitle">{{school}}</div>
        <div class="educationYear">{{startYear}} - {{endYear}}</div>
    </div>
</template>

<script>
export default {
    props: {
        school: String,
        startYear: Number,
        endYear: Number
    }
}
</script>

<style lang="scss">
.educationCard {
    .educationTitle {
        @apply text-2xl font-bold tracking-wider;
    }
    .educationYear {
        @apply mt-2 my-auto;
    }
}
</style>