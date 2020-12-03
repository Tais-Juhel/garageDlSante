<template>
    <div class="Garage">
        <div class="garage">
            <table>
                <GarageVue v-for="item in garage" :key="item" :id="item.id" :brand="item.brand" :serialNumber="item.serialNumber"/>
            </table>

            <router-link class="addCar" to="/car/add">Add +</router-link>
        </div>
    </div>
</template>

<script>
import GarageVue from '../components/Garage.vue'

export default {
    name: 'garage',
    components: { GarageVue },
    data: function() {
        return {
            garage: [
                {
                    id: 1,
                    brand: 'Honda',
                    serialNumber: '1515Z5FA983'
                },
                {
                    id:2,
                    brand: 'Renault',
                    serialNumber: '1889D2HT56'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.Garage{
  position: absolute;
  top: 0;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  z-index: -1;

  .garage{
        position: relative;
        display: flex;
        flex-wrap: wrap;
        padding: 50px 10px;
        box-shadow: 0 0 10px 0px lightgrey;
        flex-direction: column;
        align-content: center;
        justify-content: center;

        table{
            border-collapse: separate;
            border-spacing: 20px;
        }

        .addCar{
            margin: auto;
            margin-top: 20px;
            text-decoration: none;
            color: white;
            background-color: green;
            padding: 5px 0;
            width: 70px;
            border-radius: 5px;
        }
  }
}
</style>