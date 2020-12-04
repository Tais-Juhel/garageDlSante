<template>
    <div class="addCarVue">
        <input class="inputText" type="text" placeholder="Brand" v-model="carBrand">
        <input class="inputText" type="text" placeholder="Serial Number" v-model="carSerialNumber">

        <a href='/'><input id="create" type="button" value="Create" @click="dataPrepare"></a>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'addCarVue',
    data: function() {
        return{
            carBrand: "",
            carSerialNumber: "",
            customerId: 1
        }
    },
    methods: {
        dataPrepare(){
            let car = {
                carBrand: this.carBrand,
                carSerialNumber: this.carSerialNumber,
                customerId: this.customerId
            }
            console.log(car)
            this.createCar(car)
        },
        createCar(car) {
            axios
            .post('http://localhost:3000/car', car)
        }
    },
    mounted() {
        let hash = window.location.hash.replace('#/','').replace('/car/add', '') 
        this.customerId = parseInt(hash, 10)           
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