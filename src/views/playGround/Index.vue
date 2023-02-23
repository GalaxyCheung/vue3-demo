<template>
  <div style="padding: 10px">
    <div style="margin-bottom: 15px">
      <router-link :to="{ name: 'home' }"> 返回首页 </router-link>
      <span style="margin: 0 15px">|</span>
      <router-link :to="{ name: 'refAndReactive' }">
        ref、reactive
      </router-link>
    </div>

    {{ launch }}

    <router-view />
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Index",
  apollo: {
    launch: gql`
      query {
        launch(flight_number: 1) {
          flight_number
          mission_name
          rocket {
            rocket_id
            rocket_name
            rocket_type
          }
        }
      }
    `,
  },
};
</script>
