<template>
    <div id="contact">
        <h2>My Experience ☀️</h2>
        <p class="pb-10">My experience while in the high school, including competition, learn, and do project.</p>
        <section>
            <Experience v-for="experience in dataExperience" :key="experience" :date="experience.date" :detail="experience.detail" />
        </section>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ExperiencePage',
    head() {
        return {
            title: "Experience - Muhammad Ichsan"
        }
    },
    data() {
        return {
            dataExperience: null,
        }
    },
    async fetch() {
        const { data } = await axios.get('http://localhost:3000/json/experience.json')
        this.dataExperience = data.data
        console.log(this.dataExperience)
    },
}
</script>