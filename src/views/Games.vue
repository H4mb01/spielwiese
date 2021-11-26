<template>
    <div class="games">
        <h1>Games</h1>
        <button v-for="(link, name) in games" :key="name" @click="game=name" >{{name}}</button>
        <iframe v-if="game" :src="games[game]" frameborder="0"></iframe>
    </div>
</template>

<script>
export default {
    name: "Games",
    data() {
        return {
            games: {
                "Wuppern": "http://h4mb01.github.io/"
            },
            game: ""
        }
    }
}
</script>

<style>

</style>

<style scoped>

    iframe {
        width: 100%;
        height: 80vh;
    }
</style>