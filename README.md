# v_video
a rtmp player with vue.js and videojs

#please allow chrome to run the flash extention!!!
## install 
```
npm install v_video --save-dev
```
## usage
```
import rtmp from 'v_video'

export default{
    components:{
        rtmp
    }
}


in the template

<rtmp :option=option></rtmp>


option:{
    id:'a unique id to draw the rtmp stream',
    width:'',
    height:'',
    src:'your rtmp stream url',
    preload:'see the valid value in video.js',
    poster:'the url of photo which is display during the stream loading period'
} 


```
