<template>
<div :class="dark ? 'dark' : 'light'">
    <div class="flex flex-col min-h-screen bg-white dark:text-white dark:bg-gray-900">
        <header>
            <div class="logo">
                <h1 class="text-2xl"><NuxtLink to="/" exact-active-class="" exact>Muhammad Ichsan 👋</NuxtLink></h1>
            </div>
            <NavMenu />
            <div class="text-2xl toggle absolute top-4 right-4 md:top-12 md:right-16" :class="dark ? 'text-gray-100' : 'text-gray-900'">
                <button @click="toggleTheme">
                    <font-awesome-icon icon="fas fa-moon" />
                </button>
            </div>
        </header>
        <transition name="move">
            <Nuxt class="content" />
        </transition>
        <div class="footer">
            <footer>
                <span>2023 - Muhammad Ichsan - Build with Nuxt.js</span>
            </footer>
        </div>
    </div>
</div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        computed: {
            ...mapGetters(['dark'])
        },
        methods: {
            ...mapMutations(['setDark']),
            toggleTheme() {
                this.setDark(!this.dark)
            }
        },
        mounted () {
            if (localStorage.theme === undefined) {
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    localStorage.theme = 'dark'
                    this.setDark(true)
                } else {
                    localStorage.theme = 'light'
                }
            } else {
                this.setDark(localStorage.theme === 'dark')
            }
        }
    }
</script>

<style lang="scss">
html{
    zoom:110%
}
header {
    @apply flex flex-col items-center;
    h1 {
        @apply text-6xl font-bold my-8;
    }
}
.content {
    @apply flex flex-col flex-1 my-8 mx-auto w-11/12 md:w-3/4;
    section {
        @apply mb-12 last:mb-0;
    }
    h1 {
        @apply text-5xl font-bold leading-normal;
    }
    h2 {
        @apply text-4xl font-bold mb-0 mt-10 leading-normal;
    }
    h3 {
        @apply text-2xl font-medium mt-2 mb-6 leading-normal;
    }
}
.footer {
    @apply flex flex-col items-center bg-slate-700 mt-12 text-white h-16 justify-center tracking-wider;
}
.card {
    @apply flex flex-col items-center p-4 border-2 border-teal-300 shadow-lg;
}
</style>