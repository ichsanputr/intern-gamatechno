<template>        
    <div class="card skillCard">
       <div class="skillTitle"><i title="HTML+CSS" :class=icon></i></div>
       <div class="skillValue">
          <svg height="120" width="120" class="skillRing">
             <circle stroke="white" fill="transparent" stroke-width="4" r="52" cx="60" cy="60" class="outerRing"></circle>
             <circle stroke="white" fill="transparent" stroke-width="4" r="52" cx="60" cy="60" :stroke-dashoffset=fillCircle() stroke-dasharray="326.7256359733385 326.7256359733385"  class="ring"></circle>
          </svg>
          <span class="absolute text-2xl text-teal-900 dark:text-white font-mono font-bold">{{level}}</span>
       </div>
       <div class="skillContent">{{tech_stack}}</div>
    </div>
</template>
<script>
export default {
    props: {
        tech_stack: String,
        level: Number,
        icon: String
    },
    data(){
        const levels = this.$props.level

        return{
            fillCircle() {
                return 320 - (((100 / 5) * levels) / 80 * 320)
            }
        }
    }
}
</script>

<style lang="scss">
.skillRing {
    @apply block;
    width: 120px;
    height: 120px;
}
.skillCard {
    i {
        @apply text-4xl;
        width: 120px;
        height: 120px;
    }
    .skillTitle {
        @apply text-2xl font-bold font-mono tracking-wider;
    }
    .skillValue {
        @apply inline-flex items-center justify-center overflow-hidden rounded-full;
    }
    .skillContent {
        @apply mb-auto mt-4;
    }
    @apply relative;
}
.outerRing {
    @apply stroke-slate-200 dark:stroke-gray-700;
}
.ring{
    @apply stroke-teal-600 dark:stroke-teal-400;
    transition: stroke-dashoffset .5s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
}
</style>