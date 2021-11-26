<template>
    <div class="CSS">
        <h1>CSS</h1>
        <p>Hier kommen ein paar CSS Basteleien von mir hin</p>
        <div class="stuff">
            <div class="wrapper">
                <Painting />
            </div>
        </div>
    </div>
</template>

<script>
import Painting from "../components/CSS/Painting.vue"

export default {
    name: "CSS",
    components: {
        Painting
    }

}
</script>

<style>

</style>

<style scoped>
    .CSS {
        text-align: center;
    }
    .stuff {
        display: flex;
        flex-flow:column wrap;
    }
    .stuff:first-child {
        margin-left: auto;
    }
    .stuff:last-child {
        margin-right: auto;
    }

</style>