<template>
    <div class="home">
        <router-link class="linkHome" :to="`/${userId}/profile`">Profile</router-link>
        <router-link class="linkHome" :to="`/${userId}/garage`">Garage</router-link>
    </div>
</template>

<script>
export default {
    name: 'home',
    data: () => {
        return {
            userId: 2
        }
    },
    mounted() {
        this.userId = window.location.hash.replace('#/','')
    }
}
</script>

<style lang="scss">
.home{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    height: 100px;
    width: 400px;
    padding: 40px 0;
    box-shadow: 0 0 10px 0px lightgrey;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;

    .linkHome{
        padding: 10px 0px;
        width: 250px;
        border: none;
        background-color: #f1f1f1;
        border-radius: 5px;
        text-decoration: none;
        color: black;
        box-shadow: 0 0 5px 0 lightgrey;
    }
}
</style>