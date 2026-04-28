var Cm=Object.defineProperty;var Pm=(r,e,t)=>e in r?Cm(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ai=(r,e,t)=>Pm(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ru="174",Dm=0,mh=1,Lm=2,dd=1,Um=2,Ui=3,fr=0,wn=1,Fi=2,ar=0,ys=1,mc=2,_h=3,gh=4,Im=5,Ur=100,Nm=101,Fm=102,Om=103,Bm=104,zm=200,km=201,Hm=202,Vm=203,_c=204,gc=205,Gm=206,Wm=207,Xm=208,Ym=209,qm=210,$m=211,Km=212,Zm=213,jm=214,vc=0,xc=1,Sc=2,Ds=3,Mc=4,yc=5,Ec=6,Tc=7,pd=0,Jm=1,Qm=2,lr=0,e_=1,t_=2,n_=3,i_=4,r_=5,s_=6,o_=7,md=300,Ls=301,Us=302,bc=303,wc=304,fl=306,Ac=1e3,Nr=1001,Rc=1002,mi=1003,a_=1004,Yo=1005,yi=1006,Sl=1007,Fr=1008,Gi=1009,_d=1010,gd=1011,Ro=1012,Cu=1013,Yr=1014,Bi=1015,zo=1016,Pu=1017,Du=1018,Is=1020,vd=35902,xd=1021,Sd=1022,di=1023,Md=1024,yd=1025,Es=1026,Ns=1027,Ed=1028,Lu=1029,Td=1030,Uu=1031,Iu=1033,Ia=33776,Na=33777,Fa=33778,Oa=33779,Cc=35840,Pc=35841,Dc=35842,Lc=35843,Uc=36196,Ic=37492,Nc=37496,Fc=37808,Oc=37809,Bc=37810,zc=37811,kc=37812,Hc=37813,Vc=37814,Gc=37815,Wc=37816,Xc=37817,Yc=37818,qc=37819,$c=37820,Kc=37821,Ba=36492,Zc=36494,jc=36495,bd=36283,Jc=36284,Qc=36285,eu=36286,l_=3200,c_=3201,u_=0,h_=1,tr="",ei="srgb",Fs="srgb-linear",Za="linear",mt="srgb",Qr=7680,vh=519,f_=512,d_=513,p_=514,wd=515,m_=516,__=517,g_=518,v_=519,xh=35044,Sh="300 es",zi=2e3,ja=2001;class Xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],za=Math.PI/180,tu=180/Math.PI;function ko(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[r&255]+sn[r>>8&255]+sn[r>>16&255]+sn[r>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function it(r,e,t){return Math.max(e,Math.min(t,r))}function x_(r,e){return(r%e+e)%e}function Ml(r,e,t){return(1-t)*r+t*e}function Ks(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function En(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,n,i,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],y=i[4],v=i[7],A=i[2],w=i[5],b=i[8];return s[0]=o*_+a*M+l*A,s[3]=o*m+a*y+l*w,s[6]=o*p+a*v+l*b,s[1]=c*_+u*M+h*A,s[4]=c*m+u*y+h*w,s[7]=c*p+u*v+h*b,s[2]=f*_+d*M+g*A,s[5]=f*m+d*y+g*w,s[8]=f*p+d*v+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(yl.makeScale(e,t)),this}rotate(e){return this.premultiply(yl.makeRotation(-e)),this}translate(e,t){return this.premultiply(yl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yl=new Ye;function Ad(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ja(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function S_(){const r=Ja("canvas");return r.style.display="block",r}const Mh={};function Ar(r){r in Mh||(Mh[r]=!0,console.warn(r))}function M_(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function y_(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function E_(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T_(){const r={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===mt&&(i.r=Hi(i.r),i.g=Hi(i.g),i.b=Hi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(i.r=Ts(i.r),i.g=Ts(i.g),i.b=Ts(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===tr?Za:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Fs]:{primaries:e,whitePoint:n,transfer:Za,toXYZ:yh,fromXYZ:Eh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:yh,fromXYZ:Eh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),r}const ut=T_();function Hi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ts(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let es;class b_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{es===void 0&&(es=Ja("canvas")),es.width=e.width,es.height=e.height;const n=es.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=es}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ja("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Hi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hi(t[n]/255)*255):t[n]=Hi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let w_=0;class Nu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=ko(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(El(i[o].image)):s.push(El(i[o]))}else s=El(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function El(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?b_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let A_=0;class An extends Xs{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,n=Nr,i=Nr,s=yi,o=Fr,a=di,l=Gi,c=An.DEFAULT_ANISOTROPY,u=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=ko(),this.name="",this.source=new Nu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==md)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ac:e.x=e.x-Math.floor(e.x);break;case Nr:e.x=e.x<0?0:1;break;case Rc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ac:e.y=e.y-Math.floor(e.y);break;case Nr:e.y=e.y<0?0:1;break;case Rc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=md;An.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,i=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(d+1)/2,A=(p+1)/2,w=(u+f)/4,b=(h+_)/4,C=(g+m)/4;return y>v&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=b/n):v>A?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=C/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=b/s,i=C/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R_ extends Xs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new An(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Nu(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends R_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Rd extends An{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mi,this.minFilter=mi,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class C_ extends An{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mi,this.minFilter=mi,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),w=Math.atan2(A,p*M);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}const v=a*M;if(l=l*m+f*v,c=c*m+d*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Th.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tl.copy(this).projectOnVector(e),this.sub(Tl)}reflect(e){return this.sub(Tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tl=new B,Th=new Ho;class Vo{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ci):ci.fromBufferAttribute(s,o),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qo.copy(n.boundingBox)),qo.applyMatrix4(e.matrixWorld),this.union(qo)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),$o.subVectors(this.max,Zs),ts.subVectors(e.a,Zs),ns.subVectors(e.b,Zs),is.subVectors(e.c,Zs),$i.subVectors(ns,ts),Ki.subVectors(is,ns),xr.subVectors(ts,is);let t=[0,-$i.z,$i.y,0,-Ki.z,Ki.y,0,-xr.z,xr.y,$i.z,0,-$i.x,Ki.z,0,-Ki.x,xr.z,0,-xr.x,-$i.y,$i.x,0,-Ki.y,Ki.x,0,-xr.y,xr.x,0];return!bl(t,ts,ns,is,$o)||(t=[1,0,0,0,1,0,0,0,1],!bl(t,ts,ns,is,$o))?!1:(Ko.crossVectors($i,Ki),t=[Ko.x,Ko.y,Ko.z],bl(t,ts,ns,is,$o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new B,new B,new B,new B,new B,new B,new B,new B],ci=new B,qo=new Vo,ts=new B,ns=new B,is=new B,$i=new B,Ki=new B,xr=new B,Zs=new B,$o=new B,Ko=new B,Sr=new B;function bl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Sr.fromArray(r,s);const a=i.x*Math.abs(Sr.x)+i.y*Math.abs(Sr.y)+i.z*Math.abs(Sr.z),l=e.dot(Sr),c=t.dot(Sr),u=n.dot(Sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const P_=new Vo,js=new B,wl=new B;class Go{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):P_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const t=js.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(js,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(wl)),this.expandByPoint(js.copy(e.center).sub(wl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new B,Al=new B,Zo=new B,Zi=new B,Rl=new B,jo=new B,Cl=new B;class Fu{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Al.copy(e).add(t).multiplyScalar(.5),Zo.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(Al);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Zo),a=Zi.dot(this.direction),l=-Zi.dot(Zo),c=Zi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Al).addScaledVector(Zo,f),d}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);const n=Ci.dot(this.direction),i=Ci.dot(Ci)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,i,s){Rl.subVectors(t,e),jo.subVectors(n,e),Cl.crossVectors(Rl,jo);let o=this.direction.dot(Cl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,e);const l=a*this.direction.dot(jo.crossVectors(Zi,jo));if(l<0)return null;const c=a*this.direction.dot(Rl.cross(Zi));if(c<0||l+c>o)return null;const u=-a*Zi.dot(Cl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(D_,e,L_)}lookAt(e,t,n){const i=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),ji.crossVectors(n,Nn),ji.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),ji.crossVectors(n,Nn)),ji.normalize(),Jo.crossVectors(Nn,ji),i[0]=ji.x,i[4]=Jo.x,i[8]=Nn.x,i[1]=ji.y,i[5]=Jo.y,i[9]=Nn.y,i[2]=ji.z,i[6]=Jo.z,i[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],y=n[7],v=n[11],A=n[15],w=i[0],b=i[4],C=i[8],S=i[12],x=i[1],P=i[5],U=i[9],O=i[13],k=i[2],W=i[6],X=i[10],Y=i[14],H=i[3],te=i[7],D=i[11],ce=i[15];return s[0]=o*w+a*x+l*k+c*H,s[4]=o*b+a*P+l*W+c*te,s[8]=o*C+a*U+l*X+c*D,s[12]=o*S+a*O+l*Y+c*ce,s[1]=u*w+h*x+f*k+d*H,s[5]=u*b+h*P+f*W+d*te,s[9]=u*C+h*U+f*X+d*D,s[13]=u*S+h*O+f*Y+d*ce,s[2]=g*w+_*x+m*k+p*H,s[6]=g*b+_*P+m*W+p*te,s[10]=g*C+_*U+m*X+p*D,s[14]=g*S+_*O+m*Y+p*ce,s[3]=M*w+y*x+v*k+A*H,s[7]=M*b+y*P+v*W+A*te,s[11]=M*C+y*U+v*X+A*D,s[15]=M*S+y*O+v*Y+A*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,y=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,v=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,A=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,w=t*M+n*y+i*v+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=M*b,e[1]=(_*f*s-h*m*s-_*i*d+n*m*d+h*i*p-n*f*p)*b,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*b,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*b,e[4]=y*b,e[5]=(u*m*s-g*f*s+g*i*d-t*m*d-u*i*p+t*f*p)*b,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*b,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*b,e[8]=v*b,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*p-t*h*p)*b,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*b,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*b,e[12]=A*b,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*b,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*b,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,M=l*c,y=l*u,v=l*h,A=n.x,w=n.y,b=n.z;return i[0]=(1-(_+p))*A,i[1]=(d+v)*A,i[2]=(g-y)*A,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(f+p))*w,i[6]=(m+M)*w,i[7]=0,i[8]=(g+y)*b,i[9]=(m-M)*b,i[10]=(1-(f+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=rs.set(i[0],i[1],i[2]).length();const o=rs.set(i[4],i[5],i[6]).length(),a=rs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ui.copy(this);const c=1/s,u=1/o,h=1/a;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=u,ui.elements[5]*=u,ui.elements[6]*=u,ui.elements[8]*=h,ui.elements[9]*=h,ui.elements[10]*=h,t.setFromRotationMatrix(ui),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=zi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(a===zi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ja)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=zi){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,d=(n+i)*u;let g,_;if(a===zi)g=(o+s)*h,_=-2*h;else if(a===ja)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const rs=new B,ui=new wt,D_=new B(0,0,0),L_=new B(1,1,1),ji=new B,Jo=new B,Nn=new B,bh=new wt,wh=new Ho;class Wi{constructor(e=0,t=0,n=0,i=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wh.setFromEuler(this),this.setFromQuaternion(wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class Cd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let U_=0;const Ah=new B,ss=new Ho,Pi=new wt,Qo=new B,Js=new B,I_=new B,N_=new Ho,Rh=new B(1,0,0),Ch=new B(0,1,0),Ph=new B(0,0,1),Dh={type:"added"},F_={type:"removed"},os={type:"childadded",child:null},Pl={type:"childremoved",child:null};class Qt extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new B,t=new Wi,n=new Ho,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new wt},normalMatrix:{value:new Ye}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Rh,e)}rotateY(e){return this.rotateOnAxis(Ch,e)}rotateZ(e){return this.rotateOnAxis(Ph,e)}translateOnAxis(e,t){return Ah.copy(e).applyQuaternion(this.quaternion),this.position.add(Ah.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rh,e)}translateY(e){return this.translateOnAxis(Ch,e)}translateZ(e){return this.translateOnAxis(Ph,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qo.copy(e):Qo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Js,Qo,this.up):Pi.lookAt(Qo,Js,this.up),this.quaternion.setFromRotationMatrix(Pi),i&&(Pi.extractRotation(i.matrixWorld),ss.setFromRotationMatrix(Pi),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dh),os.child=e,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(F_),Pl.child=e,this.dispatchEvent(Pl),Pl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dh),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,I_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,N_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Qt.DEFAULT_UP=new B(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new B,Di=new B,Dl=new B,Li=new B,as=new B,ls=new B,Lh=new B,Ll=new B,Ul=new B,Il=new B,Nl=new _t,Fl=new _t,Ol=new _t;class ii{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hi.subVectors(e,t),i.cross(hi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){hi.subVectors(i,t),Di.subVectors(n,t),Dl.subVectors(e,t);const o=hi.dot(hi),a=hi.dot(Di),l=hi.dot(Dl),c=Di.dot(Di),u=Di.dot(Dl),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Li.x),l.addScaledVector(o,Li.y),l.addScaledVector(a,Li.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Nl.setScalar(0),Fl.setScalar(0),Ol.setScalar(0),Nl.fromBufferAttribute(e,t),Fl.fromBufferAttribute(e,n),Ol.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Nl,s.x),o.addScaledVector(Fl,s.y),o.addScaledVector(Ol,s.z),o}static isFrontFacing(e,t,n,i){return hi.subVectors(n,t),Di.subVectors(e,t),hi.cross(Di).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),hi.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return ii.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;as.subVectors(i,n),ls.subVectors(s,n),Ll.subVectors(e,n);const l=as.dot(Ll),c=ls.dot(Ll);if(l<=0&&c<=0)return t.copy(n);Ul.subVectors(e,i);const u=as.dot(Ul),h=ls.dot(Ul);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(as,o);Il.subVectors(e,s);const d=as.dot(Il),g=ls.dot(Il);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ls,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Lh.subVectors(s,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(Lh,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(as,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},ea={h:0,s:0,l:0};function Bl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ot{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=x_(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Bl(o,s,e+1/3),this.g=Bl(o,s,e),this.b=Bl(o,s,e-1/3)}return ut.toWorkingColorSpace(this,i),this}setStyle(e,t=ei){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){const n=Pd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return ut.fromWorkingColorSpace(on.copy(this),e),Math.round(it(on.r*255,0,255))*65536+Math.round(it(on.g*255,0,255))*256+Math.round(it(on.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(on.copy(this),t);const n=on.r,i=on.g,s=on.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=ei){ut.fromWorkingColorSpace(on.copy(this),e);const t=on.r,n=on.g,i=on.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(ea);const n=Ml(Ji.h,ea.h,t),i=Ml(Ji.s,ea.s,t),s=Ml(Ji.l,ea.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new ot;ot.NAMES=Pd;let O_=0;class Ys extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=ys,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=gc,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(n.blending=this.blending),this.side!==fr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_c&&(n.blendSrc=this.blendSrc),this.blendDst!==gc&&(n.blendDst=this.blendDst),this.blendEquation!==Ur&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ou extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=pd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new B,ta=new at;let B_=0;class _i{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:B_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xh,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ta.fromBufferAttribute(this,t),ta.applyMatrix3(e),this.setXY(t,ta.x,ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ks(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),i=En(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),i=En(i,this.array),s=En(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xh&&(e.usage=this.usage),e}}class Dd extends _i{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ld extends _i{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xn extends _i{constructor(e,t,n){super(new Float32Array(e),t,n)}}let z_=0;const Jn=new wt,zl=new Qt,cs=new B,Fn=new Vo,Qs=new Vo,Zt=new B;class ai extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ad(e)?Ld:Dd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,n){return Jn.makeTranslation(e,t,n),this.applyMatrix4(Jn),this}scale(e,t,n){return Jn.makeScale(e,t,n),this.applyMatrix4(Jn),this}lookAt(e){return zl.lookAt(e),zl.updateMatrix(),this.applyMatrix4(zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(Fn.min,Qs.min),Fn.expandByPoint(Zt),Zt.addVectors(Fn.max,Qs.max),Fn.expandByPoint(Zt)):(Fn.expandByPoint(Qs.min),Fn.expandByPoint(Qs.max))}Fn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Zt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Zt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Zt.fromBufferAttribute(a,c),l&&(cs.fromBufferAttribute(e,c),Zt.add(cs)),i=Math.max(i,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new B,l[C]=new B;const c=new B,u=new B,h=new B,f=new at,d=new at,g=new at,_=new B,m=new B;function p(C,S,x){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,x),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,x),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(P),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(P),a[C].add(_),a[S].add(_),a[x].add(_),l[C].add(m),l[S].add(m),l[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,S=M.length;C<S;++C){const x=M[C],P=x.start,U=x.count;for(let O=P,k=P+U;O<k;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new B,v=new B,A=new B,w=new B;function b(C){A.fromBufferAttribute(i,C),w.copy(A);const S=a[C];y.copy(S),y.sub(A.multiplyScalar(A.dot(S))).normalize(),v.crossVectors(w,S);const P=v.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,S=M.length;C<S;++C){const x=M[C],P=x.start,U=x.count;for(let O=P,k=P+U;O<k;O+=3)b(e.getX(O+0)),b(e.getX(O+1)),b(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _i(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new _i(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ai,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uh=new wt,Mr=new Fu,na=new Go,Ih=new B,ia=new B,ra=new B,sa=new B,kl=new B,oa=new B,Nh=new B,aa=new B;class pi extends Qt{constructor(e=new ai,t=new Ou){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){oa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(kl.fromBufferAttribute(h,e),o?oa.addScaledVector(kl,u):oa.addScaledVector(kl.sub(t),u))}t.add(oa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!(na.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(na,Ih)===null||Mr.origin.distanceToSquared(Ih)>(e.far-e.near)**2))&&(Uh.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(Uh),!(n.boundingBox!==null&&Mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,A=y;v<A;v+=3){const w=a.getX(v),b=a.getX(v+1),C=a.getX(v+2);i=la(this,p,e,n,c,u,h,w,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);i=la(this,o,e,n,c,u,h,M,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,A=y;v<A;v+=3){const w=v,b=v+1,C=v+2;i=la(this,p,e,n,c,u,h,w,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,y=m+1,v=m+2;i=la(this,o,e,n,c,u,h,M,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function k_(r,e,t,n,i,s,o,a){let l;if(e.side===wn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===fr,a),l===null)return null;aa.copy(a),aa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(aa);return c<t.near||c>t.far?null:{distance:c,point:aa.clone(),object:r}}function la(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,ia),r.getVertexPosition(l,ra),r.getVertexPosition(c,sa);const u=k_(r,e,t,n,ia,ra,sa,Nh);if(u){const h=new B;ii.getBarycoord(Nh,ia,ra,sa,h),i&&(u.uv=ii.getInterpolatedAttribute(i,a,l,c,h,new at)),s&&(u.uv1=ii.getInterpolatedAttribute(s,a,l,c,h,new at)),o&&(u.normal=ii.getInterpolatedAttribute(o,a,l,c,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new B,materialIndex:0};ii.getNormal(ia,ra,sa,f.normal),u.face=f,u.barycoord=h}return u}class Wo extends ai{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Xn(c,3)),this.setAttribute("normal",new Xn(u,3)),this.setAttribute("uv",new Xn(h,2));function g(_,m,p,M,y,v,A,w,b,C,S){const x=v/b,P=A/C,U=v/2,O=A/2,k=w/2,W=b+1,X=C+1;let Y=0,H=0;const te=new B;for(let D=0;D<X;D++){const ce=D*P-O;for(let Le=0;Le<W;Le++){const Ke=Le*x-U;te[_]=Ke*M,te[m]=ce*y,te[p]=k,c.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[p]=w>0?1:-1,u.push(te.x,te.y,te.z),h.push(Le/b),h.push(1-D/C),Y+=1}}for(let D=0;D<C;D++)for(let ce=0;ce<b;ce++){const Le=f+ce+W*D,Ke=f+ce+W*(D+1),K=f+(ce+1)+W*(D+1),ne=f+(ce+1)+W*D;l.push(Le,Ke,ne),l.push(Ke,K,ne),H+=6}a.addGroup(d,H,S),d+=H,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function _n(r){const e={};for(let t=0;t<r.length;t++){const n=Os(r[t]);for(const i in n)e[i]=n[i]}return e}function H_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ud(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const V_={clone:Os,merge:_n};var G_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G_,this.fragmentShader=W_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=H_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Id extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new B,Fh=new at,Oh=new at;class bn extends Id{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tu*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,Fh,Oh),t.subVectors(Oh,Fh)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(za*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,hs=1;class X_ extends Qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new bn(us,hs,e,t);i.layers=this.layers,this.add(i);const s=new bn(us,hs,e,t);s.layers=this.layers,this.add(s);const o=new bn(us,hs,e,t);o.layers=this.layers,this.add(o);const a=new bn(us,hs,e,t);a.layers=this.layers,this.add(a);const l=new bn(us,hs,e,t);l.layers=this.layers,this.add(l);const c=new bn(us,hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===zi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ja)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Nd extends An{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ls,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Y_ extends qr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Nd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Wo(5,5,5),s=new Xi({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:ar});s.uniforms.tEquirect.value=t;const o=new pi(i,s),a=t.minFilter;return t.minFilter===Fr&&(t.minFilter=yi),new X_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class so extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const q_={type:"move"};class Hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new so,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new so,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new so,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(q_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new so;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Fd extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Vl=new B,$_=new B,K_=new Ye;class Rr{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Vl.subVectors(n,t).cross($_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Vl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||K_.getNormalMatrix(e),i=this.coplanarPoint(Vl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new Go,ca=new B;class Bu{constructor(e=new Rr,t=new Rr,n=new Rr,i=new Rr,s=new Rr,o=new Rr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zi){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-s,f-c,m-d,v-p).normalize(),n[1].setComponents(l+s,f+c,m+d,v+p).normalize(),n[2].setComponents(l+o,f+u,m+g,v+M).normalize(),n[3].setComponents(l-o,f-u,m-g,v-M).normalize(),n[4].setComponents(l-a,f-h,m-_,v-y).normalize(),t===zi)n[5].setComponents(l+a,f+h,m+_,v+y).normalize();else if(t===ja)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ca.x=i.normal.x>0?e.max.x:e.min.x,ca.y=i.normal.y>0?e.max.y:e.min.y,ca.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Od extends Ys{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qa=new B,el=new B,Bh=new wt,eo=new Fu,ua=new Go,Gl=new B,zh=new B;class Z_ extends Qt{constructor(e=new ai,t=new Od){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Qa.fromBufferAttribute(t,i-1),el.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Qa.distanceTo(el);e.setAttribute("lineDistance",new Xn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(i),ua.radius+=s,e.ray.intersectsSphere(ua)===!1)return;Bh.copy(i).invert(),eo.copy(e.ray).applyMatrix4(Bh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),M=u.getX(_+1),y=ha(this,e,eo,l,p,M,_);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=ha(this,e,eo,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=ha(this,e,eo,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=ha(this,e,eo,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ha(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Qa.fromBufferAttribute(a,i),el.fromBufferAttribute(a,s),t.distanceSqToSegment(Qa,el,Gl,zh)>n)return;Gl.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Gl);if(!(c<e.near||c>e.far))return{distance:c,point:zh.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const kh=new B,Hh=new B;class j_ extends Z_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)kh.fromBufferAttribute(t,i),Hh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+kh.distanceTo(Hh);e.setAttribute("lineDistance",new Xn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bd extends Ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vh=new wt,nu=new Fu,fa=new Go,da=new B;class J_ extends Qt{constructor(e=new ai,t=new Bd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(i),fa.radius+=s,e.ray.intersectsSphere(fa)===!1)return;Vh.copy(i).invert(),nu.copy(e.ray).applyMatrix4(Vh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);da.fromBufferAttribute(h,m),Gh(da,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)da.fromBufferAttribute(h,g),Gh(da,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Gh(r,e,t,n,i,s,o){const a=nu.distanceSqToPoint(r);if(a<t){const l=new B;nu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class zd extends An{constructor(e,t,n,i,s,o,a,l,c,u=Es){if(u!==Es&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Es&&(n=Yr),n===void 0&&u===Ns&&(n=Is),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:mi,this.minFilter=l!==void 0?l:mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class zu extends ai{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new Xn(s,3)),this.setAttribute("normal",new Xn(s.slice(),3)),this.setAttribute("uv",new Xn(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const y=new B,v=new B,A=new B;for(let w=0;w<t.length;w+=3)d(t[w+0],y),d(t[w+1],v),d(t[w+2],A),l(y,v,A,M)}function l(M,y,v,A){const w=A+1,b=[];for(let C=0;C<=w;C++){b[C]=[];const S=M.clone().lerp(v,C/w),x=y.clone().lerp(v,C/w),P=w-C;for(let U=0;U<=P;U++)U===0&&C===w?b[C][U]=S:b[C][U]=S.clone().lerp(x,U/P)}for(let C=0;C<w;C++)for(let S=0;S<2*(w-C)-1;S++){const x=Math.floor(S/2);S%2===0?(f(b[C][x+1]),f(b[C+1][x]),f(b[C][x])):(f(b[C][x+1]),f(b[C+1][x+1]),f(b[C+1][x]))}}function c(M){const y=new B;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(M),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function u(){const M=new B;for(let y=0;y<s.length;y+=3){M.x=s[y+0],M.y=s[y+1],M.z=s[y+2];const v=m(M)/2/Math.PI+.5,A=p(M)/Math.PI+.5;o.push(v,1-A)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const y=o[M+0],v=o[M+2],A=o[M+4],w=Math.max(y,v,A),b=Math.min(y,v,A);w>.9&&b<.1&&(y<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),A<.2&&(o[M+4]+=1))}}function f(M){s.push(M.x,M.y,M.z)}function d(M,y){const v=M*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const M=new B,y=new B,v=new B,A=new B,w=new at,b=new at,C=new at;for(let S=0,x=0;S<s.length;S+=9,x+=6){M.set(s[S+0],s[S+1],s[S+2]),y.set(s[S+3],s[S+4],s[S+5]),v.set(s[S+6],s[S+7],s[S+8]),w.set(o[x+0],o[x+1]),b.set(o[x+2],o[x+3]),C.set(o[x+4],o[x+5]),A.copy(M).add(y).add(v).divideScalar(3);const P=m(A);_(w,x+0,M,P),_(b,x+2,y,P),_(C,x+4,v,P)}}function _(M,y,v,A){A<0&&M.x===1&&(o[y]=M.x-1),v.x===0&&v.z===0&&(o[y]=A/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zu(e.vertices,e.indices,e.radius,e.details)}}const pa=new B,ma=new B,Wl=new B,_a=new ii;class Q_ extends ai{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(za*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=_a;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),_a.getNormal(Wl),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let M=0;M<3;M++){const y=(M+1)%3,v=h[M],A=h[y],w=_a[u[M]],b=_a[u[y]],C=`${v}_${A}`,S=`${A}_${v}`;S in f&&f[S]?(Wl.dot(f[S].normal)<=s&&(d.push(w.x,w.y,w.z),d.push(b.x,b.y,b.z)),f[S]=null):C in f||(f[C]={index0:c[M],index1:c[y],normal:Wl.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:m}=f[g];pa.fromBufferAttribute(a,_),ma.fromBufferAttribute(a,m),d.push(pa.x,pa.y,pa.z),d.push(ma.x,ma.y,ma.z)}this.setAttribute("position",new Xn(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Co extends zu{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Co(e.radius,e.detail)}}class dl extends ai{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*f-o;for(let y=0;y<c;y++){const v=y*h-s;g.push(v,-M,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const y=M+c*p,v=M+c*(p+1),A=M+1+c*(p+1),w=M+1+c*p;d.push(y,v,w),d.push(v,A,w)}this.setIndex(d),this.setAttribute("position",new Xn(g,3)),this.setAttribute("normal",new Xn(_,3)),this.setAttribute("uv",new Xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.width,e.height,e.widthSegments,e.heightSegments)}}class eg extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tg extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ku extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Xl=new wt,Wh=new B,Xh=new B;class kd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bu,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wh),Xh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xh),t.updateMatrixWorld(),Xl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yh=new wt,to=new B,Yl=new B;class ng extends kd{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),to.setFromMatrixPosition(e.matrixWorld),n.position.copy(to),Yl.copy(n.position),Yl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Yl),n.updateMatrixWorld(),i.makeTranslation(-to.x,-to.y,-to.z),Yh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yh)}}class ig extends ku{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ng}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Hd extends Id{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class rg extends kd{constructor(){super(new Hd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qh extends ku{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new rg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sg extends ku{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class og extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Vd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$h(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$h();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $h(){return performance.now()}function Kh(r,e,t,n){const i=ag(n);switch(t){case xd:return r*e;case Md:return r*e;case yd:return r*e*2;case Ed:return r*e/i.components*i.byteLength;case Lu:return r*e/i.components*i.byteLength;case Td:return r*e*2/i.components*i.byteLength;case Uu:return r*e*2/i.components*i.byteLength;case Sd:return r*e*3/i.components*i.byteLength;case di:return r*e*4/i.components*i.byteLength;case Iu:return r*e*4/i.components*i.byteLength;case Ia:case Na:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Fa:case Oa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Pc:case Lc:return Math.max(r,16)*Math.max(e,8)/4;case Cc:case Dc:return Math.max(r,8)*Math.max(e,8)/2;case Uc:case Ic:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Nc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case zc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case kc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case qc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case $c:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Kc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ba:case Zc:case jc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case bd:case Jc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Qc:case eu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ag(r){switch(r){case Gi:case _d:return{byteLength:1,components:1};case Ro:case gd:case zo:return{byteLength:2,components:1};case Pu:case Du:return{byteLength:2,components:4};case Yr:case Cu:case Bi:return{byteLength:4,components:1};case vd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ru}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ru);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gd(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function lg(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ug=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_g=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Eg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Lg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ug=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ig=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Og=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",kg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,t0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,n0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,a0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,l0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,v0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,b0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,A0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,L0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,B0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,q0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Z0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,J0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ev=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,av=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_v=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ev=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Av=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Uv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:cg,alphahash_pars_fragment:ug,alphamap_fragment:hg,alphamap_pars_fragment:fg,alphatest_fragment:dg,alphatest_pars_fragment:pg,aomap_fragment:mg,aomap_pars_fragment:_g,batching_pars_vertex:gg,batching_vertex:vg,begin_vertex:xg,beginnormal_vertex:Sg,bsdfs:Mg,iridescence_fragment:yg,bumpmap_pars_fragment:Eg,clipping_planes_fragment:Tg,clipping_planes_pars_fragment:bg,clipping_planes_pars_vertex:wg,clipping_planes_vertex:Ag,color_fragment:Rg,color_pars_fragment:Cg,color_pars_vertex:Pg,color_vertex:Dg,common:Lg,cube_uv_reflection_fragment:Ug,defaultnormal_vertex:Ig,displacementmap_pars_vertex:Ng,displacementmap_vertex:Fg,emissivemap_fragment:Og,emissivemap_pars_fragment:Bg,colorspace_fragment:zg,colorspace_pars_fragment:kg,envmap_fragment:Hg,envmap_common_pars_fragment:Vg,envmap_pars_fragment:Gg,envmap_pars_vertex:Wg,envmap_physical_pars_fragment:t0,envmap_vertex:Xg,fog_vertex:Yg,fog_pars_vertex:qg,fog_fragment:$g,fog_pars_fragment:Kg,gradientmap_pars_fragment:Zg,lightmap_pars_fragment:jg,lights_lambert_fragment:Jg,lights_lambert_pars_fragment:Qg,lights_pars_begin:e0,lights_toon_fragment:n0,lights_toon_pars_fragment:i0,lights_phong_fragment:r0,lights_phong_pars_fragment:s0,lights_physical_fragment:o0,lights_physical_pars_fragment:a0,lights_fragment_begin:l0,lights_fragment_maps:c0,lights_fragment_end:u0,logdepthbuf_fragment:h0,logdepthbuf_pars_fragment:f0,logdepthbuf_pars_vertex:d0,logdepthbuf_vertex:p0,map_fragment:m0,map_pars_fragment:_0,map_particle_fragment:g0,map_particle_pars_fragment:v0,metalnessmap_fragment:x0,metalnessmap_pars_fragment:S0,morphinstance_vertex:M0,morphcolor_vertex:y0,morphnormal_vertex:E0,morphtarget_pars_vertex:T0,morphtarget_vertex:b0,normal_fragment_begin:w0,normal_fragment_maps:A0,normal_pars_fragment:R0,normal_pars_vertex:C0,normal_vertex:P0,normalmap_pars_fragment:D0,clearcoat_normal_fragment_begin:L0,clearcoat_normal_fragment_maps:U0,clearcoat_pars_fragment:I0,iridescence_pars_fragment:N0,opaque_fragment:F0,packing:O0,premultiplied_alpha_fragment:B0,project_vertex:z0,dithering_fragment:k0,dithering_pars_fragment:H0,roughnessmap_fragment:V0,roughnessmap_pars_fragment:G0,shadowmap_pars_fragment:W0,shadowmap_pars_vertex:X0,shadowmap_vertex:Y0,shadowmask_pars_fragment:q0,skinbase_vertex:$0,skinning_pars_vertex:K0,skinning_vertex:Z0,skinnormal_vertex:j0,specularmap_fragment:J0,specularmap_pars_fragment:Q0,tonemapping_fragment:ev,tonemapping_pars_fragment:tv,transmission_fragment:nv,transmission_pars_fragment:iv,uv_pars_fragment:rv,uv_pars_vertex:sv,uv_vertex:ov,worldpos_vertex:av,background_vert:lv,background_frag:cv,backgroundCube_vert:uv,backgroundCube_frag:hv,cube_vert:fv,cube_frag:dv,depth_vert:pv,depth_frag:mv,distanceRGBA_vert:_v,distanceRGBA_frag:gv,equirect_vert:vv,equirect_frag:xv,linedashed_vert:Sv,linedashed_frag:Mv,meshbasic_vert:yv,meshbasic_frag:Ev,meshlambert_vert:Tv,meshlambert_frag:bv,meshmatcap_vert:wv,meshmatcap_frag:Av,meshnormal_vert:Rv,meshnormal_frag:Cv,meshphong_vert:Pv,meshphong_frag:Dv,meshphysical_vert:Lv,meshphysical_frag:Uv,meshtoon_vert:Iv,meshtoon_frag:Nv,points_vert:Fv,points_frag:Ov,shadow_vert:Bv,shadow_frag:zv,sprite_vert:kv,sprite_frag:Hv},_e={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Si={basic:{uniforms:_n([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:_n([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ot(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:_n([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:_n([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:_n([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ot(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:_n([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:_n([_e.points,_e.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:_n([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:_n([_e.common,_e.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:_n([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:_n([_e.sprite,_e.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:_n([_e.common,_e.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:_n([_e.lights,_e.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Si.physical={uniforms:_n([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const ga={r:0,b:0,g:0},Er=new Wi,Vv=new wt;function Gv(r,e,t,n,i,s,o){const a=new ot(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const A=g(y);A===null?p(a,l):A&&A.isColor&&(p(A,1),v=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===fl)?(u===void 0&&(u=new pi(new Wo(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Os(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Er.copy(v.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(Er)),u.material.toneMapped=ut.getTransfer(A.colorSpace)!==mt,(h!==A||f!==A.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,d=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new pi(new dl(2,2),new Xi({name:"BackgroundMaterial",uniforms:Os(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ut.getTransfer(A.colorSpace)!==mt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(ga,Ud(r)),n.buffers.color.setClear(ga.r,ga.g,ga.b,v,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m,dispose:M}}function Wv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(x,P,U,O,k){let W=!1;const X=h(O,U,P);s!==X&&(s=X,c(s.object)),W=d(x,O,U,k),W&&g(x,O,U,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(x,P,U,O),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function h(x,P,U){const O=U.wireframe===!0;let k=n[x.id];k===void 0&&(k={},n[x.id]=k);let W=k[P.id];W===void 0&&(W={},k[P.id]=W);let X=W[O];return X===void 0&&(X=f(l()),W[O]=X),X}function f(x){const P=[],U=[],O=[];for(let k=0;k<t;k++)P[k]=0,U[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:O,object:x,attributes:{},index:null}}function d(x,P,U,O){const k=s.attributes,W=P.attributes;let X=0;const Y=U.getAttributes();for(const H in Y)if(Y[H].location>=0){const D=k[H];let ce=W[H];if(ce===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor)),D===void 0||D.attribute!==ce||ce&&D.data!==ce.data)return!0;X++}return s.attributesNum!==X||s.index!==O}function g(x,P,U,O){const k={},W=P.attributes;let X=0;const Y=U.getAttributes();for(const H in Y)if(Y[H].location>=0){let D=W[H];D===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(D=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(D=x.instanceColor));const ce={};ce.attribute=D,D&&D.data&&(ce.data=D.data),k[H]=ce,X++}s.attributes=k,s.attributesNum=X,s.index=O}function _(){const x=s.newAttributes;for(let P=0,U=x.length;P<U;P++)x[P]=0}function m(x){p(x,0)}function p(x,P){const U=s.newAttributes,O=s.enabledAttributes,k=s.attributeDivisors;U[x]=1,O[x]===0&&(r.enableVertexAttribArray(x),O[x]=1),k[x]!==P&&(r.vertexAttribDivisor(x,P),k[x]=P)}function M(){const x=s.newAttributes,P=s.enabledAttributes;for(let U=0,O=P.length;U<O;U++)P[U]!==x[U]&&(r.disableVertexAttribArray(U),P[U]=0)}function y(x,P,U,O,k,W,X){X===!0?r.vertexAttribIPointer(x,P,U,k,W):r.vertexAttribPointer(x,P,U,O,k,W)}function v(x,P,U,O){_();const k=O.attributes,W=U.getAttributes(),X=P.defaultAttributeValues;for(const Y in W){const H=W[Y];if(H.location>=0){let te=k[Y];if(te===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(te=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(te=x.instanceColor)),te!==void 0){const D=te.normalized,ce=te.itemSize,Le=e.get(te);if(Le===void 0)continue;const Ke=Le.buffer,K=Le.type,ne=Le.bytesPerElement,de=K===r.INT||K===r.UNSIGNED_INT||te.gpuType===Cu;if(te.isInterleavedBufferAttribute){const ie=te.data,Te=ie.stride,Oe=te.offset;if(ie.isInstancedInterleavedBuffer){for(let Pe=0;Pe<H.locationSize;Pe++)p(H.location+Pe,ie.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Pe=0;Pe<H.locationSize;Pe++)m(H.location+Pe);r.bindBuffer(r.ARRAY_BUFFER,Ke);for(let Pe=0;Pe<H.locationSize;Pe++)y(H.location+Pe,ce/H.locationSize,K,D,Te*ne,(Oe+ce/H.locationSize*Pe)*ne,de)}else{if(te.isInstancedBufferAttribute){for(let ie=0;ie<H.locationSize;ie++)p(H.location+ie,te.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ie=0;ie<H.locationSize;ie++)m(H.location+ie);r.bindBuffer(r.ARRAY_BUFFER,Ke);for(let ie=0;ie<H.locationSize;ie++)y(H.location+ie,ce/H.locationSize,K,D,ce*ne,ce/H.locationSize*ie*ne,de)}}else if(X!==void 0){const D=X[Y];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(H.location,D);break;case 3:r.vertexAttrib3fv(H.location,D);break;case 4:r.vertexAttrib4fv(H.location,D);break;default:r.vertexAttrib1fv(H.location,D)}}}}M()}function A(){C();for(const x in n){const P=n[x];for(const U in P){const O=P[U];for(const k in O)u(O[k].object),delete O[k];delete P[U]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const U in P){const O=P[U];for(const k in O)u(O[k].object),delete O[k];delete P[U]}delete n[x.id]}function b(x){for(const P in n){const U=n[P];if(U[x.id]===void 0)continue;const O=U[x.id];for(const k in O)u(O[k].object),delete O[k];delete U[x.id]}}function C(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Xv(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Yv(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==di&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const C=b===zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Gi&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Bi&&!C)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:A,maxSamples:w}}function qv(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Rr,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,y=M*4;let v=p.clippingState||null;l.value=v,v=u(g,f,y,d);for(let A=0;A!==y;++A)v[A]=t[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=d;y!==_;++y,v+=4)o.copy(h[y]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function $v(r){let e=new WeakMap;function t(o,a){return a===bc?o.mapping=Ls:a===wc&&(o.mapping=Us),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===bc||a===wc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Y_(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const vs=4,Zh=[.125,.215,.35,.446,.526,.582],Ir=20,ql=new Hd,jh=new ot;let $l=null,Kl=0,Zl=0,jl=!1;const Cr=(1+Math.sqrt(5))/2,fs=1/Cr,Jh=[new B(-Cr,fs,0),new B(Cr,fs,0),new B(-fs,0,Cr),new B(fs,0,Cr),new B(0,Cr,-fs),new B(0,Cr,fs),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],Kv=new B;class Qh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=Kv}=s;$l=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($l,Kl,Zl),this._renderer.xr.enabled=jl,e.scissorTest=!1,va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ls||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$l=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:zo,format:di,colorSpace:Fs,depthBuffer:!1},i=ef(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ef(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zv(s)),this._blurMaterial=jv(s,e,t)}return i}_compileMaterial(e){const t=new pi(this._lodPlanes[0],e);this._renderer.compile(t,ql)}_sceneToCubeUV(e,t,n,i,s){const l=new bn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(jh),h.toneMapping=lr,h.autoClear=!1;const g=new Ou({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),_=new pi(new Wo,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(jh),m=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const v=this._cubeSize;va(i,y*v,M>2?v:0,v,v),h.setRenderTarget(i),m&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ls||e.mapping===Us;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new pi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;va(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ql)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Jh[(i-s-1)%Jh.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new pi(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ir-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ir;m>Ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ir}`);const p=[];let M=0;for(let b=0;b<Ir;++b){const C=b/_,S=Math.exp(-C*C/2);p.push(S),b===0?M+=S:b<m&&(M+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const v=this._sizeLods[i],A=3*v*(i>y-vs?i-y+vs:0),w=4*(this._cubeSize-v);va(t,A,w,3*v,2*v),l.setRenderTarget(t),l.render(h,ql)}}function Zv(r){const e=[],t=[],n=[];let i=r;const s=r-vs+1+Zh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-vs?l=Zh[o-r+vs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),y=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let w=0;w<d;w++){const b=w%3*2/3-1,C=w>2?0:-1,S=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];M.set(S,_*g*w),y.set(f,m*g*w);const x=[w,w,w,w,w,w];v.set(x,p*g*w)}const A=new ai;A.setAttribute("position",new _i(M,_)),A.setAttribute("uv",new _i(y,m)),A.setAttribute("faceIndex",new _i(v,p)),e.push(A),i>vs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ef(r,e,t){const n=new qr(r,e,t);return n.texture.mapping=fl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function va(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function jv(r,e,t){const n=new Float32Array(Ir),i=new B(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function tf(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function nf(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Hu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jv(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===bc||l===wc,u=l===Ls||l===Us;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Qh(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Qh(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Qv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ar("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ex(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let y=0,v=M.length;y<v;y+=3){const A=M[y+0],w=M[y+1],b=M[y+2];f.push(A,w,w,b,b,A)}}else if(g!==void 0){const M=g.array;_=g.version;for(let y=0,v=M.length/3-1;y<v;y+=3){const A=y+0,w=y+1,b=y+2;f.push(A,w,w,b,b,A)}}else return;const m=new(Ad(f)?Ld:Dd)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function tx(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function nx(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ix(r,e,t){const n=new WeakMap,i=new _t;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let x=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let A=a.attributes.position.count*v,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const b=new Float32Array(A*w*4*h),C=new Rd(b,A,w,h);C.type=Bi,C.needsUpdate=!0;const S=v*4;for(let P=0;P<h;P++){const U=p[P],O=M[P],k=y[P],W=A*w*4*P;for(let X=0;X<U.count;X++){const Y=X*S;g===!0&&(i.fromBufferAttribute(U,X),b[W+Y+0]=i.x,b[W+Y+1]=i.y,b[W+Y+2]=i.z,b[W+Y+3]=0),_===!0&&(i.fromBufferAttribute(O,X),b[W+Y+4]=i.x,b[W+Y+5]=i.y,b[W+Y+6]=i.z,b[W+Y+7]=0),m===!0&&(i.fromBufferAttribute(k,X),b[W+Y+8]=i.x,b[W+Y+9]=i.y,b[W+Y+10]=i.z,b[W+Y+11]=k.itemSize===4?i.w:1)}}f={count:h,texture:C,size:new at(A,w)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function rx(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Wd=new An,rf=new zd(1,1),Xd=new Rd,Yd=new C_,qd=new Nd,sf=[],of=[],af=new Float32Array(16),lf=new Float32Array(9),cf=new Float32Array(4);function qs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=sf[i];if(s===void 0&&(s=new Float32Array(i),sf[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function $t(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Kt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function pl(r,e){let t=of[e];t===void 0&&(t=new Int32Array(e),of[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function sx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ox(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2fv(this.addr,e),Kt(t,e)}}function ax(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;r.uniform3fv(this.addr,e),Kt(t,e)}}function lx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4fv(this.addr,e),Kt(t,e)}}function cx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;cf.set(n),r.uniformMatrix2fv(this.addr,!1,cf),Kt(t,n)}}function ux(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;lf.set(n),r.uniformMatrix3fv(this.addr,!1,lf),Kt(t,n)}}function hx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;af.set(n),r.uniformMatrix4fv(this.addr,!1,af),Kt(t,n)}}function fx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function dx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2iv(this.addr,e),Kt(t,e)}}function px(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;r.uniform3iv(this.addr,e),Kt(t,e)}}function mx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4iv(this.addr,e),Kt(t,e)}}function _x(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function gx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2uiv(this.addr,e),Kt(t,e)}}function vx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;r.uniform3uiv(this.addr,e),Kt(t,e)}}function xx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4uiv(this.addr,e),Kt(t,e)}}function Sx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(rf.compareFunction=wd,s=rf):s=Wd,t.setTexture2D(e||s,i)}function Mx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yd,i)}function yx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||qd,i)}function Ex(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Xd,i)}function Tx(r){switch(r){case 5126:return sx;case 35664:return ox;case 35665:return ax;case 35666:return lx;case 35674:return cx;case 35675:return ux;case 35676:return hx;case 5124:case 35670:return fx;case 35667:case 35671:return dx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return _x;case 36294:return gx;case 36295:return vx;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return yx;case 36289:case 36303:case 36311:case 36292:return Ex}}function bx(r,e){r.uniform1fv(this.addr,e)}function wx(r,e){const t=qs(e,this.size,2);r.uniform2fv(this.addr,t)}function Ax(r,e){const t=qs(e,this.size,3);r.uniform3fv(this.addr,t)}function Rx(r,e){const t=qs(e,this.size,4);r.uniform4fv(this.addr,t)}function Cx(r,e){const t=qs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Px(r,e){const t=qs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Dx(r,e){const t=qs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Lx(r,e){r.uniform1iv(this.addr,e)}function Ux(r,e){r.uniform2iv(this.addr,e)}function Ix(r,e){r.uniform3iv(this.addr,e)}function Nx(r,e){r.uniform4iv(this.addr,e)}function Fx(r,e){r.uniform1uiv(this.addr,e)}function Ox(r,e){r.uniform2uiv(this.addr,e)}function Bx(r,e){r.uniform3uiv(this.addr,e)}function zx(r,e){r.uniform4uiv(this.addr,e)}function kx(r,e,t){const n=this.cache,i=e.length,s=pl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Wd,s[o])}function Hx(r,e,t){const n=this.cache,i=e.length,s=pl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Yd,s[o])}function Vx(r,e,t){const n=this.cache,i=e.length,s=pl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||qd,s[o])}function Gx(r,e,t){const n=this.cache,i=e.length,s=pl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Xd,s[o])}function Wx(r){switch(r){case 5126:return bx;case 35664:return wx;case 35665:return Ax;case 35666:return Rx;case 35674:return Cx;case 35675:return Px;case 35676:return Dx;case 5124:case 35670:return Lx;case 35667:case 35671:return Ux;case 35668:case 35672:return Ix;case 35669:case 35673:return Nx;case 5125:return Fx;case 36294:return Ox;case 36295:return Bx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Gx}}class Xx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Tx(t.type)}}class Yx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wx(t.type)}}class qx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Jl=/(\w+)(\])?(\[|\.)?/g;function uf(r,e){r.seq.push(e),r.map[e.id]=e}function $x(r,e,t){const n=r.name,i=n.length;for(Jl.lastIndex=0;;){const s=Jl.exec(n),o=Jl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){uf(t,c===void 0?new Xx(a,r,e):new Yx(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new qx(a),uf(t,h)),t=h}}}class ka{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);$x(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function hf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Kx=37297;let Zx=0;function jx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ff=new Ye;function Jx(r){ut._getMatrix(ff,ut.workingColorSpace,r);const e=`mat3( ${ff.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(r)){case Za:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function df(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+jx(r.getShaderSource(e),o)}else return i}function Qx(r,e){const t=Jx(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function eS(r,e){let t;switch(e){case e_:t="Linear";break;case t_:t="Reinhard";break;case n_:t="Cineon";break;case i_:t="ACESFilmic";break;case s_:t="AgX";break;case o_:t="Neutral";break;case r_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xa=new B;function tS(){ut.getLuminanceCoefficients(xa);const r=xa.x.toFixed(4),e=xa.y.toFixed(4),t=xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function iS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function oo(r){return r!==""}function pf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sS=/^[ \t]*#include +<([\w\d./]+)>/gm;function iu(r){return r.replace(sS,aS)}const oS=new Map;function aS(r,e){let t=$e[e];if(t===void 0){const n=oS.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return iu(t)}const lS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _f(r){return r.replace(lS,cS)}function cS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function gf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===dd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Um?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function hS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ls:case Us:e="ENVMAP_TYPE_CUBE";break;case fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function dS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case pd:e="ENVMAP_BLENDING_MULTIPLY";break;case Jm:e="ENVMAP_BLENDING_MIX";break;case Qm:e="ENVMAP_BLENDING_ADD";break}return e}function pS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function mS(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=uS(t),c=hS(t),u=fS(t),h=dS(t),f=pS(t),d=nS(t),g=iS(s),_=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(oo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(oo).join(`
`),p.length>0&&(p+=`
`)):(m=[gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),p=[gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?$e.tonemapping_pars_fragment:"",t.toneMapping!==lr?eS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Qx("linearToOutputTexel",t.outputColorSpace),tS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oo).join(`
`)),o=iu(o),o=pf(o,t),o=mf(o,t),a=iu(a),a=pf(a,t),a=mf(a,t),o=_f(o),a=_f(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+o,v=M+p+a,A=hf(i,i.VERTEX_SHADER,y),w=hf(i,i.FRAGMENT_SHADER,v);i.attachShader(_,A),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(P){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(A).trim(),k=i.getShaderInfoLog(w).trim();let W=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,w);else{const Y=df(i,A,"vertex"),H=df(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+Y+`
`+H)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||k==="")&&(X=!1);X&&(P.diagnostics={runnable:W,programLog:U,vertexShader:{log:O,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(A),i.deleteShader(w),C=new ka(i,_),S=rS(i,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,Kx)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let _S=0;class gS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new vS(e),t.set(e,n)),n}}class vS{constructor(e){this.id=_S++,this.code=e,this.usedTimes=0}}function xS(r,e,t,n,i,s,o){const a=new Cd,l=new gS,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,x,P,U,O){const k=U.fog,W=O.geometry,X=S.isMeshStandardMaterial?U.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),H=Y&&Y.mapping===fl?Y.image.height:null,te=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const D=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ce=D!==void 0?D.length:0;let Le=0;W.morphAttributes.position!==void 0&&(Le=1),W.morphAttributes.normal!==void 0&&(Le=2),W.morphAttributes.color!==void 0&&(Le=3);let Ke,K,ne,de;if(te){const ge=Si[te];Ke=ge.vertexShader,K=ge.fragmentShader}else Ke=S.vertexShader,K=S.fragmentShader,l.update(S),ne=l.getVertexShaderID(S),de=l.getFragmentShaderID(S);const ie=r.getRenderTarget(),Te=r.state.buffers.depth.getReversed(),Oe=O.isInstancedMesh===!0,Pe=O.isBatchedMesh===!0,tt=!!S.map,Ze=!!S.matcap,Se=!!Y,L=!!S.aoMap,gt=!!S.lightMap,Be=!!S.bumpMap,z=!!S.normalMap,ye=!!S.displacementMap,nt=!!S.emissiveMap,be=!!S.metalnessMap,R=!!S.roughnessMap,E=S.anisotropy>0,V=S.clearcoat>0,Q=S.dispersion>0,J=S.iridescence>0,Z=S.sheen>0,ue=S.transmission>0,oe=E&&!!S.anisotropyMap,fe=V&&!!S.clearcoatMap,Ve=V&&!!S.clearcoatNormalMap,re=V&&!!S.clearcoatRoughnessMap,se=J&&!!S.iridescenceMap,Ue=J&&!!S.iridescenceThicknessMap,De=Z&&!!S.sheenColorMap,ve=Z&&!!S.sheenRoughnessMap,We=!!S.specularMap,Fe=!!S.specularColorMap,st=!!S.specularIntensityMap,I=ue&&!!S.transmissionMap,le=ue&&!!S.thicknessMap,$=!!S.gradientMap,j=!!S.alphaMap,ae=S.alphaTest>0,he=!!S.alphaHash,ze=!!S.extensions;let lt=lr;S.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(lt=r.toneMapping);const Lt={shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:Ke,fragmentShader:K,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:de,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&O._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&O.instanceColor!==null,instancingMorph:Oe&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ie===null?r.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Fs,alphaToCoverage:!!S.alphaToCoverage,map:tt,matcap:Ze,envMap:Se,envMapMode:Se&&Y.mapping,envMapCubeUVHeight:H,aoMap:L,lightMap:gt,bumpMap:Be,normalMap:z,displacementMap:f&&ye,emissiveMap:nt,normalMapObjectSpace:z&&S.normalMapType===h_,normalMapTangentSpace:z&&S.normalMapType===u_,metalnessMap:be,roughnessMap:R,anisotropy:E,anisotropyMap:oe,clearcoat:V,clearcoatMap:fe,clearcoatNormalMap:Ve,clearcoatRoughnessMap:re,dispersion:Q,iridescence:J,iridescenceMap:se,iridescenceThicknessMap:Ue,sheen:Z,sheenColorMap:De,sheenRoughnessMap:ve,specularMap:We,specularColorMap:Fe,specularIntensityMap:st,transmission:ue,transmissionMap:I,thicknessMap:le,gradientMap:$,opaque:S.transparent===!1&&S.blending===ys&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:ae,alphaHash:he,combine:S.combine,mapUv:tt&&_(S.map.channel),aoMapUv:L&&_(S.aoMap.channel),lightMapUv:gt&&_(S.lightMap.channel),bumpMapUv:Be&&_(S.bumpMap.channel),normalMapUv:z&&_(S.normalMap.channel),displacementMapUv:ye&&_(S.displacementMap.channel),emissiveMapUv:nt&&_(S.emissiveMap.channel),metalnessMapUv:be&&_(S.metalnessMap.channel),roughnessMapUv:R&&_(S.roughnessMap.channel),anisotropyMapUv:oe&&_(S.anisotropyMap.channel),clearcoatMapUv:fe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(S.sheenRoughnessMap.channel),specularMapUv:We&&_(S.specularMap.channel),specularColorMapUv:Fe&&_(S.specularColorMap.channel),specularIntensityMapUv:st&&_(S.specularIntensityMap.channel),transmissionMapUv:I&&_(S.transmissionMap.channel),thicknessMapUv:le&&_(S.thicknessMap.channel),alphaMapUv:j&&_(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(z||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(tt||j),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Te,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Le,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:lt,decodeVideoTexture:tt&&S.map.isVideoTexture===!0&&ut.getTransfer(S.map.colorSpace)===mt,decodeVideoTextureEmissive:nt&&S.emissiveMap.isVideoTexture===!0&&ut.getTransfer(S.emissiveMap.colorSpace)===mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Fi,flipSided:S.side===wn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ze&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&S.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function p(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)x.push(P),x.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(M(x,S),y(x,S),x.push(r.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function M(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function y(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const x=g[S.type];let P;if(x){const U=Si[x];P=V_.clone(U.uniforms)}else P=S.uniforms;return P}function A(S,x){let P;for(let U=0,O=u.length;U<O;U++){const k=u[U];if(k.cacheKey===x){P=k,++P.usedTimes;break}}return P===void 0&&(P=new mS(r,x,S,s),u.push(P)),P}function w(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function b(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:C}}function SS(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function MS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function vf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function xf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||MS),n.length>1&&n.sort(f||vf),i.length>1&&i.sort(f||vf)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function yS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new xf,r.set(n,[o])):i>=s.length?(o=new xf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function ES(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new ot};break;case"SpotLight":t={position:new B,direction:new B,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function TS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let bS=0;function wS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function AS(r){const e=new ES,t=TS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,s=new wt,o=new wt;function a(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,y=0,v=0,A=0,w=0,b=0;c.sort(wS);for(let S=0,x=c.length;S<x;S++){const P=c[S],U=P.color,O=P.intensity,k=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=U.r*O,h+=U.g*O,f+=U.b*O;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],O);b++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,H=t.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=P.shadow.matrix,M++}n.directional[d]=X,d++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(U).multiplyScalar(O),X.distance=k,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[_]=X;const Y=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,Y.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=Y.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=W,v++}_++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(U).multiplyScalar(O),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const Y=P.shadow,H=t.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(O),X.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=X,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==A||C.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=A,C.numLightProbes=b,n.version=bS++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const y=c[p];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(y.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Sf(r){const e=new AS(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function RS(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Sf(r),e.set(i,[a])):s>=o.length?(a=new Sf(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const CS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DS(r,e,t){let n=new Bu;const i=new at,s=new at,o=new _t,a=new eg({depthPacking:c_}),l=new tg,c={},u=t.maxTextureSize,h={[fr]:wn,[wn]:fr,[Fi]:Fi},f=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:CS,fragmentShader:PS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ai;g.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pi(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dd;let p=this.type;this.render=function(w,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=r.getRenderTarget(),x=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),U=r.state;U.setBlending(ar),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=p!==Ui&&this.type===Ui,k=p===Ui&&this.type!==Ui;for(let W=0,X=w.length;W<X;W++){const Y=w[W],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const te=H.getFrameExtents();if(i.multiply(te),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/te.x),i.x=s.x*te.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/te.y),i.y=s.y*te.y,H.mapSize.y=s.y)),H.map===null||O===!0||k===!0){const ce=this.type!==Ui?{minFilter:mi,magFilter:mi}:{};H.map!==null&&H.map.dispose(),H.map=new qr(i.x,i.y,ce),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const D=H.getViewportCount();for(let ce=0;ce<D;ce++){const Le=H.getViewport(ce);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),U.viewport(o),H.updateMatrices(Y,ce),n=H.getFrustum(),v(b,C,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Ui&&M(H,C),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,x,P)};function M(w,b){const C=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new qr(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,C,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,C,d,_,null)}function y(w,b,C,S){let x=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)x=P;else if(x=C.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const U=x.uuid,O=b.uuid;let k=c[U];k===void 0&&(k={},c[U]=k);let W=k[O];W===void 0&&(W=x.clone(),k[O]=W,b.addEventListener("dispose",A)),x=W}if(x.visible=b.visible,x.wireframe=b.wireframe,S===Ui?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:h[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=r.properties.get(x);U.light=C}return x}function v(w,b,C,S,x){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Ui)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const O=e.update(w),k=w.material;if(Array.isArray(k)){const W=O.groups;for(let X=0,Y=W.length;X<Y;X++){const H=W[X],te=k[H.materialIndex];if(te&&te.visible){const D=y(w,te,S,x);w.onBeforeShadow(r,w,b,C,O,D,H),r.renderBufferDirect(C,null,O,D,w,H),w.onAfterShadow(r,w,b,C,O,D,H)}}}else if(k.visible){const W=y(w,k,S,x);w.onBeforeShadow(r,w,b,C,O,W,null),r.renderBufferDirect(C,null,O,W,w,null),w.onAfterShadow(r,w,b,C,O,W,null)}}const U=w.children;for(let O=0,k=U.length;O<k;O++)v(U[O],b,C,S,x)}function A(w){w.target.removeEventListener("dispose",A);for(const C in c){const S=c[C],x=w.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const LS={[vc]:xc,[Sc]:Ec,[Mc]:Tc,[Ds]:yc,[xc]:vc,[Ec]:Sc,[Tc]:Mc,[yc]:Ds};function US(r,e){function t(){let I=!1;const le=new _t;let $=null;const j=new _t(0,0,0,0);return{setMask:function(ae){$!==ae&&!I&&(r.colorMask(ae,ae,ae,ae),$=ae)},setLocked:function(ae){I=ae},setClear:function(ae,he,ze,lt,Lt){Lt===!0&&(ae*=lt,he*=lt,ze*=lt),le.set(ae,he,ze,lt),j.equals(le)===!1&&(r.clearColor(ae,he,ze,lt),j.copy(le))},reset:function(){I=!1,$=null,j.set(-1,0,0,0)}}}function n(){let I=!1,le=!1,$=null,j=null,ae=null;return{setReversed:function(he){if(le!==he){const ze=e.get("EXT_clip_control");le?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const lt=ae;ae=null,this.setClear(lt)}le=he},getReversed:function(){return le},setTest:function(he){he?ie(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(he){$!==he&&!I&&(r.depthMask(he),$=he)},setFunc:function(he){if(le&&(he=LS[he]),j!==he){switch(he){case vc:r.depthFunc(r.NEVER);break;case xc:r.depthFunc(r.ALWAYS);break;case Sc:r.depthFunc(r.LESS);break;case Ds:r.depthFunc(r.LEQUAL);break;case Mc:r.depthFunc(r.EQUAL);break;case yc:r.depthFunc(r.GEQUAL);break;case Ec:r.depthFunc(r.GREATER);break;case Tc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=he}},setLocked:function(he){I=he},setClear:function(he){ae!==he&&(le&&(he=1-he),r.clearDepth(he),ae=he)},reset:function(){I=!1,$=null,j=null,ae=null,le=!1}}}function i(){let I=!1,le=null,$=null,j=null,ae=null,he=null,ze=null,lt=null,Lt=null;return{setTest:function(ge){I||(ge?ie(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(ge){le!==ge&&!I&&(r.stencilMask(ge),le=ge)},setFunc:function(ge,we,Xe){($!==ge||j!==we||ae!==Xe)&&(r.stencilFunc(ge,we,Xe),$=ge,j=we,ae=Xe)},setOp:function(ge,we,Xe){(he!==ge||ze!==we||lt!==Xe)&&(r.stencilOp(ge,we,Xe),he=ge,ze=we,lt=Xe)},setLocked:function(ge){I=ge},setClear:function(ge){Lt!==ge&&(r.clearStencil(ge),Lt=ge)},reset:function(){I=!1,le=null,$=null,j=null,ae=null,he=null,ze=null,lt=null,Lt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,y=null,v=null,A=null,w=null,b=new ot(0,0,0),C=0,S=!1,x=null,P=null,U=null,O=null,k=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=Y>=2);let te=null,D={};const ce=r.getParameter(r.SCISSOR_BOX),Le=r.getParameter(r.VIEWPORT),Ke=new _t().fromArray(ce),K=new _t().fromArray(Le);function ne(I,le,$,j){const ae=new Uint8Array(4),he=r.createTexture();r.bindTexture(I,he),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ze=0;ze<$;ze++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,ae):r.texImage2D(le+ze,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ae);return he}const de={};de[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),de[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),de[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(r.DEPTH_TEST),o.setFunc(Ds),Be(!1),z(mh),ie(r.CULL_FACE),L(ar);function ie(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function Te(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Oe(I,le){return h[I]!==le?(r.bindFramebuffer(I,le),h[I]=le,I===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=le),I===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=le),!0):!1}function Pe(I,le){let $=d,j=!1;if(I){$=f.get(le),$===void 0&&($=[],f.set(le,$));const ae=I.textures;if($.length!==ae.length||$[0]!==r.COLOR_ATTACHMENT0){for(let he=0,ze=ae.length;he<ze;he++)$[he]=r.COLOR_ATTACHMENT0+he;$.length=ae.length,j=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,j=!0);j&&r.drawBuffers($)}function tt(I){return g!==I?(r.useProgram(I),g=I,!0):!1}const Ze={[Ur]:r.FUNC_ADD,[Nm]:r.FUNC_SUBTRACT,[Fm]:r.FUNC_REVERSE_SUBTRACT};Ze[Om]=r.MIN,Ze[Bm]=r.MAX;const Se={[zm]:r.ZERO,[km]:r.ONE,[Hm]:r.SRC_COLOR,[_c]:r.SRC_ALPHA,[qm]:r.SRC_ALPHA_SATURATE,[Xm]:r.DST_COLOR,[Gm]:r.DST_ALPHA,[Vm]:r.ONE_MINUS_SRC_COLOR,[gc]:r.ONE_MINUS_SRC_ALPHA,[Ym]:r.ONE_MINUS_DST_COLOR,[Wm]:r.ONE_MINUS_DST_ALPHA,[$m]:r.CONSTANT_COLOR,[Km]:r.ONE_MINUS_CONSTANT_COLOR,[Zm]:r.CONSTANT_ALPHA,[jm]:r.ONE_MINUS_CONSTANT_ALPHA};function L(I,le,$,j,ae,he,ze,lt,Lt,ge){if(I===ar){_===!0&&(Te(r.BLEND),_=!1);return}if(_===!1&&(ie(r.BLEND),_=!0),I!==Im){if(I!==m||ge!==S){if((p!==Ur||v!==Ur)&&(r.blendEquation(r.FUNC_ADD),p=Ur,v=Ur),ge)switch(I){case ys:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mc:r.blendFunc(r.ONE,r.ONE);break;case _h:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ys:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case _h:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,y=null,A=null,w=null,b.set(0,0,0),C=0,m=I,S=ge}return}ae=ae||le,he=he||$,ze=ze||j,(le!==p||ae!==v)&&(r.blendEquationSeparate(Ze[le],Ze[ae]),p=le,v=ae),($!==M||j!==y||he!==A||ze!==w)&&(r.blendFuncSeparate(Se[$],Se[j],Se[he],Se[ze]),M=$,y=j,A=he,w=ze),(lt.equals(b)===!1||Lt!==C)&&(r.blendColor(lt.r,lt.g,lt.b,Lt),b.copy(lt),C=Lt),m=I,S=!1}function gt(I,le){I.side===Fi?Te(r.CULL_FACE):ie(r.CULL_FACE);let $=I.side===wn;le&&($=!$),Be($),I.blending===ys&&I.transparent===!1?L(ar):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const j=I.stencilWrite;a.setTest(j),j&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),nt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ie(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(I){x!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),x=I)}function z(I){I!==Dm?(ie(r.CULL_FACE),I!==P&&(I===mh?r.cullFace(r.BACK):I===Lm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),P=I}function ye(I){I!==U&&(X&&r.lineWidth(I),U=I)}function nt(I,le,$){I?(ie(r.POLYGON_OFFSET_FILL),(O!==le||k!==$)&&(r.polygonOffset(le,$),O=le,k=$)):Te(r.POLYGON_OFFSET_FILL)}function be(I){I?ie(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function R(I){I===void 0&&(I=r.TEXTURE0+W-1),te!==I&&(r.activeTexture(I),te=I)}function E(I,le,$){$===void 0&&(te===null?$=r.TEXTURE0+W-1:$=te);let j=D[$];j===void 0&&(j={type:void 0,texture:void 0},D[$]=j),(j.type!==I||j.texture!==le)&&(te!==$&&(r.activeTexture($),te=$),r.bindTexture(I,le||de[I]),j.type=I,j.texture=le)}function V(){const I=D[te];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Q(){try{r.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{r.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{r.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{r.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{r.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{r.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ve(){try{r.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{r.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{r.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{r.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(I){Ke.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Ke.copy(I))}function ve(I){K.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),K.copy(I))}function We(I,le){let $=c.get(le);$===void 0&&($=new WeakMap,c.set(le,$));let j=$.get(I);j===void 0&&(j=r.getUniformBlockIndex(le,I.name),$.set(I,j))}function Fe(I,le){const j=c.get(le).get(I);l.get(le)!==j&&(r.uniformBlockBinding(le,j,I.__bindingPointIndex),l.set(le,j))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},te=null,D={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,y=null,v=null,A=null,w=null,b=new ot(0,0,0),C=0,S=!1,x=null,P=null,U=null,O=null,k=null,Ke.set(0,0,r.canvas.width,r.canvas.height),K.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:Te,bindFramebuffer:Oe,drawBuffers:Pe,useProgram:tt,setBlending:L,setMaterial:gt,setFlipSided:Be,setCullFace:z,setLineWidth:ye,setPolygonOffset:nt,setScissorTest:be,activeTexture:R,bindTexture:E,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:se,texImage3D:Ue,updateUBOMapping:We,uniformBlockBinding:Fe,texStorage2D:Ve,texStorage3D:re,texSubImage2D:Z,texSubImage3D:ue,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:De,viewport:ve,reset:st}}function IS(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return d?new OffscreenCanvas(R,E):Ja("canvas")}function _(R,E,V){let Q=1;const J=be(R);if((J.width>V||J.height>V)&&(Q=V/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(Q*J.width),ue=Math.floor(Q*J.height);h===void 0&&(h=g(Z,ue));const oe=E?g(Z,ue):h;return oe.width=Z,oe.height=ue,oe.getContext("2d").drawImage(R,0,0,Z,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+ue+")."),oe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(R,E,V,Q,J=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=E;if(E===r.RED&&(V===r.FLOAT&&(Z=r.R32F),V===r.HALF_FLOAT&&(Z=r.R16F),V===r.UNSIGNED_BYTE&&(Z=r.R8)),E===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.R8UI),V===r.UNSIGNED_SHORT&&(Z=r.R16UI),V===r.UNSIGNED_INT&&(Z=r.R32UI),V===r.BYTE&&(Z=r.R8I),V===r.SHORT&&(Z=r.R16I),V===r.INT&&(Z=r.R32I)),E===r.RG&&(V===r.FLOAT&&(Z=r.RG32F),V===r.HALF_FLOAT&&(Z=r.RG16F),V===r.UNSIGNED_BYTE&&(Z=r.RG8)),E===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.RG8UI),V===r.UNSIGNED_SHORT&&(Z=r.RG16UI),V===r.UNSIGNED_INT&&(Z=r.RG32UI),V===r.BYTE&&(Z=r.RG8I),V===r.SHORT&&(Z=r.RG16I),V===r.INT&&(Z=r.RG32I)),E===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),V===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),V===r.UNSIGNED_INT&&(Z=r.RGB32UI),V===r.BYTE&&(Z=r.RGB8I),V===r.SHORT&&(Z=r.RGB16I),V===r.INT&&(Z=r.RGB32I)),E===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),V===r.UNSIGNED_INT&&(Z=r.RGBA32UI),V===r.BYTE&&(Z=r.RGBA8I),V===r.SHORT&&(Z=r.RGBA16I),V===r.INT&&(Z=r.RGBA32I)),E===r.RGB&&V===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),E===r.RGBA){const ue=J?Za:ut.getTransfer(Q);V===r.FLOAT&&(Z=r.RGBA32F),V===r.HALF_FLOAT&&(Z=r.RGBA16F),V===r.UNSIGNED_BYTE&&(Z=ue===mt?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(R,E){let V;return R?E===null||E===Yr||E===Is?V=r.DEPTH24_STENCIL8:E===Bi?V=r.DEPTH32F_STENCIL8:E===Ro&&(V=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yr||E===Is?V=r.DEPTH_COMPONENT24:E===Bi?V=r.DEPTH_COMPONENT32F:E===Ro&&(V=r.DEPTH_COMPONENT16),V}function A(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==mi&&R.minFilter!==yi?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function w(R){const E=R.target;E.removeEventListener("dispose",w),C(E),E.isVideoTexture&&u.delete(E)}function b(R){const E=R.target;E.removeEventListener("dispose",b),x(E)}function C(R){const E=n.get(R);if(E.__webglInit===void 0)return;const V=R.source,Q=f.get(V);if(Q){const J=Q[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(R),Object.keys(Q).length===0&&f.delete(V)}n.remove(R)}function S(R){const E=n.get(R);r.deleteTexture(E.__webglTexture);const V=R.source,Q=f.get(V);delete Q[E.__cacheKey],o.memory.textures--}function x(R){const E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let J=0;J<E.__webglFramebuffer[Q].length;J++)r.deleteFramebuffer(E.__webglFramebuffer[Q][J]);else r.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)r.deleteFramebuffer(E.__webglFramebuffer[Q]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=R.textures;for(let Q=0,J=V.length;Q<J;Q++){const Z=n.get(V[Q]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(V[Q])}n.remove(R)}let P=0;function U(){P=0}function O(){const R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function k(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function W(R,E){const V=n.get(R);if(R.isVideoTexture&&ye(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(V,R,E);return}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+E)}function X(R,E){const V=n.get(R);if(R.version>0&&V.__version!==R.version){K(V,R,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+E)}function Y(R,E){const V=n.get(R);if(R.version>0&&V.__version!==R.version){K(V,R,E);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+E)}function H(R,E){const V=n.get(R);if(R.version>0&&V.__version!==R.version){ne(V,R,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+E)}const te={[Ac]:r.REPEAT,[Nr]:r.CLAMP_TO_EDGE,[Rc]:r.MIRRORED_REPEAT},D={[mi]:r.NEAREST,[a_]:r.NEAREST_MIPMAP_NEAREST,[Yo]:r.NEAREST_MIPMAP_LINEAR,[yi]:r.LINEAR,[Sl]:r.LINEAR_MIPMAP_NEAREST,[Fr]:r.LINEAR_MIPMAP_LINEAR},ce={[f_]:r.NEVER,[v_]:r.ALWAYS,[d_]:r.LESS,[wd]:r.LEQUAL,[p_]:r.EQUAL,[g_]:r.GEQUAL,[m_]:r.GREATER,[__]:r.NOTEQUAL};function Le(R,E){if(E.type===Bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===yi||E.magFilter===Sl||E.magFilter===Yo||E.magFilter===Fr||E.minFilter===yi||E.minFilter===Sl||E.minFilter===Yo||E.minFilter===Fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,te[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,te[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,te[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,D[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,D[E.minFilter]),E.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===mi||E.minFilter!==Yo&&E.minFilter!==Fr||E.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ke(R,E){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",w));const Q=E.source;let J=f.get(Q);J===void 0&&(J={},f.set(Q,J));const Z=k(E);if(Z!==R.__cacheKey){J[Z]===void 0&&(J[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),J[Z].usedTimes++;const ue=J[R.__cacheKey];ue!==void 0&&(J[R.__cacheKey].usedTimes--,ue.usedTimes===0&&S(E)),R.__cacheKey=Z,R.__webglTexture=J[Z].texture}return V}function K(R,E,V){let Q=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=r.TEXTURE_3D);const J=Ke(R,E),Z=E.source;t.bindTexture(Q,R.__webglTexture,r.TEXTURE0+V);const ue=n.get(Z);if(Z.version!==ue.__version||J===!0){t.activeTexture(r.TEXTURE0+V);const oe=ut.getPrimaries(ut.workingColorSpace),fe=E.colorSpace===tr?null:ut.getPrimaries(E.colorSpace),Ve=E.colorSpace===tr||oe===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let re=_(E.image,!1,i.maxTextureSize);re=nt(E,re);const se=s.convert(E.format,E.colorSpace),Ue=s.convert(E.type);let De=y(E.internalFormat,se,Ue,E.colorSpace,E.isVideoTexture);Le(Q,E);let ve;const We=E.mipmaps,Fe=E.isVideoTexture!==!0,st=ue.__version===void 0||J===!0,I=Z.dataReady,le=A(E,re);if(E.isDepthTexture)De=v(E.format===Ns,E.type),st&&(Fe?t.texStorage2D(r.TEXTURE_2D,1,De,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,De,re.width,re.height,0,se,Ue,null));else if(E.isDataTexture)if(We.length>0){Fe&&st&&t.texStorage2D(r.TEXTURE_2D,le,De,We[0].width,We[0].height);for(let $=0,j=We.length;$<j;$++)ve=We[$],Fe?I&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,ve.width,ve.height,se,Ue,ve.data):t.texImage2D(r.TEXTURE_2D,$,De,ve.width,ve.height,0,se,Ue,ve.data);E.generateMipmaps=!1}else Fe?(st&&t.texStorage2D(r.TEXTURE_2D,le,De,re.width,re.height),I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,re.width,re.height,se,Ue,re.data)):t.texImage2D(r.TEXTURE_2D,0,De,re.width,re.height,0,se,Ue,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Fe&&st&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,De,We[0].width,We[0].height,re.depth);for(let $=0,j=We.length;$<j;$++)if(ve=We[$],E.format!==di)if(se!==null)if(Fe){if(I)if(E.layerUpdates.size>0){const ae=Kh(ve.width,ve.height,E.format,E.type);for(const he of E.layerUpdates){const ze=ve.data.subarray(he*ae/ve.data.BYTES_PER_ELEMENT,(he+1)*ae/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,he,ve.width,ve.height,1,se,ze)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,ve.width,ve.height,re.depth,se,ve.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,De,ve.width,ve.height,re.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?I&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,ve.width,ve.height,re.depth,se,Ue,ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,$,De,ve.width,ve.height,re.depth,0,se,Ue,ve.data)}else{Fe&&st&&t.texStorage2D(r.TEXTURE_2D,le,De,We[0].width,We[0].height);for(let $=0,j=We.length;$<j;$++)ve=We[$],E.format!==di?se!==null?Fe?I&&t.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,ve.width,ve.height,se,ve.data):t.compressedTexImage2D(r.TEXTURE_2D,$,De,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?I&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,ve.width,ve.height,se,Ue,ve.data):t.texImage2D(r.TEXTURE_2D,$,De,ve.width,ve.height,0,se,Ue,ve.data)}else if(E.isDataArrayTexture)if(Fe){if(st&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,De,re.width,re.height,re.depth),I)if(E.layerUpdates.size>0){const $=Kh(re.width,re.height,E.format,E.type);for(const j of E.layerUpdates){const ae=re.data.subarray(j*$/re.data.BYTES_PER_ELEMENT,(j+1)*$/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,re.width,re.height,1,se,Ue,ae)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,se,Ue,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,De,re.width,re.height,re.depth,0,se,Ue,re.data);else if(E.isData3DTexture)Fe?(st&&t.texStorage3D(r.TEXTURE_3D,le,De,re.width,re.height,re.depth),I&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,se,Ue,re.data)):t.texImage3D(r.TEXTURE_3D,0,De,re.width,re.height,re.depth,0,se,Ue,re.data);else if(E.isFramebufferTexture){if(st)if(Fe)t.texStorage2D(r.TEXTURE_2D,le,De,re.width,re.height);else{let $=re.width,j=re.height;for(let ae=0;ae<le;ae++)t.texImage2D(r.TEXTURE_2D,ae,De,$,j,0,se,Ue,null),$>>=1,j>>=1}}else if(We.length>0){if(Fe&&st){const $=be(We[0]);t.texStorage2D(r.TEXTURE_2D,le,De,$.width,$.height)}for(let $=0,j=We.length;$<j;$++)ve=We[$],Fe?I&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,se,Ue,ve):t.texImage2D(r.TEXTURE_2D,$,De,se,Ue,ve);E.generateMipmaps=!1}else if(Fe){if(st){const $=be(re);t.texStorage2D(r.TEXTURE_2D,le,De,$.width,$.height)}I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se,Ue,re)}else t.texImage2D(r.TEXTURE_2D,0,De,se,Ue,re);m(E)&&p(Q),ue.__version=Z.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ne(R,E,V){if(E.image.length!==6)return;const Q=Ke(R,E),J=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+V);const Z=n.get(J);if(J.version!==Z.__version||Q===!0){t.activeTexture(r.TEXTURE0+V);const ue=ut.getPrimaries(ut.workingColorSpace),oe=E.colorSpace===tr?null:ut.getPrimaries(E.colorSpace),fe=E.colorSpace===tr||ue===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ve=E.isCompressedTexture||E.image[0].isCompressedTexture,re=E.image[0]&&E.image[0].isDataTexture,se=[];for(let j=0;j<6;j++)!Ve&&!re?se[j]=_(E.image[j],!0,i.maxCubemapSize):se[j]=re?E.image[j].image:E.image[j],se[j]=nt(E,se[j]);const Ue=se[0],De=s.convert(E.format,E.colorSpace),ve=s.convert(E.type),We=y(E.internalFormat,De,ve,E.colorSpace),Fe=E.isVideoTexture!==!0,st=Z.__version===void 0||Q===!0,I=J.dataReady;let le=A(E,Ue);Le(r.TEXTURE_CUBE_MAP,E);let $;if(Ve){Fe&&st&&t.texStorage2D(r.TEXTURE_CUBE_MAP,le,We,Ue.width,Ue.height);for(let j=0;j<6;j++){$=se[j].mipmaps;for(let ae=0;ae<$.length;ae++){const he=$[ae];E.format!==di?De!==null?Fe?I&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,0,0,he.width,he.height,De,he.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,We,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,0,0,he.width,he.height,De,ve,he.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,We,he.width,he.height,0,De,ve,he.data)}}}else{if($=E.mipmaps,Fe&&st){$.length>0&&le++;const j=be(se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,le,We,j.width,j.height)}for(let j=0;j<6;j++)if(re){Fe?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,se[j].width,se[j].height,De,ve,se[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,We,se[j].width,se[j].height,0,De,ve,se[j].data);for(let ae=0;ae<$.length;ae++){const ze=$[ae].image[j].image;Fe?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,0,0,ze.width,ze.height,De,ve,ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,We,ze.width,ze.height,0,De,ve,ze.data)}}else{Fe?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,De,ve,se[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,We,De,ve,se[j]);for(let ae=0;ae<$.length;ae++){const he=$[ae];Fe?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,0,0,De,ve,he.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,We,De,ve,he.image[j])}}}m(E)&&p(r.TEXTURE_CUBE_MAP),Z.__version=J.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function de(R,E,V,Q,J,Z){const ue=s.convert(V.format,V.colorSpace),oe=s.convert(V.type),fe=y(V.internalFormat,ue,oe,V.colorSpace),Ve=n.get(E),re=n.get(V);if(re.__renderTarget=E,!Ve.__hasExternalTextures){const se=Math.max(1,E.width>>Z),Ue=Math.max(1,E.height>>Z);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,Z,fe,se,Ue,E.depth,0,ue,oe,null):t.texImage2D(J,Z,fe,se,Ue,0,ue,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),z(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,J,re.__webglTexture,0,Be(E)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,J,re.__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ie(R,E,V){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer){const Q=E.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,Z=v(E.stencilBuffer,J),ue=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=Be(E);z(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,Z,E.width,E.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,Z,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Z,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,R)}else{const Q=E.textures;for(let J=0;J<Q.length;J++){const Z=Q[J],ue=s.convert(Z.format,Z.colorSpace),oe=s.convert(Z.type),fe=y(Z.internalFormat,ue,oe,Z.colorSpace),Ve=Be(E);V&&z(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve,fe,E.width,E.height):z(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ve,fe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,fe,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const J=Q.__webglTexture,Z=Be(E);if(E.depthTexture.format===Es)z(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(E.depthTexture.format===Ns)z(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Oe(R){const E=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",J)};Q.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=Q}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Te(E.__webglFramebuffer,R)}else if(V){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=r.createRenderbuffer(),ie(E.__webglDepthbuffer[Q],R,!1);else{const J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),ie(E.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,J)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Pe(R,E,V){const Q=n.get(R);E!==void 0&&de(Q.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Oe(R)}function tt(R){const E=R.texture,V=n.get(R),Q=n.get(E);R.addEventListener("dispose",b);const J=R.textures,Z=R.isWebGLCubeRenderTarget===!0,ue=J.length>1;if(ue||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=E.version,o.memory.textures++),Z){V.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[oe]=[];for(let fe=0;fe<E.mipmaps.length;fe++)V.__webglFramebuffer[oe][fe]=r.createFramebuffer()}else V.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)V.__webglFramebuffer[oe]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(ue)for(let oe=0,fe=J.length;oe<fe;oe++){const Ve=n.get(J[oe]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&z(R)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){const fe=J[oe];V.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[oe]);const Ve=s.convert(fe.format,fe.colorSpace),re=s.convert(fe.type),se=y(fe.internalFormat,Ve,re,fe.colorSpace,R.isXRRenderTarget===!0),Ue=Be(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,se,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,V.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),ie(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Le(r.TEXTURE_CUBE_MAP,E);for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)de(V.__webglFramebuffer[oe][fe],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else de(V.__webglFramebuffer[oe],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(E)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let oe=0,fe=J.length;oe<fe;oe++){const Ve=J[oe],re=n.get(Ve);t.bindTexture(r.TEXTURE_2D,re.__webglTexture),Le(r.TEXTURE_2D,Ve),de(V.__webglFramebuffer,R,Ve,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,0),m(Ve)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,Q.__webglTexture),Le(oe,E),E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)de(V.__webglFramebuffer[fe],R,E,r.COLOR_ATTACHMENT0,oe,fe);else de(V.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,oe,0);m(E)&&p(oe),t.unbindTexture()}R.depthBuffer&&Oe(R)}function Ze(R){const E=R.textures;for(let V=0,Q=E.length;V<Q;V++){const J=E[V];if(m(J)){const Z=M(R),ue=n.get(J).__webglTexture;t.bindTexture(Z,ue),p(Z),t.unbindTexture()}}}const Se=[],L=[];function gt(R){if(R.samples>0){if(z(R)===!1){const E=R.textures,V=R.width,Q=R.height;let J=r.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=n.get(R),oe=E.length>1;if(oe)for(let fe=0;fe<E.length;fe++)t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let fe=0;fe<E.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Ve=n.get(E[fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ve,0)}r.blitFramebuffer(0,0,V,Q,0,0,V,Q,J,r.NEAREST),l===!0&&(Se.length=0,L.length=0,Se.push(r.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Se.push(Z),L.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let fe=0;fe<E.length;fe++){t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Ve=n.get(E[fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,Ve,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Be(R){return Math.min(i.maxSamples,R.samples)}function z(R){const E=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ye(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function nt(R,E){const V=R.colorSpace,Q=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Fs&&V!==tr&&(ut.getTransfer(V)===mt?(Q!==di||J!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function be(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=Pe,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=z}function NS(r,e){function t(n,i=tr){let s;const o=ut.getTransfer(i);if(n===Gi)return r.UNSIGNED_BYTE;if(n===Pu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Du)return r.UNSIGNED_SHORT_5_5_5_1;if(n===vd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===_d)return r.BYTE;if(n===gd)return r.SHORT;if(n===Ro)return r.UNSIGNED_SHORT;if(n===Cu)return r.INT;if(n===Yr)return r.UNSIGNED_INT;if(n===Bi)return r.FLOAT;if(n===zo)return r.HALF_FLOAT;if(n===xd)return r.ALPHA;if(n===Sd)return r.RGB;if(n===di)return r.RGBA;if(n===Md)return r.LUMINANCE;if(n===yd)return r.LUMINANCE_ALPHA;if(n===Es)return r.DEPTH_COMPONENT;if(n===Ns)return r.DEPTH_STENCIL;if(n===Ed)return r.RED;if(n===Lu)return r.RED_INTEGER;if(n===Td)return r.RG;if(n===Uu)return r.RG_INTEGER;if(n===Iu)return r.RGBA_INTEGER;if(n===Ia||n===Na||n===Fa||n===Oa)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ia)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ia)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Na)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cc||n===Pc||n===Dc||n===Lc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Cc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uc||n===Ic||n===Nc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Uc||n===Ic)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Nc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fc||n===Oc||n===Bc||n===zc||n===kc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===Yc||n===qc||n===$c||n===Kc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Fc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$c)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ba||n===Zc||n===jc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ba)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bd||n===Jc||n===Qc||n===eu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ba)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Jc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const FS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class BS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new An,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xi({vertexShader:FS,fragmentShader:OS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pi(new dl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zS extends Xs{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new BS,m=t.getContextAttributes();let p=null,M=null;const y=[],v=[],A=new at;let w=null;const b=new bn;b.viewport=new _t;const C=new bn;C.viewport=new _t;const S=[b,C],x=new og;let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=y[K];return ne===void 0&&(ne=new Hl,y[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=y[K];return ne===void 0&&(ne=new Hl,y[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=y[K];return ne===void 0&&(ne=new Hl,y[K]=ne),ne.getHandSpace()};function O(K){const ne=v.indexOf(K.inputSource);if(ne===-1)return;const de=y[ne];de!==void 0&&(de.update(K.inputSource,K.frame,c||o),de.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",W);for(let K=0;K<y.length;K++){const ne=v[K];ne!==null&&(v[K]=null,y[K].disconnect(ne))}P=null,U=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,i=null,M=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",k),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,ie=null,Te=null;m.depth&&(Te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?Ns:Es,ie=m.stencil?Is:Yr);const Oe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Oe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new qr(f.textureWidth,f.textureHeight,{format:di,type:Gi,depthTexture:new zd(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new qr(d.framebufferWidth,d.framebufferHeight,{format:di,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ke.setContext(i),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(K){for(let ne=0;ne<K.removed.length;ne++){const de=K.removed[ne],ie=v.indexOf(de);ie>=0&&(v[ie]=null,y[ie].disconnect(de))}for(let ne=0;ne<K.added.length;ne++){const de=K.added[ne];let ie=v.indexOf(de);if(ie===-1){for(let Oe=0;Oe<y.length;Oe++)if(Oe>=v.length){v.push(de),ie=Oe;break}else if(v[Oe]===null){v[Oe]=de,ie=Oe;break}if(ie===-1)break}const Te=y[ie];Te&&Te.connect(de)}}const X=new B,Y=new B;function H(K,ne,de){X.setFromMatrixPosition(ne.matrixWorld),Y.setFromMatrixPosition(de.matrixWorld);const ie=X.distanceTo(Y),Te=ne.projectionMatrix.elements,Oe=de.projectionMatrix.elements,Pe=Te[14]/(Te[10]-1),tt=Te[14]/(Te[10]+1),Ze=(Te[9]+1)/Te[5],Se=(Te[9]-1)/Te[5],L=(Te[8]-1)/Te[0],gt=(Oe[8]+1)/Oe[0],Be=Pe*L,z=Pe*gt,ye=ie/(-L+gt),nt=ye*-L;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(nt),K.translateZ(ye),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Te[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const be=Pe+ye,R=tt+ye,E=Be-nt,V=z+(ie-nt),Q=Ze*tt/R*be,J=Se*tt/R*be;K.projectionMatrix.makePerspective(E,V,Q,J,be,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function te(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ne=K.near,de=K.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(de=_.depthFar)),x.near=C.near=b.near=ne,x.far=C.far=b.far=de,(P!==x.near||U!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,U=x.far),b.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,x.layers.mask=b.layers.mask|C.layers.mask;const ie=K.parent,Te=x.cameras;te(x,ie);for(let Oe=0;Oe<Te.length;Oe++)te(Te[Oe],ie);Te.length===2?H(x,b,C):x.projectionMatrix.copy(b.projectionMatrix),D(K,x,ie)};function D(K,ne,de){de===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(de.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=tu*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ce=null;function Le(K,ne){if(u=ne.getViewerPose(c||o),g=ne,u!==null){const de=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let ie=!1;de.length!==x.cameras.length&&(x.cameras.length=0,ie=!0);for(let Pe=0;Pe<de.length;Pe++){const tt=de[Pe];let Ze=null;if(d!==null)Ze=d.getViewport(tt);else{const L=h.getViewSubImage(f,tt);Ze=L.viewport,Pe===0&&(e.setRenderTargetTextures(M,L.colorTexture,f.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(M))}let Se=S[Pe];Se===void 0&&(Se=new bn,Se.layers.enable(Pe),Se.viewport=new _t,S[Pe]=Se),Se.matrix.fromArray(tt.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(tt.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Pe===0&&(x.matrix.copy(Se.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ie===!0&&x.cameras.push(Se)}const Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const Pe=h.getDepthInformation(de[0]);Pe&&Pe.isValid&&Pe.texture&&_.init(e,Pe,i.renderState)}}for(let de=0;de<y.length;de++){const ie=v[de],Te=y[de];ie!==null&&Te!==void 0&&Te.update(ie,ne,c||o)}ce&&ce(K,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Ke=new Gd;Ke.setAnimationLoop(Le),this.setAnimationLoop=function(K){ce=K},this.dispose=function(){}}}const Tr=new Wi,kS=new wt;function HS(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ud(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===wn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===wn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),y=M.envMap,v=M.envMapRotation;y&&(m.envMap.value=y,Tr.copy(v),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),m.envMapRotation.value.setFromMatrix4(kS.makeRotationFromEuler(Tr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function VS(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const v=y.program;n.uniformBlockBinding(M,v)}function c(M,y){let v=i[M.id];v===void 0&&(g(M),v=u(M),i[M.id]=v,M.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(M,A);const w=e.render.frame;s[M.id]!==w&&(f(M),s[M.id]=w)}function u(M){const y=h();M.__bindingPointIndex=y;const v=r.createBuffer(),A=M.__size,w=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=i[M.id],v=M.uniforms,A=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let w=0,b=v.length;w<b;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,x=C.length;S<x;S++){const P=C[S];if(d(P,w,S,A)===!0){const U=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let W=0;W<O.length;W++){const X=O[W],Y=_(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,U+k,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,k),k+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,y,v,A){const w=M.value,b=y+"_"+v;if(A[b]===void 0)return typeof w=="number"||typeof w=="boolean"?A[b]=w:A[b]=w.clone(),!0;{const C=A[b];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return A[b]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(M){const y=M.uniforms;let v=0;const A=16;for(let b=0,C=y.length;b<C;b++){const S=Array.isArray(y[b])?y[b]:[y[b]];for(let x=0,P=S.length;x<P;x++){const U=S[x],O=Array.isArray(U.value)?U.value:[U.value];for(let k=0,W=O.length;k<W;k++){const X=O[k],Y=_(X),H=v%A,te=H%Y.boundary,D=H+te;v+=te,D!==0&&A-D<Y.storage&&(v+=A-D),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=Y.storage}}}const w=v%A;return w>0&&(v+=A-w),M.__size=v,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class $d{constructor(e={}){const{canvas:t=S_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this.toneMapping=lr,this.toneMappingExposure=1;const v=this;let A=!1,w=0,b=0,C=null,S=-1,x=null;const P=new _t,U=new _t;let O=null;const k=new ot(0);let W=0,X=t.width,Y=t.height,H=1,te=null,D=null;const ce=new _t(0,0,X,Y),Le=new _t(0,0,X,Y);let Ke=!1;const K=new Bu;let ne=!1,de=!1;this.transmissionResolutionScale=1;const ie=new wt,Te=new wt,Oe=new B,Pe=new _t,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function Se(){return C===null?H:1}let L=n;function gt(T,F){return t.getContext(T,F)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ru}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",he,!1),L===null){const F="webgl2";if(L=gt(F,T),L===null)throw gt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Be,z,ye,nt,be,R,E,V,Q,J,Z,ue,oe,fe,Ve,re,se,Ue,De,ve,We,Fe,st,I;function le(){Be=new Qv(L),Be.init(),Fe=new NS(L,Be),z=new Yv(L,Be,e,Fe),ye=new US(L,Be),z.reverseDepthBuffer&&f&&ye.buffers.depth.setReversed(!0),nt=new nx(L),be=new SS,R=new IS(L,Be,ye,be,z,Fe,nt),E=new $v(v),V=new Jv(v),Q=new lg(L),st=new Wv(L,Q),J=new ex(L,Q,nt,st),Z=new rx(L,J,Q,nt),De=new ix(L,z,R),re=new qv(be),ue=new xS(v,E,V,Be,z,st,re),oe=new HS(v,be),fe=new yS,Ve=new RS(Be),Ue=new Gv(v,E,V,ye,Z,d,l),se=new DS(v,Z,z),I=new VS(L,nt,z,ye),ve=new Xv(L,Be,nt),We=new tx(L,Be,nt),nt.programs=ue.programs,v.capabilities=z,v.extensions=Be,v.properties=be,v.renderLists=fe,v.shadowMap=se,v.state=ye,v.info=nt}le();const $=new zS(v,L);this.xr=$,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Be.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Be.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(X,Y,!1))},this.getSize=function(T){return T.set(X,Y)},this.setSize=function(T,F,q=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,Y=F,t.width=Math.floor(T*H),t.height=Math.floor(F*H),q===!0&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(X*H,Y*H).floor()},this.setDrawingBufferSize=function(T,F,q){X=T,Y=F,H=q,t.width=Math.floor(T*q),t.height=Math.floor(F*q),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(ce)},this.setViewport=function(T,F,q,G){T.isVector4?ce.set(T.x,T.y,T.z,T.w):ce.set(T,F,q,G),ye.viewport(P.copy(ce).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(Le)},this.setScissor=function(T,F,q,G){T.isVector4?Le.set(T.x,T.y,T.z,T.w):Le.set(T,F,q,G),ye.scissor(U.copy(Le).multiplyScalar(H).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(T){ye.setScissorTest(Ke=T)},this.setOpaqueSort=function(T){te=T},this.setTransparentSort=function(T){D=T},this.getClearColor=function(T){return T.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,q=!0){let G=0;if(T){let N=!1;if(C!==null){const ee=C.texture.format;N=ee===Iu||ee===Uu||ee===Lu}if(N){const ee=C.texture.type,me=ee===Gi||ee===Yr||ee===Ro||ee===Is||ee===Pu||ee===Du,Me=Ue.getClearColor(),xe=Ue.getClearAlpha(),Ce=Me.r,Ne=Me.g,Re=Me.b;me?(g[0]=Ce,g[1]=Ne,g[2]=Re,g[3]=xe,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Ce,_[1]=Ne,_[2]=Re,_[3]=xe,L.clearBufferiv(L.COLOR,0,_))}else G|=L.COLOR_BUFFER_BIT}F&&(G|=L.DEPTH_BUFFER_BIT),q&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Ue.dispose(),fe.dispose(),Ve.dispose(),be.dispose(),E.dispose(),V.dispose(),Z.dispose(),st.dispose(),I.dispose(),ue.dispose(),$.dispose(),$.removeEventListener("sessionstart",pe),$.removeEventListener("sessionend",He),Ae.stop()};function j(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=nt.autoReset,F=se.enabled,q=se.autoUpdate,G=se.needsUpdate,N=se.type;le(),nt.autoReset=T,se.enabled=F,se.autoUpdate=q,se.needsUpdate=G,se.type=N}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ze(T){const F=T.target;F.removeEventListener("dispose",ze),lt(F)}function lt(T){Lt(T),be.remove(T)}function Lt(T){const F=be.get(T).programs;F!==void 0&&(F.forEach(function(q){ue.releaseProgram(q)}),T.isShaderMaterial&&ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,q,G,N,ee){F===null&&(F=tt);const me=N.isMesh&&N.matrixWorld.determinant()<0,Me=Un(T,F,q,G,N);ye.setMaterial(G,me);let xe=q.index,Ce=1;if(G.wireframe===!0){if(xe=J.getWireframeAttribute(q),xe===void 0)return;Ce=2}const Ne=q.drawRange,Re=q.attributes.position;let Ge=Ne.start*Ce,ft=(Ne.start+Ne.count)*Ce;ee!==null&&(Ge=Math.max(Ge,ee.start*Ce),ft=Math.min(ft,(ee.start+ee.count)*Ce)),xe!==null?(Ge=Math.max(Ge,0),ft=Math.min(ft,xe.count)):Re!=null&&(Ge=Math.max(Ge,0),ft=Math.min(ft,Re.count));const Bt=ft-Ge;if(Bt<0||Bt===1/0)return;st.setup(N,G,Me,q,xe);let Ut,ct=ve;if(xe!==null&&(Ut=Q.get(xe),ct=We,ct.setIndex(Ut)),N.isMesh)G.wireframe===!0?(ye.setLineWidth(G.wireframeLinewidth*Se()),ct.setMode(L.LINES)):ct.setMode(L.TRIANGLES);else if(N.isLine){let Ie=G.linewidth;Ie===void 0&&(Ie=1),ye.setLineWidth(Ie*Se()),N.isLineSegments?ct.setMode(L.LINES):N.isLineLoop?ct.setMode(L.LINE_LOOP):ct.setMode(L.LINE_STRIP)}else N.isPoints?ct.setMode(L.POINTS):N.isSprite&&ct.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ar("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))ct.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ie=N._multiDrawStarts,tn=N._multiDrawCounts,dt=N._multiDrawCount,li=xe?Q.get(xe).bytesPerElement:1,Jr=be.get(G).currentProgram.getUniforms();for(let In=0;In<dt;In++)Jr.setValue(L,"_gl_DrawID",In),ct.render(Ie[In]/li,tn[In])}else if(N.isInstancedMesh)ct.renderInstances(Ge,Bt,N.count);else if(q.isInstancedBufferGeometry){const Ie=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,tn=Math.min(q.instanceCount,Ie);ct.renderInstances(Ge,Bt,tn)}else ct.render(Ge,Bt)};function ge(T,F,q){T.transparent===!0&&T.side===Fi&&T.forceSinglePass===!1?(T.side=wn,T.needsUpdate=!0,vt(T,F,q),T.side=fr,T.needsUpdate=!0,vt(T,F,q),T.side=Fi):vt(T,F,q)}this.compile=function(T,F,q=null){q===null&&(q=T),p=Ve.get(q),p.init(F),y.push(p),q.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),T!==q&&T.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const G=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ee=N.material;if(ee)if(Array.isArray(ee))for(let me=0;me<ee.length;me++){const Me=ee[me];ge(Me,q,N),G.add(Me)}else ge(ee,q,N),G.add(ee)}),p=y.pop(),G},this.compileAsync=function(T,F,q=null){const G=this.compile(T,F,q);return new Promise(N=>{function ee(){if(G.forEach(function(me){be.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){N(T);return}setTimeout(ee,10)}Be.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let we=null;function Xe(T){we&&we(T)}function pe(){Ae.stop()}function He(){Ae.start()}const Ae=new Gd;Ae.setAnimationLoop(Xe),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(T){we=T,$.setAnimationLoop(T),T===null?Ae.stop():Ae.start()},$.addEventListener("sessionstart",pe),$.addEventListener("sessionend",He),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(F),F=$.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,F,C),p=Ve.get(T,y.length),p.init(F),y.push(p),Te.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),K.setFromProjectionMatrix(Te),de=this.localClippingEnabled,ne=re.init(this.clippingPlanes,de),m=fe.get(T,M.length),m.init(),M.push(m),$.enabled===!0&&$.isPresenting===!0){const ee=v.xr.getDepthSensingMesh();ee!==null&&ke(ee,F,-1/0,v.sortObjects)}ke(T,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(te,D),Ze=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Ze&&Ue.addToRenderList(m,T),this.info.render.frame++,ne===!0&&re.beginShadows();const q=p.state.shadowsArray;se.render(q,T,F),ne===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,N=m.transmissive;if(p.setupLights(),F.isArrayCamera){const ee=F.cameras;if(N.length>0)for(let me=0,Me=ee.length;me<Me;me++){const xe=ee[me];Je(G,N,T,xe)}Ze&&Ue.render(T);for(let me=0,Me=ee.length;me<Me;me++){const xe=ee[me];Nt(m,T,xe,xe.viewport)}}else N.length>0&&Je(G,N,T,F),Ze&&Ue.render(T),Nt(m,T,F);C!==null&&b===0&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,F),st.resetDefaultState(),S=-1,x=null,y.pop(),y.length>0?(p=y[y.length-1],ne===!0&&re.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function ke(T,F,q,G){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){G&&Pe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Te);const me=Z.update(T),Me=T.material;Me.visible&&m.push(T,me,Me,q,Pe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||K.intersectsObject(T))){const me=Z.update(T),Me=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Pe.copy(T.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Pe.copy(me.boundingSphere.center)),Pe.applyMatrix4(T.matrixWorld).applyMatrix4(Te)),Array.isArray(Me)){const xe=me.groups;for(let Ce=0,Ne=xe.length;Ce<Ne;Ce++){const Re=xe[Ce],Ge=Me[Re.materialIndex];Ge&&Ge.visible&&m.push(T,me,Ge,q,Pe.z,Re)}}else Me.visible&&m.push(T,me,Me,q,Pe.z,null)}}const ee=T.children;for(let me=0,Me=ee.length;me<Me;me++)ke(ee[me],F,q,G)}function Nt(T,F,q,G){const N=T.opaque,ee=T.transmissive,me=T.transparent;p.setupLightsView(q),ne===!0&&re.setGlobalState(v.clippingPlanes,q),G&&ye.viewport(P.copy(G)),N.length>0&&yt(N,F,q),ee.length>0&&yt(ee,F,q),me.length>0&&yt(me,F,q),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Je(T,F,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new qr(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?zo:Gi,minFilter:Fr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const ee=p.state.transmissionRenderTarget[G.id],me=G.viewport||P;ee.setSize(me.z*v.transmissionResolutionScale,me.w*v.transmissionResolutionScale);const Me=v.getRenderTarget();v.setRenderTarget(ee),v.getClearColor(k),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),Ze&&Ue.render(q);const xe=v.toneMapping;v.toneMapping=lr;const Ce=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),ne===!0&&re.setGlobalState(v.clippingPlanes,G),yt(T,q,G),R.updateMultisampleRenderTarget(ee),R.updateRenderTargetMipmap(ee),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Re=0,Ge=F.length;Re<Ge;Re++){const ft=F[Re],Bt=ft.object,Ut=ft.geometry,ct=ft.material,Ie=ft.group;if(ct.side===Fi&&Bt.layers.test(G.layers)){const tn=ct.side;ct.side=wn,ct.needsUpdate=!0,Vt(Bt,q,G,Ut,ct,Ie),ct.side=tn,ct.needsUpdate=!0,Ne=!0}}Ne===!0&&(R.updateMultisampleRenderTarget(ee),R.updateRenderTargetMipmap(ee))}v.setRenderTarget(Me),v.setClearColor(k,W),Ce!==void 0&&(G.viewport=Ce),v.toneMapping=xe}function yt(T,F,q){const G=F.isScene===!0?F.overrideMaterial:null;for(let N=0,ee=T.length;N<ee;N++){const me=T[N],Me=me.object,xe=me.geometry,Ce=G===null?me.material:G,Ne=me.group;Me.layers.test(q.layers)&&Vt(Me,F,q,xe,Ce,Ne)}}function Vt(T,F,q,G,N,ee){T.onBeforeRender(v,F,q,G,N,ee),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(v,F,q,G,T,ee),N.transparent===!0&&N.side===Fi&&N.forceSinglePass===!1?(N.side=wn,N.needsUpdate=!0,v.renderBufferDirect(q,F,G,N,T,ee),N.side=fr,N.needsUpdate=!0,v.renderBufferDirect(q,F,G,N,T,ee),N.side=Fi):v.renderBufferDirect(q,F,G,N,T,ee),T.onAfterRender(v,F,q,G,N,ee)}function vt(T,F,q){F.isScene!==!0&&(F=tt);const G=be.get(T),N=p.state.lights,ee=p.state.shadowsArray,me=N.state.version,Me=ue.getParameters(T,N.state,ee,F,q),xe=ue.getProgramCacheKey(Me);let Ce=G.programs;G.environment=T.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(T.isMeshStandardMaterial?V:E).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ce===void 0&&(T.addEventListener("dispose",ze),Ce=new Map,G.programs=Ce);let Ne=Ce.get(xe);if(Ne!==void 0){if(G.currentProgram===Ne&&G.lightsStateVersion===me)return ht(T,Me),Ne}else Me.uniforms=ue.getUniforms(T),T.onBeforeCompile(Me,v),Ne=ue.acquireProgram(Me,xe),Ce.set(xe,Ne),G.uniforms=Me.uniforms;const Re=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Re.clippingPlanes=re.uniform),ht(T,Me),G.needsLights=fn(T),G.lightsStateVersion=me,G.needsLights&&(Re.ambientLightColor.value=N.state.ambient,Re.lightProbe.value=N.state.probe,Re.directionalLights.value=N.state.directional,Re.directionalLightShadows.value=N.state.directionalShadow,Re.spotLights.value=N.state.spot,Re.spotLightShadows.value=N.state.spotShadow,Re.rectAreaLights.value=N.state.rectArea,Re.ltc_1.value=N.state.rectAreaLTC1,Re.ltc_2.value=N.state.rectAreaLTC2,Re.pointLights.value=N.state.point,Re.pointLightShadows.value=N.state.pointShadow,Re.hemisphereLights.value=N.state.hemi,Re.directionalShadowMap.value=N.state.directionalShadowMap,Re.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Re.spotShadowMap.value=N.state.spotShadowMap,Re.spotLightMatrix.value=N.state.spotLightMatrix,Re.spotLightMap.value=N.state.spotLightMap,Re.pointShadowMap.value=N.state.pointShadowMap,Re.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Ne,G.uniformsList=null,Ne}function xt(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=ka.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function ht(T,F){const q=be.get(T);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function Un(T,F,q,G,N){F.isScene!==!0&&(F=tt),R.resetTextureUnits();const ee=F.fog,me=G.isMeshStandardMaterial?F.environment:null,Me=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Fs,xe=(G.isMeshStandardMaterial?V:E).get(G.envMap||me),Ce=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ne=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Re=!!q.morphAttributes.position,Ge=!!q.morphAttributes.normal,ft=!!q.morphAttributes.color;let Bt=lr;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Bt=v.toneMapping);const Ut=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ct=Ut!==void 0?Ut.length:0,Ie=be.get(G),tn=p.state.lights;if(ne===!0&&(de===!0||T!==x)){const dn=T===x&&G.id===S;re.setState(G,T,dn)}let dt=!1;G.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==tn.state.version||Ie.outputColorSpace!==Me||N.isBatchedMesh&&Ie.batching===!1||!N.isBatchedMesh&&Ie.batching===!0||N.isBatchedMesh&&Ie.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ie.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ie.instancing===!1||!N.isInstancedMesh&&Ie.instancing===!0||N.isSkinnedMesh&&Ie.skinning===!1||!N.isSkinnedMesh&&Ie.skinning===!0||N.isInstancedMesh&&Ie.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ie.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ie.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ie.instancingMorph===!1&&N.morphTexture!==null||Ie.envMap!==xe||G.fog===!0&&Ie.fog!==ee||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==re.numPlanes||Ie.numIntersection!==re.numIntersection)||Ie.vertexAlphas!==Ce||Ie.vertexTangents!==Ne||Ie.morphTargets!==Re||Ie.morphNormals!==Ge||Ie.morphColors!==ft||Ie.toneMapping!==Bt||Ie.morphTargetsCount!==ct)&&(dt=!0):(dt=!0,Ie.__version=G.version);let li=Ie.currentProgram;dt===!0&&(li=vt(G,F,N));let Jr=!1,In=!1,$s=!1;const At=li.getUniforms(),Zn=Ie.uniforms;if(ye.useProgram(li.program)&&(Jr=!0,In=!0,$s=!0),G.id!==S&&(S=G.id,In=!0),Jr||x!==T){ye.buffers.depth.getReversed()?(ie.copy(T.projectionMatrix),y_(ie),E_(ie),At.setValue(L,"projectionMatrix",ie)):At.setValue(L,"projectionMatrix",T.projectionMatrix),At.setValue(L,"viewMatrix",T.matrixWorldInverse);const yn=At.map.cameraPosition;yn!==void 0&&yn.setValue(L,Oe.setFromMatrixPosition(T.matrixWorld)),z.logarithmicDepthBuffer&&At.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&At.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,In=!0,$s=!0)}if(N.isSkinnedMesh){At.setOptional(L,N,"bindMatrix"),At.setOptional(L,N,"bindMatrixInverse");const dn=N.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),At.setValue(L,"boneTexture",dn.boneTexture,R))}N.isBatchedMesh&&(At.setOptional(L,N,"batchingTexture"),At.setValue(L,"batchingTexture",N._matricesTexture,R),At.setOptional(L,N,"batchingIdTexture"),At.setValue(L,"batchingIdTexture",N._indirectTexture,R),At.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&At.setValue(L,"batchingColorTexture",N._colorsTexture,R));const jn=q.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&De.update(N,q,li),(In||Ie.receiveShadow!==N.receiveShadow)&&(Ie.receiveShadow=N.receiveShadow,At.setValue(L,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Zn.envMap.value=xe,Zn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Zn.envMapIntensity.value=F.environmentIntensity),In&&(At.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ie.needsLights&&Tt(Zn,$s),ee&&G.fog===!0&&oe.refreshFogUniforms(Zn,ee),oe.refreshMaterialUniforms(Zn,G,H,Y,p.state.transmissionRenderTarget[T.id]),ka.upload(L,xt(Ie),Zn,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ka.upload(L,xt(Ie),Zn,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&At.setValue(L,"center",N.center),At.setValue(L,"modelViewMatrix",N.modelViewMatrix),At.setValue(L,"normalMatrix",N.normalMatrix),At.setValue(L,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const dn=G.uniformsGroups;for(let yn=0,xl=dn.length;yn<xl;yn++){const vr=dn[yn];I.update(vr,li),I.bind(vr,li)}}return li}function Tt(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function fn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,F,q){be.get(T.texture).__webglTexture=F,be.get(T.depthTexture).__webglTexture=q;const G=be.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=q===void 0,G.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const q=be.get(T);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0};const Kn=L.createFramebuffer();this.setRenderTarget=function(T,F=0,q=0){C=T,w=F,b=q;let G=!0,N=null,ee=!1,me=!1;if(T){const xe=be.get(T);if(xe.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(xe.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(xe.__hasExternalTextures)R.rebindTextures(T,be.get(T.texture).__webglTexture,be.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Re=T.depthTexture;if(xe.__boundDepthTexture!==Re){if(Re!==null&&be.has(Re)&&(T.width!==Re.image.width||T.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Ce=T.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(me=!0);const Ne=be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?N=Ne[F][q]:N=Ne[F],ee=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?N=be.get(T).__webglMultisampledFramebuffer:Array.isArray(Ne)?N=Ne[q]:N=Ne,P.copy(T.viewport),U.copy(T.scissor),O=T.scissorTest}else P.copy(ce).multiplyScalar(H).floor(),U.copy(Le).multiplyScalar(H).floor(),O=Ke;if(q!==0&&(N=Kn),ye.bindFramebuffer(L.FRAMEBUFFER,N)&&G&&ye.drawBuffers(T,N),ye.viewport(P),ye.scissor(U),ye.setScissorTest(O),ee){const xe=be.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe.__webglTexture,q)}else if(me){const xe=be.get(T.texture),Ce=F;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.__webglTexture,q,Ce)}else if(T!==null&&q!==0){const xe=be.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xe.__webglTexture,q)}S=-1},this.readRenderTargetPixels=function(T,F,q,G,N,ee,me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){ye.bindFramebuffer(L.FRAMEBUFFER,Me);try{const xe=T.texture,Ce=xe.format,Ne=xe.type;if(!z.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-G&&q>=0&&q<=T.height-N&&L.readPixels(F,q,G,N,Fe.convert(Ce),Fe.convert(Ne),ee)}finally{const xe=C!==null?be.get(C).__webglFramebuffer:null;ye.bindFramebuffer(L.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(T,F,q,G,N,ee,me){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){const xe=T.texture,Ce=xe.format,Ne=xe.type;if(!z.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-G&&q>=0&&q<=T.height-N){ye.bindFramebuffer(L.FRAMEBUFFER,Me);const Re=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Re),L.bufferData(L.PIXEL_PACK_BUFFER,ee.byteLength,L.STREAM_READ),L.readPixels(F,q,G,N,Fe.convert(Ce),Fe.convert(Ne),0);const Ge=C!==null?be.get(C).__webglFramebuffer:null;ye.bindFramebuffer(L.FRAMEBUFFER,Ge);const ft=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await M_(L,ft,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Re),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ee),L.deleteBuffer(Re),L.deleteSync(ft),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,q=0){T.isTexture!==!0&&(Ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const G=Math.pow(2,-q),N=Math.floor(T.image.width*G),ee=Math.floor(T.image.height*G),me=F!==null?F.x:0,Me=F!==null?F.y:0;R.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,me,Me,N,ee),ye.unbindTexture()};const Gt=L.createFramebuffer(),Wt=L.createFramebuffer();this.copyTextureToTexture=function(T,F,q=null,G=null,N=0,ee=null){T.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],F=arguments[2],ee=arguments[3]||0,q=null),ee===null&&(N!==0?(Ar("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=N,N=0):ee=0);let me,Me,xe,Ce,Ne,Re,Ge,ft,Bt;const Ut=T.isCompressedTexture?T.mipmaps[ee]:T.image;if(q!==null)me=q.max.x-q.min.x,Me=q.max.y-q.min.y,xe=q.isBox3?q.max.z-q.min.z:1,Ce=q.min.x,Ne=q.min.y,Re=q.isBox3?q.min.z:0;else{const jn=Math.pow(2,-N);me=Math.floor(Ut.width*jn),Me=Math.floor(Ut.height*jn),T.isDataArrayTexture?xe=Ut.depth:T.isData3DTexture?xe=Math.floor(Ut.depth*jn):xe=1,Ce=0,Ne=0,Re=0}G!==null?(Ge=G.x,ft=G.y,Bt=G.z):(Ge=0,ft=0,Bt=0);const ct=Fe.convert(F.format),Ie=Fe.convert(F.type);let tn;F.isData3DTexture?(R.setTexture3D(F,0),tn=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),tn=L.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),tn=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const dt=L.getParameter(L.UNPACK_ROW_LENGTH),li=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Jr=L.getParameter(L.UNPACK_SKIP_PIXELS),In=L.getParameter(L.UNPACK_SKIP_ROWS),$s=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ut.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ut.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ce),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ne),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Re);const At=T.isDataArrayTexture||T.isData3DTexture,Zn=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const jn=be.get(T),dn=be.get(F),yn=be.get(jn.__renderTarget),xl=be.get(dn.__renderTarget);ye.bindFramebuffer(L.READ_FRAMEBUFFER,yn.__webglFramebuffer),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,xl.__webglFramebuffer);for(let vr=0;vr<xe;vr++)At&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,be.get(T).__webglTexture,N,Re+vr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,be.get(F).__webglTexture,ee,Bt+vr)),L.blitFramebuffer(Ce,Ne,me,Me,Ge,ft,me,Me,L.DEPTH_BUFFER_BIT,L.NEAREST);ye.bindFramebuffer(L.READ_FRAMEBUFFER,null),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(N!==0||T.isRenderTargetTexture||be.has(T)){const jn=be.get(T),dn=be.get(F);ye.bindFramebuffer(L.READ_FRAMEBUFFER,Gt),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,Wt);for(let yn=0;yn<xe;yn++)At?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,jn.__webglTexture,N,Re+yn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,jn.__webglTexture,N),Zn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,dn.__webglTexture,ee,Bt+yn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,dn.__webglTexture,ee),N!==0?L.blitFramebuffer(Ce,Ne,me,Me,Ge,ft,me,Me,L.COLOR_BUFFER_BIT,L.NEAREST):Zn?L.copyTexSubImage3D(tn,ee,Ge,ft,Bt+yn,Ce,Ne,me,Me):L.copyTexSubImage2D(tn,ee,Ge,ft,Ce,Ne,me,Me);ye.bindFramebuffer(L.READ_FRAMEBUFFER,null),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Zn?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(tn,ee,Ge,ft,Bt,me,Me,xe,ct,Ie,Ut.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(tn,ee,Ge,ft,Bt,me,Me,xe,ct,Ut.data):L.texSubImage3D(tn,ee,Ge,ft,Bt,me,Me,xe,ct,Ie,Ut):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ee,Ge,ft,me,Me,ct,Ie,Ut.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ee,Ge,ft,Ut.width,Ut.height,ct,Ut.data):L.texSubImage2D(L.TEXTURE_2D,ee,Ge,ft,me,Me,ct,Ie,Ut);L.pixelStorei(L.UNPACK_ROW_LENGTH,dt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,li),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Jr),L.pixelStorei(L.UNPACK_SKIP_ROWS,In),L.pixelStorei(L.UNPACK_SKIP_IMAGES,$s),ee===0&&F.generateMipmaps&&L.generateMipmap(tn),ye.unbindTexture()},this.copyTextureToTexture3D=function(T,F,q=null,G=null,N=0){return T.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,G=arguments[1]||null,T=arguments[2],F=arguments[3],N=arguments[4]||0),Ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,q,G,N)},this.initRenderTarget=function(T){be.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){w=0,b=0,C=null,ye.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}function Ii(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Kd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Yn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Bs={duration:.5,overwrite:!1,delay:0},Vu,rn,Rt,ri=1e8,Mt=1/ri,ru=Math.PI*2,GS=ru/4,WS=0,Zd=Math.sqrt,XS=Math.cos,YS=Math.sin,en=function(e){return typeof e=="string"},It=function(e){return typeof e=="function"},Yi=function(e){return typeof e=="number"},Gu=function(e){return typeof e>"u"},wi=function(e){return typeof e=="object"},Rn=function(e){return e!==!1},Wu=function(){return typeof window<"u"},Sa=function(e){return It(e)||en(e)},jd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},hn=Array.isArray,qS=/random\([^)]+\)/g,$S=/,\s*/g,Mf=/(?:-?\.?\d|\.)+/gi,Jd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,xs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ql=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Qd=/[+-]=-?[.\d]+/,KS=/[^,'"\[\]\s]+/gi,ZS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pt,vi,su,Xu,qn={},tl={},ep,tp=function(e){return(tl=zs(e,qn))&&Ln},Yu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Po=function(e,t){return!t&&console.warn(e)},np=function(e,t){return e&&(qn[e]=t)&&tl&&(tl[e]=t)||qn},Do=function(){return 0},jS={suppressEvents:!0,isStart:!0,kill:!1},Ha={suppressEvents:!0,kill:!1},JS={suppressEvents:!0},qu={},cr=[],ou={},ip,zn={},ec={},yf=30,Va=[],$u="",Ku=function(e){var t=e[0],n,i;if(wi(t)||It(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Va.length;i--&&!Va[i].targetTest(t););n=Va[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Ap(e[i],n)))||e.splice(i,1);return e},zr=function(e){return e._gsap||Ku(si(e))[0]._gsap},rp=function(e,t,n){return(n=e[t])&&It(n)?e[t]():Gu(n)&&e.getAttribute&&e.getAttribute(t)||n},Cn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ft=function(e){return Math.round(e*1e5)/1e5||0},Ct=function(e){return Math.round(e*1e7)/1e7||0},bs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},QS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},nl=function(){var e=cr.length,t=cr.slice(0),n,i;for(ou={},cr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Zu=function(e){return!!(e._initted||e._startAt||e.add)},sp=function(e,t,n,i){cr.length&&!rn&&nl(),e.render(t,n,!!(rn&&t<0&&Zu(e))),cr.length&&!rn&&nl()},op=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(KS).length<2?t:en(e)?e.trim():e},ap=function(e){return e},$n=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},eM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},zs=function(e,t){for(var n in t)e[n]=t[n];return e},Ef=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=wi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},il=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},mo=function(e){var t=e.parent||Pt,n=e.keyframes?eM(hn(e.keyframes)):$n;if(Rn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},tM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},lp=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ml=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},dr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},kr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},nM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},au=function(e,t,n,i){return e._startAt&&(rn?e._startAt.revert(Ha):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},iM=function r(e){return!e||e._ts&&r(e.parent)},Tf=function(e){return e._repeat?ks(e._tTime,e=e.duration()+e._rDelay)*e:0},ks=function(e,t){var n=Math.floor(e=Ct(e/t));return e&&n===e?n-1:n},rl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},_l=function(e){return e._end=Ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},gl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ct(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),_l(e),n._dirty||kr(n,e)),e},cp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=rl(e.rawTime(),t),(!t._dur||Xo(0,t.totalDuration(),n)-t._tTime>Mt)&&t.render(n,!0)),kr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Mt}},Mi=function(e,t,n,i){return t.parent&&dr(t),t._start=Ct((Yi(n)?n:n||e!==Pt?Qn(e,n,t):e._time)+t._delay),t._end=Ct(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),lp(e,t,"_first","_last",e._sort?"_start":0),lu(t)||(e._recent=t),i||cp(e,t),e._ts<0&&gl(e,e._tTime),e},up=function(e,t){return(qn.ScrollTrigger||Yu("scrollTrigger",t))&&qn.ScrollTrigger.create(t,e)},hp=function(e,t,n,i,s){if(Ju(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!rn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ip!==Hn.frame)return cr.push(e),e._lazy=[s,i],1},rM=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},lu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},sM=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&rM(e)&&!(!e._initted&&lu(e))||(e._ts<0||e._dp._ts<0)&&!lu(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Xo(0,e._tDur,t),u=ks(l,a),e._yoyo&&u&1&&(o=1-o),u!==ks(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||rn||i||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&hp(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Mt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&au(e,t,n,!0),e._onUpdate&&!n&&Gn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Gn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&dr(e,1),!n&&!rn&&(Gn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},oM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Hs=function(e,t,n,i){var s=e._repeat,o=Ct(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ct(o*(s+1)+e._rDelay*s):o,a>0&&!i&&gl(e,e._tTime=e._tDur*a),e.parent&&_l(e),n||kr(e.parent,e),e},bf=function(e){return e instanceof Sn?kr(e):Hs(e,e._dur)},aM={_start:0,endTime:Do,totalDuration:Do},Qn=function r(e,t,n){var i=e.labels,s=e._recent||aM,o=e.duration()>=ri?s.endTime(!1):e._dur,a,l,c;return en(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(hn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},_o=function(e,t,n){var i=Yi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Rn(l.vars.inherit)&&l.parent;o.immediateRender=Rn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ht(t[0],o,t[s+1])},gr=function(e,t){return e||e===0?t(e):t},Xo=function(e,t,n){return n<e?e:n>t?t:n},cn=function(e,t){return!en(e)||!(t=ZS.exec(e))?"":t[1]},lM=function(e,t,n){return gr(n,function(i){return Xo(e,t,i)})},cu=[].slice,fp=function(e,t){return e&&wi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&wi(e[0]))&&!e.nodeType&&e!==vi},cM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return en(i)&&!t||fp(i,1)?(s=n).push.apply(s,si(i)):n.push(i)})||n},si=function(e,t,n){return Rt&&!t&&Rt.selector?Rt.selector(e):en(e)&&!n&&(su||!Vs())?cu.call((t||Xu).querySelectorAll(e),0):hn(e)?cM(e,n):fp(e)?cu.call(e,0):e?[e]:[]},uu=function(e){return e=si(e)[0]||Po("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return si(t,n.querySelectorAll?n:n===e?Po("Invalid scope")||Xu.createElement("div"):e)}},dp=function(e){return e.sort(function(){return .5-Math.random()})},pp=function(e){if(It(e))return e;var t=wi(e)?e:{each:e},n=Hr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return en(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,m=o[_],p,M,y,v,A,w,b,C,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,ri])[1],!S){for(b=-ri;b<(b=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],p=l?Math.min(S,_)*u-.5:i%S,M=S===ri?0:l?_*h/S-.5:i/S|0,b=0,C=ri,w=0;w<_;w++)y=w%S-p,v=M-(w/S|0),m[w]=A=c?Math.abs(c==="y"?v:y):Zd(y*y+v*v),A>b&&(b=A),A<C&&(C=A);i==="random"&&dp(m),m.max=b-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=cn(t.amount||t.each)||0,n=n&&_<0?Tp(n):n}return _=(m[f]-m.min)/m.max||0,Ct(m.b+(n?n(_):_)*m.v)+m.u}},hu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ct(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Yi(n)?0:cn(n))}},mp=function(e,t){var n=hn(e),i,s;return!n&&wi(e)&&(i=n=e.radius||ri,e.values?(e=si(e.values),(s=!Yi(e[0]))&&(i*=i)):e=hu(e.increment)),gr(t,n?It(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ri,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Yi(o)?u:u+cn(o)}:hu(e))},_p=function(e,t,n,i){return gr(hn(e)?!t:n===!0?!!(n=0):!i,function(){return hn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},uM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},hM=function(e,t){return function(n){return e(parseFloat(n))+(t||cn(n))}},fM=function(e,t,n){return vp(e,t,0,1,n)},gp=function(e,t,n){return gr(n,function(i){return e[~~t(i)]})},dM=function r(e,t,n){var i=t-e;return hn(e)?gp(e,r(0,e.length),t):gr(n,function(s){return(i+(s-e)%i)%i+e})},pM=function r(e,t,n){var i=t-e,s=i*2;return hn(e)?gp(e,r(0,e.length-1),t):gr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Lo=function(e){return e.replace(qS,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split($S);return _p(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},vp=function(e,t,n,i,s){var o=t-e,a=i-n;return gr(s,function(l){return n+((l-e)/o*a||0)})},mM=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=en(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(hn(e)&&!hn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=zs(hn(e)?[]:{},e));if(!u){for(l in t)ju.call(a,e,l,"get",t[l]);s=function(g){return th(g,a)||(o?e.p:e)}}}return gr(n,s)},wf=function(e,t,n){var i=e.labels,s=ri,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Gn=function(e,t,n){var i=e.vars,s=i[t],o=Rt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&cr.length&&nl(),a&&(Rt=a),u=l?s.apply(c,l):s.call(c),Rt=o,u},ao=function(e){return dr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!rn),e.progress()<1&&Gn(e,"onInterrupt"),e},Ss,xp=[],Sp=function(e){if(e)if(e=!e.name&&e.default||e,Wu()||e.headless){var t=e.name,n=It(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Do,render:th,add:ju,kill:DM,modifier:PM,rawVars:0},o={targetTest:0,get:0,getSetter:eh,aliases:{},register:0};if(Vs(),e!==i){if(zn[t])return;$n(i,$n(il(e,s),o)),zs(i.prototype,zs(s,il(e,o))),zn[i.prop=t]=i,e.targetTest&&(Va.push(i),qu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}np(t,i),e.register&&e.register(Ln,i,Pn)}else xp.push(e)},St=255,lo={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},tc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*St+.5|0},Mp=function(e,t,n){var i=e?Yi(e)?[e>>16,e>>8&St,e&St]:0:lo.black,s,o,a,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),lo[e])i=lo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&St,i&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Mf),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=tc(l+1/3,s,o),i[1]=tc(l,s,o),i[2]=tc(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Jd),n&&i.length<4&&(i[3]=1),i}else i=e.match(Mf)||lo.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/St,o=i[1]/St,a=i[2]/St,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},yp=function(e){var t=[],n=[],i=-1;return e.split(ur).forEach(function(s){var o=s.match(xs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Af=function(e,t,n){var i="",s=(e+i).match(ur),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Mp(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=yp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(ur,"1").split(xs),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(ur),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},ur=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in lo)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),_M=/hsl[a]?\(/,Ep=function(e){var t=e.join(" "),n;if(ur.lastIndex=0,ur.test(t))return n=_M.test(t),e[1]=Af(e[1],n),e[0]=Af(e[0],n,yp(e[1])),!0},Uo,Hn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(m){var p=r()-i,M=m===!0,y,v,A,w;if((p>e||p<0)&&(n+=p-t),i+=p,A=i-n,y=A-o,(y>0||M)&&(w=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,o+=y+(y>=s?4:s-y),v=1),M||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](A,f,w,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){ep&&(!su&&Wu()&&(vi=su=window,Xu=vi.document||{},qn.gsap=Ln,(vi.gsapVersions||(vi.gsapVersions=[])).push(Ln.version),tp(tl||vi.GreenSockGlobals||!vi.gsap&&vi||{}),xp.forEach(Sp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Uo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Uo=0,c=Do},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,M){var y=p?function(v,A,w,b){m(v,A,w,b),h.remove(y)}:m;return h.remove(m),a[M?"unshift":"push"](y),Vs(),y},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h})(),Vs=function(){return!Uo&&Hn.wake()},rt={},gM=/^[\d.\-M][\d.\-,\s]/,vM=/["']/g,xM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(vM,"").trim():+c,i=l.substr(a+1).trim();return t},SM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},MM=function(e){var t=(e+"").split("("),n=rt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[xM(t[1])]:SM(e).split(",").map(op)):rt._CE&&gM.test(e)?rt._CE("",e):n},Tp=function(e){return function(t){return 1-e(1-t)}},bp=function r(e,t){for(var n=e._first,i;n;)n instanceof Sn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Hr=function(e,t){return e&&(It(e)?e:rt[e]||MM(e))||t},jr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Cn(e,function(a){rt[a]=qn[a]=s,rt[o=a.toLowerCase()]=n;for(var l in s)rt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=rt[a+"."+l]=s[l]}),s},wp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},nc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/ru*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*YS((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:wp(a);return s=ru/s,l.config=function(c,u){return r(e,c,u)},l},ic=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:wp(n);return i.config=function(s){return r(e,s)},i};Cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;jr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});rt.Linear.easeNone=rt.none=rt.Linear.easeIn;jr("Elastic",nc("in"),nc("out"),nc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};jr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);jr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});jr("Circ",function(r){return-(Zd(1-r*r)-1)});jr("Sine",function(r){return r===1?1:-XS(r*GS)+1});jr("Back",ic("in"),ic("out"),ic());rt.SteppedEase=rt.steps=qn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Mt;return function(a){return((i*Xo(0,o,a)|0)+s)*n}}};Bs.ease=rt["quad.out"];Cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return $u+=r+","+r+"Params,"});var Ap=function(e,t){this.id=WS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:rp,this.set=t?t.getSetter:eh},Io=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Hs(this,+t.duration,1,1),this.data=t.data,Rt&&(this._ctx=Rt,Rt.data.push(this)),Uo||Hn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Hs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Vs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(gl(this,n),!s._dp||s.parent||cp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Mi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Mt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),sp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Tf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Tf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ks(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?rl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Mt?0:this._rts,this.totalTime(Xo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),_l(this),nM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Vs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ct(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Mi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Rn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?rl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=JS);var i=rn;return rn=n,Zu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),rn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,bf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,bf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Qn(this,n),Rn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Rn(i)),this._dur||(this._zTime=-Mt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Mt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=It(n)?n:ap,l=function(){var u=i.then;i.then=null,s&&s(),It(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ao(this)},r})();$n(Io.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var Sn=(function(r){Kd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Rn(n.sortChildren),Pt&&Mi(n.parent||Pt,Ii(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&up(Ii(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return _o(0,arguments,this),this},t.from=function(i,s,o){return _o(1,arguments,this),this},t.fromTo=function(i,s,o,a){return _o(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,mo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ht(i,s,Qn(this,o),1),this},t.call=function(i,s,o){return Mi(this,Ht.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ht(i,o,Qn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,mo(o).immediateRender=Rn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,mo(a).immediateRender=Rn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ct(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,M,y,v,A,w,b;if(this!==Pt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,y=this._ts,p=!y,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=Ct(u%m),u===l?(_=this._repeat,f=c):(A=Ct(u/m),_=~~A,_&&_===A&&(f=c,_--),f>c&&(f=c)),A=ks(this._tTime,m),!a&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),w&&_&1&&(f=c-f,b=1),_!==A&&!this._lock){var C=w&&A&1,S=C===(w&&_&1);if(_<A&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(b?0:Ct(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,A=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;bp(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=oM(this,Ct(a),Ct(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!A&&(Gn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=-Mt);break}}d=g}else{d=this._last;for(var x=i<0?i:f;d;){if(g=d._prev,(d._act||x<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,o||rn&&Zu(d)),f!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=x?-Mt:Mt);break}}d=g}}if(M&&!s&&(this.pause(),M.render(f>=a?0:-Mt)._zTime=f>=a?1:-1,this._ts))return this._start=v,_l(this),this.render(i,s,o);this._onUpdate&&!s&&Gn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&dr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Gn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Yi(s)||(s=Qn(this,s,i)),!(i instanceof Io)){if(hn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(en(i))return this.addLabel(i,s);if(It(i))i=Ht.delayedCall(0,i);else return this}return this!==i?Mi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ri);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ht?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return en(i)?this.removeLabel(i):It(i)?this.killTweensOf(i):(i.parent===this&&ml(this,i),i===this._recent&&(this._recent=this._last),kr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ct(Hn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Qn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Ht.delayedCall(0,s||Do,o);return a.data="isPause",this._hasPause=1,Mi(this,a,Qn(this,i))},t.removePause=function(i){var s=this._first;for(i=Qn(this,i);s;)s._start===i&&s.data==="isPause"&&dr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)nr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=si(i),l=this._first,c=Yi(s),u;l;)l instanceof Ht?QS(l._targets,a)&&(c?(!nr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Qn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Ht.to(o,$n({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Mt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Hs(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,$n({startAt:{time:Qn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),wf(this,Qn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),wf(this,Qn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ct(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return kr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),kr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ri,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Mi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Ct(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Hs(o,o===Pt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Pt._ts&&(sp(Pt,rl(i,Pt)),ip=Hn.frame),Hn.frame>=yf){yf+=Yn.autoSleep||120;var s=Pt._first;if((!s||!s._ts)&&Yn.autoSleep&&Hn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Hn.sleep()}}},e})(Io);$n(Sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var yM=function(e,t,n,i,s,o,a){var l=new Pn(this._pt,e,t,0,1,Up,null,s),c=0,u=0,h,f,d,g,_,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Lo(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),f=n.match(Ql)||[];h=Ql.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?bs(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Ql.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Qd.test(i)||p)&&(l.e=0),this._pt=l,l},ju=function(e,t,n,i,s,o,a,l,c,u){It(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:It(h)?c?e[t.indexOf("set")||!It(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=It(h)?c?AM:Dp:Qu,g;if(en(i)&&(~i.indexOf("random(")&&(i=Lo(i)),i.charAt(1)==="="&&(g=bs(f,i)+(cn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||fu)return!isNaN(f*i)&&i!==""?(g=new Pn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?CM:Lp,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&Yu(t,i),yM.call(this,e,t,f,i,d,l||Yn.stringFilter,c))},EM=function(e,t,n,i,s){if(It(e)&&(e=go(e,s,t,n,i)),!wi(e)||e.style&&e.nodeType||hn(e)||jd(e))return en(e)?go(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=go(e[a],s,t,n,i);return o},Rp=function(e,t,n,i,s,o){var a,l,c,u;if(zn[e]&&(a=new zn[e]).init(s,a.rawVars?t[e]:EM(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Pn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ss))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},nr,fu,Ju=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,y=e._overwrite==="auto"&&!Vu,v=e.timeline,A,w,b,C,S,x,P,U,O,k,W,X,Y;if(v&&(!f||!s)&&(s="none"),e._ease=Hr(s,Bs.ease),e._yEase=h?Tp(Hr(h===!0?s:h,Bs.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(U=m[0]?zr(m[0]).harness:0,X=U&&i[U.prop],A=il(i,qu),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Ha:jS),_._lazy=0),o){if(dr(e._startAt=Ht.set(m,$n({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Rn(l),startAt:null,delay:0,onUpdate:c&&function(){return Gn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(rn||!a&&!d)&&e._startAt.revert(Ha),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),b=$n({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Rn(l),immediateRender:a,stagger:0,parent:p},A),X&&(b[U.prop]=X),dr(e._startAt=Ht.set(m,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(rn?e._startAt.revert(Ha):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Rn(l)||l&&!g,w=0;w<m.length;w++){if(S=m[w],P=S._gsap||Ku(m)[w]._gsap,e._ptLookup[w]=k={},ou[P.id]&&cr.length&&nl(),W=M===m?w:M.indexOf(S),U&&(O=new U).init(S,X||A,e,W,M)!==!1&&(e._pt=C=new Pn(e._pt,S,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(H){k[H]=C}),O.priority&&(x=1)),!U||X)for(b in A)zn[b]&&(O=Rp(b,A,e,W,S,M))?O.priority&&(x=1):k[b]=C=ju.call(e,S,b,"get",A[b],W,M,0,i.stringFilter);e._op&&e._op[w]&&e.kill(S,e._op[w]),y&&e._pt&&(nr=e,Pt.killTweensOf(S,k,e.globalTime(t)),Y=!e.parent,nr=0),e._pt&&l&&(ou[P.id]=1)}x&&Ip(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,f&&t<=0&&v.render(ri,!0,!0)},TM=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return fu=1,e.vars[t]="+=0",Ju(e,a),fu=0,l?Po(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Ft(n)+cn(h.e)),h.b&&(h.b=u.s+cn(h.b))},bM=function(e,t){var n=e[0]?zr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=zs({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},wM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(hn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},go=function(e,t,n,i,s){return It(e)?e.call(t,n,i,s):en(e)&&~e.indexOf("random(")?Lo(e):e},Cp=$u+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Pp={};Cn(Cp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Pp[r]=1});var Ht=(function(r){Kd(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:mo(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=i.parent||Pt,y=(hn(n)||jd(n)?Yi(n[0]):"length"in i)?[n]:si(n),v,A,w,b,C,S,x,P;if(a._targets=y.length?Ku(y):Po("GSAP target "+n+" not found. https://gsap.com",!Yn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Sa(c)||Sa(u)){if(i=a.vars,v=a.timeline=new Sn({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:y}),v.kill(),v.parent=v._dp=Ii(a),v._start=0,f||Sa(c)||Sa(u)){if(b=y.length,x=f&&pp(f),wi(f))for(C in f)~Cp.indexOf(C)&&(P||(P={}),P[C]=f[C]);for(A=0;A<b;A++)w=il(i,Pp),w.stagger=0,p&&(w.yoyoEase=p),P&&zs(w,P),S=y[A],w.duration=+go(c,Ii(a),A,S,y),w.delay=(+go(u,Ii(a),A,S,y)||0)-a._delay,!f&&b===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),v.to(S,w,x?x(A,S,y):0),v._ease=rt.none;v.duration()?c=u=0:a.timeline=0}else if(g){mo($n(v.vars.defaults,{ease:"none"})),v._ease=Hr(g.ease||i.ease||"none");var U=0,O,k,W;if(hn(g))g.forEach(function(X){return v.to(y,X,">")}),v.duration();else{w={};for(C in g)C==="ease"||C==="easeEach"||wM(C,g[C],w,g.easeEach);for(C in w)for(O=w[C].sort(function(X,Y){return X.t-Y.t}),U=0,A=0;A<O.length;A++)k=O[A],W={ease:k.e,duration:(k.t-(A?O[A-1].t:0))/100*c},W[C]=k.v,v.to(y,W,U),U+=W.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!Vu&&(nr=Ii(a),Pt.killTweensOf(y),nr=0),Mi(M,Ii(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===Ct(M._time)&&Rn(h)&&iM(Ii(a))&&M.data!=="nested")&&(a._tTime=-Mt,a.render(Math.max(0,-u)||0)),m&&up(Ii(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Mt&&!u?l:i<Mt?0:i,f,d,g,_,m,p,M,y,v;if(!c)sM(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=Ct(h%_),h===l?(g=this._repeat,f=c):(m=Ct(h/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,f=c-f),m=ks(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(y&&this._yEase&&bp(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Ct(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(hp(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(f/c),this._from&&(this.ratio=M=1-M),!a&&h&&!s&&!m&&(Gn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&au(this,i,s,o),Gn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Gn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&au(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&dr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Gn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Uo||Hn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ju(this,c),u=this._ease(c/this._dur),TM(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(gl(this,0),this.parent||lp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ao(this):this.scrollTrigger&&this.scrollTrigger.kill(!!rn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,nr&&nr.vars.overwrite!==!0)._first||ao(this),this.parent&&o!==this.timeline.totalDuration()&&Hs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?si(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&tM(a,l))return s==="all"&&(this._pt=0),ao(this);for(h=this._op=this._op||[],s!=="all"&&(en(s)&&(_={},Cn(s,function(M){return _[M]=1}),s=_),s=bM(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&ml(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&ao(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return _o(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return _o(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Pt.killTweensOf(i,s,o)},e})(Io);$n(Ht.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Cn("staggerTo,staggerFrom,staggerFromTo",function(r){Ht[r]=function(){var e=new Sn,t=cu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Qu=function(e,t,n){return e[t]=n},Dp=function(e,t,n){return e[t](n)},AM=function(e,t,n,i){return e[t](i.fp,n)},RM=function(e,t,n){return e.setAttribute(t,n)},eh=function(e,t){return It(e[t])?Dp:Gu(e[t])&&e.setAttribute?RM:Qu},Lp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},CM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Up=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},th=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},PM=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},DM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ml(this,t,"_pt"):t.dep||(n=1),t=i;return!n},LM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Ip=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Pn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Lp,this.d=l||this,this.set=c||Qu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=LM,this.m=n,this.mt=s,this.tween=i},r})();Cn($u+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return qu[r]=1});qn.TweenMax=qn.TweenLite=Ht;qn.TimelineLite=qn.TimelineMax=Sn;Pt=new Sn({sortChildren:!1,defaults:Bs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Yn.stringFilter=Ep;var Vr=[],Ga={},UM=[],Rf=0,IM=0,rc=function(e){return(Ga[e]||UM).map(function(t){return t()})},du=function(){var e=Date.now(),t=[];e-Rf>2&&(rc("matchMediaInit"),Vr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=vi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),rc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Rf=e,rc("matchMedia"))},Np=(function(){function r(t,n){this.selector=n&&uu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=IM++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){It(n)&&(s=i,i=n,n=It);var o=this,a=function(){var c=Rt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=uu(s)),Rt=o,h=i.apply(o,arguments),It(h)&&o._r.push(h),Rt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===It?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Rt;Rt=null,n(this),Rt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ht&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Sn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ht)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Vr.length;o--;)Vr[o].id===this.id&&Vr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),NM=(function(){function r(t){this.contexts=[],this.scope=t,Rt&&Rt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){wi(n)||(n={matches:n});var o=new Np(0,s||this.scope),a=o.conditions={},l,c,u;Rt&&!o.selector&&(o.selector=Rt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=vi.matchMedia(n[c]),l&&(Vr.indexOf(o)<0&&Vr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(du):l.addEventListener("change",du)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),sl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Sp(i)})},timeline:function(e){return new Sn(e)},getTweensOf:function(e,t){return Pt.getTweensOf(e,t)},getProperty:function(e,t,n,i){en(e)&&(e=si(e)[0]);var s=zr(e||{}).get,o=n?ap:op;return n==="native"&&(n=""),e&&(t?o((zn[t]&&zn[t].get||s)(e,t,n,i)):function(a,l,c){return o((zn[a]&&zn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=si(e),e.length>1){var i=e.map(function(u){return Ln.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=zn[t],a=zr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Ss._pt=0,h.init(e,n?u+n:u,Ss,0,[e]),h.render(1,h),Ss._pt&&th(1,Ss)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Ln.to(e,$n((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Hr(e.ease,Bs.ease)),Ef(Bs,e||{})},config:function(e){return Ef(Yn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!zn[a]&&!qn[a]&&Po(t+" effect requires "+a+" plugin.")}),ec[t]=function(a,l,c){return n(si(a),$n(l||{},s),c)},o&&(Sn.prototype[t]=function(a,l,c){return this.add(ec[t](a,wi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){rt[e]=Hr(t)},parseEase:function(e,t){return arguments.length?Hr(e,t):rt},getById:function(e){return Pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Sn(e),i,s;for(n.smoothChildTiming=Rn(e.smoothChildTiming),Pt.remove(n),n._dp=0,n._time=n._tTime=Pt._time,i=Pt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ht&&i.vars.onComplete===i._targets[0]))&&Mi(n,i,i._start-i._delay),i=s;return Mi(Pt,n,0),n},context:function(e,t){return e?new Np(e,t):Rt},matchMedia:function(e){return new NM(e)},matchMediaRefresh:function(){return Vr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||du()},addEventListener:function(e,t){var n=Ga[e]||(Ga[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ga[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:dM,wrapYoyo:pM,distribute:pp,random:_p,snap:mp,normalize:fM,getUnit:cn,clamp:lM,splitColor:Mp,toArray:si,selector:uu,mapRange:vp,pipe:uM,unitize:hM,interpolate:mM,shuffle:dp},install:tp,effects:ec,ticker:Hn,updateRoot:Sn.updateRoot,plugins:zn,globalTimeline:Pt,core:{PropTween:Pn,globals:np,Tween:Ht,Timeline:Sn,Animation:Io,getCache:zr,_removeLinkedListItem:ml,reverting:function(){return rn},context:function(e){return e&&Rt&&(Rt.data.push(e),e._ctx=Rt),Rt},suppressOverwrites:function(e){return Vu=e}}};Cn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return sl[r]=Ht[r]});Hn.add(Sn.updateRoot);Ss=sl.to({},{duration:0});var FM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},OM=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=FM(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},sc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(en(s)&&(l={},Cn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}OM(a,s)}}}},Ln=sl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)rn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},sc("roundProps",hu),sc("modifiers"),sc("snap",mp))||sl;Ht.version=Sn.version=Ln.version="3.14.2";ep=1;Wu()&&Vs();rt.Power0;rt.Power1;rt.Power2;rt.Power3;rt.Power4;rt.Linear;rt.Quad;rt.Cubic;rt.Quart;rt.Quint;rt.Strong;rt.Elastic;rt.Back;rt.SteppedEase;rt.Bounce;rt.Sine;rt.Expo;rt.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Cf,ir,ws,nh,Or,Pf,ih,BM=function(){return typeof window<"u"},qi={},Pr=180/Math.PI,As=Math.PI/180,ds=Math.atan2,Df=1e8,rh=/([A-Z])/g,zM=/(left|right|width|margin|padding|x)/i,kM=/[\s,\(]\S/,Ei={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},pu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},HM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},VM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},GM=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},WM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Fp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Op=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},XM=function(e,t,n){return e.style[t]=n},YM=function(e,t,n){return e.style.setProperty(t,n)},qM=function(e,t,n){return e._gsap[t]=n},$M=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},KM=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},ZM=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Dt="transform",Dn=Dt+"Origin",jM=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in qi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ei[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ni(i,a)}):this.tfm[e]=o.x?o[e]:Ni(i,e),e===Dn&&(this.tfm.zOrigin=o.zOrigin);else return Ei.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Dt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Dn,t,"")),e=Dt}(s||t)&&this.props.push(e,t,s[e])},Bp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},JM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(rh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ih(),(!s||!s.isStart)&&!n[Dt]&&(Bp(n),i.zOrigin&&n[Dn]&&(n[Dn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},zp=function(e,t){var n={target:e,props:[],revert:JM,save:jM};return e._gsap||Ln.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},kp,mu=function(e,t){var n=ir.createElementNS?ir.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ir.createElement(e);return n&&n.style?n:ir.createElement(e)},Wn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(rh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Gs(t)||t,1)||""},Lf="O,Moz,ms,Ms,Webkit".split(","),Gs=function(e,t,n){var i=t||Or,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Lf[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Lf[o]:"")+e},_u=function(){BM()&&window.document&&(Cf=window,ir=Cf.document,ws=ir.documentElement,Or=mu("div")||{style:{}},mu("div"),Dt=Gs(Dt),Dn=Dt+"Origin",Or.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",kp=!!Gs("perspective"),ih=Ln.core.reverting,nh=1)},Uf=function(e){var t=e.ownerSVGElement,n=mu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ws.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ws.removeChild(n),s},If=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Hp=function(e){var t,n;try{t=e.getBBox()}catch{t=Uf(e),n=1}return t&&(t.width||t.height)||n||(t=Uf(e)),t&&!t.width&&!t.x&&!t.y?{x:+If(e,["x","cx","x1"])||0,y:+If(e,["y","cy","y1"])||0,width:0,height:0}:t},Vp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Hp(e))},pr=function(e,t){if(t){var n=e.style,i;t in qi&&t!==Dn&&(t=Dt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(rh,"-$1").toLowerCase())):n.removeAttribute(t)}},rr=function(e,t,n,i,s,o){var a=new Pn(e._pt,t,n,0,1,o?Op:Fp);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Nf={deg:1,rad:1,turn:1},QM={grid:1,flex:1},mr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Or.style,l=zM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||Nf[i]||Nf[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&Vp(e),(d||o==="%")&&(qi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Ft(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ir||!_.appendChild)&&(_=ir.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Hn.time&&!m.uncache)return Ft(s/m.width*h);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+i,g=e[u],M?e.style[t]=M:pr(e,t)}else(d||o==="%")&&!QM[Wn(_,"display")]&&(a.position=Wn(e,"position")),_===e&&(a.position="static"),_.appendChild(Or),g=Or[u],_.removeChild(Or),a.position="absolute";return l&&d&&(m=zr(_),m.time=Hn.time,m.width=_[u]),Ft(f?g*s/h:g&&s?h/g*s:0)},Ni=function(e,t,n,i){var s;return nh||_u(),t in Ei&&t!=="transform"&&(t=Ei[t],~t.indexOf(",")&&(t=t.split(",")[0])),qi[t]&&t!=="transform"?(s=Fo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:al(Wn(e,Dn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ol[t]&&ol[t](e,t,n)||Wn(e,t)||rp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?mr(e,t,s,n)+n:s},ey=function(e,t,n,i){if(!n||n==="none"){var s=Gs(t,e,1),o=s&&Wn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Wn(e,"borderTopColor"))}var a=new Pn(this._pt,e.style,t,0,1,Up),l=0,c=0,u,h,f,d,g,_,m,p,M,y,v,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Wn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Wn(e,t)||i,_?e.style[t]=_:pr(e,t)),u=[n,i],Ep(u),n=u[0],i=u[1],f=n.match(xs)||[],A=i.match(xs)||[],A.length){for(;h=xs.exec(i);)m=h[0],M=i.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=bs(d,m)+v),p=parseFloat(m),y=m.substr((p+"").length),l=xs.lastIndex-y.length,y||(y=y||Yn.units[t]||v,l===i.length&&(i+=y,a.e+=y)),v!==y&&(d=mr(e,t,_,y)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Op:Fp;return Qd.test(i)&&(a.e=0),this._pt=a,a},Ff={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ty=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Ff[n]||n,t[1]=Ff[i]||i,t.join(" ")},ny=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],qi[a]&&(l=1,a=a==="transformOrigin"?Dn:Dt),pr(n,a);l&&(pr(n,Dt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Fo(n,1),o.uncache=1,Bp(i)))}},ol={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Pn(e._pt,t,n,0,0,ny);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},No=[1,0,0,1,0,0],Gp={},Wp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Of=function(e){var t=Wn(e,Dt);return Wp(t)?No:t.substr(7).match(Jd).map(Ft)},sh=function(e,t){var n=e._gsap||zr(e),i=e.style,s=Of(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?No:s):(s===No&&!e.offsetParent&&e!==ws&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ws.appendChild(e)),s=Of(e),l?i.display=l:pr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ws.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},gu=function(e,t,n,i,s,o){var a=e._gsap,l=s||sh(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],M=l[5],y=t.split(" "),v=parseFloat(y[0])||0,A=parseFloat(y[1])||0,w,b,C,S;n?l!==No&&(b=d*m-g*_)&&(C=v*(m/b)+A*(-_/b)+(_*M-m*p)/b,S=v*(-g/b)+A*(d/b)-(d*M-g*p)/b,v=C,A=S):(w=Hp(e),v=w.x+(~y[0].indexOf("%")?v/100*w.width:v),A=w.y+(~(y[1]||y[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&a.smooth?(p=v-c,M=A-u,a.xOffset=h+(p*d+M*_)-p,a.yOffset=f+(p*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=A,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Dn]="0px 0px",o&&(rr(o,a,"xOrigin",c,v),rr(o,a,"yOrigin",u,A),rr(o,a,"xOffset",h,a.xOffset),rr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+A)},Fo=function(e,t){var n=e._gsap||new Ap(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Wn(e,Dn)||"0",u,h,f,d,g,_,m,p,M,y,v,A,w,b,C,S,x,P,U,O,k,W,X,Y,H,te,D,ce,Le,Ke,K,ne;return u=h=f=_=m=p=M=y=v=0,d=g=1,n.svg=!!(e.getCTM&&Vp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Dt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Dt]!=="none"?l[Dt]:"")),i.scale=i.rotate=i.translate="none"),b=sh(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),gu(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,b)),A=n.xOrigin||0,w=n.yOrigin||0,b!==No&&(P=b[0],U=b[1],O=b[2],k=b[3],u=W=b[4],h=X=b[5],b.length===6?(d=Math.sqrt(P*P+U*U),g=Math.sqrt(k*k+O*O),_=P||U?ds(U,P)*Pr:0,M=O||k?ds(O,k)*Pr+_:0,M&&(g*=Math.abs(Math.cos(M*As))),n.svg&&(u-=A-(A*P+w*O),h-=w-(A*U+w*k))):(ne=b[6],Ke=b[7],D=b[8],ce=b[9],Le=b[10],K=b[11],u=b[12],h=b[13],f=b[14],C=ds(ne,Le),m=C*Pr,C&&(S=Math.cos(-C),x=Math.sin(-C),Y=W*S+D*x,H=X*S+ce*x,te=ne*S+Le*x,D=W*-x+D*S,ce=X*-x+ce*S,Le=ne*-x+Le*S,K=Ke*-x+K*S,W=Y,X=H,ne=te),C=ds(-O,Le),p=C*Pr,C&&(S=Math.cos(-C),x=Math.sin(-C),Y=P*S-D*x,H=U*S-ce*x,te=O*S-Le*x,K=k*x+K*S,P=Y,U=H,O=te),C=ds(U,P),_=C*Pr,C&&(S=Math.cos(C),x=Math.sin(C),Y=P*S+U*x,H=W*S+X*x,U=U*S-P*x,X=X*S-W*x,P=Y,W=H),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Ft(Math.sqrt(P*P+U*U+O*O)),g=Ft(Math.sqrt(X*X+ne*ne)),C=ds(W,X),M=Math.abs(C)>2e-4?C*Pr:0,v=K?1/(K<0?-K:K):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Wp(Wn(e,Dt)),Y&&e.setAttribute("transform",Y))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Ft(d),n.scaleY=Ft(g),n.rotation=Ft(_)+a,n.rotationX=Ft(m)+a,n.rotationY=Ft(p)+a,n.skewX=M+a,n.skewY=y+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Dn]=al(c)),n.xOffset=n.yOffset=0,n.force3D=Yn.force3D,n.renderTransform=n.svg?ry:kp?Xp:iy,n.uncache=0,n},al=function(e){return(e=e.split(" "))[0]+" "+e[1]},oc=function(e,t,n){var i=cn(t);return Ft(parseFloat(t)+parseFloat(mr(e,"x",n+"px",i)))+i},iy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Xp(e,t)},br="0deg",no="0px",wr=") ",Xp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,y=n.zOrigin,v="",A=p==="auto"&&e&&e!==1||p===!0;if(y&&(h!==br||u!==br)){var w=parseFloat(u)*As,b=Math.sin(w),C=Math.cos(w),S;w=parseFloat(h)*As,S=Math.cos(w),o=oc(M,o,b*S*-y),a=oc(M,a,-Math.sin(w)*-y),l=oc(M,l,C*S*-y+y)}m!==no&&(v+="perspective("+m+wr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(A||o!==no||a!==no||l!==no)&&(v+=l!==no||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+wr),c!==br&&(v+="rotate("+c+wr),u!==br&&(v+="rotateY("+u+wr),h!==br&&(v+="rotateX("+h+wr),(f!==br||d!==br)&&(v+="skew("+f+", "+d+wr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+wr),M.style[Dt]=v||"translate(0, 0)"},ry=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,y=parseFloat(o),v=parseFloat(a),A,w,b,C,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=As,c*=As,A=Math.cos(l)*h,w=Math.sin(l)*h,b=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=As,S=Math.tan(c-u),S=Math.sqrt(1+S*S),b*=S,C*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),A*=S,w*=S)),A=Ft(A),w=Ft(w),b=Ft(b),C=Ft(C)):(A=h,C=f,w=b=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=mr(d,"x",o,"px"),v=mr(d,"y",a,"px")),(g||_||m||p)&&(y=Ft(y+g-(g*A+_*b)+m),v=Ft(v+_-(g*w+_*C)+p)),(i||s)&&(S=d.getBBox(),y=Ft(y+i/100*S.width),v=Ft(v+s/100*S.height)),S="matrix("+A+","+w+","+b+","+C+","+y+","+v+")",d.setAttribute("transform",S),M&&(d.style[Dt]=S)},sy=function(e,t,n,i,s){var o=360,a=en(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Pr:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Df)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Df)%o-~~(c/o)*o)),e._pt=f=new Pn(e._pt,t,n,i,c,HM),f.e=u,f.u="deg",e._props.push(n),f},Bf=function(e,t){for(var n in t)e[n]=t[n];return e},oy=function(e,t,n){var i=Bf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Dt]=t,a=Fo(n,1),pr(n,Dt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Dt],o[Dt]=t,a=Fo(n,1),o[Dt]=c);for(l in qi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=cn(c),g=cn(u),h=d!==g?mr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Pn(e._pt,a,l,h,f-h,pu),e._pt.u=g||0,e._props.push(l));Bf(a,i)};Cn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});ol[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return Ni(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var Yp={name:"css",register:_u,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,M,y,v,A,w,b,C,S;nh||_u(),this.styles=this.styles||zp(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(zn[_]&&Rp(_,t,n,i,e,s)))){if(d=typeof u,g=ol[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Lo(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ur.lastIndex=0,ur.test(c)||(m=cn(c),p=cn(u),p?m!==p&&(c=mr(e,_,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],en(c)&&~c.indexOf("random(")&&(c=Lo(c)),cn(c+"")||c==="auto"||(c+=Yn.units[_]||cn(Ni(e,_))||""),(c+"").charAt(1)==="="&&(c=Ni(e,_))):c=Ni(e,_),f=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),_ in Ei&&(_==="autoAlpha"&&(f===1&&Ni(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,a.visibility),rr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Ei[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in qi,y){if(this.styles.save(_),S=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Wn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=e.style.perspective;e.style.perspective=u,u=Wn(e,"perspective"),x?e.style.perspective=x:pr(e,"perspective")}h=parseFloat(u)}if(v||(A=e._gsap,A.renderTransform&&!t.parseTransform||Fo(e,t.parseTransform),w=t.smoothOrigin!==!1&&A.smooth,v=this._pt=new Pn(this._pt,a,Dt,0,1,A.renderTransform,A,0,-1),v.dep=1),_==="scale")this._pt=new Pn(this._pt,A,"scaleY",A.scaleY,(M?bs(A.scaleY,M+h):h)-A.scaleY||0,pu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Dn,0,a[Dn]),u=ty(u),A.svg?gu(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==A.zOrigin&&rr(this,A,"zOrigin",A.zOrigin,p),rr(this,a,_,al(c),al(u)));continue}else if(_==="svgOrigin"){gu(e,u,1,w,0,this);continue}else if(_ in Gp){sy(this,A,_,f,M?bs(f,M+u):u);continue}else if(_==="smoothOrigin"){rr(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){oy(this,u,e);continue}}else _ in a||(_=Gs(_)||_);if(y||(h||h===0)&&(f||f===0)&&!kM.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),p=cn(u)||(_ in Yn.units?Yn.units[_]:m),m!==p&&(f=mr(e,_,c,p)),this._pt=new Pn(this._pt,y?A:a,_,f,(M?bs(f,M+h):h)-f,!y&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?WM:pu),this._pt.u=p||0,y&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=GM):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=VM);else if(_ in a)ey.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,i,s);else if(_!=="parseTransform"){Yu(_,u);continue}y||(_ in a?C.push(_,0,a[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),o.push(_)}}b&&Ip(this)},render:function(e,t){if(t.tween._time||!ih())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ni,aliases:Ei,getSetter:function(e,t,n){var i=Ei[t];return i&&i.indexOf(",")<0&&(t=i),t in qi&&t!==Dn&&(e._gsap.x||Ni(e,"x"))?n&&Pf===n?t==="scale"?$M:qM:(Pf=n||{})&&(t==="scale"?KM:ZM):e.style&&!Gu(e.style[t])?XM:~t.indexOf("-")?YM:eh(e,t)},core:{_removeProperty:pr,_getMatrix:sh}};Ln.utils.checkPrefix=Gs;Ln.core.getStyleSaver=zp;(function(r,e,t,n){var i=Cn(r+","+e+","+t,function(s){qi[s]=1});Cn(e,function(s){Yn.units[s]="deg",Gp[s]=1}),Ei[i[13]]=r+","+e,Cn(n,function(s){var o=s.split(":");Ei[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Yn.units[r]="px"});Ln.registerPlugin(Yp);var bt=Ln.registerPlugin(Yp)||Ln;bt.core.Tween;function ay(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function ly(r,e,t){return e&&ay(r.prototype,e),r}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var nn,Wa,Vn,sr,or,Rs,qp,Dr,vo,$p,ki,fi,Kp,Zp=function(){return nn||typeof window<"u"&&(nn=window.gsap)&&nn.registerPlugin&&nn},jp=1,Ms=[],et=[],bi=[],xo=Date.now,vu=function(e,t){return t},cy=function(){var e=vo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,et),i.push.apply(i,bi),et=n,bi=i,vu=function(o,a){return t[o](a)}},hr=function(e,t){return~bi.indexOf(e)&&bi[bi.indexOf(e)+1][t]},So=function(e){return!!~$p.indexOf(e)},mn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},pn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ma="scrollLeft",ya="scrollTop",xu=function(){return ki&&ki.isPressed||et.cache++},ll=function(e,t){var n=function i(s){if(s||s===0){jp&&(Vn.history.scrollRestoration="manual");var o=ki&&ki.isPressed;s=i.v=Math.round(s)||(ki&&ki.iOS?1:0),e(s),i.cacheID=et.cache,o&&vu("ss",s)}else(t||et.cache!==i.cacheID||vu("ref"))&&(i.cacheID=et.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Mn={s:Ma,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ll(function(r){return arguments.length?Vn.scrollTo(r,qt.sc()):Vn.pageXOffset||sr[Ma]||or[Ma]||Rs[Ma]||0})},qt={s:ya,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Mn,sc:ll(function(r){return arguments.length?Vn.scrollTo(Mn.sc(),r):Vn.pageYOffset||sr[ya]||or[ya]||Rs[ya]||0})},Tn=function(e,t){return(t&&t._ctx&&t._ctx.selector||nn.utils.toArray)(e)[0]||(typeof e=="string"&&nn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},uy=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},_r=function(e,t){var n=t.s,i=t.sc;So(e)&&(e=sr.scrollingElement||or);var s=et.indexOf(e),o=i===qt.sc?1:2;!~s&&(s=et.push(e)-1),et[s+o]||mn(e,"scroll",xu);var a=et[s+o],l=a||(et[s+o]=ll(hr(e,n),!0)||(So(e)?i:ll(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=nn.getProperty(e,"scrollBehavior")==="smooth"),l},Su=function(e,t,n){var i=e,s=e,o=xo(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=xo();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(g){var _=a,m=s,p=xo();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},io=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},zf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Jp=function(){vo=nn.core.globals().ScrollTrigger,vo&&vo.core&&cy()},Qp=function(e){return nn=e||Zp(),!Wa&&nn&&typeof document<"u"&&document.body&&(Vn=window,sr=document,or=sr.documentElement,Rs=sr.body,$p=[Vn,sr,or,Rs],nn.utils.clamp,Kp=nn.core.context||function(){},Dr="onpointerenter"in Rs?"pointer":"mouse",qp=Ot.isTouch=Vn.matchMedia&&Vn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Vn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,fi=Ot.eventTypes=("ontouchstart"in or?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in or?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return jp=0},500),Jp(),Wa=1),Wa};Mn.op=qt;et.cache=0;var Ot=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Wa||Qp(nn)||console.warn("Please gsap.registerPlugin(Observer)"),vo||Jp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,y=n.onPress,v=n.onRelease,A=n.onRight,w=n.onLeft,b=n.onUp,C=n.onDown,S=n.onChangeX,x=n.onChangeY,P=n.onChange,U=n.onToggleX,O=n.onToggleY,k=n.onHover,W=n.onHoverEnd,X=n.onMove,Y=n.ignoreCheck,H=n.isNormalizer,te=n.onGestureStart,D=n.onGestureEnd,ce=n.onWheel,Le=n.onEnable,Ke=n.onDisable,K=n.onClick,ne=n.scrollSpeed,de=n.capture,ie=n.allowClicks,Te=n.lockAxis,Oe=n.onLockAxis;this.target=a=Tn(a)||or,this.vars=n,d&&(d=nn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,ne=ne||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Vn.getComputedStyle(Rs).lineHeight)||22);var Pe,tt,Ze,Se,L,gt,Be,z=this,ye=0,nt=0,be=n.passive||!u&&n.passive!==!1,R=_r(a,Mn),E=_r(a,qt),V=R(),Q=E(),J=~o.indexOf("touch")&&!~o.indexOf("pointer")&&fi[0]==="pointerdown",Z=So(a),ue=a.ownerDocument||sr,oe=[0,0,0],fe=[0,0,0],Ve=0,re=function(){return Ve=xo()},se=function(we,Xe){return(z.event=we)&&d&&uy(we.target,d)||Xe&&J&&we.pointerType!=="touch"||Y&&Y(we,Xe)},Ue=function(){z._vx.reset(),z._vy.reset(),tt.pause(),h&&h(z)},De=function(){var we=z.deltaX=zf(oe),Xe=z.deltaY=zf(fe),pe=Math.abs(we)>=i,He=Math.abs(Xe)>=i;P&&(pe||He)&&P(z,we,Xe,oe,fe),pe&&(A&&z.deltaX>0&&A(z),w&&z.deltaX<0&&w(z),S&&S(z),U&&z.deltaX<0!=ye<0&&U(z),ye=z.deltaX,oe[0]=oe[1]=oe[2]=0),He&&(C&&z.deltaY>0&&C(z),b&&z.deltaY<0&&b(z),x&&x(z),O&&z.deltaY<0!=nt<0&&O(z),nt=z.deltaY,fe[0]=fe[1]=fe[2]=0),(Se||Ze)&&(X&&X(z),Ze&&(m&&Ze===1&&m(z),M&&M(z),Ze=0),Se=!1),gt&&!(gt=!1)&&Oe&&Oe(z),L&&(ce(z),L=!1),Pe=0},ve=function(we,Xe,pe){oe[pe]+=we,fe[pe]+=Xe,z._vx.update(we),z._vy.update(Xe),c?Pe||(Pe=requestAnimationFrame(De)):De()},We=function(we,Xe){Te&&!Be&&(z.axis=Be=Math.abs(we)>Math.abs(Xe)?"x":"y",gt=!0),Be!=="y"&&(oe[2]+=we,z._vx.update(we,!0)),Be!=="x"&&(fe[2]+=Xe,z._vy.update(Xe,!0)),c?Pe||(Pe=requestAnimationFrame(De)):De()},Fe=function(we){if(!se(we,1)){we=io(we,u);var Xe=we.clientX,pe=we.clientY,He=Xe-z.x,Ae=pe-z.y,ke=z.isDragging;z.x=Xe,z.y=pe,(ke||(He||Ae)&&(Math.abs(z.startX-Xe)>=s||Math.abs(z.startY-pe)>=s))&&(Ze||(Ze=ke?2:1),ke||(z.isDragging=!0),We(He,Ae))}},st=z.onPress=function(ge){se(ge,1)||ge&&ge.button||(z.axis=Be=null,tt.pause(),z.isPressed=!0,ge=io(ge),ye=nt=0,z.startX=z.x=ge.clientX,z.startY=z.y=ge.clientY,z._vx.reset(),z._vy.reset(),mn(H?a:ue,fi[1],Fe,be,!0),z.deltaX=z.deltaY=0,y&&y(z))},I=z.onRelease=function(ge){if(!se(ge,1)){pn(H?a:ue,fi[1],Fe,!0);var we=!isNaN(z.y-z.startY),Xe=z.isDragging,pe=Xe&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),He=io(ge);!pe&&we&&(z._vx.reset(),z._vy.reset(),u&&ie&&nn.delayedCall(.08,function(){if(xo()-Ve>300&&!ge.defaultPrevented){if(ge.target.click)ge.target.click();else if(ue.createEvent){var Ae=ue.createEvent("MouseEvents");Ae.initMouseEvent("click",!0,!0,Vn,1,He.screenX,He.screenY,He.clientX,He.clientY,!1,!1,!1,!1,0,null),ge.target.dispatchEvent(Ae)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,h&&Xe&&!H&&tt.restart(!0),Ze&&De(),p&&Xe&&p(z),v&&v(z,pe)}},le=function(we){return we.touches&&we.touches.length>1&&(z.isGesturing=!0)&&te(we,z.isDragging)},$=function(){return(z.isGesturing=!1)||D(z)},j=function(we){if(!se(we)){var Xe=R(),pe=E();ve((Xe-V)*ne,(pe-Q)*ne,1),V=Xe,Q=pe,h&&tt.restart(!0)}},ae=function(we){if(!se(we)){we=io(we,u),ce&&(L=!0);var Xe=(we.deltaMode===1?l:we.deltaMode===2?Vn.innerHeight:1)*g;ve(we.deltaX*Xe,we.deltaY*Xe,0),h&&!H&&tt.restart(!0)}},he=function(we){if(!se(we)){var Xe=we.clientX,pe=we.clientY,He=Xe-z.x,Ae=pe-z.y;z.x=Xe,z.y=pe,Se=!0,h&&tt.restart(!0),(He||Ae)&&We(He,Ae)}},ze=function(we){z.event=we,k(z)},lt=function(we){z.event=we,W(z)},Lt=function(we){return se(we)||io(we,u)&&K(z)};tt=z._dc=nn.delayedCall(f||.25,Ue).pause(),z.deltaX=z.deltaY=0,z._vx=Su(0,50,!0),z._vy=Su(0,50,!0),z.scrollX=R,z.scrollY=E,z.isDragging=z.isGesturing=z.isPressed=!1,Kp(this),z.enable=function(ge){return z.isEnabled||(mn(Z?ue:a,"scroll",xu),o.indexOf("scroll")>=0&&mn(Z?ue:a,"scroll",j,be,de),o.indexOf("wheel")>=0&&mn(a,"wheel",ae,be,de),(o.indexOf("touch")>=0&&qp||o.indexOf("pointer")>=0)&&(mn(a,fi[0],st,be,de),mn(ue,fi[2],I),mn(ue,fi[3],I),ie&&mn(a,"click",re,!0,!0),K&&mn(a,"click",Lt),te&&mn(ue,"gesturestart",le),D&&mn(ue,"gestureend",$),k&&mn(a,Dr+"enter",ze),W&&mn(a,Dr+"leave",lt),X&&mn(a,Dr+"move",he)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=Se=Ze=!1,z._vx.reset(),z._vy.reset(),V=R(),Q=E(),ge&&ge.type&&st(ge),Le&&Le(z)),z},z.disable=function(){z.isEnabled&&(Ms.filter(function(ge){return ge!==z&&So(ge.target)}).length||pn(Z?ue:a,"scroll",xu),z.isPressed&&(z._vx.reset(),z._vy.reset(),pn(H?a:ue,fi[1],Fe,!0)),pn(Z?ue:a,"scroll",j,de),pn(a,"wheel",ae,de),pn(a,fi[0],st,de),pn(ue,fi[2],I),pn(ue,fi[3],I),pn(a,"click",re,!0),pn(a,"click",Lt),pn(ue,"gesturestart",le),pn(ue,"gestureend",$),pn(a,Dr+"enter",ze),pn(a,Dr+"leave",lt),pn(a,Dr+"move",he),z.isEnabled=z.isPressed=z.isDragging=!1,Ke&&Ke(z))},z.kill=z.revert=function(){z.disable();var ge=Ms.indexOf(z);ge>=0&&Ms.splice(ge,1),ki===z&&(ki=0)},Ms.push(z),H&&So(a)&&(ki=z),z.enable(_)},ly(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ot.version="3.14.2";Ot.create=function(r){return new Ot(r)};Ot.register=Qp;Ot.getAll=function(){return Ms.slice()};Ot.getById=function(r){return Ms.filter(function(e){return e.vars.id===r})[0]};Zp()&&nn.registerPlugin(Ot);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ee,_s,Qe,Et,kn,pt,oh,cl,Oo,Mo,co,Ea,an,vl,Mu,vn,kf,Hf,gs,em,ac,tm,gn,yu,nm,im,er,Eu,ah,Cs,lh,yo,Tu,lc,Ta=1,ln=Date.now,cc=ln(),oi=0,uo=0,Vf=function(e,t,n){var i=Bn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Gf=function(e,t){return t&&(!Bn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},hy=function r(){return uo&&requestAnimationFrame(r)},Wf=function(){return vl=1},Xf=function(){return vl=0},xi=function(e){return e},ho=function(e){return Math.round(e*1e5)/1e5||0},rm=function(){return typeof window<"u"},sm=function(){return Ee||rm()&&(Ee=window.gsap)&&Ee.registerPlugin&&Ee},$r=function(e){return!!~oh.indexOf(e)},om=function(e){return(e==="Height"?lh:Qe["inner"+e])||kn["client"+e]||pt["client"+e]},am=function(e){return hr(e,"getBoundingClientRect")||($r(e)?function(){return Ka.width=Qe.innerWidth,Ka.height=lh,Ka}:function(){return Oi(e)})},fy=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=hr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?om(s):e["client"+s])||0}},dy=function(e,t){return!t||~bi.indexOf(e)?am(e):function(){return Ka}},Ti=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=hr(e,n))?o()-am(e)()[s]:$r(e)?(kn[n]||pt[n])-om(i):e[n]-e["offset"+i])},ba=function(e,t){for(var n=0;n<gs.length;n+=3)(!t||~t.indexOf(gs[n+1]))&&e(gs[n],gs[n+1],gs[n+2])},Bn=function(e){return typeof e=="string"},un=function(e){return typeof e=="function"},fo=function(e){return typeof e=="number"},Lr=function(e){return typeof e=="object"},ro=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},uc=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},ps=Math.abs,lm="left",cm="top",ch="right",uh="bottom",Gr="width",Wr="height",Eo="Right",To="Left",bo="Top",wo="Bottom",kt="padding",ti="margin",Ws="Width",hh="Height",Yt="px",ni=function(e){return Qe.getComputedStyle(e)},py=function(e){var t=ni(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Yf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Oi=function(e,t){var n=t&&ni(e)[Mu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ee.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},ul=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},um=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},my=function(e){return function(t){return Ee.utils.snap(um(e),t)}},fh=function(e){var t=Ee.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},_y=function(e){return function(t,n){return fh(um(e))(t,n.direction)}},wa=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Jt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},jt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Aa=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},qf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ra={toggleActions:"play",anticipatePin:0},hl={top:0,left:0,center:.5,bottom:1,right:1},Xa=function(e,t){if(Bn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in hl?hl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ca=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=Et.createElement("div"),_=$r(n)||hr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?pt:n,M=e.indexOf("start")!==-1,y=M?c:u,v="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===qt?ch:uh)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Ya(g,0,i,M),g},Ya=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ws]=1,s["border"+a+Ws]=0,s[n.p]=t+"px",Ee.set(e,s)},je=[],bu={},Bo,$f=function(){return ln()-oi>34&&(Bo||(Bo=requestAnimationFrame(Vi)))},ms=function(){(!gn||!gn.isPressed||gn.startX>pt.clientWidth)&&(et.cache++,gn?Bo||(Bo=requestAnimationFrame(Vi)):Vi(),oi||Zr("scrollStart"),oi=ln())},hc=function(){im=Qe.innerWidth,nm=Qe.innerHeight},po=function(e){et.cache++,(e===!0||!an&&!tm&&!Et.fullscreenElement&&!Et.webkitFullscreenElement&&(!yu||im!==Qe.innerWidth||Math.abs(Qe.innerHeight-nm)>Qe.innerHeight*.25))&&cl.restart(!0)},Kr={},gy=[],hm=function r(){return jt(qe,"scrollEnd",r)||Br(!0)},Zr=function(e){return Kr[e]&&Kr[e].map(function(t){return t()})||gy},On=[],fm=function(e){for(var t=0;t<On.length;t+=5)(!e||On[t+4]&&On[t+4].query===e)&&(On[t].style.cssText=On[t+1],On[t].getBBox&&On[t].setAttribute("transform",On[t+2]||""),On[t+3].uncache=1)},dm=function(){return et.forEach(function(e){return un(e)&&++e.cacheID&&(e.rec=e())})},dh=function(e,t){var n;for(vn=0;vn<je.length;vn++)n=je[vn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));yo=!0,t&&fm(t),t||Zr("revert")},pm=function(e,t){et.cache++,(t||!xn)&&et.forEach(function(n){return un(n)&&n.cacheID++&&(n.rec=0)}),Bn(e)&&(Qe.history.scrollRestoration=ah=e)},xn,Xr=0,Kf,vy=function(){if(Kf!==Xr){var e=Kf=Xr;requestAnimationFrame(function(){return e===Xr&&Br(!0)})}},mm=function(){pt.appendChild(Cs),lh=!gn&&Cs.offsetHeight||Qe.innerHeight,pt.removeChild(Cs)},Zf=function(e){return Oo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Br=function(e,t){if(kn=Et.documentElement,pt=Et.body,oh=[Qe,Et,kn,pt],oi&&!e&&!yo){Jt(qe,"scrollEnd",hm);return}mm(),xn=qe.isRefreshing=!0,yo||dm();var n=Zr("refreshInit");em&&qe.sort(),t||dh(),et.forEach(function(i){un(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),je.slice(0).forEach(function(i){return i.refresh()}),yo=!1,je.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Tu=1,Zf(!0),je.forEach(function(i){var s=Ti(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Zf(!1),Tu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),et.forEach(function(i){un(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),pm(ah,1),cl.pause(),Xr++,xn=2,Vi(2),je.forEach(function(i){return un(i.vars.onRefresh)&&i.vars.onRefresh(i)}),xn=qe.isRefreshing=!1,Zr("refresh")},wu=0,qa=1,Ao,Vi=function(e){if(e===2||!xn&&!yo){qe.isUpdating=!0,Ao&&Ao.update(0);var t=je.length,n=ln(),i=n-cc>=50,s=t&&je[0].scroll();if(qa=wu>s?-1:1,xn||(wu=s),i&&(oi&&!vl&&n-oi>200&&(oi=0,Zr("scrollEnd")),co=cc,cc=n),qa<0){for(vn=t;vn-- >0;)je[vn]&&je[vn].update(0,i);qa=1}else for(vn=0;vn<t;vn++)je[vn]&&je[vn].update(0,i);qe.isUpdating=!1}Bo=0},Au=[lm,cm,uh,ch,ti+wo,ti+Eo,ti+bo,ti+To,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],$a=Au.concat([Gr,Wr,"boxSizing","max"+Ws,"max"+hh,"position",ti,kt,kt+bo,kt+Eo,kt+wo,kt+To]),xy=function(e,t,n){Ps(n);var i=e._gsap;if(i.spacerIsNative)Ps(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},fc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Au.length,o=t.style,a=e.style,l;s--;)l=Au[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[uh]=a[ch]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Gr]=ul(e,Mn)+Yt,o[Wr]=ul(e,qt)+Yt,o[kt]=a[ti]=a[cm]=a[lm]="0",Ps(i),a[Gr]=a["max"+Ws]=n[Gr],a[Wr]=a["max"+hh]=n[Wr],a[kt]=n[kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Sy=/([A-Z])/g,Ps=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ee.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Sy,"-$1").toLowerCase())}},Pa=function(e){for(var t=$a.length,n=e.style,i=[],s=0;s<t;s++)i.push($a[s],n[$a[s]]);return i.t=e,i},My=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Ka={left:0,top:0},jf=function(e,t,n,i,s,o,a,l,c,u,h,f,d,g){un(e)&&(e=e(l)),Bn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Xa("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,M;if(d&&d.seek(0),isNaN(e)||(e=+e),fo(e))d&&(e=Ee.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Ya(a,n,i,!0);else{un(t)&&(t=t(l));var y=(e||"0").split(" "),v,A,w,b;M=Tn(t,l)||pt,v=Oi(M)||{},(!v||!v.left&&!v.top)&&ni(M).display==="none"&&(b=M.style.display,M.style.display="block",v=Oi(M),b?M.style.display=b:M.style.removeProperty("display")),A=Xa(y[0],v[i.d]),w=Xa(y[1]||"0",n),e=v[i.p]-c[i.p]-u+A+s-w,a&&Ya(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var C=e+n,S=o._isStart;m="scroll"+i.d2,Ya(o,C,i,S&&C>20||!S&&(h?Math.max(pt[m],kn[m]):o.parentNode[m])<=C+1),h&&(c=Oi(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Yt))}return d&&M&&(m=Oi(M),d.seek(f),p=Oi(M),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},yy=/(webkit|moz|length|cssText|inset)/i,Jf=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===pt){e._stOrig=s.cssText,a=ni(e);for(o in a)!+o&&!yy.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ee.core.getCache(e).uncache=1,t.appendChild(e)}},_m=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Da=function(e,t,n){var i={};i[t.p]="+="+n,Ee.set(e,i)},Qf=function(e,t){var n=_r(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=_m(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){et.cache++,o.tween&&Vi()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ee.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Jt(e,"wheel",n.wheelHandler),qe.isTouch&&Jt(e,"touchmove",n.wheelHandler),s},qe=(function(){function r(t,n){_s||r.register(Ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Eu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!uo){this.update=this.refresh=this.kill=xi;return}n=Yf(Bn(n)||fo(n)||n.nodeType?{trigger:n}:n,Ra);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,y=s.once,v=s.snap,A=s.pinReparent,w=s.pinSpacer,b=s.containerAnimation,C=s.fastScrollEnd,S=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Mn:qt,P=!h&&h!==0,U=Tn(n.scroller||Qe),O=Ee.core.getCache(U),k=$r(U),W=("pinType"in n?n.pinType:hr(U,"pinType")||k&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=P&&n.toggleActions.split(" "),H="markers"in n?n.markers:Ra.markers,te=k?0:parseFloat(ni(U)["border"+x.p2+Ws])||0,D=this,ce=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Le=fy(U,k,x),Ke=dy(U,k),K=0,ne=0,de=0,ie=_r(U,x),Te,Oe,Pe,tt,Ze,Se,L,gt,Be,z,ye,nt,be,R,E,V,Q,J,Z,ue,oe,fe,Ve,re,se,Ue,De,ve,We,Fe,st,I,le,$,j,ae,he,ze,lt;if(D._startClamp=D._endClamp=!1,D._dir=x,m*=45,D.scroller=U,D.scroll=b?b.time.bind(b):ie,tt=ie(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(em=1,n.refreshPriority===-9999&&(Ao=D)),O.tweenScroll=O.tweenScroll||{top:Qf(U,qt),left:Qf(U,Mn)},D.tweenTo=Te=O.tweenScroll[x.p],D.scrubDuration=function(pe){le=fo(pe)&&pe,le?I?I.duration(pe):I=Ee.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:le,paused:!0,onComplete:function(){return p&&p(D)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(h),Fe=0,l||(l=i.vars.id)),v&&((!Lr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in pt.style&&Ee.set(k?[pt,kn]:U,{scrollBehavior:"auto"}),et.forEach(function(pe){return un(pe)&&pe.target===(k?Et.scrollingElement||kn:U)&&(pe.smooth=!1)}),Pe=un(v.snapTo)?v.snapTo:v.snapTo==="labels"?my(i):v.snapTo==="labelsDirectional"?_y(i):v.directional!==!1?function(pe,He){return fh(v.snapTo)(pe,ln()-ne<500?0:He.direction)}:Ee.utils.snap(v.snapTo),$=v.duration||{min:.1,max:2},$=Lr($)?Mo($.min,$.max):Mo($,$),j=Ee.delayedCall(v.delay||le/2||.1,function(){var pe=ie(),He=ln()-ne<500,Ae=Te.tween;if((He||Math.abs(D.getVelocity())<10)&&!Ae&&!vl&&K!==pe){var ke=(pe-Se)/R,Nt=i&&!P?i.totalProgress():ke,Je=He?0:(Nt-st)/(ln()-co)*1e3||0,yt=Ee.utils.clamp(-ke,1-ke,ps(Je/2)*Je/.185),Vt=ke+(v.inertia===!1?0:yt),vt,xt,ht=v,Un=ht.onStart,Tt=ht.onInterrupt,fn=ht.onComplete;if(vt=Pe(Vt,D),fo(vt)||(vt=Vt),xt=Math.max(0,Math.round(Se+vt*R)),pe<=L&&pe>=Se&&xt!==pe){if(Ae&&!Ae._initted&&Ae.data<=ps(xt-pe))return;v.inertia===!1&&(yt=vt-ke),Te(xt,{duration:$(ps(Math.max(ps(Vt-Nt),ps(vt-Nt))*.185/Je/.05||0)),ease:v.ease||"power3",data:ps(xt-pe),onInterrupt:function(){return j.restart(!0)&&Tt&&Tt(D)},onComplete:function(){D.update(),K=ie(),i&&!P&&(I?I.resetTo("totalProgress",vt,i._tTime/i._tDur):i.progress(vt)),Fe=st=i&&!P?i.totalProgress():D.progress,M&&M(D),fn&&fn(D)}},pe,yt*R,xt-pe-yt*R),Un&&Un(D,Te.tween)}}else D.isActive&&K!==pe&&j.restart(!0)}).pause()),l&&(bu[l]=D),f=D.trigger=Tn(f||d!==!0&&d),lt=f&&f._gsap&&f._gsap.stRevert,lt&&(lt=lt(D)),d=d===!0?f:Tn(d),Bn(a)&&(a={targets:f,className:a}),d&&(g===!1||g===ti||(g=!g&&d.parentNode&&d.parentNode.style&&ni(d.parentNode).display==="flex"?!1:kt),D.pin=d,Oe=Ee.core.getCache(d),Oe.spacer?E=Oe.pinState:(w&&(w=Tn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Oe.spacerIsNative=!!w,w&&(Oe.spacerState=Pa(w))),Oe.spacer=J=w||Et.createElement("div"),J.classList.add("pin-spacer"),l&&J.classList.add("pin-spacer-"+l),Oe.pinState=E=Pa(d)),n.force3D!==!1&&Ee.set(d,{force3D:!0}),D.spacer=J=Oe.spacer,We=ni(d),re=We[g+x.os2],ue=Ee.getProperty(d),oe=Ee.quickSetter(d,x.a,Yt),fc(d,J,We),Q=Pa(d)),H){nt=Lr(H)?Yf(H,qf):qf,z=Ca("scroller-start",l,U,x,nt,0),ye=Ca("scroller-end",l,U,x,nt,0,z),Z=z["offset"+x.op.d2];var Lt=Tn(hr(U,"content")||U);gt=this.markerStart=Ca("start",l,Lt,x,nt,Z,0,b),Be=this.markerEnd=Ca("end",l,Lt,x,nt,Z,0,b),b&&(ze=Ee.quickSetter([gt,Be],x.a,Yt)),!W&&!(bi.length&&hr(U,"fixedMarkers")===!0)&&(py(k?pt:U),Ee.set([z,ye],{force3D:!0}),Ue=Ee.quickSetter(z,x.a,Yt),ve=Ee.quickSetter(ye,x.a,Yt))}if(b){var ge=b.vars.onUpdate,we=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){D.update(0,0,1),ge&&ge.apply(b,we||[])})}if(D.previous=function(){return je[je.indexOf(D)-1]},D.next=function(){return je[je.indexOf(D)+1]},D.revert=function(pe,He){if(!He)return D.kill(!0);var Ae=pe!==!1||!D.enabled,ke=an;Ae!==D.isReverted&&(Ae&&(ae=Math.max(ie(),D.scroll.rec||0),de=D.progress,he=i&&i.progress()),gt&&[gt,Be,z,ye].forEach(function(Nt){return Nt.style.display=Ae?"none":"block"}),Ae&&(an=D,D.update(Ae)),d&&(!A||!D.isActive)&&(Ae?xy(d,J,E):fc(d,J,ni(d),se)),Ae||D.update(Ae),an=ke,D.isReverted=Ae)},D.refresh=function(pe,He,Ae,ke){if(!((an||!D.enabled)&&!He)){if(d&&pe&&oi){Jt(r,"scrollEnd",hm);return}!xn&&ce&&ce(D),an=D,Te.tween&&!Ae&&(Te.tween.kill(),Te.tween=0),I&&I.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ge){return Ge.vars.immediateRender&&Ge.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Nt=Le(),Je=Ke(),yt=b?b.duration():Ti(U,x),Vt=R<=.01||!R,vt=0,xt=ke||0,ht=Lr(Ae)?Ae.end:n.end,Un=n.endTrigger||f,Tt=Lr(Ae)?Ae.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),fn=D.pinnedContainer=n.pinnedContainer&&Tn(n.pinnedContainer,D),Kn=f&&Math.max(0,je.indexOf(D))||0,Gt=Kn,Wt,T,F,q,G,N,ee,me,Me,xe,Ce,Ne,Re;for(H&&Lr(Ae)&&(Ne=Ee.getProperty(z,x.p),Re=Ee.getProperty(ye,x.p));Gt-- >0;)N=je[Gt],N.end||N.refresh(0,1)||(an=D),ee=N.pin,ee&&(ee===f||ee===d||ee===fn)&&!N.isReverted&&(xe||(xe=[]),xe.unshift(N),N.revert(!0,!0)),N!==je[Gt]&&(Kn--,Gt--);for(un(Tt)&&(Tt=Tt(D)),Tt=Vf(Tt,"start",D),Se=jf(Tt,f,Nt,x,ie(),gt,z,D,Je,te,W,yt,b,D._startClamp&&"_startClamp")||(d?-.001:0),un(ht)&&(ht=ht(D)),Bn(ht)&&!ht.indexOf("+=")&&(~ht.indexOf(" ")?ht=(Bn(Tt)?Tt.split(" ")[0]:"")+ht:(vt=Xa(ht.substr(2),Nt),ht=Bn(Tt)?Tt:(b?Ee.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Se):Se)+vt,Un=f)),ht=Vf(ht,"end",D),L=Math.max(Se,jf(ht||(Un?"100% 0":yt),Un,Nt,x,ie()+vt,Be,ye,D,Je,te,W,yt,b,D._endClamp&&"_endClamp"))||-.001,vt=0,Gt=Kn;Gt--;)N=je[Gt]||{},ee=N.pin,ee&&N.start-N._pinPush<=Se&&!b&&N.end>0&&(Wt=N.end-(D._startClamp?Math.max(0,N.start):N.start),(ee===f&&N.start-N._pinPush<Se||ee===fn)&&isNaN(Tt)&&(vt+=Wt*(1-N.progress)),ee===d&&(xt+=Wt));if(Se+=vt,L+=vt,D._startClamp&&(D._startClamp+=vt),D._endClamp&&!xn&&(D._endClamp=L||-.001,L=Math.min(L,Ti(U,x))),R=L-Se||(Se-=.01)&&.001,Vt&&(de=Ee.utils.clamp(0,1,Ee.utils.normalize(Se,L,ae))),D._pinPush=xt,gt&&vt&&(Wt={},Wt[x.a]="+="+vt,fn&&(Wt[x.p]="-="+ie()),Ee.set([gt,Be],Wt)),d&&!(Tu&&D.end>=Ti(U,x)))Wt=ni(d),q=x===qt,F=ie(),fe=parseFloat(ue(x.a))+xt,!yt&&L>1&&(Ce=(k?Et.scrollingElement||kn:U).style,Ce={style:Ce,value:Ce["overflow"+x.a.toUpperCase()]},k&&ni(pt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(Ce.style["overflow"+x.a.toUpperCase()]="scroll")),fc(d,J,Wt),Q=Pa(d),T=Oi(d,!0),me=W&&_r(U,q?Mn:qt)(),g?(se=[g+x.os2,R+xt+Yt],se.t=J,Gt=g===kt?ul(d,x)+R+xt:0,Gt&&(se.push(x.d,Gt+Yt),J.style.flexBasis!=="auto"&&(J.style.flexBasis=Gt+Yt)),Ps(se),fn&&je.forEach(function(Ge){Ge.pin===fn&&Ge.vars.pinSpacing!==!1&&(Ge._subPinOffset=!0)}),W&&ie(ae)):(Gt=ul(d,x),Gt&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=Gt+Yt)),W&&(G={top:T.top+(q?F-Se:me)+Yt,left:T.left+(q?me:F-Se)+Yt,boxSizing:"border-box",position:"fixed"},G[Gr]=G["max"+Ws]=Math.ceil(T.width)+Yt,G[Wr]=G["max"+hh]=Math.ceil(T.height)+Yt,G[ti]=G[ti+bo]=G[ti+Eo]=G[ti+wo]=G[ti+To]="0",G[kt]=Wt[kt],G[kt+bo]=Wt[kt+bo],G[kt+Eo]=Wt[kt+Eo],G[kt+wo]=Wt[kt+wo],G[kt+To]=Wt[kt+To],V=My(E,G,A),xn&&ie(0)),i?(Me=i._initted,ac(1),i.render(i.duration(),!0,!0),Ve=ue(x.a)-fe+R+xt,De=Math.abs(R-Ve)>1,W&&De&&V.splice(V.length-2,2),i.render(0,!0,!0),Me||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ac(0)):Ve=R,Ce&&(Ce.value?Ce.style["overflow"+x.a.toUpperCase()]=Ce.value:Ce.style.removeProperty("overflow-"+x.a));else if(f&&ie()&&!b)for(T=f.parentNode;T&&T!==pt;)T._pinOffset&&(Se-=T._pinOffset,L-=T._pinOffset),T=T.parentNode;xe&&xe.forEach(function(Ge){return Ge.revert(!1,!0)}),D.start=Se,D.end=L,tt=Ze=xn?ae:ie(),!b&&!xn&&(tt<ae&&ie(ae),D.scroll.rec=0),D.revert(!1,!0),ne=ln(),j&&(K=-1,j.restart(!0)),an=0,i&&P&&(i._initted||he)&&i.progress()!==he&&i.progress(he||0,!0).render(i.time(),!0,!0),(Vt||de!==D.progress||b||_||i&&!i._initted)&&(i&&!P&&(i._initted||de||i.vars.immediateRender!==!1)&&i.totalProgress(b&&Se<-.001&&!de?Ee.utils.normalize(Se,L,0):de,!0),D.progress=Vt||(tt-Se)/R===de?0:de),d&&g&&(J._pinOffset=Math.round(D.progress*Ve)),I&&I.invalidate(),isNaN(Ne)||(Ne-=Ee.getProperty(z,x.p),Re-=Ee.getProperty(ye,x.p),Da(z,x,Ne),Da(gt,x,Ne-(ke||0)),Da(ye,x,Re),Da(Be,x,Re-(ke||0))),Vt&&!xn&&D.update(),u&&!xn&&!be&&(be=!0,u(D),be=!1)}},D.getVelocity=function(){return(ie()-Ze)/(ln()-co)*1e3||0},D.endAnimation=function(){ro(D.callbackAnimation),i&&(I?I.progress(1):i.paused()?P||ro(i,D.direction<0,1):ro(i,i.reversed()))},D.labelToScroll=function(pe){return i&&i.labels&&(Se||D.refresh()||Se)+i.labels[pe]/i.duration()*R||0},D.getTrailing=function(pe){var He=je.indexOf(D),Ae=D.direction>0?je.slice(0,He).reverse():je.slice(He+1);return(Bn(pe)?Ae.filter(function(ke){return ke.vars.preventOverlaps===pe}):Ae).filter(function(ke){return D.direction>0?ke.end<=Se:ke.start>=L})},D.update=function(pe,He,Ae){if(!(b&&!Ae&&!pe)){var ke=xn===!0?ae:D.scroll(),Nt=pe?0:(ke-Se)/R,Je=Nt<0?0:Nt>1?1:Nt||0,yt=D.progress,Vt,vt,xt,ht,Un,Tt,fn,Kn;if(He&&(Ze=tt,tt=b?ie():ke,v&&(st=Fe,Fe=i&&!P?i.totalProgress():Je)),m&&d&&!an&&!Ta&&oi&&(!Je&&Se<ke+(ke-Ze)/(ln()-co)*m?Je=1e-4:Je===1&&L>ke+(ke-Ze)/(ln()-co)*m&&(Je=.9999)),Je!==yt&&D.enabled){if(Vt=D.isActive=!!Je&&Je<1,vt=!!yt&&yt<1,Tt=Vt!==vt,Un=Tt||!!Je!=!!yt,D.direction=Je>yt?1:-1,D.progress=Je,Un&&!an&&(xt=Je&&!yt?0:Je===1?1:yt===1?2:3,P&&(ht=!Tt&&Y[xt+1]!=="none"&&Y[xt+1]||Y[xt],Kn=i&&(ht==="complete"||ht==="reset"||ht in i))),S&&(Tt||Kn)&&(Kn||h||!i)&&(un(S)?S(D):D.getTrailing(S).forEach(function(F){return F.endAnimation()})),P||(I&&!an&&!Ta?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",Je,i._tTime/i._tDur):(I.vars.totalProgress=Je,I.invalidate().restart())):i&&i.totalProgress(Je,!!(an&&(ne||pe)))),d){if(pe&&g&&(J.style[g+x.os2]=re),!W)oe(ho(fe+Ve*Je));else if(Un){if(fn=!pe&&Je>yt&&L+1>ke&&ke+1>=Ti(U,x),A)if(!pe&&(Vt||fn)){var Gt=Oi(d,!0),Wt=ke-Se;Jf(d,pt,Gt.top+(x===qt?Wt:0)+Yt,Gt.left+(x===qt?0:Wt)+Yt)}else Jf(d,J);Ps(Vt||fn?V:Q),De&&Je<1&&Vt||oe(fe+(Je===1&&!fn?Ve:0))}}v&&!Te.tween&&!an&&!Ta&&j.restart(!0),a&&(Tt||y&&Je&&(Je<1||!lc))&&Oo(a.targets).forEach(function(F){return F.classList[Vt||y?"add":"remove"](a.className)}),o&&!P&&!pe&&o(D),Un&&!an?(P&&(Kn&&(ht==="complete"?i.pause().totalProgress(1):ht==="reset"?i.restart(!0).pause():ht==="restart"?i.restart(!0):i[ht]()),o&&o(D)),(Tt||!lc)&&(c&&Tt&&uc(D,c),X[xt]&&uc(D,X[xt]),y&&(Je===1?D.kill(!1,1):X[xt]=0),Tt||(xt=Je===1?1:3,X[xt]&&uc(D,X[xt]))),C&&!Vt&&Math.abs(D.getVelocity())>(fo(C)?C:2500)&&(ro(D.callbackAnimation),I?I.progress(1):ro(i,ht==="reverse"?1:!Je,1))):P&&o&&!an&&o(D)}if(ve){var T=b?ke/b.duration()*(b._caScrollDist||0):ke;Ue(T+(z._isFlipped?1:0)),ve(T)}ze&&ze(-ke/b.duration()*(b._caScrollDist||0))}},D.enable=function(pe,He){D.enabled||(D.enabled=!0,Jt(U,"resize",po),k||Jt(U,"scroll",ms),ce&&Jt(r,"refreshInit",ce),pe!==!1&&(D.progress=de=0,tt=Ze=K=ie()),He!==!1&&D.refresh())},D.getTween=function(pe){return pe&&Te?Te.tween:I},D.setPositions=function(pe,He,Ae,ke){if(b){var Nt=b.scrollTrigger,Je=b.duration(),yt=Nt.end-Nt.start;pe=Nt.start+yt*pe/Je,He=Nt.start+yt*He/Je}D.refresh(!1,!1,{start:Gf(pe,Ae&&!!D._startClamp),end:Gf(He,Ae&&!!D._endClamp)},ke),D.update()},D.adjustPinSpacing=function(pe){if(se&&pe){var He=se.indexOf(x.d)+1;se[He]=parseFloat(se[He])+pe+Yt,se[1]=parseFloat(se[1])+pe+Yt,Ps(se)}},D.disable=function(pe,He){if(pe!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,He||I&&I.pause(),ae=0,Oe&&(Oe.uncache=1),ce&&jt(r,"refreshInit",ce),j&&(j.pause(),Te.tween&&Te.tween.kill()&&(Te.tween=0)),!k)){for(var Ae=je.length;Ae--;)if(je[Ae].scroller===U&&je[Ae]!==D)return;jt(U,"resize",po),k||jt(U,"scroll",ms)}},D.kill=function(pe,He){D.disable(pe,He),I&&!He&&I.kill(),l&&delete bu[l];var Ae=je.indexOf(D);Ae>=0&&je.splice(Ae,1),Ae===vn&&qa>0&&vn--,Ae=0,je.forEach(function(ke){return ke.scroller===D.scroller&&(Ae=1)}),Ae||xn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,pe&&i.revert({kill:!1}),He||i.kill()),gt&&[gt,Be,z,ye].forEach(function(ke){return ke.parentNode&&ke.parentNode.removeChild(ke)}),Ao===D&&(Ao=0),d&&(Oe&&(Oe.uncache=1),Ae=0,je.forEach(function(ke){return ke.pin===d&&Ae++}),Ae||(Oe.spacer=0)),n.onKill&&n.onKill(D)},je.push(D),D.enable(!1,!1),lt&&lt(D),i&&i.add&&!R){var Xe=D.update;D.update=function(){D.update=Xe,et.cache++,Se||L||D.refresh()},Ee.delayedCall(.01,D.update),R=.01,Se=L=0}else D.refresh();d&&vy()},r.register=function(n){return _s||(Ee=n||sm(),rm()&&window.document&&r.enable(),_s=uo),_s},r.defaults=function(n){if(n)for(var i in n)Ra[i]=n[i];return Ra},r.disable=function(n,i){uo=0,je.forEach(function(o){return o[i?"kill":"disable"](n)}),jt(Qe,"wheel",ms),jt(Et,"scroll",ms),clearInterval(Ea),jt(Et,"touchcancel",xi),jt(pt,"touchstart",xi),wa(jt,Et,"pointerdown,touchstart,mousedown",Wf),wa(jt,Et,"pointerup,touchend,mouseup",Xf),cl.kill(),ba(jt);for(var s=0;s<et.length;s+=3)Aa(jt,et[s],et[s+1]),Aa(jt,et[s],et[s+2])},r.enable=function(){if(Qe=window,Et=document,kn=Et.documentElement,pt=Et.body,Ee&&(Oo=Ee.utils.toArray,Mo=Ee.utils.clamp,Eu=Ee.core.context||xi,ac=Ee.core.suppressOverwrites||xi,ah=Qe.history.scrollRestoration||"auto",wu=Qe.pageYOffset||0,Ee.core.globals("ScrollTrigger",r),pt)){uo=1,Cs=document.createElement("div"),Cs.style.height="100vh",Cs.style.position="absolute",mm(),hy(),Ot.register(Ee),r.isTouch=Ot.isTouch,er=Ot.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),yu=Ot.isTouch===1,Jt(Qe,"wheel",ms),oh=[Qe,Et,kn,pt],Ee.matchMedia?(r.matchMedia=function(c){var u=Ee.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Ee.addEventListener("matchMediaInit",function(){dm(),dh()}),Ee.addEventListener("matchMediaRevert",function(){return fm()}),Ee.addEventListener("matchMedia",function(){Br(0,1),Zr("matchMedia")}),Ee.matchMedia().add("(orientation: portrait)",function(){return hc(),hc})):console.warn("Requires GSAP 3.11.0 or later"),hc(),Jt(Et,"scroll",ms);var n=pt.hasAttribute("style"),i=pt.style,s=i.borderTopStyle,o=Ee.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Oi(pt),qt.m=Math.round(a.top+qt.sc())||0,Mn.m=Math.round(a.left+Mn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(pt.setAttribute("style",""),pt.removeAttribute("style")),Ea=setInterval($f,250),Ee.delayedCall(.5,function(){return Ta=0}),Jt(Et,"touchcancel",xi),Jt(pt,"touchstart",xi),wa(Jt,Et,"pointerdown,touchstart,mousedown",Wf),wa(Jt,Et,"pointerup,touchend,mouseup",Xf),Mu=Ee.utils.checkPrefix("transform"),$a.push(Mu),_s=ln(),cl=Ee.delayedCall(.2,Br).pause(),gs=[Et,"visibilitychange",function(){var c=Qe.innerWidth,u=Qe.innerHeight;Et.hidden?(kf=c,Hf=u):(kf!==c||Hf!==u)&&po()},Et,"DOMContentLoaded",Br,Qe,"load",Br,Qe,"resize",po],ba(Jt),je.forEach(function(c){return c.enable(0,1)}),l=0;l<et.length;l+=3)Aa(jt,et[l],et[l+1]),Aa(jt,et[l],et[l+2])}},r.config=function(n){"limitCallbacks"in n&&(lc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ea)||(Ea=i)&&setInterval($f,i),"ignoreMobileResize"in n&&(yu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ba(jt)||ba(Jt,n.autoRefreshEvents||"none"),tm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Tn(n),o=et.indexOf(s),a=$r(s);~o&&et.splice(o,a?6:2),i&&(a?bi.unshift(Qe,i,pt,i,kn,i):bi.unshift(s,i))},r.clearMatchMedia=function(n){je.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Bn(n)?Tn(n):n).getBoundingClientRect(),a=o[s?Gr:Wr]*i||0;return s?o.right-a>0&&o.left+a<Qe.innerWidth:o.bottom-a>0&&o.top+a<Qe.innerHeight},r.positionInViewport=function(n,i,s){Bn(n)&&(n=Tn(n));var o=n.getBoundingClientRect(),a=o[s?Gr:Wr],l=i==null?a/2:i in hl?hl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/Qe.innerWidth:(o.top+l)/Qe.innerHeight},r.killAll=function(n){if(je.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Kr.killAll||[];Kr={},i.forEach(function(s){return s()})}},r})();qe.version="3.14.2";qe.saveStyles=function(r){return r?Oo(r).forEach(function(e){if(e&&e.style){var t=On.indexOf(e);t>=0&&On.splice(t,5),On.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ee.core.getCache(e),Eu())}}):On};qe.revert=function(r,e){return dh(!r,e)};qe.create=function(r,e){return new qe(r,e)};qe.refresh=function(r){return r?po(!0):(_s||qe.register())&&Br(!0)};qe.update=function(r){return++et.cache&&Vi(r===!0?2:0)};qe.clearScrollMemory=pm;qe.maxScroll=function(r,e){return Ti(r,e?Mn:qt)};qe.getScrollFunc=function(r,e){return _r(Tn(r),e?Mn:qt)};qe.getById=function(r){return bu[r]};qe.getAll=function(){return je.filter(function(r){return r.vars.id!=="ScrollSmoother"})};qe.isScrolling=function(){return!!oi};qe.snapDirectional=fh;qe.addEventListener=function(r,e){var t=Kr[r]||(Kr[r]=[]);~t.indexOf(e)||t.push(e)};qe.removeEventListener=function(r,e){var t=Kr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};qe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ee.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&un(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return un(s)&&(s=s(),Jt(qe,"refresh",function(){return s=e.batchMax()})),Oo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(qe.create(c))}),t};var ed=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},dc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ot.isTouch?" pinch-zoom":""):"none",e===kn&&r(pt,t)},La={auto:1,scroll:1},Ey=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ee.core.getCache(s),a=ln(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(La[(l=ni(s)).overflowY]||La[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!$r(s)&&(La[(l=ni(s)).overflowY]||La[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},gm=function(e,t,n,i){return Ot.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Ey,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Jt(Et,Ot.eventTypes[0],nd,!1,!0)},onDisable:function(){return jt(Et,Ot.eventTypes[0],nd,!0)}})},Ty=/(input|label|select|textarea)/i,td,nd=function(e){var t=Ty.test(e.target.tagName);(t||td)&&(e._gsapAllow=!0,td=t)},by=function(e){Lr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Tn(e.target)||kn,u=Ee.core.globals().ScrollSmoother,h=u&&u.get(),f=er&&(e.content&&Tn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=_r(c,qt),g=_r(c,Mn),_=1,m=(Ot.isTouch&&Qe.visualViewport?Qe.visualViewport.scale*Qe.visualViewport.width:Qe.outerWidth)/Qe.innerWidth,p=0,M=un(i)?function(){return i(a)}:function(){return i||2.8},y,v,A=gm(c,e.type,!0,s),w=function(){return v=!1},b=xi,C=xi,S=function(){l=Ti(c,qt),C=Mo(er?1:0,l),n&&(b=Mo(0,Ti(c,Mn))),y=Xr},x=function(){f._gsap.y=ho(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(v){requestAnimationFrame(w);var H=ho(a.deltaY/2),te=C(d.v-H);if(f&&te!==d.v+d.offset){d.offset=te-d.v;var D=ho((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",f._gsap.y=D+"px",d.cacheID=et.cache,Vi()}return!0}d.offset&&x(),v=!0},U,O,k,W,X=function(){S(),U.isActive()&&U.vars.scrollY>l&&(d()>l?U.progress(1)&&d(l):U.resetTo("scrollY",l))};return f&&Ee.set(f,{y:"+=0"}),e.ignoreCheck=function(Y){return er&&Y.type==="touchmove"&&P()||_>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){v=!1;var Y=_;_=ho((Qe.visualViewport&&Qe.visualViewport.scale||1)/m),U.pause(),Y!==_&&dc(c,_>1.01?!0:n?!1:"x"),O=g(),k=d(),S(),y=Xr},e.onRelease=e.onGestureStart=function(Y,H){if(d.offset&&x(),!H)W.restart(!0);else{et.cache++;var te=M(),D,ce;n&&(D=g(),ce=D+te*.05*-Y.velocityX/.227,te*=ed(g,D,ce,Ti(c,Mn)),U.vars.scrollX=b(ce)),D=d(),ce=D+te*.05*-Y.velocityY/.227,te*=ed(d,D,ce,Ti(c,qt)),U.vars.scrollY=C(ce),U.invalidate().duration(te).play(.01),(er&&U.vars.scrollY>=l||D>=l-1)&&Ee.to({},{onUpdate:X,duration:te})}o&&o(Y)},e.onWheel=function(){U._ts&&U.pause(),ln()-p>1e3&&(y=0,p=ln())},e.onChange=function(Y,H,te,D,ce){if(Xr!==y&&S(),H&&n&&g(b(D[2]===H?O+(Y.startX-Y.x):g()+H-D[1])),te){d.offset&&x();var Le=ce[2]===te,Ke=Le?k+Y.startY-Y.y:d()+te-ce[1],K=C(Ke);Le&&Ke!==K&&(k+=K-Ke),d(K)}(te||H)&&Vi()},e.onEnable=function(){dc(c,n?!1:"x"),qe.addEventListener("refresh",X),Jt(Qe,"resize",X),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),A.enable()},e.onDisable=function(){dc(c,!0),jt(Qe,"resize",X),qe.removeEventListener("refresh",X),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new Ot(e),a.iOS=er,er&&!d()&&d(1),er&&Ee.ticker.add(xi),W=a._dc,U=Ee.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:_m(d,d(),function(){return U.pause()})},onUpdate:Vi,onComplete:W.vars.onComplete}),a};qe.sort=function(r){if(un(r))return je.sort(r);var e=Qe.pageYOffset||0;return qe.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Qe.innerHeight}),je.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};qe.observe=function(r){return new Ot(r)};qe.normalizeScroll=function(r){if(typeof r>"u")return gn;if(r===!0&&gn)return gn.enable();if(r===!1){gn&&gn.kill(),gn=r;return}var e=r instanceof Ot?r:by(r);return gn&&gn.target===e.target&&gn.kill(),$r(e.target)&&(gn=e),e};qe.core={_getVelocityProp:Su,_inputObserver:gm,_scrollers:et,_proxies:bi,bridge:{ss:function(){oi||Zr("scrollStart"),oi=ln()},ref:function(){return an}}};sm()&&Ee.registerPlugin(qe);function vm(r,e,t){return Math.max(r,Math.min(e,t))}class wy{advance(e){var a;if(!this.isRunning)return;let t=!1;if(this.lerp)this.value=(n=this.value,i=this.to,s=60*this.lerp,o=e,(function(l,c,u){return(1-u)*l+u*c})(n,i,1-Math.exp(-s*o))),Math.round(this.value)===this.to&&(this.value=this.to,t=!0);else{this.currentTime+=e;const l=vm(0,this.currentTime/this.duration,1);t=l>=1;const c=t?1:this.easing(l);this.value=this.from+(this.to-this.from)*c}var n,i,s,o;(a=this.onUpdate)==null||a.call(this,this.value,t),t&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n=.1,duration:i=1,easing:s=(l=>l),onStart:o,onUpdate:a}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=i,this.easing=s,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=a}}class Ay{constructor({wrapper:e,content:t,autoResize:n=!0,debounce:i=250}={}){Ai(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ai(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ai(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,n&&(this.debouncedResize=(function(s,o){let a;return function(){let l=arguments,c=this;clearTimeout(a),a=setTimeout((function(){s.apply(c,l)}),o)}})(this.resize,i),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class xm{constructor(){this.events={}}emit(e,...t){let n=this.events[e]||[];for(let i=0,s=n.length;i<s;i++)n[i](...t)}on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var i;this.events[e]=(i=this.events[e])==null?void 0:i.filter((s=>t!==s))}}off(e,t){var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter((i=>t!==i))}destroy(){this.events={}}}const id=100/6;class Ry{constructor(e,{wheelMultiplier:t=1,touchMultiplier:n=1}){Ai(this,"onTouchStart",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});Ai(this,"onTouchMove",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,i=-(t-this.touchStart.x)*this.touchMultiplier,s=-(n-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:i,y:s},this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:e})});Ai(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});Ai(this,"onWheel",e=>{let{deltaX:t,deltaY:n,deltaMode:i}=e;t*=i===1?id:i===2?this.windowWidth:1,n*=i===1?id:i===2?this.windowHeight:1,t*=this.wheelMultiplier,n*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:n,event:e})});Ai(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=e,this.wheelMultiplier=t,this.touchMultiplier=n,this.touchStart={x:null,y:null},this.emitter=new xm,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class Cy{constructor({wrapper:e=window,content:t=document.documentElement,wheelEventsTarget:n=e,eventsTarget:i=n,smoothWheel:s=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaMultiplier:l=35,duration:c,easing:u=(y=>Math.min(1,1.001-Math.pow(2,-10*y))),lerp:h=!c&&.1,infinite:f=!1,orientation:d="vertical",gestureOrientation:g="vertical",touchMultiplier:_=1,wheelMultiplier:m=1,autoResize:p=!0,__experimental__naiveDimensions:M=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:y,deltaY:v,event:A})=>{if(A.ctrlKey)return;const w=A.type.includes("touch"),b=A.type.includes("wheel");if(this.options.syncTouch&&w&&A.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const C=y===0&&v===0,S=this.options.gestureOrientation==="vertical"&&v===0||this.options.gestureOrientation==="horizontal"&&y===0;if(C||S)return;let x=A.composedPath();if(x=x.slice(0,x.indexOf(this.rootElement)),x.find((k=>{var W,X,Y,H,te;return((W=k.hasAttribute)===null||W===void 0?void 0:W.call(k,"data-lenis-prevent"))||w&&((X=k.hasAttribute)===null||X===void 0?void 0:X.call(k,"data-lenis-prevent-touch"))||b&&((Y=k.hasAttribute)===null||Y===void 0?void 0:Y.call(k,"data-lenis-prevent-wheel"))||((H=k.classList)===null||H===void 0?void 0:H.contains("lenis"))&&!(!((te=k.classList)===null||te===void 0)&&te.contains("lenis-stopped"))})))return;if(this.isStopped||this.isLocked)return void A.preventDefault();if(this.isSmooth=this.options.syncTouch&&w||this.options.smoothWheel&&b,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();A.preventDefault();let P=v;this.options.gestureOrientation==="both"?P=Math.abs(v)>Math.abs(y)?v:y:this.options.gestureOrientation==="horizontal"&&(P=y);const U=w&&this.options.syncTouch,O=w&&A.type==="touchend"&&Math.abs(P)>5;O&&(P=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+P,Object.assign({programmatic:!1},U?{lerp:O?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const y=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-y),this.emit()}},window.lenisVersion="1.0.42",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:t,wheelEventsTarget:n,eventsTarget:i,smoothWheel:s,syncTouch:o,syncTouchLerp:a,touchInertiaMultiplier:l,duration:c,easing:u,lerp:h,infinite:f,gestureOrientation:g,orientation:d,touchMultiplier:_,wheelMultiplier:m,autoResize:p,__experimental__naiveDimensions:M},this.animate=new wy,this.emitter=new xm,this.dimensions=new Ay({wrapper:e,content:t,autoResize:p}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=o||s,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new Ry(i,{touchMultiplier:_,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(e){const t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:n=!1,lock:i=!1,duration:s=this.options.duration,easing:o=this.options.easing,lerp:a=!s&&this.options.lerp,onComplete:l,force:c=!1,programmatic:u=!0}={}){if(!this.isStopped&&!this.isLocked||c){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{let h;if(typeof e=="string"?h=document.querySelector(e):e!=null&&e.nodeType&&(h=e),h){if(this.options.wrapper!==window){const d=this.options.wrapper.getBoundingClientRect();t-=this.isHorizontal?d.left:d.top}const f=h.getBoundingClientRect();e=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):e=vm(0,e,this.limit),n)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!u){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:s,easing:o,lerp:a,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(h,f)=>{this.isScrolling=!0,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),u&&(this.targetScroll=h),f||this.emit(),f&&(this.reset(),this.emit(),l==null||l(this),this.__preventNextScrollEvent=!0,requestAnimationFrame((()=>{delete this.__preventNextScrollEvent})))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(e=this.animatedScroll,t=this.limit,(e%t+t)%t):this.animatedScroll;var e,t}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClassName(e,t){this.rootElement.classList.toggle(e,t),this.emitter.emit("className change",this)}}/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=([r,e,t])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",r);return Object.keys(e).forEach(i=>{n.setAttribute(i,String(e[i]))}),t!=null&&t.length&&t.forEach(i=>{const s=Sm(i);n.appendChild(s)}),n};/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=r=>Array.from(r.attributes).reduce((e,t)=>(e[t.name]=t.value,e),{}),Ly=r=>typeof r=="string"?r:!r||!r.class?"":r.class&&typeof r.class=="string"?r.class.split(" "):r.class&&Array.isArray(r.class)?r.class:"",Uy=r=>r.flatMap(Ly).map(t=>t.trim()).filter(Boolean).filter((t,n,i)=>i.indexOf(t)===n).join(" "),Iy=r=>r.replace(/(\w)(\w*)(_|-|\s*)/g,(e,t,n)=>t.toUpperCase()+n.toLowerCase()),rd=(r,{nameAttr:e,icons:t,attrs:n})=>{var h;const i=r.getAttribute(e);if(i==null)return;const s=Iy(i),o=t[s];if(!o)return console.warn(`${r.outerHTML} icon name was not found in the provided icons object.`);const a=Dy(r),l={...Py,"data-lucide":i,...n,...a},c=Uy(["lucide",`lucide-${i}`,a,n]);c&&Object.assign(l,{class:c});const u=Sm(["svg",l,o]);return(h=r.parentNode)==null?void 0:h.replaceChild(u,r)};/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02"}],["path",{d:"M2 12a10 10 0 0 1 18-6"}],["path",{d:"M2 16h.01"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"m3 11 18-5v12L3 14v-3z"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=({icons:r={},nameAttr:e="data-lucide",attrs:t={}}={})=>{if(!Object.values(r).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const n=document.querySelectorAll(`[${e}]`);if(Array.from(n).forEach(i=>rd(i,{nameAttr:e,icons:r,attrs:t})),e==="data-lucide"){const i=document.querySelectorAll("[icon-name]");i.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(i).forEach(s=>rd(s,{nameAttr:"icon-name",icons:r,attrs:t})))}};wm({icons:{Twitter:zy,Instagram:Ny,Linkedin:Fy,Menu:By,ArrowRight:Mm,Code:ym,Megaphone:Oy,Target:Tm,Fingerprint:Em,TrendingUp:bm}});bt.registerPlugin(qe);const sd=document.querySelector(".mobile-menu-btn"),od=document.querySelector(".main-nav");sd&&od&&sd.addEventListener("click",()=>{od.classList.toggle("nav-open")});const ky=[{id:"launch",title:"7-Day Brand Power Launch",desc:"Complete brand activation in one week: Website, Social, Ads, and Google presence.",icon:"megaphone"},{id:"web",title:"Website + Funnel Systems",desc:"Conversion-focused platforms with mobile optimization, lead capture, and analytics.",icon:"code"},{id:"marketing",title:"Performance Marketing Retainers",desc:"Strategic Meta & Google ads with active involvement and robust remarketing.",icon:"trending-up"},{id:"retail",title:"Retail Digital Integration",desc:"QR systems, loyalty funnels, and review automation for physical businesses.",icon:"fingerprint"}],ad=document.querySelector(".services-grid");ad&&(ky.forEach(r=>{const e=document.createElement("div");e.className="service-card",e.innerHTML=`
      <div class="service-icon"><i data-lucide="${r.icon}"></i></div>
      <h3>${r.title}</h3>
      <p>${r.desc}</p>
      <a href="#contact" class="service-link magnetic">Learn More <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i></a>
    `,ad.appendChild(e)}),wm({icons:{Code:ym,Target:Tm,Fingerprint:Em,TrendingUp:bm,ArrowRight:Mm},nameAttr:"data-lucide"}));const ph=new Cy({duration:1.2,easing:r=>Math.min(1,1.001-Math.pow(2,-10*r)),direction:"vertical",gestureDirection:"vertical",smooth:!0,mouseMultiplier:1,smoothTouch:!1,touchMultiplier:2,infinite:!1});function Am(r){ph.raf(r),requestAnimationFrame(Am)}requestAnimationFrame(Am);ph.on("scroll",qe.update);bt.ticker.add(r=>{ph.raf(r*1e3)});bt.ticker.lagSmoothing(0);const gi=document.querySelector(".custom-cursor"),ld=document.querySelector(".cursor-follower"),Hy=r=>{!gi||!ld||(gi.style.transform=`translate(${r.clientX}px, ${r.clientY}px)`,bt.to(ld,{x:r.clientX,y:r.clientY,duration:.15,ease:"power2.out"}))},Rm=window.innerWidth>768;Rm&&(window.addEventListener("mousemove",Hy),document.querySelectorAll(".magnetic").forEach(t=>{t.addEventListener("mousemove",n=>{const i=t.getBoundingClientRect(),s=n.clientX-i.left-i.width/2,o=n.clientY-i.top-i.height/2;bt.to(t,{x:s*.3,y:o*.3,duration:.3,ease:"power2.out"}),gi&&gi.classList.add("hover")}),t.addEventListener("mouseleave",()=>{bt.to(t,{x:0,y:0,duration:.5,ease:"elastic.out(1, 0.3)"}),gi&&gi.classList.remove("hover")})}),document.querySelectorAll("a, button, .service-card").forEach(t=>{t.addEventListener("mouseenter",()=>gi&&gi.classList.add("hover")),t.addEventListener("mouseleave",()=>gi&&gi.classList.remove("hover"))}));const cd=document.querySelector("#bg-canvas");if(cd){const r=new Fd,e=new bn(75,window.innerWidth/window.innerHeight,.1,1e3);e.position.z=5;const t=new $d({canvas:cd,alpha:!0,antialias:!1});t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(Math.min(window.devicePixelRatio,1.5));const n=new Co(2.5,1),i=new Q_(n),s=new Od({color:16777215,transparent:!0,opacity:.15}),o=new j_(i,s);r.add(o);const a=new ai,l=200,c=new Float32Array(l*3);for(let v=0;v<l*3;v++)c[v]=(Math.random()-.5)*15;a.setAttribute("position",new _i(c,3));const u=new Bd({size:.02,color:16777215,transparent:!0,opacity:.4,blending:mc}),h=new J_(a,u);r.add(h);let f=0,d=0,g=0,_=0;const m=window.innerWidth/2,p=window.innerHeight/2;document.addEventListener("mousemove",v=>{f=v.clientX-m,d=v.clientY-p});const M=new Vd,y=()=>{if(!document.hidden){const v=M.getElapsedTime();o.rotation.y=v*.1,o.rotation.x=v*.05,h.rotation.y=-v*.05,g=f*.001,_=d*.001,o.rotation.y+=.05*(g-o.rotation.y),o.rotation.x+=.05*(_-o.rotation.x),e.position.y=-window.scrollY*.001,t.render(r,e)}window.requestAnimationFrame(y)};y(),window.addEventListener("resize",()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(1)})}const Xt=document.querySelector("#hero-3d-container");if(Xt){const r=document.createElement("canvas");r.style.width="100%",r.style.height="100%",Xt.appendChild(r);const e=new Fd,t=new bn(50,Xt.clientWidth/Xt.clientHeight,.1,100);t.position.z=6;const n=new $d({canvas:r,alpha:!0,antialias:!0});n.setSize(Xt.clientWidth,Xt.clientHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,1.5));const i=new so,s=new Co(1.6,32),o=new Xi({uniforms:{uTime:{value:0},uColor1:{value:new ot(657930)},uColor2:{value:new ot(1710618)},uColor3:{value:new ot(2763306)}},vertexShader:`
            uniform float uTime;
            varying vec2 vUv;
            varying float vNoise;

            // Simple 3D Noise function
            vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
            vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

            float snoise(vec3 v) { 
                const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
                const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

                vec3 i  = floor(v + dot(v, C.yyy) );
                vec3 x0 = v - i + dot(i, C.xxx) ;

                vec3 g = step(x0.yzx, x0.xyz);
                vec3 l = 1.0 - g;
                vec3 i1 = min( g.xyz, l.zxy );
                vec3 i2 = max( g.xyz, l.zxy );

                vec3 x1 = x0 - i1 + C.xxx;
                vec3 x2 = x0 - i2 + C.yyy;
                vec3 x3 = x0 - D.yyy;

                i = mod289(i); 
                vec4 p = permute( permute( permute( 
                            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                        + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
                        + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

                float n_ = 0.142857142857;
                vec3  ns = n_ * D.wyz - D.xzx;

                vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

                vec4 x_ = floor(j * ns.z);
                vec4 y_ = floor(j - 7.0 * x_ );

                vec4 x = x_ *ns.x + ns.yyyy;
                vec4 y = y_ *ns.x + ns.yyyy;
                vec4 h = 1.0 - abs(x) - abs(y);

                vec4 b0 = vec4( x.xy, y.xy );
                vec4 b1 = vec4( x.zw, y.zw );

                vec4 s0 = floor(b0)*2.0 + 1.0;
                vec4 s1 = floor(b1)*2.0 + 1.0;
                vec4 sh = -step(h, vec4(0.0));

                vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
                vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

                vec3 p0 = vec3(a0.xy,h.x);
                vec3 p1 = vec3(a0.zw,h.y);
                vec3 p2 = vec3(a1.xy,h.z);
                vec3 p3 = vec3(a1.zw,h.w);

                vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
                p0 *= norm.x;
                p1 *= norm.y;
                p2 *= norm.z;
                p3 *= norm.w;

                vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
                m = m * m;
                return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                            dot(p2,x2), dot(p3,x3) ) );
            }

            void main() {
                vUv = uv;
                
                float noiseVal = snoise(position * 1.5 + uTime * 0.2);
                noiseVal += 0.5 * snoise(position * 3.0 - uTime * 0.3);
                vNoise = noiseVal * 0.5 + 0.5;

                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            uniform vec3 uColor1;
            uniform vec3 uColor2;
            uniform vec3 uColor3;

            varying vec2 vUv;
            varying float vNoise;

            void main() {
                vec3 finalColor = mix(uColor1, uColor2, smoothstep(0.0, 0.5, vNoise));
                finalColor = mix(finalColor, uColor3, smoothstep(0.5, 1.0, vNoise));

                gl_FragColor = vec4(finalColor, 1.0);
            }
        `}),a=new pi(s,o);i.add(a);const l=new Co(1.8,1),c=l.attributes.position,u=[];for(let P=0;P<c.count;P++){const U=new B;U.fromBufferAttribute(c,P),u.push({x:U.x,y:U.y,z:U.z,speed:Math.random()*.05+.02,amp:Math.random()*.3+.1,angle:Math.random()*Math.PI*2})}const h=new Ou({color:16733440,wireframe:!0,transparent:!0,opacity:.6}),f=new pi(l,h);i.add(f),e.add(i);const d=new sg(16777215,.3);e.add(d);const g=new qh(16733440,5);g.position.set(5,5,-5),e.add(g);const _=new qh(16777215,2);_.position.set(-5,0,5),e.add(_);const m=new ig(16777215,5,10);m.position.set(2,2,2),e.add(m);let p=0,M=0,y=!1,v=0,A=0;Rm?(Xt.addEventListener("mousemove",P=>{const U=Xt.getBoundingClientRect(),O=P.clientX-U.left-U.width/2,k=P.clientY-U.top-U.height/2;M=O/U.width*Math.PI*.5,p=k/U.height*Math.PI*.5}),Xt.addEventListener("mouseenter",()=>{y=!0,bt.to(i.scale,{x:1.1,y:1.1,z:1.1,duration:.5,ease:"power2.out"}),bt.to(h,{opacity:1,duration:.5}),bt.to(o.uniforms.uColor1.value,{r:.1,g:.1,b:.1,duration:.5}),bt.to(o.uniforms.uColor2.value,{r:.2,g:.2,b:.2,duration:.5}),bt.to(o.uniforms.uColor3.value,{r:.3,g:.3,b:.3,duration:.5})}),Xt.addEventListener("mouseleave",()=>{y=!1,p=0,M=0,bt.to(i.scale,{x:1,y:1,z:1,duration:1,ease:"elastic.out(1, 0.5)"}),bt.to(h,{opacity:.6,duration:1}),bt.to(o.uniforms.uColor1.value,{r:.039,g:.039,b:.039,duration:1}),bt.to(o.uniforms.uColor2.value,{r:.101,g:.101,b:.101,duration:1}),bt.to(o.uniforms.uColor3.value,{r:.164,g:.164,b:.164,duration:1})})):(Xt.addEventListener("touchstart",P=>{v=P.touches[0].clientX,A=P.touches[0].clientY},{passive:!0}),Xt.addEventListener("touchmove",P=>{const U=P.touches[0].clientX,O=P.touches[0].clientY,k=U-v,W=O-A;M+=k*.005,p+=W*.005,v=U,A=O},{passive:!0}));const w=new Vd;let b=!0;new IntersectionObserver(P=>{P.forEach(U=>{b=U.isIntersecting})},{threshold:.1}).observe(document.querySelector(".hero-section"));const S=()=>{if(b&&!document.hidden){const P=w.getElapsedTime();if(i.rotation.y+=.003,i.rotation.z+=.001,i.rotation.x+=(p-i.rotation.x)*.05,i.rotation.y+=(M-i.rotation.y)*.05,o.uniforms.uTime.value=P,y){const U=l.attributes.position,O=new B;for(let k=0;k<U.count;k++){const W=u[k];W.angle+=W.speed;const X=Math.sin(W.angle)*W.amp;O.set(W.x,W.y,W.z).normalize(),U.setXYZ(k,W.x+O.x*X,W.y+O.y*X,W.z+O.z*X)}U.needsUpdate=!0}else{const U=l.attributes.position;let O=!1;for(let k=0;k<U.count;k++){const W=u[k],X=U.getX(k),Y=U.getY(k),H=U.getZ(k);(Math.abs(X-W.x)>.001||Math.abs(Y-W.y)>.001)&&(O=!0,U.setXYZ(k,X+(W.x-X)*.1,Y+(W.y-Y)*.1,H+(W.z-H)*.1))}O&&(U.needsUpdate=!0)}n.render(e,t)}window.requestAnimationFrame(S)};S(),new ResizeObserver(()=>{!Xt.clientWidth||!Xt.clientHeight||(t.aspect=Xt.clientWidth/Xt.clientHeight,t.updateProjectionMatrix(),n.setSize(Xt.clientWidth,Xt.clientHeight),n.setPixelRatio(1))}).observe(Xt)}const Vy=bt.timeline();Vy.fromTo(".site-header",{y:-100,opacity:0},{y:0,opacity:1,duration:1,ease:"power3.out",delay:.2}).fromTo(".hero-title",{y:50,opacity:0},{y:0,opacity:1,duration:1,ease:"power3.out"},"-=0.5").fromTo(".hero-subtitle",{y:30,opacity:0},{y:0,opacity:1,duration:.8,ease:"power3.out"},"-=0.7").fromTo(".hero-cta .btn",{y:20,opacity:0},{y:0,opacity:1,duration:.5,stagger:.2,ease:"power2.out"},"-=0.5").fromTo(".scroll-indicator",{opacity:0},{opacity:.7,duration:1,ease:"power2.out"},"-=0.3");const Gy=document.querySelectorAll("section:not(#hero)");Gy.forEach(r=>{bt.fromTo(r,{opacity:0,y:50},{opacity:1,y:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 80%",toggleActions:"play none none reverse"}})});const pc=document.documentElement,Wy={dark:{bg:"#050505",text:"#fafafa",accent:"#ff5500"},light:{bg:"#ececec",text:"#050505",accent:"#ff5500"},orange:{bg:"#ff5500",text:"#050505",accent:"#fafafa"}},Xy=[{selector:"#hero",theme:"dark"},{selector:"#services",theme:"light"},{selector:"#usp-launch",theme:"dark"},{selector:"#funnel",theme:"dark"},{selector:"#about",theme:"dark"},{selector:"#contact",theme:"dark"}];Xy.forEach(({selector:r,theme:e})=>{const t=document.querySelector(r);t&&qe.create({trigger:t,start:"top 80%",end:"bottom 20%",onEnter:()=>ud(e),onEnterBack:()=>ud(e)})});function ud(r){const e=Wy[r];e&&(pc.style.setProperty("--bg-color",e.bg),pc.style.setProperty("--text-color",e.text),pc.style.setProperty("--accent-color",e.accent))}const Yy=document.querySelectorAll(".parallax-bg-text");Yy.forEach(r=>{const e=r.getAttribute("data-speed")||.5;bt.to(r,{x:()=>-window.innerWidth*e,ease:"none",scrollTrigger:{trigger:r.closest("section"),start:"top bottom",end:"bottom top",scrub:!0}})});bt.fromTo(".service-card",{y:50,opacity:0},{y:0,opacity:1,duration:.8,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:".services-grid",start:"top 85%"}});bt.fromTo(".usp-item",{x:50,opacity:0},{x:0,opacity:1,duration:.6,stagger:.1,ease:"power2.out",scrollTrigger:{trigger:".usp-grid",start:"top 85%"}});const hd=document.querySelectorAll(".funnel-step"),fd=document.querySelector(".funnel-progress-line");hd.length>0&&fd&&(bt.to(fd,{height:"100%",ease:"none",scrollTrigger:{trigger:".funnel-grid",start:"top center",end:"bottom center",scrub:!0}}),hd.forEach((r,e)=>{r.querySelector(".step-number"),r.querySelector(".step-content"),bt.to(r,{scrollTrigger:{trigger:r,start:"top 80%",onEnter:()=>r.classList.add("visible"),onEnterBack:()=>r.classList.add("visible")}}),qe.create({trigger:r,start:"top center",end:"bottom center",onEnter:()=>r.classList.add("active"),onLeave:()=>r.classList.remove("active"),onEnterBack:()=>r.classList.add("active"),onLeaveBack:()=>r.classList.remove("active")})}));const qy=document.querySelectorAll(".stat-number");qy.forEach(r=>{const e=parseInt(r.getAttribute("data-target"));qe.create({trigger:".stats-grid",start:"top 85%",onEnter:()=>{bt.to(r,{innerHTML:e,duration:2,snap:{innerHTML:1},ease:"power2.out",onUpdate:function(){r.innerHTML=Math.round(r.innerHTML)}})},once:!0})});const $y=document.querySelectorAll(".input-group input, .input-group textarea, .input-group select");$y.forEach(r=>{r.addEventListener("focus",()=>{r.parentElement.classList.add("focused")}),r.addEventListener("blur",()=>{r.value||r.parentElement.classList.remove("focused")})});const Ua=document.getElementById("contact-form");Ua&&Ua.addEventListener("submit",r=>{r.preventDefault();const e=Ua.querySelector(".submit-btn"),t=e.querySelector(".btn-text");e.style.pointerEvents="none",t.innerHTML="Sending...",setTimeout(()=>{t.innerHTML="Message Sent",e.style.backgroundColor="var(--c-white)",e.style.color="var(--c-black)",Ua.reset(),setTimeout(()=>{t.innerHTML="Submit Request",e.style.backgroundColor="transparent",e.style.color="var(--c-white)",e.style.pointerEvents="auto"},3e3)},1500)});
