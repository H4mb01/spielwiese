<template>
    <div class="bbRegister">
        <h2>Register</h2>
        <div class="grid">
            <label for="name">Name:</label>
            <input required type="text" name="name" id="name" v-model="name">
            <label for="password">Passwort: </label>
            <input required type="password" name="password" id="password" v-model="password">
            <button id="loginBtn" @click="register()" >Login</button>
        </div>
        <br>
        <router-link class="registerLink" to="/beobachtungsboegen/login">du hast schon einen Account? hier einloggen </router-link>
    </div>
</template>

<script>
export default {
    name: "Register"
}
</script>

<style>

</style>

<style scoped>

</style>