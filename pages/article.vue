<template>
    <div id="docs">
        <h2>Article ✍🏻</h2>
        <p class="pb-10">My article written on personal website and dev.to</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ArticleCard v-for="blog in dataBlog" :key="blog.title" :title="blog.title" :url="blog.url" :tag="blog.tag"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    head() {
        return {
            title: 'Article - Muhammad Ichsan',
        }
    },
    data() {
        return {
            dataBlog: null,
        }
    },
    async fetch() {
        const { data } = await axios.get('http://localhost:3000/json/blog.json')
        this.dataBlog = data.data
    },
    name: 'Blog Page'
}
</script>