<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div id="app">
    <v-app>
      <div class="container">
        <div class="watch-container">
        <svg height="100%" width="100%" viewBox="-60 -80 120 160" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <pattern id='inner-pattern' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='rotate(45) scale(.06)'><rect filter="url(#bevel)" :fill="settings.dialColor" x="1" y="1" width="38" height="38" /></pattern>
            <linearGradient id="metal">
              <stop stop-color="hsla(0, 0%, 90%, .4)" offset="0%" />
              <stop stop-color="hsla(0, 0%, 100%, .4)" offset="40%"/>
              <stop stop-color="hsla(0, 0%, 95%, .4)" offset="50%" />
              <stop stop-color="hsla(0, 0%, 20%, .4)" offset="60%"/>
              <stop stop-color="hsla(0, 0%, 50%, .3)" offset="100%" />
            </linearGradient>
            <linearGradient id="metal-2" x1="0" x2="1" y1="0" y2="1">
              <stop stop-color="hsla(0, 0%, 0%, .4)" offset="0%" />
              <stop stop-color="hsla(0, 0%, 100%, .4)" offset="40%"/>
              <stop stop-color="hsla(0, 0%, 100%, .4)" offset="50%" />
              <stop stop-color="hsla(0, 0%, 84%, .4)" offset="60%"/>
              <stop stop-color="hsla(0, 0%, 63%, .4)" offset="100%" />
            </linearGradient>
            <linearGradient id="black-grd">
              <stop stop-color="rgb(100, 100, 100)" offset="20%"/>
              <stop stop-color="rgb(140, 140, 140)" offset="60%"/>
            </linearGradient>
            <linearGradient id="text" gradientTransform="rotate(95)">
              <stop offset="5%"  stop-color="hsla(0, 0%, 95%, 0)" />
              <stop offset="40%" stop-color="hsla(0, 0%, 50%, 0)" />
              <stop offset="50%" stop-color="hsla(0, 0%, 50%, .3)" />
              <stop offset="100%" stop-color="hsla(0, 0%, 0%, .3)" />
            </linearGradient>
            <radialGradient id="center" fx=".5" fy=".05">
              <stop offset="30%" stop-color="rgb(100,100,100)" />
              <stop offset="99%" stop-color="rgb(40,40,40)" />
              <stop offset="100%" stop-color="rgb(20,20,20)" />
            </radialGradient>
            <radialGradient id="dial-bg" fx=".5" fy=".05">
              <stop offset="0%" stop-color="hsl(0, 0%, 85%)" />
              <stop offset="60%" stop-color="hsl(0, 0%, 45%)" />
              <stop offset="97%" stop-color="hsl(0, 0%, 60%)" />
              <stop offset="100%" stop-color="hsl(0, 0%, 0%)" />
            </radialGradient>
            <radialGradient id="glass" fx=".5" fy=".05" gradientTransform="rotate(1)">
              <stop offset="0%" stop-color="white" stop-opacity=".5"/>
              <stop offset="10%" stop-color="white" stop-opacity=".4"/>
              <stop offset="50%" stop-color="white" stop-opacity=".3"/>
              <stop offset="60%" stop-color="white" stop-opacity=".1"/>
            </radialGradient>
            <filter id="inset-shadow">
              <feOffset dx=".5" dy=".5"/>
              <feGaussianBlur stdDeviation=".4"  result="offset-blur"/>
              <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"/>
              <feFlood flood-color="black" flood-opacity="1" result="color"/>
              <feComposite operator="in" in="color" in2="inverse" result="shadow"/>
              <feComponentTransfer in="shadow" result="shadow">
              <feFuncA type="linear" slope=".75"/>
              </feComponentTransfer>
            </filter>
            <filter id="shadow">
              <feDropShadow dx="0" dy="0" stdDeviation=".2"
              flood-color="black" flood-opacity="1"/>
            </filter>
            <filter id="text-shadow">
              <feDropShadow dx=".2" dy=".2" stdDeviation=".2"
              flood-color="black" flood-opacity="1"/>
            </filter>
            <filter id='inner-shadow'>
              <feOffset dx='0' dy='2'/>
              <feGaussianBlur stdDeviation='.4' result='offset-blur' />
              <feComposite operator='out' in='SourceGraphic' in2='offset-blur' result='inverse' />
              <feFlood flood-color='black' flood-opacity='.5' result='color' />
              <feComposite operator='in' in='color' in2='inverse' result='shadow' />
              <feComposite operator='over' in='shadow' in2='SourceGraphic' />
            </filter>
            <filter id="bevel" filterUnits="objectBoundingBox" x="-10%" y="-10%" width="150%" height="150%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" result="blur"/>
              <feSpecularLighting in="blur" surfaceScale="45" specularConstant="0.5" specularExponent="10" result="specOut" lighting-color="white">
              <fePointLight x="-5000" y="-10000" z="0000"/>
              </feSpecularLighting>
              <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut2"/>
              <feComposite in="SourceGraphic" in2="specOut2" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint" />
            </filter>
             <filter id="case-bevel" filterUnits="objectBoundingBox" x="-10%" y="-10%" width="150%" height="150%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur"/>
              <feSpecularLighting in="blur" surfaceScale="45" specularConstant="0.5" specularExponent="10" result="specOut" lighting-color="white">
              <fePointLight x="-5000" y="-10000" z="0000"/>
              </feSpecularLighting>
              <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut2"/>
              <feComposite in="SourceGraphic" in2="specOut2" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint" />
            </filter>
      </defs>
          <g id="strap-holder-base" :stroke="settings.caseColor">
            <line x1="-20" y1="54" x2="-25" y2="42" class="strap-holder"/>
            <line x1="20" y1="54" x2="25" y2="42" class="strap-holder" />
            <line x1="-20" y1="-54" x2="-25" y2="-42" class="strap-holder" />
            <line x1="20" y1="-54" x2="25" y2="-42" class="strap-holder" />
          </g>
          <g id="strap-holder" stroke="url(#metal)">
            <line x1="-20" y1="54" x2="-25" y2="42" class="strap-holder"/>
            <line x1="20" y1="54" x2="25" y2="42" class="strap-holder" />
            <line x1="-20" y1="-54" x2="-25" y2="-42" class="strap-holder" />
            <line x1="20" y1="-54" x2="25" y2="-42" class="strap-holder" />
          </g>
          <g id="main-dial">
            <circle r="50" class="shadow" />
            <circle r="50" class="case" :fill="settings.caseColor" />
            <circle r="43.6" class="edge" />
            <circle r="43" :fill="settings.ringColor" stroke="rgb(255,255,255)" stroke-width=".05" />
            <circle id="dial-main" r="34" :fill="settings.dialColor" :stroke="settings.accentColor" stroke-width="2" />
            <circle id="dial-overlay" opacity="0.3" r="34" class="inner" :stroke="settings.accentColor" stroke-width="2" />
            <circle id="dial-pattern" r="34" class="pattern" opacity="1"/>
            <circle r="45" cx="0" cy="0" stroke="hsl(0, 0%, 40%)" fill="transparent" stroke-width=".3"/>
            <circle r="46" cx="0" cy="0" stroke="hsl(0, 0%, 40%)" fill="transparent" stroke-width=".3"/>
            <circle r="42" cx="0" cy="0" stroke="hsl(0, 0%, 70%)" fill="transparent" stroke-width=".3"/>
            <g id="text-group">
              <g id="text-logo">
                <text x='0' y="-17.5" class="logo" :fill="settings.textColor" font-size="4.4" text-anchor="middle" dominant-baseline="middle">
                  {{settings.logoText}}
                </text>
                <text x='0' y="-17.5" class="logo" font-size="4.4" text-anchor="middle" dominant-baseline="middle" fill="url(#text)">
                  {{settings.logoText}}
                </text>
                <text x='0' y="22" class="logo" font-size="3.5" text-anchor="middle" dominant-baseline="middle" :fill="settings.textColor">
                  {{settings.subTitle}}
                </text>
                <text x='0' y="22" class="logo" font-size="3.5" text-anchor="middle" dominant-baseline="middle" fill="url(#text)">
                  {{settings.subTitle}}
                </text>
              </g>
              <g id="hour-markers-group" v-for="(hour, i) in hours" :key="'hour' + i">
              <text class="hour-marker text-middle"  :fill="settings.textColor" :transform="hour.transform" :font-size="hour.fontSize" :x="hour.x" :y="hour.y" :class="{'hour-lg': hour.lg, 'hour-sm': !hour.lg}">{{hour.no}}</text>
              <text class="hour-marker text-middle" fill="url(#text)" :transform="hour.transform" :font-size="hour.fontSize" :x="hour.x" :y="hour.y" :class="{'hour-lg': hour.lg, 'hour-sm': !hour.lg}">{{hour.no}}</text>
              </g>
            </g>
          </g>
          <g id="day-window">
            <rect rx="1" x="15" y="-2.5" width="10" height="5" :fill="settings.ringColor" stroke="hsl(0, 10%,100%)" stroke-width=".2" />
            <rect filter="url(#inset-shadow)" rx="1" x="15" y="-2.5" width="10" height="5" stroke="hsl(0, 10%,100%)" stroke-width=".3" />
            <text x="20" y="0.4" text-anchor="middle" stroke="black" stroke-width=".1" dominant-baseline="middle" :fill="settings.textColor" font-size="4" opacity=".7">
              {{day}}
            </text>
          </g>
          <g id="month-window">
            <rect rx="1" x="-25" y="-2.5" width="10" height="5" :fill="settings.ringColor" stroke="hsl(0, 10%,100%)" stroke-width=".2" />
            <rect filter="url(#inset-shadow)" rx="1" x="-25" y="-2.5" width="10" height="5" fill="hsl(0, 0%, 90%)" stroke="hsl(0, 10%,100%)" stroke-width=".3" />
            <text x="-20" y="0.4" text-anchor="middle" stroke="black" stroke-width=".1" dominant-baseline="middle" :fill="settings.textColor" font-size="4" opacity=".7">
              {{month}}
            </text>
          </g>
          <g id="second-markers" :stroke="settings.accentColor">
            <circle r="32" cx="0" cy="0" fill="transparent" stroke-width=".3"/>
            <line stroke-width=".3" v-for="(line, i) in secondMarkers" :key="'sec-mark' + i" :x1="line.x1" :x2="line.x2" :y1="line.y1" :y2="line.y2" />
          </g>
          <g id="hands">

            <path :transform="minuteTransform" d="m -1.9029188,2.6786307 1.05035843,-30.5378067 0.23166124,-2.305288 0.62415554,-1.718394 0.58104069,1.664668 v 0 L 0.78426713,-27.792274 1.7282413,2.6988018 0.76131557,4.5824873 -0.65976832,4.5329735 Z" class="hand" :fill="settings.handsColor" />
            <path :transform="hourTransform" d="M -0.86211465,3.9294075 -1.7118583,0.32153764 -0.78462979,-20.396764 0.067434,-22.039305 0.9269398,-20.40438 1.7162585,0.38986601 0.92953939,3.9294075 Z" class="hand" :fill="settings.handsColor" />
            <path :transform="secondTransform" d="M -0.8284687,5.0671531 -1.2593423,0.05205733 C -0.54122683,-11.138776 -0.58732628,-23.886588 0,-35.240256 0.37651284,-23.760166 0.88174427,-10.745139 1.0788727,-0.01837387 1.1977492,1.5618755 0.69481015,3.4808873 0.69416244,5.0525592 Z" :fill="settings.accentColor" class="hand second-hand"/>
            <circle r="1" :fill="settings.accentColor" filter="url(#shadow)" />
          </g>
          <g id="glass">
            <circle r="45" class="glass" opacity=".5" />
          </g>
          <g id="knob">
            <rect x="50" y="-6" height="12" width="5.5" :fill="settings.caseColor" rx="2" ry="2"/>
            <rect x="50" y="-6" height="12" width="5.5" class="knob" rx="2" ry="2" fill="url(#metal-2)"/>
            <g stroke="hsl(0,0%,30%, .4)">
              <line x1="51.5" x2="51.5" y1="-6" y2="6" stroke-width=".4"/>
              <line x1="52" x2="52" y1="-6" y2="6" stroke-width=".4"  />
              <line x1="52.5" x2="52.5" y1="-6" y2="6" stroke-width=".4" />
              <line x1="53" x2="53" y1="-6" y2="6" stroke-width=".4" />
              <line x1="53.5" x2="53.5" y1="-6" y2="6" stroke-width=".4" />
              <line x1="54" x2="54" y1="-6" y2="6" stroke-width=".4" />
            </g>
          </g>
        </svg>
        </div>
        <div class="menu">
          <v-menu
          top
          :close-on-content-click="false"
          v-for="colorPicker,index in colorPickers"
          :key="index + '-color-picker'"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              class="menu-items"
              :style="{borderColor: settings[colorPicker.name]}"
              dark
              v-bind="attrs"
              v-on="on"
              elevation="0"
            >
              {{colorPicker.title}}
            </v-btn>
          </template>
          <v-card>
            <v-color-picker
            v-model="settings[colorPicker.name]"
            dot-size="25"
            swatches-max-height="200"
          ></v-color-picker>
          </v-card>
        </v-menu>
        </div>
      </div>
    </v-app>
  </div>
