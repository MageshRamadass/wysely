<template>
    <v-app>
      <v-container class="pa-0 pa-sm-3 pa-md-3">
        <div class="pt-16 pa-6 pa-sm-4 pa-md-4">
          <v-row>
            <v-col cols="12" sm="12" md="8">
              <v-row>
                <v-col cols="6">
                  <p class="lstctntit headline mb-1">HPR</p>
                </v-col>
                <v-col cols="6" class="d-md-none text-right px-0">
                  <v-btn style="text-transform: capitalize" class="elevation-0" small color="#F9FBFC">
                    <v-icon size="15">mdi-format-align-bottom</v-icon>Filter
                    actions
                  </v-btn>
                </v-col>
              </v-row>
              <p class="body-1 mb-0 mb-sm-2 mb-md-2" color="#878B93">
                Holding period returns for your trades.
              </p>
            </v-col>
            <v-col class="pr-0 pb-0 d-none d-md-flex" cols="4" sm="2" md="2">
              <!-- <v-select prepend-inner-icon="mdi-chart-arc" append-icon="mdi-chevron-down" class="rounded-lg" color="gray"
                dense label="Select Segment" single-line outlined></v-select> -->
              <!-- <v-col class="pr-0 pb-0 d-none d-md-flex" cols="6" sm="2" md="2"> -->
              <div> <v-badge v-if="clientids.length > 1" bordered color="#FF8D24" :content="clientids.length - 1" overlap>
                  <v-select v-model="clientidsindex" @change="dateWise" :items="clientids" append-icon="mdi-chevron-down"
                    class="rounded-lg" color="gray" dense single-line return-object outlined>
                  </v-select>
                </v-badge>
                <div v-else-if="clientids.length == 0"></div>
                <v-select v-else v-model="clientidsindex" :items="clientids" append-icon="mdi-chevron-down"
                  class="rounded-lg" color="gray" dense single-line return-object outlined>
                </v-select>
              </div>
              <!-- </v-col> -->
            </v-col>
  
            <v-col class="pr-0 pb-0 d-none d-md-flex" cols="4" sm="2" md="2">
              <!-- <v-text-field dense color="gray" outlined class="rounded-lg" label="Search SymbolName"
                prepend-inner-icon="mdi-magnify"></v-text-field> -->
              <v-text-field dense color="gray" outlined class="rounded-lg mx-4 d-none d-md-flex" label="Search"
                prepend-inner-icon="mdi-magnify">
              </v-text-field>
            </v-col>
            <!-- <v-col class="px-0 pb-0 d-none d-md-flex" cols="4" sm="2" md="2">
              <v-btn class="font-weight-black" text color="#1877F2"
                >Filter activity</v-btn
              >
            </v-col> -->
          </v-row>
  
      
  
          <div class="mt-6">
            <div>
              <v-card outlined class="d-md-none elevation-0 rounded-lg pa-4 pb-0">
                <v-row class="py-2">
                  <v-col cols="5">
                    <p class="caption" style="color: #ff8d24;
                        letter-spacing: 0.16em;
                        text-transform: uppercase;">
                      Realised P&L
                    </p>
                  </v-col>
                  <v-col v-if="pnltab == 0" cols="7">
                    <div v-if="Summ_qty == 0">
                      <p v-if="tol_Summ_mtm > 0" class="ctnbtl body-1 mb-0 text-right"
                        style="line-height: 28px; color: #34a853">
                        {{ tol_Summ_mtm }}
                      </p>
                      <p v-else class="ctnbtl body-1 mb-0 text-right" style="line-height: 28px; color: #e12626">
                        {{ tol_Summ_mtm }}
                      </p>
                    </div>
                    <p v-else class="ctnbtl body-1 mb-0 text-right" style="line-height: 28px">
                      0.00
                    </p>
                  </v-col>
                  <v-col v-else cols="7">
                    <div v-if="DW_qty == 0">
                      <p v-if="tol_DW_mtm > 0" class="ctnbtl body-1 mb-0 text-right"
                        style="line-height: 28px; color: #34a853">
                        {{ tol_DW_mtm }}
                      </p>
                      <p v-else class="ctnbtl body-1 mb-0 text-right" style="line-height: 28px; color: #e12626">
                        {{ tol_DW_mtm }}
                      </p>
                    </div>
                    <p v-else class="ctnbtl body-1 mb-0 text-right" style="line-height: 28px">
                      0.00
                    </p>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="py-2">
                  <v-col cols="5">
                    <p class="caption" style="
                        color: #ff8d24;
                        letter-spacing: 0.16em;
                        text-transform: uppercase;
                      ">
                      Unrealised P&L
                    </p>
                  </v-col>
                  <v-col v-if="pnltab == 0" cols="7">
                    <div v-if="Summ_qty != 0">
                      <p v-if="tol_Summ_mtm > 0" class="ctnbtl body-1 mb-0 text-right"
                        style="line-height: 28px; color: #34a853">
                        {{ tol_Summ_mtm }}
                      </p>
                      <p v-else class="ctnbtl body-1 mb-0 text-right" style="line-height: 28px; color: #e12626">
                        {{ tol_Summ_mtm }}
                      </p>
                    </div>
                    <p v-else class="ctnbtl body-1 mb-0 text-right" style="line-height: 28px">
                      0.00
                    </p>
                  </v-col>
                  <v-col v-else cols="7">
                    <div v-if="DW_qty != 0">
                      <p v-if="tol_DW_mtm > 0" class="ctnbtl body-1 mb-0 text-right"
                        style="line-height: 28px; color: #34a853">
                        {{ tol_DW_mtm }}
                      </p>
                      <p v-else class="ctnbtl body-1 mb-0 text-right" style="line-height: 28px; color: #e12626">
                        {{ tol_DW_mtm }}
                      </p>
                    </div>
                    <p v-else class="ctnbtl body-1 mb-0 text-right" style="line-height: 28px">
                      0.00
                    </p>
                  </v-col>
                </v-row>
              </v-card>
  
              <v-card outlined class="d-none d-md-flex elevation-0 rounded-lg">
                <v-row no-gutters>
                  <v-col>
                    <div class="pa-4">
                      <p class="caption mb-0" style="
                          color: #ff8d24;
                          letter-spacing: 0.16em;
                          text-transform: uppercase;
                        ">
                        Realised P&L
                      </p>
                      <div v-if="pnltab == 0">
                        <div v-if="Summ_qty == 0">
                          <p v-if="tol_Summ_mtm > 0" class="ctnbtl headline mb-0"
                            style="line-height: 28px; color: #34a853">
                            {{ tol_Summ_mtm }}
                          </p>
                          <p v-else class="ctnbtl headline mb-0" style="line-height: 28px; color: #e12626">
                            {{ tol_Summ_mtm }}
                          </p>
                        </div>
                        <p v-else class="ctnbtl headline mb-0" style="line-height: 28px">
                          0.00
                        </p>
                      </div>
                      <div v-else>
                        <div v-if="DW_qty == 0">
                          <p v-if="tol_DW_mtm > 0" class="ctnbtl headline mb-0" style="line-height: 28px; color: #34a853">
                            {{ tol_DW_mtm }}
                          </p>
                          <p v-else class="ctnbtl headline mb-0" style="line-height: 28px; color: #e12626">
                            {{ tol_DW_mtm }}
                          </p>
                        </div>
                        <p v-else class="ctnbtl headline mb-0" style="line-height: 28px">
                          0.00
                        </p>
                      </div>
                    </div>
                  </v-col>
                  <v-divider class="d-none d-md-flex" vertical></v-divider>
                  <v-col>
                    <div class="pa-4">
                      <p class="caption mb-0" style="color: #ff8d24; letter-spacing: 0.16em; text-transform: uppercase;">
                        Unrealised P&L
                      </p>
                      <div v-if="pnltab == 0">
                        <div v-if="Summ_qty != 0">
                          <p v-if="tol_Summ_mtm > 0" class="ctnbtl headline mb-0"
                            style="line-height: 28px; color: #34a853">
                            {{ tol_Summ_mtm }}
                          </p>
                          <p v-else class="ctnbtl headline mb-0" style="line-height: 28px; color: #e12626">
                            {{ tol_Summ_mtm }}
                          </p>
                        </div>
                        <p v-else class="ctnbtl headline mb-0" style="line-height: 28px">
                          0.00
                        </p>
                      </div>
                      <div v-else>
                        <div v-if="DW_qty != 0">
                          <p v-if="tol_DW_mtm > 0" class="ctnbtl headline mb-0" style="line-height: 28px; color: #34a853">
                            {{ tol_DW_mtm }}
                          </p>
                          <p v-else class="ctnbtl headline mb-0" style="line-height: 28px; color: #e12626">
                            {{ tol_DW_mtm }}
                          </p>
                        </div>
                        <p v-else class="ctnbtl headline mb-0" style="line-height: 28px">
                          0.00
                        </p>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </div>
            <div class="mt-2 mt-sm-0 mt-md-0">
              <v-toolbar color="transparent" class="elevation-0 px-0 toolbar">
                <v-col cols="8" class="px-0">
                  <v-tabs v-model="pnltab" flat background-color="transparent" color="#1877F2"
                    active-class="font-weight-bold">
                    <v-tab>HPR Summary</v-tab>
                  </v-tabs>
                </v-col>
                <v-col class="px-0 d-flex justify-end" cols="4">
                  <!-- <v-btn text color="#878B93"><img class="pr-2" src="@/assets/download icon.svg" width="25px" />Download -->
                  <!-- </v-btn> -->
  
                  <!-- <v-menu v-if="downloadbtn" offset-y transition="slide-y-transition">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" text color="#878B93"><img class="pr-2"
                        src="@/assets/download icon.svg" width="25px" />Download
                    </v-btn>
                  </template>
                  <v-card class="elevation-0 py-2 px-1" color="white">
                    <v-btn @click="plpdf()" text block color="#878B93" class="text-capitalize">PDF document</v-btn>
  
                    <div v-if="PLSummarybtndwn">
                      <vue-json-to-csv :json-data="summDataFinalvalue" :csv-title="'overviews.csv'">
                        <v-btn text block color="#878B93" class="text-capitalize">Excell sheet
                        </v-btn>
                      </vue-json-to-csv>
                    </div>
                    <div v-if="PLbtndwn">
                      <vue-json-to-csv :json-data="tableDatafinalvalue" :csv-title="'overviews.csv'">
                        <v-btn text block color="#878B93" class="text-capitalize">Excell sheet
                        </v-btn>
                      </vue-json-to-csv>
                    </div>
                  </v-card>
                </v-menu> -->
                </v-col>
              </v-toolbar>
  
              <v-tabs-items v-model="pnltab">
                <v-tab-item>
                  <div class="trdditl py-4">
                    <v-data-table :loading="summaryloader" fixed-header disable-filtering mobile-breakpoint disable-sort
                      :headers="summaryhead" :items="PnLSummary" hide-default-footer style="border: 1px solid #efeef3"
                      class="cliidsty elevation-0 rounded-lg" :page.sync="sumpage" :items-per-page="10" group-by="SymbolName"
                      @page-count="sumpageCount = $event">
                      <template v-slot:[`item.Net_rate`]="{ item }">
                        <span>{{ item.Net_rate.toFixed(2) }}</span>
                      </template>
                      <template v-slot:[`item.Percentage`]="{ item }">
                        <span v-if="item.Percentage">{{ item.Percentage.toFixed(2) }} %</span>
                        <span v-else>0.00</span>
                      </template>
                      <template v-slot:[`item.Buy_Price`]="{ item }">
                        <span>{{ item.Buy_Price.toFixed(2) }}</span>
                      </template>
                      <template v-slot:[`item.Sell_Price`]="{ item }">
                        <span>{{ item.Sell_Price.toFixed(2) }}</span>
                      </template>
                      <template v-slot:[`item.LTP`]="{ item }">
                        <span>{{ item.LTP }}</span>
                      </template>
                      <template v-slot:[`item.MTM`]="{ item }">
                        <span v-if="item.MTM">{{ item.MTM.toFixed(2) }}</span>
                        <span v-else>0.00</span>
                      </template>
                      
                      <template v-slot:[`group.header`]="{ items, isOpen, toggle }">
                    <td colspan="1" @click="toggle">
                      <strong>{{ items[0].SymbolName }}</strong>
                      <!-- <strong v-for="k in items" :key="k">{{ k.Client_Code }}</strong> -->
                      <v-icon>{{ isOpen? 'mdi-chevron-up': 'mdi-chevron-down' }}
                      </v-icon>
                    </td>
                    <td @click="toggle" class="text-right"></td>
                    <td @click="toggle" class="text-right"></td>
                    <td @click="toggle" class="text-right"></td>
                    <td @click="toggle" class="text-right"></td>

                    <td @click="toggle" class="text-right"></td>

                    <td @click="toggle" class="text-right"></td>
                    <td @click="toggle" class="text-right"></td>
                    <!-- <td @click="toggle" class="text-right">{{ subTotal(items, 'Buy_Price')*subTotal(items, 'Buy_Quantity') }}</td> -->
                    <td @click="toggle" class="text-right"></td>
                    <!-- <td @click="toggle" class="text-right">{{ subTotal(items, 'Sell_Price')*subTotal(items, 'Sell_Quantity') }}</td> -->
                    <td @click="toggle" class="text-right"></td>
                    <!-- <td @click="toggle" class="text-right">{{ (subTotal(items, 'Buy_Price')*subTotal(items, 'Buy_Quantity')) - (subTotal(items, 'Sell_Price')*subTotal(items, 'Sell_Quantity')) }}</td> -->
                    <td @click="toggle" class="text-right"></td>
                    <td @click="toggle" class="text-right"></td>
                    <td @click="toggle" class="text-right"></td>

                  </template>
                      <template v-if="clientidsindex == 'All'" v-slot:[`item.SymbolName`]="{ item }">
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title class="font-weight-regular">
                              {{ item.SymbolName }}
                            </v-list-item-title>
                          </v-list-item-content>
                          <v-list-item-icon class="mb-1 mt-2">
                            <div v-if="item.Client_Code.slice(0, 1) == 'Z'">
                              <img style="border: 1px solid #efeef3" width="24px" class="pa-1 rounded"
                                src="@/assets/Ma_zebu.svg">
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
                      <template v-if="usertotaldata" v-slot:[`body.append`]>
                        <tr class="black--text">
                          <td colspan="6" class="text-left">
                            <span v-if="clientidsindex == 'All'" class="subtitle-1 font-weight-medium pa-1 rounded mr-1"
                              style="background-color: #e8ebed; color: #505359">{{ clientids.length - 1 }}
                              accounts</span>
                            <span class="subtitle-1 font-weight-medium pa-1 rounded"
                              style="background-color: #e8ebed; color: #505359">{{ total_summary }} Profit &
                              Loss</span>
                          </td>
                          <td colspan="3" class="subtitle-1 text-right font-weight-medium">
                            {{ tol_Summ_mtm }}
                          </td>
                        </tr>
                      </template>
                      <template v-slot:[`footer`]>
                        <v-divider></v-divider>
                        <div class="text-center py-2">
                          <v-pagination v-model="sumpage" :length="sumpageCount"></v-pagination>
                        </div>
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
                </v-tab-item>
  
              </v-tabs-items>
            </div>
          </div>
        </div>
      </v-container>
      <v-snackbar style="z-index: 2 !important;" transition="slide-x-reverse-transition" v-model="snackbar"
        :timeout="2000" :value="true" color="warning" absolute outlined top right>
        <v-icon color="warning">mdi-alert-outline</v-icon>
        Session <strong>expired</strong> Kindly Login again.
      </v-snackbar>
    </v-app>
  </template>
  
  <script>
  import { apiurl } from "../../apiUrl";
  import axios from "axios";
  export default {
    data() {
      return {
        snackbar: false,
        sumpage: 1,
        sumpageCount: 0,
        page: 1,
        pageCount: 0,
  
        clientidsindex: "",
        pnltab: null,
        usertotaldata: true,
        usernodata: false,
  
        summaryloader: true,
        daywiseloader: true,
  
        clientids: [
          'All'
        ],
        emailDatafetch: [],
  
        hpr: [],
        PnLSummary: [],
        PnLdaywise: [],
        tol_DW_mtm: 0,
        tol_Summ_mtm: 0,
        total_day_wise: 0,
        total_summary: 0,
        DW_qty: 0,
        Summ_qty: 0,
  
        datesummary: [],
        startDate: '',
        endDates: '',
        monthname: [],
        coractdata: false,
        nocoractdata: false,
        coractloader: true,
        values: [],
        dateselect: '',
        years: [],
        fromdate: "",
        todate: "",
      };
    },
  
    methods: {
      checkClientSync() {
        var gauthclientseassion = localStorage.clientsessionstore
        var email = localStorage.getItem('decryptedstoredData')
        var data = JSON.stringify({
          email: email,
        });
  
        var config = {
          method: "post",
          url: `${apiurl}/syncEmailDetails`,
          headers: {
            "Content-Type": "application/json",
            'Authorization': gauthclientseassion
          },
          data: data,
        };
        var axiosThis = this;
        axios(config)
          .then(function (response) {
            console.log("&&&e", response);
  
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
            for (var d = 0; d < axiosThis.emailDatafetch.length; d++) {
              var clientIds = axiosThis.emailDatafetch[d].clientID;
              console.log("clientIds", clientIds)
              axiosThis.clientids.push(axiosThis.emailDatafetch[d].clientID);
            }
            axiosThis.clientidsindex = axiosThis.clientids[0]
            axiosThis.dateWise();
          })
          .catch(function (error) {
            console.log(error);
          });
      },
  
      dateWise() {
        this.PnLSummary = [];
        this.PnLdaywise = [];
        this.tol_DW_mtm = 0;
        this.tol_Summ_mtm = 0;
        this.total_day_wise = 0;
        this.total_summary = 0;
        this.summaryloader = true;
        this.daywiseloader = true;
  
        var ids;
        if (this.clientidsindex == 'All') {
          ids = this.clientids.filter(function (e) { return e !== 'All' })
        } else {
          ids = [this.clientidsindex]
        }
        var data = JSON.stringify({
          "clientid": ids
        });
        var config = {
          method: 'post',
        //   url: `${apiurl}/allpnl`,
          url: "http://192.168.5.99:5502/hpr",

  
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        };
        var axiosThis = this;
        // console.log("new pnl", data)
        axios(config)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));
            console.log("new pnl", response.data);
            if(response.data.Data) {
            axiosThis.hpr = response.data.Data
            for(var i in axiosThis.hpr) {
                // console.log("top",Object.keys(axiosThis.hpr[i]))
                var keyindex = Object.keys(axiosThis.hpr[i])
                // console.log("top",axiosThis.hpr[i][keyindex[0]])
                var keyValue = axiosThis.hpr[i][keyindex[0]]
                var keyValueSub = axiosThis.hpr[i][keyindex[1]]
            for(var q in keyValue) {
                // console.log("top",keyValue[q])
                // if (keyValueSub[q].SymbolName == "ANDHRAPAP") {
                    console.log("set",keyValueSub)
                // }
                axiosThis.PnLSummary.push(keyValue[q])
             }
             axiosThis.summaryloader = false;

            }
        } else if(response.data == 'Data not Available') {
              axiosThis.summaryloader = false;
            //   axiosThis.daywiseloader = false;
              axiosThis.usertotaldata = false;
              axiosThis.usernodata = true;
            }





            // axiosThis.DW_qty = response.data.DW_qty;
            // axiosThis.Summ_qty = response.data.Summ_qty;
            // axiosThis.PnLSummary = response.data.Summary;
            // axiosThis.PnLdaywise = response.data.Daywise;
            // axiosThis.tol_DW_mtm = response.data.tol_DW_mtm;
            // axiosThis.tol_Summ_mtm = response.data.tol_Summ_mtm;
            // axiosThis.total_summary = response.data.total_summary;
            // axiosThis.total_day_wise = response.data.total_day_wise;
            // if (axiosThis.total_day_wise > 0) {
            //   axiosThis.daywiseloader = false;
            // }
            // if (axiosThis.total_summary > 0) {
            //   axiosThis.summaryloader = false;
            // } else if (response.data.msg == 'No Data Available') {
            //   axiosThis.summaryloader = false;
            //   axiosThis.daywiseloader = false;
            //   axiosThis.usertotaldata = false;
            //   axiosThis.usernodata = true;
            // }
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      subTotal(items, column) {
        var returnVal = parseFloat(0.00)
       var reti = parseFloat(items.reduce((sum, item) => sum + item[column], 0))
    //    console.log("rete",reti)
       if(reti == 0) {
        // console.log("if")
        return returnVal.toFixed(2)
       } else {
        // console.log("else")
        return reti.toFixed(2)
       }
    //   return ;
      },
    },
  
    mounted() {
      this.checkClientSync()
    },
  
    computed: {
      summaryhead() {
        return [
          { text: "", value: "SymbolName",groupable: false },
          { text: "Trade Date", value: "Trade Date" },
          { text: "Buy Qty", value: "Buy_Quantity", align: "right" },
          { text: "Buy Rate", value: "Buy_Price", align: "right" },
          { text: "Sell Qty", value: "Sell_Quantity", align: "right" },
          { text: "Sell Rate", value: "Sell_Price", align: "right" },
          { text: "Net Qty", value: "Net_quantity", align: "right" },
          { text: "Net Rate", value: "Net_rate", align: "right" },
          { text: "LTP", value: "LTP", align: "right" },
          { text: "MTM", value: "MTM", align: "right" },
          { text: "Unrealized MTM", value: "Unrealized MTM", align: "right" },
          { text: "Realized MTM", value: "Realized MTM", align: "right" },
          { text: "RunningQty", value: "RunningQty", align: "right" },
          { text: "Percentage", value: "Percentage", align: "right" },

        ];
      },
  
    },
  
  };
  </script>
  
  <style>
  .trdditl::-webkit-scrollbar {
    width: 6px;
  }
  
  .trdditl::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  .trdditl::-webkit-scrollbar-thumb {
    background: rgba(128, 128, 128, 0.6);
    border-radius: 16px;
  }
  
  .toolbar .v-toolbar__content {
    padding: 0 !important;
  }
  
  .datedetailshead .v-data-table-header__sort-badge {
    display: none !important;
  }
  .cliidsty tr.v-row-group__header {
  background-color: white !important;
  color: black !important;
  font-weight: 700;
}
  .cliidsty thead.v-data-table-header {
  position: relative;
  z-index: 10 !important;
}
  </style>
  <style lang="scss">
  .colums {
    position: static;
    float: left;
  }
  </style>