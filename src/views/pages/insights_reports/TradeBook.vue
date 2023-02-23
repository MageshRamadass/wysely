<template>
  <v-app>
    <v-container class="pa-0 pa-sm-3 pa-md-3">
      <div class="pt-16 pa-6 pa-sm-4 pa-md-4">
        <v-row>
          <v-col cols="12" sm="12" md="6">
            <v-row>
              <v-col cols="6">
                <p class="lstctntit headline mb-1">Tradebook</p>
              </v-col>
              <v-col cols="6" class="d-md-none text-right px-0">
                <v-btn style="text-transform: capitalize" class="elevation-0" small color="#F9FBFC">
                  <v-icon size="15">mdi-format-align-bottom</v-icon>Filter
                  actions
                </v-btn>
              </v-col>
            </v-row>

            <p class="body-1 mb-0 mb-sm-2 mb-md-2" color="#878B93">
              All your trade activity based on dates
            </p>
          </v-col>

          <v-col class="pr-0 pb-0 d-none d-md-flex" cols="6" sm="2" md="2">
            <div> <v-badge v-if="clientids.length > 1" bordered color="#FF8D24" :content="clientids.length - 1" overlap>
                <v-select v-model="clientidsindex" @change="selecttrade" :items="clientids"
                  append-icon="mdi-chevron-down" class="rounded-lg" color="gray" dense single-line return-object
                  outlined>
                </v-select>
              </v-badge>
              <div v-else-if="clientids.length == 0"></div>
              <v-select v-else v-model="clientidsindex" @change="selecttrade" :items="clientids"
                append-icon="mdi-chevron-down" class="rounded-lg" color="gray" dense single-line return-object outlined>
              </v-select>
            </div>
          </v-col>
          <v-col class="pr-3 pb-0 d-none d-md-flex" cols="6" sm="2" md="2">
            <v-text-field v-model="SymbolName" dense color="gray" outlined class="rounded-lg" label="Search symbol"
              prepend-inner-icon="mdi-magnify"></v-text-field>
          </v-col>
          <v-col class="pl-0 pb-0 d-none d-md-flex" cols="4" sm="2" md="2">
            <date-picker class="datepickersty" v-model="dates" range placeholder="Select date " :lang="lang"
              @change="getDate(), apicall()">
            </date-picker>
          </v-col>
        
        </v-row>

        <div>
          <v-card class="pa-4 elevation-0 rounded-lg " outlined>
            <div v-if="coractloader" class="py-10 px-16">
              <p class="pa-16 pb-0 text-center">Getting your trades</p>
              <v-card width="200px" class="elevation-0 mx-auto">
                <v-progress-linear class="mb-12" color="primary" indeterminate rounded height="6"></v-progress-linear>
              </v-card>
            </div>

            <div v-if="coractdata">
              <v-col class="d-flex pt-0" cols="12">
                <v-select solo dense :items="years" v-model="dateselect" flat item-value="dateselect" label="years"
                  type="number" hide-details @change="getcalendar" clearable>
                </v-select>
              </v-col>
              <v-row no-gutters>
                <v-col v-for="months in monthname" :key="months" class="p-0 m-0 d-flex justify-center">
                  {{ months.date }}
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col v-for="indata in values" v-bind:key="indata" class="pa-0 ma-0">
                  <div v-for="n in indata" v-bind:key="n" outlined class="pa-0 ma-0 " :data-index="n">
                    <div>
                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <div v-bind="attrs" v-on="on">
                            <v-card v-if="n.counts == 0" width="4px" class="colums" color="#E8EBED"
                              style="margin: 2px; padding: 6px" outlined tile>
                            </v-card>
                            <v-card v-else-if="n.counts < colormis" width="4px" class="colums" color="#cce1fa"
                              style="margin: 2px; padding: 6px" outlined tile>
                            </v-card>
                            <v-card v-else-if="n.counts < colormis * 2" width="4px" class="colums" color="#95bef3"
                              style="margin: 2px; padding: 6px" outlined tile>
                            </v-card>
                            <v-card v-else-if="n.counts < colormis * 3" width="4px" class="colums" color="#5c9ef1"
                              style="margin: 2px; padding: 6px" outlined tile>
                            </v-card>
                            <v-card v-else-if="n.counts > colormis * 3" width="4px" class="colums" color="#1877F2"
                              style="margin: 2px; padding: 6px" outlined tile>
                            </v-card>
                          </div>
                        </template>
                        <p class="mb-0 white--text">
                          <span class="font-weight-bold">{{ n.counts }} Trade </span>on
                          {{
                            new Date(n.dates).toLocaleDateString("en-us", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })
                          }}
                        </p>
                      </v-tooltip>
                    </div>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="9">
                </v-col>
                <v-col cols="3">
                  <p class="colums mb-0 body-2 pr-1">Low</p>
                  <v-card v-bind="attrs" v-on="on" width="4px" class="colums" color="#E8EBED"
                    style="margin: 2px; padding: 6px" outlined tile>
                  </v-card>
                  <v-card v-bind="attrs" v-on="on" width="4px" color="#cce1fa" class="colums"
                    style="margin: 2px; padding: 6px" outlined tile>
                  </v-card>
                  <v-card v-bind="attrs" v-on="on" width="4px" color="#95bef3" class="colums"
                    style="margin: 2px; padding: 6px" outlined tile>
                  </v-card>
                  <v-card v-bind="attrs" v-on="on" width="4px" color="#5c9ef1" class="colums"
                    style="margin: 2px; padding: 6px" outlined tile>
                  </v-card>
                  <v-card v-bind="attrs" v-on="on" width="4px" class="colums mr-1" color="#1877F2"
                    style="margin: 2px; padding: 6px" outlined tile>
                  </v-card>
                  <p class="mb-0 body-2">High</p>
                </v-col>
              </v-row>
            </div>

            <div v-if="nocoractdata" class="py-10">
              <p class="pa-16 text-center">No trades found</p>
            </div>
          </v-card>
        </div>

        <div class="mt-6">
          <v-row no-gutters>
            <v-col cols="8">
              <p class="body-1 mb-1" color="#878B93">
                Trade activity ({{ tradedetails.length }})
              </p>
            </v-col>
            <v-col cols="4" class="text-right">
           
            </v-col>
          </v-row>
          <div class="mb-4 oholdingheadsty">

            <v-data-table :loading="tradedetailsloader" mobile-breakpoint fixed-header :headers="holdinghead"
              ref="trddtils" :items="tradedetails" item-key="SymbolName" hide-default-footer
              style="border: 1px solid #efeef3" class="cliidsty elevation-0 rounded-lg" must-sort multi-sort
              :sort-by="['Trade_Date']" :sort-desc="[true]" :page.sync="page" :items-per-page="10"
              @page-count="pageCount = $event" group-by="SymbolName">
              <template v-slot:[`group.header`]="{ group, toggle, isOpen }">
                <td colspan="7">
                  {{ group }}
                  <v-btn @click="toggle" small icon :ref="group" :data-close="isOpen">
                    <v-icon v-if="isOpen">mdi-chevron-up</v-icon>
                    <v-icon v-else>mdi-chevron-down</v-icon>
                  </v-btn>
                </td>
              </template>
              <template v-slot:[`item.names`]="{ item }">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-regular">
                      {{ item.SymbolName }}
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-icon class="mb-1 mt-2">
                    <div v-if="item.Client_Code.slice(0, 1) == 'Z'">
                      <img style="border: 1px solid #efeef3" width="24px" class="pa-1 rounded"
                        src="@/assets/Ma_zebu.svg" alt="Ma_zebulogo" >
                    </div>
                    <div v-else>
                      <v-avatar tile size="32"><v-card class="elevation-0 pa-1" rounded outlined>
                          <span class="font-weight-bold">
                            {{ item.Client_Code.slice(0, 2) }}
                          </span>
                        </v-card></v-avatar>
                    </div>
                  </v-list-item-icon>
                </v-list-item>
              </template>
              <template v-slot:[`footer`]>
                <v-divider></v-divider>
                <div class="text-center py-2">
                  <v-pagination :total-visible="7" v-model="page" :length="pageCount"></v-pagination>
                </div>
              </template>
              <template v-slot:[`item.BuyOrSell`]="{ item }">
                <span class="font-weight-medium pa-2 rounded-lg" style="background-color: #eeffed; color: #34a853"
                  v-if="item.BuyOrSell == 'B'">Buy</span>
                <span class="font-weight-medium pa-2 rounded-lg" style="background-color: #ffeeee; color: #e12626"
                  v-else>Sell</span>
              </template>
              <template v-if="usernodata" v-slot:no-data>
                <v-col class="mx-auto pa-15">
                  <v-img class="align-self-stretch mx-auto" width="100px"
                    :src="require('@/assets/no data folder.svg')" />
                  <h4>No data available</h4>
                </v-col>
              </template>
            </v-data-table>
          </div>
        </div>
      </div>
    </v-container>
    <div>
      <v-snackbar style="z-index: 2 !important;" transition="slide-x-reverse-transition" v-model="snackbar"
        :timeout="2000" :value="true" color="warning" absolute outlined top right>
        <v-icon color="warning">mdi-alert-outline</v-icon>
        Session <strong>expired</strong> Kindly Login again.
      </v-snackbar>
    </div>
  </v-app>
