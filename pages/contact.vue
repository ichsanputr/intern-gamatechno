<template>
    <div id="contact">
        <h2>Contact Me 💬</h2>
        <p class="pb-10">Please contact me if you have any needs with me, I'm online all the time except when I'm not holding my phone :)</p>
        <ul>
            <li>• <IconsGmail/> Gmail = ichsanfadhil67@gmail.com</li>
            <li>• <IconsLinkedin/> Linkedin = muhammad-ichsan</li>
            <li>• <IconsGithub/> Github = ichsanputr</li>
            <li>• <IconsFacebook/> Facebook = Muhammad Ichsan</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    head() {
        return{
            title: "Contact - Muhammad Ichsan"
        }
    }
}
</script>
   
<style lang="scss">
    svg {
        @apply inline;
        width: 20px;
        height: 20px;
    }
</style>