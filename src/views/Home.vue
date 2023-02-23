<template>
  <div>
    <div>
      <router-link :to="{ name: 'playGround' }"> 返回练习场 </router-link>
    </div>
    <div>
      <router-link :to="{ name: 'piniaTest' }"> pinia测试 </router-link>
    </div>
    <div>
      <router-link :to="{ name: 'xlsxTest' }"> xlsx导出测试 </router-link>
    </div>
  </div>
</template>

<script setup name="Home">
</script>
