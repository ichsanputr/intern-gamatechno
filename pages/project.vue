<template>
    <div id="works">
        <h2>Projects 👨‍💻</h2>
        <p class="pb-10">Projects I have completed, including personal projects, study projects, and projects in a team</p>
        <section class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Project v-for="data in dataProject" :key="data" class="worksCard" :project="data.project" 
            :description="data.description" :icon="data.icon" :stack="data.stack" :url="data.url"/>
        </section>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            dataProject: null
        }
    },
    async fetch() {
        const { data } = await axios.get('https://portfolio.muhammadichsan.com/json/project.json')
        this.dataProject = data.data
        console.log(this.dataProject)
    },
    head() {
        return{
            title: "Project - Muhammad Ichsan"
        }
    }
}
</script>