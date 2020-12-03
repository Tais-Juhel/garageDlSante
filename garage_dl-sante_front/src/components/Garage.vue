<template>
    <tr class="car">
        <td class="brand">{{ brand }}</td>
        <td class="serialNumber">{{ serialNumber }}</td>
        <td class="editButton"><router-link class="editLink" :to="`/car/${id}`">Edit</router-link></td>
        <td class="deleteButton" @click="deleteCar">Delete</td>
    </tr>
</template>

<script>
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