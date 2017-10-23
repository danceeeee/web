// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
// import router from './router'
import VueRouter from 'Vue-router'
import IndexPage from './pages/index.vue'
import VueResouce from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResouce);

let router = new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			component:IndexPage,
		}                          
	]
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout>',
  components: { Layout }
})
