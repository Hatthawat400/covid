<template>
  <div>
    <input type="text" v-model="textSearch" />
    <button @click="getitem()">Search</button>

    <b-container class="vb-row">
      <b-row align-h="around">
        <b-card id="cov">
          <div class="mb-4">
            <img :src="flag" alt="" /><br />
          </div>
          ประชากร :{{ population }}คน  ทวีป:{{ continent }} 
          กรณีผู้ติดเชื่อ :{{ cases }}ราย   กรณีผู้ติดเชื่อในวันนี้:{{ todayCases }}ราย
          ผู้เสียชีวิต:{{ deaths }}ราย<br />
          หายเป็นปกติแล้ว:{{ recovered }}ราย  อาการวิกฤต:{{ critical }}ราย
          กรณีผู้ติดเชื่อต่อหนึ่งล้าน:{{ casesPerOneMillion }}  
          ผู้เสียชีวิตต่อหนึ่งล้าน:{{ deathsPerOneMillion }} 
          กู้ชีวิตคืนต่อล้าน:{{ recoveredPerOneMillion }}% <br />
          อาการวิกฤตต่อล้าน:{{ criticalPerOneMillion }}% <br />
          <br />
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      textSearch: null,
      cases: "",
      todayCases: "",
      deaths: "",
      recovered: "",
      critical: "",
      casesPerOneMillion: "",
      deathsPerOneMillion: "",
      population: "",
      continent: "",
      recoveredPerOneMillion: "",
      criticalPerOneMillion: "",
      countryInfo: "",
      flag: "",
    };
  },
  methods: {
    getitem() {
      axios;
      axios
        .get("https://corona.lmao.ninja/v2/countries/" + this.textSearch)
        .then((res) => {
          this.resultData = res.data.results;
          this.cases = res.data.cases;
          this.todayCases = res.data.todayCases;
          this.deaths = res.data.deaths;
          this.recovered = res.data.recovered;
          this.critical = res.data.critical;
          this.casesPerOneMillion = res.data.casesPerOneMillion;
          this.deathsPerOneMillion = res.data.deathsPerOneMillion;
          this.population = res.data.population;
          this.continent = res.data.continent;
          this.recoveredPerOneMillion = res.data.recoveredPerOneMillion;
          this.criticalPerOneMillion = res.data.criticalPerOneMillion;
          this.countryInfo = res.data.countryInfo;
          this.flag = res.data.countryInfo.flag;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
<style>
#cov {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1b1919;
  margin-top: 60px;
  background-color: rgb(253, 250, 250);
}
</style>