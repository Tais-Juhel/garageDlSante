<template>
    <tr class="car">
        <td class="brand">{{ brand }}</td>
        <td class="serialNumber">{{ serialNumber }}</td>
        <td class="editButton"><router-link class="editLink" :to="`/car/${id}`">Edit</router-link></td>
        <td class="deleteButton"><button  @click="deleteCar">Delete</button></td>
    </tr>
</template>

<script>
import axios from 'axios'

export default {
    name: 'car',
    props: {
        id: {
            type: Number,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        serialNumber: {
            type: String,
            required: true
        }
    },
    methods: {
        deleteCar() {
            console.log('toototot')

            axios
            .delete(`http://localhost:3000/car/${ this.id }`)

            location.reload()
        }
    }
}
</script>

<style lang="scss">
.car{
    width: 100%;
    height: 30px;

    td{
        width: 25%;
    }

    .editButton{
        
        .editLink{
            display: block;
            margin: auto;
            width: 70px;
            padding: 10px 0;
            text-decoration: none;
            background-color: blue;
            color: white;
            border-radius: 5px;
        }
    }

    .deleteButton{
        background-color: red;
        color: white;
        border-radius: 5px;
        width: 120px;
    }
}
</style>