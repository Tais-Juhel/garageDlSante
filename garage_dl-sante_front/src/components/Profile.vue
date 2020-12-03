<template>
    <div class="profileVue">
        <table>
            <tr class="info">
                <td class="label">Name:</td>
                <td class="data">{{ name }}</td>
                <td class="updateButton" @click="updateName">Modifier</td>
            </tr>
            <tr class="info">
                <td class="label">First Name:</td>
                <td class="data">{{ firstName }}</td>
                <td class="updateButton" @click="updateFirstName">Modifier</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'profileVue',
    data: function() {
        return {
            name: 'Franck',
            firstName: 'Lorean'
        }
    },
    methods: {
        updateName() {
            let prompt = window.prompt('Change name', this.name)

            if(prompt == null || prompt == ""){
                return
            } else {
                this.name = prompt
            }
        },
        updateFirstName() {
            let prompt = window.prompt('Change first name', this.firstName)

            if(prompt == null || prompt == ""){
                return
            } else {
                this.firstName = prompt
            }
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
}
</style>