</template>

<script>

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = function (callback) {
    return window.setTimeout(function () {
      callback(Date.now());
    }, 1000 / 60);
  };
}

const map = function (val, in_min, in_max, out_min, out_max) {
  return (val - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
export default {
  vuetify: new Vuetify(),
  mounted() {
    this.startDrawing()
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  data() {
    return {
      interval: null,
      time: new Date(),
      hourMarkers: [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      textRadius: 38.4,
      colorPickers: [
        {title: "Text", name: "textColor"},
        {title: "Accent", name: "accentColor"},
        {title: "Inner Dial", name: "dialColor"},
        {title: "Outer Dial", name: "ringColor"},
        {title: "Hands", name: "handsColor"},
        {title: "Case", name: "caseColor"}
      ],
      settings: {
        textColor: "white",
        accentColor: "#6CC417",
        dialColor: "black",
        ringColor: "black",
        handsColor: "white",
        caseColor: "rgb(40,40,40)",
        logoText: "EPOCH & CO.",
        subTitle: "Automatic"
      }
    };
  },
  methods: {
    startDrawing() {
      this.time = new Date()
      window.requestAnimationFrame(this.startDrawing)
    }
  },
  computed: {
    month() {
      let monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      return monthNames[this.time.getMonth()].slice(0,3).toUpperCase()
    },
    day() {
      return this.time.getDate()
    },
    hourTransform() {
      const rotation = (this.time.getHours() % 12) * 30 + this.time.getMinutes() /2
      return `rotate(${rotation})`
    },
    minuteTransform() {
       return `rotate(${this.time.getMinutes()*6})`
    },
    secondTransform() {
      const mill = this.time.getMilliseconds() / 1000
      return `rotate(${(this.time.getSeconds() + mill)*6})`
    },
    hours() {
      const len = this.hourMarkers.length
      const slice = (Math.PI * 2) / len
      const r = this.textRadius
      return this.hourMarkers.map((hr, index) => {
        const lg = index % 3 === 0;
        const fontSize = lg? 6:4;
        const offSet = 0;
        const x = Math.sin(slice * index) * (r + offSet)
        const y = Math.cos(slice * index  + Math.PI) * (r + offSet)
        return {
          x, y, no: hr, lg, fontSize
        }
      })
    },
    secondMarkers() {
      return [...Array(60).keys()].map(index => {
        const s = Math.sin((Math.PI * 2 / 60) * index)
        const c = Math.cos((Math.PI * 2 / 60) * index)
        const lg = index % 5 === 0
        const outerR = 32
        const innerR = lg? 29.5: 31
        return {
          x1: s * outerR,
          x2: s * innerR,
          y1: c * outerR,
          y2: c * innerR
        }
      })
    }
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style>
  #app {
    width: 100%;
    height:100%;
    position:fixed;
    top:0px;
    left:0px;
background: #000000;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #242424, #000000);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #242424, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }
  .container {
    height: 100%;
    width: 100%;
    background:rgb(20,20,20);
    display:flex;
    justify-content:space-between;
    align-items: middle;
  }
  .watch-container {
    flex-grow:12;
  }
@media only screen and (max-width: 600px) {
  .menu {
    position:fixed;
    bottom:0px;
    left:0px;
    width: 100%;
    background: rgba(30,30,30,.3);
    border-top: 2px solid green;
  }
  .menu-items {
    margin: 0px;
    padding: 0px;
    border-bottom: 2px solid green;
    padding-right: 5px;
    font-size: .8em !important;

  }
}
@media only screen and (min-width: 601px) {
  .menu {
    width: 150px;
    border-left: 2px solid green;
  }
  .menu-items {
    width: 100%;
    margin: 0px;
    padding: 0px;
    display:inline block;
    border-bottom: 2px solid green;
  }
}
  .edge {
    filter: url(#bevel);
    fill: url(#black-grd);
  }
  .inner {
    filter: url(#inner-shadow);
    fill: url(#dial-bg);
  }
  .shadow {
    filter: url(#shadow);
  }
  .hour-lg {
    font-weight: 100;
  }
  .hour-sm {
    font-weight: 100;
  }
  .text-middle {
    text-anchor:middle;
    dominant-baseline:middle;
  }
  .hour-marker {
    filter: url(#text-shadow);
    font-family: 'Gideon Roman';
    user-select:none;
  }
  .logo {
    filter: url(#text-shadow);
    font-family: 'Gideon Roman';
    user-select:none;
  }
  .pattern {
    fill: url(#inner-pattern)
  }
  .glass {
    fill: url(#glass);
  }
  .hand {
    filter: drop-shadow(0px 1px 0px rgb(0,0,0,.5));
  }
  .case {
    filter: url(#case-bevel);
  }
  .strap-holder {
    stroke-width: 5;
    filter: url(#case-bevel);
    stroke-linecap:round;
  }
  .knob {

  }
  text {
    user-select:none;
  }
</style>