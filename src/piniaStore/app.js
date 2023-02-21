import Cookies from "js-cookie";
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    sidebar: {
      opened: Cookies.get("sidebarStatus")
        ? !!+Cookies.get("sidebarStatus")
        : true,
      withoutAnimation: false,
      hide: false,
    },
    device: "desktop",
    size: Cookies.get("size") || "default",
  }),
  getters: {
    getSidebar: state => state.sidebar,
    getSize: state => state.size,
    getDevice: state => state.device,
  },
  actions: {
    toggleSideBar() {
      if (this.sidebar.hide) {
        return false;
      }
      this.sidebar.opened = !this.sidebar.opened;
      this.sidebar.withoutAnimation = false;
      if (this.sidebar.opened) {
        Cookies.set("sidebarStatus", 1);
      } else {
        Cookies.set("sidebarStatus", 0);
      }
    },
    closeSideBar(withoutAnimation) {
        Cookies.set("sidebarStatus", 0);
        this.sidebar.opened = false;
        this.sidebar.withoutAnimation = withoutAnimation;
    },
    toggleDevice(device) {
      this.device = device;
    },
    setSize(size) {
      this.size = size;
      Cookies.set("size", size);
    },
    toggleSideBarHide(status) {
      this.sidebar.hide = status;
    },
  }
})
