<template>
  <div>
    <div>
      // sidebar对象赋值为引用传递，appStore的值修改后新属性会同步更改
      <p>appStore.sidebar.hide: {{ sidebar.hide }} and toRefsHide {{ toRefsSidebar.hide }}</p>

      // device赋值为值传递，appStore的值修改后新属性不会更改
      <p>appStore.device: {{ device }} and toRefDevice {{ toRefDevice }}</p>

      <button @click="switchAppStoreStatus">切换appStoreStatus</button>
    </div>

    <div>
      <button @click="reset">重置store</button>
    </div>

    <div>
      <button @click="patchStore">批量修改数据</button>
    </div>
  </div>
</template>

<script setup name="PiniaTest">
import { storeToRefs } from 'pinia';
import { useAppStore } from '../../piniaStore/app';

const appStore = useAppStore();
const { sidebar, device } = appStore;
const toRefsSidebar= storeToRefs(appStore).sidebar
const toRefDevice = storeToRefs(appStore).device

const switchAppStoreStatus = () => {
  console.log(appStore.getSidebar);
  appStore.toggleSideBarHide(!appStore.sidebar.hide)
  console.log(appStore.getSidebar);

  console.log(appStore.device);
  appStore.toggleDevice(appStore.device === 'mobile' ? 'desktop' : 'mobile');
  console.log(appStore.device);
}

// 重置store
const reset = () => {
  appStore.$reset();
};

// 批量修改数据
const patchStore = () => {
  appStore.$patch({
    sidebar: {
      opened:  true,
      withoutAnimation: false,
      hide: false,
    },
    device: "patch"
  });
};
</script>
