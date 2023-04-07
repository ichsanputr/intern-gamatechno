<template>
    <div id="about">
        <h2 class="pb-6">About Me 🧑</h2>
        <div class="pb-10 grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            <p class="order-last md:order-first mt-8 md:mt-0">A SMK student, a learner of Cloud Computing, Backend, and Computer Science. I like to learn something new and put the knowledge I have gained into an article. <br><br> I like computer science since I was 15 years old, I started everything by self-taught, watching youTube videos, reading tutorials and now I have started to mastering english languange and finally i like read documentation :)</p>
            <div>
                <img class="order-first md:order-last w-1/2 md:w-2/5 m-auto rounded-full" src="/image/profile.jpg"></img>
            </div>
        </div>
        <section class="text-lg">
            <h2>Education</h2>
            <p class="mt-4">My school journey from elementary to high school</p>
            <div class="educationCardGroup mt-8 mb-4">
                <Education v-for="education in dataEducation" :key="education.school" :school="education.school" :startYear="parseInt(education.startYear)" :endYear="parseInt(education.endYear)"/>
            </div>
        </section>
        <section class="text-lg">
            <h2 class="mt-0">Skill</h2>
            <p class="mt-4 mb-2">Technology skills that I have learned for 4 years, because I started programming 4 years ago :)</p>
            <p>The circle indicator represents the year I studied</p>
            <div class="skillCardGroup mt-8">
                <Skill v-for="data in dataSkill" :level="parseInt(data.level)" :key="data.icon" :tech_stack="data.tech_stack" :icon="data.icon"/>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    head() {
        return{
            title: "About Me - Muhammad Ichsan"
        }
    },
    data(){
        return {
            dataEducation: null,
            dataSkill: null
        }
    },
    async fetch() {
        const { data } = await axios.get('http://localhost:3000/json/education.json')
        this.dataEducation = data.data

        const data_skill = await axios.get('http://localhost:3000/json/skill.json')
        this.dataSkill = data_skill.data.data
    },
}
</script>

<style lang="scss">
.educationCardGroup,.skillCardGroup{
    @apply grid gap-4 grid-cols-1;
}
.skillCardGroup {
    @apply md:grid-cols-4;
}
.educationCardGroup {
    @apply md:grid-cols-3;
}
</style>

