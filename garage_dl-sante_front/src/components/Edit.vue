<template>
    <div class="editCarVue">
        <input class="inputText" type="text" name="brand" id="brand" v-model="brand">
        <input class="inputText" type="text" name="serialNumber" id="serialNumber" v-model="serialNumber">

        <input id="update" type="button" value="Update" @click="updateCar">
    </div>
</template>

<script>
export default {
    name: 'editCarVue',
    data: function() {
        return {
            brand: 'Honda',
            serialNumber: '1541ZFZF49T'
        }
    }
}
</script>

<style lang="scss">
.editCarVue{
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
    #update{
        margin: 0 auto;
        width: 100px;
        background-color: blue;
        color: white;
    }
}
</style>