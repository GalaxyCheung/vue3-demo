<template>
  <div>
    <button @click="switchSidebarStatus">切换sidebar</button>
  </div>
</template>

<script setup name="Home">
import { useAppStore } from '../../piniaStore/app'

const appStore = useAppStore();
console.log(appStore.device);

const switchSidebarStatus = () => {
  console.log(appStore.getSidebar.hide);
  appStore.toggleSideBarHide(!appStore.sidebar.hide)
  console.log(appStore.getSidebar.hide);
}
</script>
