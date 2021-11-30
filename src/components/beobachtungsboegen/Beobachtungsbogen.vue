<template>
    <div class="beobachtungsbogen" :key="`rerenderer-${rerender}`">
        <h1> {{ kind }} </h1>
        <div v-for="(bildungsbereich, name) in bildungsbereiche" :key="name" class="bildungsbereich">
            <h2 class="bereichTitle" 
            :class="{
                eins: (name === 'Hören, Sehen, Verstehen'), 
                zwei: (name === 'Sprechen'), 
                drei: (name === 'Bewegung, Geschicklichkeit'), 
                vier: (name === 'Körperkontrolle'),
                fünf: (name === 'Emotionalität, Soziales Miteinander' ),
                sechs: (name === 'Denken')}" 
            >
                {{name}}
            </h2>
            <div v-for="eintrag in bildungsbereich" :key="eintrag.id" @click="toggleEintragClr(name, eintrag.id)" class="eintrag"
                :class="{
                    eins: ( eintrag['erfüllt'] && name === 'Hören, Sehen, Verstehen'), 
                    zwei: ( eintrag['erfüllt'] && name === 'Sprechen'), 
                    drei: ( eintrag['erfüllt'] && name === 'Bewegung, Geschicklichkeit'), 
                    vier: ( eintrag['erfüllt'] && name === 'Körperkontrolle'),
                    fünf: ( eintrag['erfüllt'] && name === 'Emotionalität, Soziales Miteinander' ),
                    sechs: ( eintrag['erfüllt'] && name === 'Denken')
                }" >
                <span class="id"> {{ eintrag.id }} </span>
                <span class="beschreibung" v-if="showBeschreibungen"> {{ eintrag.beschreibung }} </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Beobachtungsbogen",
    data() {
        return {
            rerender: 0,
        }
    },
    props: {
        kind: String,
        bildungsbereiche: Object,
        showBeschreibungen: Boolean
    },
    mounted(){
        for(const bildungsbereich of Object.entries(this.bildungsbereiche)){
            for(let eintrag of Object.entries(bildungsbereich)){
                eintrag["erfüllt"] = false
            }
        }
        console.log(this.bildungsbereiche)
    },
    methods: {
        toggleEintragClr(name, id){
            if(this.bildungsbereiche[name].find(e => e['id'] === id)["erfüllt"]){
                this.bildungsbereiche[name].find(e=> e['id'] === id)["erfüllt"] = false
            } else {  
                this.bildungsbereiche[name].find(e=> e['id'] === id)["erfüllt"] = true
            }
            this.rerender +=1;
        }
    }
}
</script>

<style>

</style>

<style scoped>
* {
    --clr-bb-100: red;
    --clr-bb-200: lightgreen;
    --clr-bb-300: orange;
    --clr-bb-400: blue;
    --clr-bb-500: pink;
    --clr-bb-600: lightblue;
}
.bereichTitle {
    background-color: grey;
}
.eins {
    background-color: var(--clr-bb-100);
}
.zwei {
    background-color: var(--clr-bb-200);
}
.drei {
    background-color: var(--clr-bb-300);
}
.vier {
    background-color: var(--clr-bb-400);
}
.fünf {
    background-color: var(--clr-bb-500);
}
.sechs {
    background-color: var(--clr-bb-600);
}








.eintrag {
    display: inline-block;
    font-weight: bold;
    padding: 5px;
    margin: .25ch;
    border: 1px solid black;
    border-radius: 3px;
    vertical-align: top;
    user-select: none;
    cursor: pointer;
    min-width: 3ch;
    text-align: center;
}
.bildungsbereich {
    display: inline-block;
    max-width: 40ch;
    border: 1px solid transparent;
}
.beschreibung {
    font-size: .7rem;
}
</style>