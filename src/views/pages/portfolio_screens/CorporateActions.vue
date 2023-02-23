<template>
  <v-app>
    <v-container class="pa-0 pa-sm-3 pa-md-3">
      <div class="pt-16 pa-6 pa-sm-4 pa-md-4">
        <v-row>
          <v-col cols="10">
            <v-row>
              <v-col cols="6">
                <p class="lstctntit headline mb-1">Corporate actions</p>
              </v-col>
              <v-col cols="6" class="d-md-none text-right px-0">
                <v-btn style="text-transform: capitalize" class="elevation-0" small color="#F9FBFC">
                  <v-icon size="15">mdi-format-align-bottom</v-icon>Filter
                  actions
                </v-btn>
              </v-col>
            </v-row>

            <p class="body-1 mb-0 mb-sm-2 mb-md-2" color="#878B93">
              Track corporate activity of your portfolio under one roof
            </p>
          </v-col>
          <div class="d-none">
            <v-col class="pr-0 pb-0 d-none d-md-flex" cols="3" sm="3" md="3">
              <v-select prepend-inner-icon="mdi-book" append-icon="mdi-chevron-down" color="gray" class="rounded-lg"
                dense label="Select action type" single-line outlined>
              </v-select>
            </v-col>
            <v-col class="px-0 pb-0 d-none d-md-flex" cols="6" sm="2" md="2">
              <v-btn class="font-weight-black" text color="#1877F2">Filter actions</v-btn>
            </v-col>
          </div>
          <v-col class="text-right" cols="2">
            <div> <v-badge v-if="clientids.length > 1" bordered color="#FF8D24" :content="clientids.length" overlap>
                <v-select v-model="cli" @change="CorporateActionschange" :items="clientids"
                  append-icon="mdi-chevron-down" class="rounded-lg" color="gray" dense single-line return-object
                  outlined>
                </v-select>
              </v-badge>
              <div v-else-if="clientids.length == 0"></div>
              <v-select v-else v-model="cli" @change="CorporateActionschange" :items="clientids"
                append-icon="mdi-chevron-down" class="rounded-lg" color="gray" dense single-line return-object outlined>
              </v-select>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="12" md="8">
          
            <div class="pt-0">
              <p class="body-1 mb-1" color="#878B93">Corporate actions</p>
          
              <v-card v-if="coractloader" width="100%" style="z-index: 0 !important;" outlined
                class="elevation-0 rounded-lg py-10 px-16">
                <p class="pa-16 pb-0 text-center">Getting your Corporate actions</p>
                <v-card width="200px" class="elevation-0 mx-auto">
                  <v-progress-linear class="mb-12" color="primary" indeterminate rounded height="6"></v-progress-linear>
                </v-card>
              </v-card>

              <v-card v-if="nocoractdata" width="100%" style="z-index: 0 !important;" outlined
                class="elevation-0 rounded-lg py-10">
                <p class="pa-16 text-center">No Corporate actions found</p>
              </v-card>

              <v-card v-if="coractdata" style="z-index: 0 !important; overflow-y:scroll;" outlined max-height="70vh"
                class="elevation-0 rounded-lg">
                <v-expansion-panels class="expandcrds" flat v-model="panel">
                  <v-card width="100%" class="coractacr pa-0 elevation-0"
                    v-for="(CorporateAction, c) in CorporateActions" :key="c">
                    <v-expansion-panel :page.sync="accpage" @page-count="pageCount = $event"
                      v-for="(coract, b) in CorporateAction" :key="b" color="#FF8D24">
                      <v-expansion-panel-header @click="minus = !minus">
                        <template v-slot:actions>
                          <v-icon v-if="panel == c - 0" color="#FF8D24">
                            mdi-minus-circle-outline
                          </v-icon>
                          <v-icon v-else color="#FF8D24">
                            mdi-plus-circle-outline
                          </v-icon>
                        </template>
                        <div>
                          <span class="font-weight-medium mb-0" style="color: #ff8d24">
                            {{ b }}
                            <span class="body-1" style="color: #878b93">({{ coract.length }})</span>
                          </span>
                        </div>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content class="expancon" v-for="(item, a) in coract" :key="a">
                        <div class="mb-2">
                          <v-list-item style="background-color: #f9fbfc" class="rounded-lg">
                            <v-list-item-content>
                              <v-list-item-title class="ctnbtl pb-1">
                                {{ item.Purpose.split("-")[0] }}
                              </v-list-item-title>
                              <v-list-item-subtitle>Ex date:
                                {{ item['Ex-Date'] }}
                              </v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-content class="text-right">
                              <v-list-item-title>{{
                                item.Purpose.split("-")[1]
                              }}</v-list-item-title>
                              <v-list-item-subtitle></v-list-item-subtitle>
                            </v-list-item-content>
                          </v-list-item>
                        </div>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-card>
                </v-expansion-panels>
              </v-card>


            </div>
          </v-col>

          <v-col cols="12" sm="12" md="4">
            <div class="pt-0">
              <p class="body-1 mb-1" color="#878B93">Upcoming actions</p>
              <v-card v-if="upcomingEvents" outlined height="70vh" class="elevation-0 rounded-lg px-4"
                style="overflow-x: hidden; overflow-y: scroll;">
                <div v-for="n in upcomingEvents" :key="n">
                  <v-list-item>
                    <v-row>
                      <v-col cols="2" class="pr-0">
                        <v-list-item-content width="100">
                          <v-list-item-subtitle style="color: #ff8d24; text-transform: uppercase">
                            {{ n['Ex-Date'].slice(3, 6) }}
                          </v-list-item-subtitle>
                          <v-list-item-title style="color: #ff8d24">
                            {{ n['Ex-Date'].slice(0, 2) }}
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-col>
                      <v-col cols="10">
                        <v-list-item class="pl-0">
                          <v-list-item-content>
                            <v-list-item-title>{{ n.Company }}</v-list-item-title>
                            <div style="color:#ff8d24; font-size: 10px !important;">{{ n.Symbol }}</div>
                            <div style="color:darkgray; font-size: 14px !important;">{{ n.Purpose }}</div>
                          </v-list-item-content>
                        </v-list-item>
                      </v-col>
                    </v-row>
                  </v-list-item>
                  <v-divider></v-divider>
                </div>
              </v-card>
              <v-card v-else outlined class="elevation-0 rounded-lg px-4">
                <div>
                  <v-list-item>
                    <div class="text-center pa-2">
                      <p class="pa-16">
                        No upcoming actions for your Corporate actions
                      </p>
                    </div>
                  </v-list-item>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <div class="">
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
      cli: "",
      clientids: [],
      upcomingEvents: [],
      snackbar: false,
      accpage: 1,
      pageCount: 0,
      minus: true,
      panel: null,
      Upcoming_actions: false,
      coractdata: false,
      nocoractdata: false,
      coractloader: true,
      CorporateActions: [],
      emailDatafetch: [],
    };
  },

  methods: {
    upcomingEvent() {
      let axiosThis = this
      let config = {
        method: 'get',
        url: `${apiurl}/upcoming`,
        headers: {}
      };

      axios(config)
        .then(function (response) {
          axiosThis.upcomingEvents = response.data.data
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    CorporateActionschange() {
      this.coractdata = false;
      this.coractloader = true;
      let axiosThis = this;
      let gauthclientseassion = localStorage.clientsessionstore
      let newarrarychange = axiosThis.cli
      let datas = JSON.stringify({
        // clientid: "ZE1A57",
        clientid: newarrarychange,

      });

      let configs = {
        method: "post",
        url: `${apiurl}/getCorporateActions`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': gauthclientseassion
        },
        data: datas,
      };

      axios(configs)
        .then(function (response) {
          if (response.data.msg == "Token is Expired." || response.data.msg == "Token is Invalid.") {
            axiosThis.snackbar = true;
            setTimeout(function () {
              axiosThis.$router.push("/signin");

            }, 2000);
          }
          axiosThis.CorporateActions = response.data;

          if (response.data.msg == "No Data Found") {
            axiosThis.coractdata = false;
            axiosThis.nocoractdata = true;
            axiosThis.coractloader = false;
          }

          if (axiosThis.CorporateActions.length > 0) {
            axiosThis.coractdata = true;
            axiosThis.coractloader = false;
            axiosThis.nocoractdata = false;
          }

        })
        .catch(function (error) {
          console.log(error);
        });

    },
  },
  mounted() {
    // 
    let axiosThis = this;
    let gauthclientseassion = localStorage.clientsessionstore
    let email = localStorage.getItem('decryptedstoredData')
    this.upcomingEvent()
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
    axios(config)
      .then(function (response) {
        console.warn("&&&e", response);
        if (response.data.msg == "Token is Expired." || response.data.msg == "Token is Invalid.") {
          axiosThis.snackbar = true;
          setTimeout(function () {

            axiosThis.$router.push("/signin");
          }, 2000);
        }

        axiosThis.emailDatafetch = response.data.Data;
        if (response.data.msg == 'No Email Sync data available for User') {
          axiosThis.coractdata = false;
          axiosThis.coractloader = false;
          axiosThis.nocoractdata = true;
        }
        for (let d = 0; d < axiosThis.emailDatafetch.length; d++) {
          // let clientIds = axiosThis.emailDatafetch[d].clientID;
          axiosThis.clientids.push(axiosThis.emailDatafetch[d].clientID);
        }
        axiosThis.cli = axiosThis.clientids[0]
        axiosThis.CorporateActionschange();
      }).catch(function (err) {
        console.log(err)
      });
  },
};
</script>

<style>
/* .mdi-chevron-down::before {
    display: none !important;
}

.v-expansion-panel-header__icon {
    display: none !important;
}

.v-icon notranslate mdi mdi-chevron-down {
    display: none !important;
} */
.expancon .v-expansion-panel-content__wrap {
  padding-bottom: 0% !important;
}

.coractacr {
  border-bottom: thin solid rgba(0, 0, 0, 0.12) !important;
}

.expandcrds .v-application .elevation-0 {
  box-shadow: 0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%), 2px 0px 0px 0px rgb(0 0 0 / 0%) !important;
}
</style>
