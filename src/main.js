import Vue from 'vue'
import '../node_modules/video.js/dist/video-js.min.css'
import app from './component/app.vue'

new Vue({
	el:'#root',
	render:h=>h(app)
})