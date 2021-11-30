<template>
    <div class="beobachtungsboegen">
        <h1>Beobachtungsbögen</h1>
        <input type="text" name="neu" id="neu" v-if="showNeu">
        <button class="button" @click="showNeu = showNeu ? false : true">neu</button>
        <br>
        <button @click="showBeobachtungsbogen = showBeobachtungsbogen ? false : true" >show</button>
        <button @click="showBeschreibungen = showBeschreibungen ? false : true" >Beschreibungen ein-/ausblenden</button>
        <Beobachtungsbogen v-if="showBeobachtungsbogen" :bildungsbereiche="bildungsbereiche" :showBeschreibungen="showBeschreibungen" />
    </div>
</template>

<script>
import Beobachtungsbogen from "../components/beobachtungsboegen/Beobachtungsbogen.vue"

import jsondata from "../json/bildungsbereiche.json"
export default {
    name: "beobachtungsboegen",
    components: {
        Beobachtungsbogen
    },
    data() {
        return {
            showNeu: false,
            showBeobachtungsbogen: false,
            showBeschreibungen: false,
            bildungsbereiche: jsondata.Bildungsbereiche,
        }
    }

}
</script>

<style>

</style>

<style scoped>

</style>