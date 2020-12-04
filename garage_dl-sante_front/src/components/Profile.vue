<template>
    <div class="profileVue">
        <table>
            <tr class="info">
                <td class="label">Name:</td>
                <td class="data">{{ customer.customerName }}</td>
                <td class="updateButton" @click="updateName">Edit</td>
            </tr>
            <tr class="info">
                <td class="label">First Name:</td>
                <td class="data">{{ customer.customerFirstName }}</td>
                <td class="updateButton" @click="updateFirstName">Edit</td>
            </tr>
        </table>
        <button @click="updateCustomer">Comfirm</button>
        <p id="comfirmMsg"></p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'profileVue',
    data() {
        return {
            customer: [],
            userId: ''
        }
    },
    mounted() {
        this.userId = window.location.hash.replace('#/','').replace('/profil', '')

        axios
        .get(`http://localhost:3000/customer/${this.userId}`, this.customer)
        .then(res => {this.customer = res.data})
    },
    methods: {
        updateName() {
            let prompt = window.prompt('Change name', this.name)

            if(prompt == null || prompt == ""){
                return
            } else {
                this.customer.customerName = prompt
            }
        },
        updateFirstName() {
            let prompt = window.prompt('Change first name', this.firstName)

            if(prompt == null || prompt == ""){
                return
            } else {
                this.customer.customerFirstName = prompt
            }
        },
        updateCustomer() {
            document.getElementById('comfirmMsg').innerHTML = ""

            axios
            .put(`http://localhost:3000/customer/${ this.customer.customerId }`, this.customer)

            setTimeout(() => { document.getElementById('comfirmMsg').innerHTML = "Your profile has been updated"}, 500);

            location.reload()
        }
    }
}
</script>

<style lang="scss">
.profileVue{
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 450px;
  min-height: 250px;
  box-shadow: 0 0 10px 0px lightgrey;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  table{
      width: 400px;
      border-collapse : separate;
      border-spacing : 20px;

      tr{
        height: 30px;
        padding: 80px;

        td{
            width: 33%;
        }
      }
  }

  .info{
      width: 100%;
      margin: 20px auto;

      .label{
          text-align: right;
      }

      .data{
          padding: 5px;
          width: 100px;
          background-color: #272822;
          color: white;
          border-radius: 5px;
      }

      .updateButton{
          height: 28.4px;
          width: 100px;
          background-color: blue;
          color: white;
          border-radius: 5px;
      }
  }

  button{
      margin: 0 auto;
      margin-top: 30px;
      height: 30px;
      width: 100px;
      background-color: green;
      color: white;
      border: none;
      border-radius: 5px;
  }
}
</style>