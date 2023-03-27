<template>
  <div>
    <div>
      <router-link :to="{ name: 'PlayGround' }"> 返回练习场 </router-link>
    </div>
    <div>
      <router-link :to="{ name: 'PiniaTest' }"> pinia测试 </router-link>
    </div>
    <div>
      <router-link :to="{ name: 'XlsxTest' }"> xlsx导出测试 </router-link>
    </div>
    <div>
      <router-link :to="{ name: 'GraphQLTest' }"> graphQL测试 </router-link>
    </div>
  </div>
</template>

<script setup name="Home">
</script>
