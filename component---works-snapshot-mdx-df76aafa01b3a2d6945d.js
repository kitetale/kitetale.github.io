"use strict";(self.webpackChunkashley_kim=self.webpackChunkashley_kim||[]).push([[719],{6872:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return y},default:function(){return v}});var i=a(3366),o=(a(7294),a(4983)),r=(a(1082),a(198)),n=a(70),d=a(1601),m=a(4018),s=a(2224),l=a(9764),p=a(4692),c=a(7076),h=a(7689),g=a(5163),u=a(7271),x=["components"],y={title:"Snapshot",description:"Snapshot is a Kinect-based project that displays a composite image of what was captured over time through depth.",title_color:"#565252",order:11,hero_img:"../src/images/snapshot/snapshot_hero.png",hero_img_alt:"One output of snapshot taken in a bedroom",hero_img_description:"Snapshot Example",next:"Thalassia",next_link:"thalassia",next_color:"#DBFFF9",next_img:"../src/images/thalassia/main.jpg",prev:"Cre·​ate",prev_link:"create",prev_color:"#565252",prev_img:"../src/images/create/main.jpeg"},f={_frontmatter:y};function v(e){var t=e.components,a=(0,i.Z)(e,x);return(0,o.mdx)("wrapper",Object.assign({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("div",{className:r.wo},(0,o.mdx)("div",{className:r.G_},(0,o.mdx)("div",null,(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Overview"))),(0,o.mdx)("div",{className:r.UG},"Snapshot is a Kinect-based project that displays a composite image of what was captured over time through depth. Each layer that builds up the image contains the outline of objects captured at different depth range at different time. The layers are organized by time: The oldest capture is at the background and the newest capture is at the foreground.")),(0,o.mdx)("div",{className:r.m},(0,o.mdx)("div",{className:r.um},(0,o.mdx)("div",null,(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Duration "))),(0,o.mdx)("div",{className:r.UG},"Nov 22 - Dec 6,2022 ",(0,o.mdx)("br",null)," (2 weeks)")),(0,o.mdx)("div",{className:r.um},(0,o.mdx)("div",null,(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Tool "))),(0,o.mdx)("div",{className:r.UG},"openFrameworks ",(0,o.mdx)("br",null)," Kinect ",(0,o.mdx)("br",null)," Thermal Printer")))),(0,o.mdx)("div",{className:r.z$},"Inspiration"),(0,o.mdx)("div",{style:{marginBottom:"3rem"}},(0,o.mdx)("p",null,"Extending the from ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/kitetale/Travel-Over-Time"}," ",(0,o.mdx)("i",null,"Travel Over Time ")," "),"\nproject, I wanted to further find a way to capture a location over time.\nDepending on the time of the day, the same location may be empty or extremely crowded.\nSometimes an unexpected passes by the location, but it would be only seen at that specific time.\nWondering what the output would look like if each depth layer is the capture of the same location from different point of time,\nI developed a program that separately saves the kinect input image by depth range and compiles randomly selected images per layer\nfrom the past in a chronological order.")),(0,o.mdx)("div",{className:r.z$},"Process"),(0,o.mdx)("div",{className:r.yP,style:{paddingBottom:"0.5rem"}},(0,o.mdx)("div",{style:{margin:"auto",width:"80%",paddingBottom:"0.5rem"}},"I first used Kinect to get the depth data of the scene"),(0,o.mdx)("img",{style:{width:"100%"},src:n.Z,alt:"depth data image from Kinect camera"})),(0,o.mdx)("div",{className:r.h_,style:{paddingBottom:"0.5rem"}},(0,o.mdx)("img",{style:{width:"100%"},src:d.Z,alt:"point cloud created from depth data obtained from Kinect camera"}),(0,o.mdx)("div",{style:{margin:"auto",width:"80%",paddingBottom:"0.5rem"}}," Then I created point cloud with the depth information as z ")),(0,o.mdx)("div",{className:r.yP,style:{paddingBottom:"0.5rem"}},(0,o.mdx)("div",{style:{margin:"auto",width:"80%",paddingBottom:"0.5rem"}},"I then divided the points into 6 buckets based on their depth range with HSB color value, which is also based on depth"),(0,o.mdx)("img",{style:{width:"100%"},src:m.Z,alt:"point cloud points divided into 6 buckets, sorted by color"})),(0,o.mdx)("div",{className:r.h_,style:{paddingBottom:"0.5rem"}},(0,o.mdx)("img",{style:{width:"100%"},src:s.Z,alt:"point cloud points above put into triangular mesh by connecting adjacent three points"}),(0,o.mdx)("div",{style:{margin:"auto",width:"80%",paddingBottom:"0.5rem"}}," I also created triangular mesh out of points per bucket ")),(0,o.mdx)("div",{className:r.yP,style:{paddingBottom:"0.5rem"}},(0,o.mdx)("div",{style:{margin:"auto",width:"80%",paddingBottom:"0.5rem"}},"I wrote a function that would automatically save the data per layer every certain time interval (e.g. every minute, every 10 seconds, etc.)",(0,o.mdx)("p",null,"These are different views of Kinect:"),(0,o.mdx)("p",null,"(Starting with top left and clock-wise: depth data, RGB data, object outlines, compiled depth buckets in grayscale, individual bucket in grayscale)")),(0,o.mdx)("img",{style:{width:"100%"},src:l.Z,alt:"different views and data obtained from Kinect camera. Starting with top left and clock-wise: depth data, RGB data (normal camera), object outlines, compiled depth buckets in grayscale, individual bucket in grayscale."})),(0,o.mdx)("div",{className:r.z$,style:{marginTop:"3rem"}},"How It works"),(0,o.mdx)("div",{style:{marginBottom:"3rem"}},"Upon pressing a button to capture, the program generates 6 random numbers and sorts them in order to pull captured layers in chronological order. It then combines the layers all together by taking the biggest pixel value across 6 layer images. Once the image is constructed, it frames in a polaroid template with location and timeframe (also saved and retrieved in the same manner as the layers) below the image."),(0,o.mdx)("div",{style:{margin:"auto",justifyContent:"center",display:"flex"}},(0,o.mdx)("img",{className:r.BH,src:p.Z,alt:"Example snapshot outputs."})),(0,o.mdx)("div",{className:r.z$,style:{marginTop:"3rem"}},"Exhibition Installation"),(0,o.mdx)("div",{style:{margin:"auto",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}},(0,o.mdx)("img",{style:{width:"40%",boxShadow:"0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",marginRight:"1rem",marginBottom:"1rem"},src:c.Z,alt:"Exhibition of Snapshot at The STUDIO for Creative Inquiry."}),(0,o.mdx)("img",{style:{width:"40%",boxShadow:"0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",marginRight:"1rem",marginBottom:"1rem"},src:u.Z,alt:"Exhibition of Snapshot at The STUDIO for Creative Inquiry."}),(0,o.mdx)("img",{style:{width:"40%",boxShadow:"0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",marginRight:"1rem",marginBottom:"1rem"},src:h.Z,alt:"Exhibition of Snapshot at The STUDIO for Creative Inquiry."}),(0,o.mdx)("img",{style:{width:"40%",boxShadow:"0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",marginRight:"1rem",marginBottom:"1rem"},src:g.Z,alt:"Exhibition of Snapshot at The STUDIO for Creative Inquiry."})))}v.isMDXComponent=!0},3366:function(e,t,a){function i(e,t){if(null==e)return{};var a,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}a.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=component---works-snapshot-mdx-df76aafa01b3a2d6945d.js.map