import React, { useEffect } from 'react'
import { Viewer } from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";

let viewer=null;
export default function Earth() {
  useEffect(()=>{
    console.log('首次加载')
    if(viewer===null){
      viewer=new Viewer("cesiumContainer")
    }
  },[])
  return (
    <div id='cesiumContainer'></div>
  )
}
