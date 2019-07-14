<template>
	<div class="video-rtmp-wrap" :style="{width:option.width,height:option.height,position:'relative'}">
				
		<video 
			:style="{position:'absolute',top:0,left:0}"
			:id="option.id" 
			class="video-js vjs-default-skin"  
			autoplay 
			:height="option.height" 
			:width="option.width" 
			:poster="option.poster" 
			:preload="option.preload"			
		>
			<source :src="option.src" type="rtmp/flv" >
		</video>
		<div :style="{position:'absolute',top:'1em',left:'1em'}">
			<div class="title">现场实况</div>
			<div class="time-now">{{realTime}}</div>
		</div>
	</div>
</template>

<script>
	import tp from 'easy-time-parser'
	import videojs from 'video.js'
	import Flash from 'videojs-flash' 
	export default{
		data(){
			return{
				player:null,
				timeParser:null,
				realTime:'',
				timer:null
			}
		},
		mounted(){
			this.timeParser = new tp()
			this.timer = setInterval(()=>{
				this.realTime=this.timeParser.now()
			})
			this.player = videojs(this.option.id,
				{techOrder: ['flash']}
			)
			this.player.play()

		},
		props:['option']
	}

</script>

<style lang="scss">
	.video-rtmp-wrap{
		background-color:#000;
		.title{
			font-size:20px;font-weight:600;color:#fff;
			padding:5px;
		}
		.time-now{
			font-size:18px;color:red
		}
	}
</style>