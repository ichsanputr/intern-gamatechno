<template>
    <div class="nav">
        <NuxtLink to="/">About Me</NuxtLink>
        <NuxtLink to="/project">Project</NuxtLink>
        <NuxtLink to="/experience">Experience</NuxtLink>
        <NuxtLink to="/article">Article</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
    </div>
</template>

<style lang="scss">
.nav {
    @apply md:flex border-b-2 flex-col md:flex-row items-center md:border-b-2 md:border-b-black dark:border-b-slate-600 md:border-solid md:gap-12 justify-center m-auto w-full md:w-11/12 dark:text-white;
    a {
        @apply block py-2 px-8 md:-mb-1 md:hover:bg-black md:hover:font-bold md:hover:text-white;
        min-width: 64px;
        &.nuxt-link-exact-active {
            @apply font-bold text-white bg-black dark:bg-slate-600 ;
        }
    }
}
</style>