
<template>
  <main>
    <div id="tableViewDiv">
      <div>
        <button v-for="text in buttonExample" :key="text" @click="viewControler" class="finTableViewButton">{{text}}</button>
      </div>
      <div id="tableViewBtn">
        <router-link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 490 490" style="width:25px; height:25px;" xml:space="preserve">
          <g>
            <path d="M16.822,284.968h39.667v158.667c0,9.35,7.65,17,17,17h116.167c9.35,0,17-7.65,17-17V327.468h70.833v116.167    c0,9.35,7.65,17,17,17h110.5c9.35,0,17-7.65,17-17V284.968h48.167c6.8,0,13.033-4.25,15.583-10.483    c2.55-6.233,1.133-13.6-3.683-18.417L260.489,31.385c-6.517-6.517-17.283-6.8-23.8-0.283L5.206,255.785    c-5.1,4.817-6.517,12.183-3.967,18.7C3.789,281.001,10.022,284.968,16.822,284.968z M248.022,67.368l181.333,183.6h-24.367    c-9.35,0-17,7.65-17,17v158.667h-76.5V310.468c0-9.35-7.65-17-17-17H189.656c-9.35,0-17,7.65-17,17v116.167H90.489V267.968    c0-9.35-7.65-17-17-17H58.756L248.022,67.368z"/>
          </g>
        </svg>
        </router-link>
        <router-link to="/Removed">
          <svg  id="garbageBin" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 800 800" style="width:25px; height:25px;" xml:space="preserve">
            <g>
              <path d="M648.587,99.881H509.156C500.276,43.486,452.761,0,394.444,0S287.696,43.486,279.731,99.881H142.315   c-26.733,0-48.43,21.789-48.43,48.43v49.437c0,24.719,17.761,44.493,41.564,47.423V727.64c0,35.613,28.655,64.268,64.268,64.268   h392.475c35.613,0,64.268-28.655,64.268-64.268V246.087c23.711-3.937,41.564-23.711,41.564-47.423v-49.437   C697.017,121.67,675.228,99.881,648.587,99.881z M394.444,36.62c38.543,0,70.219,26.733,77.085,63.261H316.351   C324.225,64.268,355.901,36.62,394.444,36.62z M618.924,728.739c0,14.831-11.901,27.648-27.648,27.648H198.71   c-14.831,0-27.648-11.901-27.648-27.648V247.185h446.948v481.554H618.924z M660.397,197.748c0,6.958-4.944,11.902-11.902,11.902   H142.223c-6.958,0-11.902-4.944-11.902-11.902v-49.437c0-6.958,4.944-11.902,11.902-11.902h505.265   c6.958,0,11.901,4.944,11.901,11.902v49.437H660.397z M253.09,661.45V349.081c0-9.887,7.873-17.761,17.761-17.761   s17.761,7.873,17.761,17.761V661.45c0,9.887-7.873,17.761-17.761,17.761C260.964,680.309,253.09,671.337,253.09,661.45z    M378.606,661.45V349.081c0-9.887,7.873-17.761,17.761-17.761c9.887,0,17.761,7.873,17.761,17.761V661.45   c0,9.887-7.873,17.761-17.761,17.761C386.57,680.309,378.606,671.337,378.606,661.45z M504.212,661.45V349.081   c0-9.887,7.873-17.761,17.761-17.761s17.761,7.873,17.761,17.761V661.45c0,9.887-7.873,17.761-17.761,17.761   C513.093,680.309,504.212,671.337,504.212,661.45z"/>
            </g>
          </svg>
        </router-link>
        <router-link to="/FinTable">
          <svg width="25" height="25" viewBox="0 0 490 490" id="svg2"  xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" inkscape:version="0.91 r" sodipodi:docname="anydo.svg" inkscape:export-filename="/home/alecive/Scrivania/firefoxTest1.png" inkscape:export-xdpi="100" inkscape:export-ydpi="100">
            <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="0.6485915" inkscape:cx="314.02181" inkscape:cy="169.95964" inkscape:document-units="px" inkscape:current-layer="svg2" showgrid="false" inkscape:window-width="1366" inkscape:window-height="744" inkscape:window-x="0" inkscape:window-y="24" inkscape:window-maximized="1" inkscape:object-paths="false" inkscape:snap-intersection-paths="false" inkscape:object-nodes="true" inkscape:snap-smooth-nodes="true" inkscape:snap-nodes="true"/>
            <defs id="defs4">
              <linearGradient x1="19.244999" y1="21.030804" x2="19.360001" gradientUnits="userSpaceOnUse" y2="44.984001" id="linearGradient2460">
                <stop offset="0" style="stop-color:#00bdf0;stop-opacity:1;" id="stop3602"/>
                <stop offset="1" style="stop-color:#0093dc;stop-opacity:1;" id="stop3604"/>
              </linearGradient>
              <linearGradient inkscape:collect="always" xlink:href="#ButtonShadow-0-1-1-5-9" id="linearGradient4114-2-6" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.0317796,0,0,1.0317796,-830.86406,592.67791)" x1="1012.5133" y1="484.41721" x2="1006.8082" y2="20.625916"/>
              <linearGradient x1="45.447727" y1="92.539597" x2="45.447727" y2="7.0165396" id="ButtonShadow-0-1-1-5-9" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.0058652,0,0,0.994169,100,0)">
                <stop id="stop3750-8-9-3-6-4" style="stop-color:#000000;stop-opacity:1" offset="0"/>
                <stop id="stop3752-5-6-4-2-9" style="stop-color:#000000;stop-opacity:0.58823532" offset="1"/>
              </linearGradient>
              <linearGradient inkscape:collect="always" xlink:href="#ButtonShadow-0-1-1-5-9" id="linearGradient4112-2-6" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.0402541,0,0,1.0402541,-837.95116,592.51825)" x1="1012.5133" y1="484.41721" x2="1006.8082" y2="20.625916"/>
              <linearGradient inkscape:collect="always" xlink:href="#ButtonShadow-0-1-1-5-9" id="linearGradient4110-6-7" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.023305,0,0,1.023305,-823.77704,592.83757)" x1="1012.5133" y1="484.41721" x2="1006.8082" y2="20.625916"/>
              <linearGradient inkscape:collect="always" xlink:href="#ButtonShadow-0-1-1-5-9" id="linearGradient4116-6-3" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.0148305,0,0,1.0148305,-816.68996,592.99723)" x1="1012.5133" y1="484.41721" x2="1006.8082" y2="20.625916"/>
              <linearGradient y2="20.625916" x2="1006.8082" y1="484.41721" x1="1012.5133" gradientTransform="matrix(1.0074153,0,0,1.0074153,-810.48879,593.1369)" gradientUnits="userSpaceOnUse" id="linearGradient5342-3" xlink:href="#ButtonShadow-0-1-1-5-9" inkscape:collect="always"/>
              <linearGradient inkscape:collect="always" xlink:href="#linearGradient3737-9" id="linearGradient4084-8" gradientUnits="userSpaceOnUse" gradientTransform="translate(778.59979,-360.55963)" x1="993.43896" y1="51.511765" x2="988.78552" y2="363.73825"/>
              <linearGradient id="linearGradient3737-9">
                <stop id="stop3739-7" style="stop-color:#ffffff;stop-opacity:1" offset="0"/>
                <stop id="stop3741-4" style="stop-color:#ffffff;stop-opacity:0" offset="1"/>
              </linearGradient>
              <linearGradient inkscape:collect="always" xlink:href="#linearGradient4046-3" id="linearGradient4086-12" gradientUnits="userSpaceOnUse" x1="1764.6487" y1="155.59685" x2="1763.6903" y2="-55.941216"/>
              <linearGradient id="linearGradient4046-3">
                <stop id="stop4048-7" style="stop-color:#000000;stop-opacity:1;" offset="0"/>
                <stop id="stop4050-73" style="stop-color:#ffffff;stop-opacity:0.2" offset="1"/>
              </linearGradient>
              <linearGradient y2="32" x2="272" y1="288" x1="272" gradientTransform="translate(0,-4)" gradientUnits="userSpaceOnUse" id="linearGradient3876" xlink:href="#outerBackgroundGradient" inkscape:collect="always"/>
              <linearGradient id="outerBackgroundGradient">
                <stop id="stop3864-8-6" offset="0" style="stop-color:#007dbb;stop-opacity:1;"/>
                <stop id="stop3866-9-1" offset="1" style="stop-color:#00abd7;stop-opacity:1;"/>
              </linearGradient>
              <linearGradient inkscape:collect="always" xlink:href="#outerBackgroundGradient" id="linearGradient5589" gradientUnits="userSpaceOnUse" gradientTransform="translate(571.12383,-178.05409)" x1="272" y1="288" x2="272" y2="32"/>
              <linearGradient y2="32" x2="272" y1="288" x1="272" gradientTransform="translate(571.12383,-178.05409)" gradientUnits="userSpaceOnUse" id="linearGradient5614" xlink:href="#outerBackgroundGradient" inkscape:collect="always"/>
              <radialGradient gradientUnits="userSpaceOnUse" r="236" fy="151.78598" fx="256" cy="151.78598" cx="256" id="radialGradient6124" xlink:href="#linearGradient2460" inkscape:collect="always"/>
              <linearGradient inkscape:collect="always" xlink:href="#linearGradient3737-9" id="linearGradient7749" gradientUnits="userSpaceOnUse" gradientTransform="translate(778.59979,-360.55963)" x1="993.43896" y1="51.511765" x2="988.78552" y2="363.73825"/>
              <linearGradient inkscape:collect="always" xlink:href="#linearGradient4046-3" id="linearGradient7751" gradientUnits="userSpaceOnUse" x1="1764.6487" y1="155.59685" x2="1763.6903" y2="-55.941216"/>
              <linearGradient inkscape:collect="always" xlink:href="#linearGradient2460-9" id="linearGradient3157" gradientUnits="userSpaceOnUse" gradientTransform="matrix(12.102564,0,0,12.102564,-34.468255,-46.187105)" x1="18.930269" y1="6.2951212" x2="19.360001" y2="36.643665"/>
              <linearGradient id="linearGradient2460-9" y2="44.984001" gradientUnits="userSpaceOnUse" x2="19.360001" y1="21.030804" x1="19.244999">
                <stop id="stop3602-6" style="stop-color:#fafafa;stop-opacity:1;" offset="0"/>
                <stop id="stop3604-4" style="stop-color:#f0f0f0;stop-opacity:1;" offset="1"/>
              </linearGradient>
              <radialGradient gradientUnits="userSpaceOnUse" r="236" fy="151.78598" fx="256" cy="151.78598" cx="256" id="radialGradient6124-5" xlink:href="#linearGradient2460-7" inkscape:collect="always"/>
              <linearGradient x1="19.244999" y1="21.030804" x2="19.360001" gradientUnits="userSpaceOnUse" y2="44.984001" id="linearGradient2460-7">
                <stop offset="0" style="stop-color:#00bdf0;stop-opacity:1;" id="stop3602-2"/>
                <stop offset="1" style="stop-color:#0093dc;stop-opacity:1;" id="stop3604-5"/>
              </linearGradient>
              <radialGradient gradientTransform="translate(-20,-20)" r="236" fy="151.78598" fx="256" cy="151.78598" cx="256" gradientUnits="userSpaceOnUse" id="radialGradient8295" xlink:href="#linearGradient2460-7" inkscape:collect="always"/>
              <linearGradient y2="363.73825" x2="988.78552" y1="51.511765" x1="993.43896" gradientTransform="translate(778.59979,-360.55963)" gradientUnits="userSpaceOnUse" id="linearGradient4084-8-0" xlink:href="#linearGradient3737-9-9" inkscape:collect="always"/>
              <linearGradient id="linearGradient3737-9-9">
                <stop offset="0" style="stop-color:#ffffff;stop-opacity:1" id="stop3739-7-4"/>
                <stop offset="1" style="stop-color:#ffffff;stop-opacity:0" id="stop3741-4-1"/>
              </linearGradient>
              <linearGradient y2="-55.941216" x2="1763.6903" y1="155.59685" x1="1764.6487" gradientUnits="userSpaceOnUse" id="linearGradient4086-12-7" xlink:href="#linearGradient4046-3-0" inkscape:collect="always"/>
              <linearGradient id="linearGradient4046-3-0">
                <stop offset="0" style="stop-color:#000000;stop-opacity:1;" id="stop4048-7-4"/>
                <stop offset="1" style="stop-color:#ffffff;stop-opacity:0.2" id="stop4050-73-8"/>
              </linearGradient>
            </defs>
            <metadata id="metadata7">
              <rdf:RDF>
                <cc:Work rdf:about="">
                  <dc:format>image/svg+xml</dc:format>
                  <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
                  <dc:title/>
                </cc:Work>
              </rdf:RDF>
            </metadata>
            <g id="layer1" inkscape:groupmode="layer" inkscape:label="Livello 1" transform="translate(0,-540.36218)"/>
            <g id="g2036" transform="matrix(1.1,0,0,0.44444,95.081063,256.39254)">
              <g id="g3712" style="opacity:0.4" transform="matrix(1.0526,0,0,1.2857,-1.2632,-13.429)"/>
            </g>
            <g transform="translate(97.481063,231.28154)" id="g3541"/>
            <g transform="translate(97.481063,231.28154)" id="g3536"/>
            <g id="g4103" transform="translate(-11.985071,-592.11719)"/>
            <g id="g4076" transform="translate(-605.51932,-353.96833)">
              <g transform="translate(-926.66758,684.38448)" id="g4038"/>
            </g>
            <rect style="fill:#55d400;fill-opacity:1;stroke:none" id="rect3069" width="444.03912" height="434.14014" x="35.461464" y="38.39838" ry="45.859875"/>
            <path style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:Sans;-inkscape-font-specification:Sans;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;display:inline;overflow:visible;visibility:visible;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:17.73212814;marker:none;enable-background:new" d="m 347.51713,165.87342 -120.28026,120.21711 -54.0472,-53.73149 -25.2557,25.38197 c 26.4783,26.30612 52.9052,52.66399 79.42917,78.92405 48.49095,-48.49094 96.98188,-96.98187 145.47282,-145.47281 z" id="path3851" inkscape:connector-curvature="0" sodipodi:nodetypes="ccccccc"/>
          </svg>
        </router-link>
      </div>
    </div>
    <router-view :bodyClicked="bodyClicked"></router-view>
  </main>
</template>

<script>

import myMixin from "../mixins/mixins"

export default {
  name: 'Main',
  data: function() {
    return {
      buttonExample :["①", "②", "all"],
      tempData: null,
      presentView : "home"
    }
  },
  mixins :[myMixin],
  props:{
    bodyClicked : null
  },
  mounted(){
    this.$store.dispatch("init")
  },
  watch : {
    bodyClicked(){
      const selectedTD = this.tempData
      if(selectedTD){
        const targetRegiDiv = selectedTD.querySelector(".showDiv")
        const targetRegiInputDiv = selectedTD.querySelector(".inputDiv")
        targetRegiInputDiv.style.display="none";
        targetRegiDiv.style.display="block";
        this.tempData = null;
      }
    }
  },
}

</script>

<style>

main{
  margin: 0.5vw;
  padding-top: 0;
  text-align:left;
}

#tableViewDiv{
  display: flex;
  padding:0 20px 0 10px;
  justify-content: space-between;
}

.finTableViewButton{
  margin : 0 0.1vh 0 0.1vh;
}

</style>