<template>
  <div style="padding: 10px">
    <div style="margin-bottom: 15px">
      <router-link :to="{ name: 'Home' }"> 返回首页 </router-link>
      <span style="margin: 0 15px">|</span>
      <router-link :to="{ name: 'RefAndReactive' }">
        ref、reactive
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>
