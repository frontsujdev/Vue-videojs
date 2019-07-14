<template>
	<div class="app">
		<p>ok</p>
		<rtmp :option="option"></rtmp>
	</div>
</template>


<script>
 	import rtmp  from './rtmp.vue'
	export default{
		mounted(){
		},
		data(){
			return {
				option:{
					proload:'none',
					id:'test',
					width:'960px',
					height:'720px',
					src:'rtmp://192.168.148.128/app&'
				}
			}
		},
		components:{
			rtmp:rtmp
		}
	}
</script>