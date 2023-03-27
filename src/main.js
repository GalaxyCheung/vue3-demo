import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createApolloProvider } from '@vue/apollo-option';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import './assets/styles/global.scss';
import { createPinia } from "pinia";
const pinia = createPinia();

// 与 API 的 HTTP 连接
const httpLink = createHttpLink({
  // 你需要在这里使用绝对路径
  uri: 'http://localhost:5000/graphql',
})

// 缓存实现
const cache = new InMemoryCache()

// 创建 apollo 客户端
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

createApp(App).use(router).use(apolloProvider).use(pinia).mount('#app')
