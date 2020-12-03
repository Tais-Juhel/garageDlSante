<template>
    <div class="addCarVue">
        <input class="inputText" type="text" placeholder="Brand" v-model="brand">
        <input class="inputText" type="text" placeholder="Serial Number" v-model="serialNumber">

        <input id="create" type="button" value="Create" @click="createCar">
    </div>
</template>

<script>
export default {
    name:'addCarVue',
    data: function() {
        return{
            brand: '',
            serialNumber: ''
        }
    }
}
</script>

<style lang="scss">
.addCarVue{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    height: 150px;
    width: 400px;
    padding: 40px 0;
    box-shadow: 0 0 10px 0px lightgrey;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;

    input{
        height: 30px;
        width: 250px;
        border: none;
    }
    .inputText{
        border-bottom: solid 1px grey;
        outline: none;
    }
    #create{
        margin: 0 auto;
        width: 100px;
        background-color: green;
        color: white;
    }
}
</style>