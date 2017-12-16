<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">
          Material Design With Vue.js Demo
        </div>

        <div class="md-subhead">
          :D
        </div>
      </md-card-header>

      <md-card-content>
        <md-button class="md-raised md-primary" v-on:click.native="fillTable()">Fill Table</md-button>
        <md-button class="md-raised md-primary" v-on:click.native="clearTable()">Clear Table</md-button>
      </md-card-content>

      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>First name</md-table-head>
            <md-table-head>Last name</md-table-head>
            <md-table-head>Email</md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="contact in contacts" v-bind:key="contact.firstName">
            <md-table-cell>{{ contact.firstName }}</md-table-cell>
            <md-table-cell>{{ contact.lastName }}</md-table-cell>
            <md-table-cell>{{ contact.email }}</md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-card>
  </div>
</template>

<script>
  // import Hello from './components/Hello'
  export default {
    name: 'Table',
    data: function() {
      return {
        contacts: []
      }
    },
    methods: {
      fillTable: function() {
        this.contacts.push({firstName: 'Eron', lastName: 'Castro', email: 'eroncastro@test.com'});
        this.contacts.push({firstName: 'Eron2', lastName: 'Castro', email: 'eroncastro2@test.com'});
        this.contacts.push({firstName: 'Eron3', lastName: 'Castro', email: 'eroncastro3@test.com'});
        console.log(contacts);
      },
      clearTable: function() {
        this.contacts.splice(0, this.contacts.length);
      }
    }
  }
</script>

<style>

</style>