</template>
 
<script>
import { apiurl } from "../../apiUrl";
import axios from "axios";
export default {
  data() {
    return {

      snackbar: false,
      page: 1,
      pageCount: 0,
      holdexpand: [],

      usertotaldata: true,
      usernodata: false,
      tradedetailsloader: true,
      downloadbtn: false,
      holdingdetails: [],
      dataget: [],
      tradedetails: [],
      lang: "en",
      namecontract: "",
      tradebookItems: [],
      tradebookdata: [],
      SymbolName: "",

      clientids: [
        'All'
      ],
      clientidsindex: '',
      emailDatafetch: [],

      database: [],
      data: [],
      values: [],
      dateselect: [],
      monthname: [],
      years: [],
      startDate: '',
      endDates: '',
      colormis: [],
      date: [],
      coractdata: false,
      nocoractdata: false,
      coractloader: true,
    };
  },

  methods: {

    checkClientSync() {
      let gauthclientseassion = localStorage.clientsessionstore
      let email = localStorage.getItem('decryptedstoredData')
      let data = JSON.stringify({
        email: email,
      });

      let config = {
        method: "post",
        url: `${apiurl}/syncEmailDetails`,
        headers: {
          "Content-Type": "application/json",
          'Authorization': gauthclientseassion
        },
        data: data,
      };
      let axiosThis = this;
      axios(config)
        .then(function (response) {
          if (response.data.msg == "Token is Expired." || response.data.msg == "Token is Invalid.") {
            axiosThis.snackbar = true;
            setTimeout(function () {
              axiosThis.$router.push("/signin");
            }, 2000);
          }
          axiosThis.emailDatafetch = response.data.Data;
          if (response.data.msg == 'No Email Sync data available for User') {
            axiosThis.printsumgetloader = false;
            axiosThis.usertotaldata = false;
            axiosThis.usernodata = true;
          }
          for (const element of axiosThis.emailDatafetch) {
            // let clientIds = element.clientID;
            axiosThis.clientids.push(element.clientID);
          }
          axiosThis.clientidsindex = axiosThis.clientids[0]
          axiosThis.selecttrade();
          axiosThis.selecttradedetails();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    selecttradedetails() {
      this.tradedetailsloader = true;
      this.tradedetails = [];
      let ids;
      if (this.clientidsindex == 'All') {
        ids = this.clientids.filter(function (e) { return e !== 'All' })
      } else {
        ids = [this.clientidsindex]
      }
      let data = JSON.stringify({
        "clientid": ids
      });
      var config = {
        method: "post",
        url: `${apiurl}/alltradedata`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };
      let axiosThis = this;
      axios(config)
        .then(function (response) {
          axiosThis.tradedetails = response.data.data_datawise
          if (response.data.total_data_datawise > 0) {
            axiosThis.tradedetailsloader = false;
          } else if (response.data.msg == "No Data Available") {
            axiosThis.usernodata = true;
            axiosThis.tradedetailsloader = false;
            axiosThis.usertotaldata = false;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    selecttrade() {
      this.coractdata = false;
      this.coractloader = true;
      let ids;
      if (this.clientidsindex == 'All') {
        ids = this.clientids.filter(function(e) { return e !== 'All' })
      } else {
        ids = [this.clientidsindex]
      }
      let data = JSON.stringify({
        "clientid": ids
      });

      let config = {
        method: "post",
        url: `${apiurl}/alltradebook`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };

      let axiosThis = this;
      axios(config).then(function (response) {
        axiosThis.colormis = response.data.color_val
        axiosThis.database = response.data.trades;

        let allyear = []
        for (const element of axiosThis.database) {
          axiosThis.data.push(element.dates.slice(0, 4));
          allyear.push((new Date(element.dates)).getFullYear());
        }
        let newyears = [...new Set(allyear)]
        let modeyyear = []
        modeyyear.push({ "dateselect": newyears.filter(Boolean) })
        for (const element of modeyyear) {
          let yearmodel = element.dateselect
          for (let n in yearmodel) {
            axiosThis.years.push(yearmodel[n])
          }
        }
        let enmes = (axiosThis.data.slice(-1)).join()
        let yearend = axiosThis.data[0].toString()
        let newyear = new Date((new Date(enmes)).getFullYear(), 0, 1);
        let endyear = new Date((new Date(yearend)).getFullYear(), 11, 31);
        axiosThis.startDate = (new Date(newyear).getFullYear()) + '-' + (1 + new Date(newyear).getMonth()) + '-' + (new Date(newyear).getDate());
        axiosThis.endDates = (new Date(endyear).getFullYear()) + '-' + (1 + new Date(endyear).getMonth()) + '-' + (new Date(endyear).getDate());
        axiosThis.dateselect = axiosThis.years[0]
        axiosThis.getcalendar()
      });
    },
    getcalendar() {
      let monthdate = this.dateRange(this.startDate, this.endDates);
      for (const element of monthdate) {
        this.database.push({ "counts": 0, "dates": element })
      }
      let nextval = this.database.filter((element) => new Date(element.dates).getFullYear() == this.dateselect)

      let removedups = Object.values(nextval.reduce((object, item) => {
        let key = item.dates;
        if (!object[key]) {
          object[key] = Object.assign(item);
        } else {
          object[key].counts += Object.assign(item.counts);
        }
        return object;
      }, {})
      );
     

      let newdayft = [...removedups].sort((a, b) =>{ return new Date(a.dates) - new Date(b.dates) });
      let months = []

      for (const element of newdayft) {
        months.push({ "date": new Date(element.dates).toLocaleDateString("en-us", { month: "short", }) })
        this.monthname = months.filter((v, i, a) => a.findIndex(v2 => (v2.date === v.date)) === i)
      }
      let ref = {};
      let res = newdayft.reduce(function (arr1, o) {
        let m = new Date(o.dates).getMonth();
        if (!(m in ref)) {
          ref[m] = arr1.length;
          arr1.push([]);
        }
        arr1[ref[m]].push(o);
        return arr1;
      }, []);

      this.values = (res)
      if (this.values.length > 0) {
        this.coractdata = true;
        this.coractloader = false;
        this.nocoractdata = false;
      }
    },
    dateRange(startDate, endDate, steps = 1) {
      const dateArray = [];
      let currentDate = new Date(startDate);
      while (currentDate <= new Date(endDate)) {
        dateArray.push(new Date(currentDate).toLocaleDateString("en-CA"));
        currentDate.setUTCDate(currentDate.getUTCDate() + steps);
      }
      return dateArray;
    },
  },

  mounted() {
    this.checkClientSync();
  },

  computed: {
    holdinghead() {
      return [
        {
          text: "Name",
          value: "SymbolName",
          sortable: false,
          align: "left",
          groupable: false,
        },
        { text: "Company", value: "names", align: "left", },
        { text: "Buy Sell", value: "BuyOrSell", sortable: false },
        { text: "Qty", value: "Quantity", sortable: false, align: "right" },
        {
          text: "Trade Price",
          value: "Trade_Price_O",
          sortable: false,
          align: "right",
        },
        {
          text: "Trade Value",
          value: "TradeValue",
          sortable: false,
          align: "right",
        },
        {
          text: "Trade No",
          value: "Trade_No",
          sortable: false,
          align: "right",
        },
        {
          text: "Trade Time",
          value: "Trade_Time",
          sortable: false,
          align: "right",
        },
        { text: "Trade Date", value: "Trade_Date", sortable: true },
      ];
    },
  },
};
</script>
 
<style lang="scss">
.colums {
  position: static;
  float: left;
}
</style>

<style>
.oholdingheadsty .v-data-table-header__sort-badge {
  display: none !important;
}

.datepickersty .mx-input {
  height: 40px !important;
  width: 100%;
  border-radius: 8px;
  color: black !important;
}
</style>