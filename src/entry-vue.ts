// import createTitle from "./js/createTitle";
// import createImg from "./js/createImg";

// import "./styles/global.css";
// import "./styles/title.less";

// import "core-js/stable";
// import "regenerator-runtime/runtime";
// import "lodash-es";

// import { sleep, fetchData } from "./js/utils";

// // function sleep(time = 1) {
// //   return new Promise((resolve) => {
// //     setTimeout(() => {
// //       resolve("done");
// //     }, time * 1000);
// //   });
// // }

// // async function fetchData(url: string) {
// //   return (await fetch(url)).json();
// // }

// const h2 = createTitle("hello webpack");
// const img = createImg();

// document.body.appendChild(h2);
// document.body.appendChild(img);

// sleep(2);
// // sleep().then(console.log);

// // fetchData(
// //   "/api/sugrec?type=3&prod=his&pic=1&from=wise_web&lid=2877715357&ishome=1&net=1&islogin=0&hissid=110085,189755,194530,202012,204912,205168,209568,210323,211435,211986,212296,213031,213356,214801,215727,216207,216845,216942,218548,219244,219559,219623,219743,219943,219946,220071,220609,221121,221410,221478,221502,221679,221916,222298,222397,222468,222522,222625,223064,223209,223374,223683,224045,224049,224080,224114,224320,224436,224456,224632,224754,224877,224981,225245,225335,225564,225594,225608,225733,225847,225859,226014,226051,226088,226125,226274,226286,226295,226333,226504,226576,226587,226589,226598,226620,226627,226673,226718,226755,227061,227065,227086,227156,227214,227370,227427,227490,227515,227529,227539,227614,227747,227864,227896,227933,227978,228032,228052,228373,228504,228508,228571,228575,228670,228832,228964&lid=2877715357&_=1663126014882"
// // )
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .catch(console.log);

import { createApp } from 'vue'
import App from './VueApp/App.vue'
import router from './VueApp/router'

createApp(App).use(router).mount('#app-vue')

console.log('111')
