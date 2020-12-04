<template>
    <div class="editCarVue">
        <input class="inputText" type="text" name="brand" id="brand" v-model="car.carBrand">
        <input class="inputText" type="text" name="serialNumber" id="serialNumber" v-model="car.carSerialNumber">

        <input id="update" type="button" value="Update" @click="updateCar">
        <p id="comfirmMsg"></p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'editCarVue',
    data: function() {
        return {
            car: [],
            carId: 0
        }
    },
    methods: {
        updateCar() {
            document.getElementById('comfirmMsg').innerHTML = ""

            axios
            .put(`http://localhost:3000/car/${ this.carId }`, this.car)

            setTimeout(() => {document.getElementById('comfirmMsg').innerHTML = "The car has been updated"}, 500)
        }
    },
    mounted() {
        this.carId = window.location.hash.replace('#/car/','')

        axios
        .get(`http://localhost:3000/car/${ this.carId }`)
        .then(res => {this.car = res.data})
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