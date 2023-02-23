<template>
  <div id="app1">
    <!-- Mobile -->
    <div class="mblappbar d-md-none">
      <v-app-bar
        class="appbar elevation-1 px-4"
        absolute
        width="100%"
        permanent
        color="white"
      >
        <v-row class="d-flex">
          <v-app-bar-nav-icon
            class="my-auto"
            color="#797E8A"
            @click.stop="drawer = !drawer"
          >
          </v-app-bar-nav-icon>

          <v-col class="d-flex justify-center">
            <img src="@/assets/wyselylogo.svg" width="100px" alt="wyselylogo"  />
          </v-col>

        
          <v-btn
            to="/Accounts"
            x-small
            outlined
            tile
            color="#1877F2"
            class="rounded pa-2 my-auto mr-4"
            size="32"
            icon
            light
          >
            <img src="@/assets/plus account.svg" width="20px" alt="plusaccount" />
          </v-btn>

          <v-menu open-on-hover down offset-y transition="slide-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="my-auto" icon v-bind="attrs" v-on="on">
                <v-avatar color="#FF8D24" size="40">
                  <span class="white--text font-weight-bold title text-uppercase">{{
                    signusername.slice(0, 1)
                  }}</span>
                </v-avatar>
              </v-btn>
            </template>
            <v-card class="pa-2 rounded-lg elevation-0">
              <p class="lstctntit">{{ signusername }}</p>
              <p>{{ signinemailname }}</p>
            </v-card>
          </v-menu>
        </v-row>
      </v-app-bar>
      <v-navigation-drawer class="white pt-2" v-model="drawer" app>
        <v-list nav link>
          <v-list-item-group v-model="mblslcItm" color="#FF8D24">
            <v-list-item to="/Dashboard">
              <v-list-item-avatar tile size="22">
                <img
                  id="Dashboardclr"
                  color="#FF8D24"
                  src="@/assets/Dashboard.svg"
                  alt="Dashboard icon"
                />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="lstctntit"
                  >Dashboard</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-group
              :value="false"
              no-action
              aria-hidden="false"
              :append-icon="lsticnmblone ? 'mdi-minus' : 'mdi-plus'"
              @click="
                (lsticnmblone = !lsticnmblone),
                  (lsticnmbltwo = false),
                  (lsticnmbltre = false),
                  (lsticnmblfro = false)
              "
              color="#FF8D24"
            >
              <template v-slot:activator>
                <v-list-item-avatar tile size="22">
                  <img src="@/assets/Portfolio.svg" alt="Portfolio icon" />
                </v-list-item-avatar>
                <v-list-item-title class="lstctntit"
                  >Portfolio</v-list-item-title
                >
              </template>

              <div class="ml-4 pl-1" style="border-left: 3px solid #d9d9d9">
                <v-list-item class="pl-8" link to="/Holding">
                  <v-list-item-title class="lstctntit"
                    >Holdings</v-list-item-title
                  >
                </v-list-item>

                <v-list-item class="pl-8" link to="/hpr">
                  <v-list-item-title class="lstctntit"
                    >HPR</v-list-item-title
                  >
                </v-list-item>

                <v-list-item class="pl-8" link to="/Corporate_actions">
                  <v-list-item-title class="lstctntit"
                    >Corporate Actions</v-list-item-title
                  >
                </v-list-item>

             
              </div>
            </v-list-group>

            
            <v-list-group
              :value="false"
              no-action
              aria-hidden="false"
              :append-icon="lsticnmbltre ? 'mdi-minus' : 'mdi-plus'"
              @click="
                (lsticnmbltre = !lsticnmbltre),
                  (lsticnmblone = false),
                  (lsticnmbltwo = false),
                  (lsticnmblfro = false)
              "
              color="#FF8D24"
            >
              <template v-slot:activator>
                <v-list-item-avatar tile size="22">
                  <img
                    src="@/assets/Insights Reports.svg"
                    alt="Insights Reports icon"
                  />
                </v-list-item-avatar>
                <v-list-item-title class="lstctntit"
                  >Insights & Reports</v-list-item-title
                >
              </template>

              <div class="ml-4 pl-1" style="border-left: 3px solid #d9d9d9">
                <v-list-item class="pl-8" link to="/Profit_Loss">
                  <v-list-item-title class="lstctntit"
                    >Profit & Loss</v-list-item-title
                  >
                </v-list-item>
                <v-list-item class="pl-8" link to="/Tradebook">
                  <v-list-item-title class="lstctntit"
                    >Tradebook</v-list-item-title
                  >
                </v-list-item>
              </div>
            </v-list-group>

      

            <v-list-group
              :value="false"
              no-action
              aria-hidden="false"
              :append-icon="lsticnmblfro ? 'mdi-minus' : 'mdi-plus'"
              @click="
                (lsticnmblfro = !lsticnmblfro),
                  (lsticnmblone = false),
                  (lsticnmbltwo = false),
                  (lsticnmbltre = false)
              "
              color="#FF8D24"
            >
              <template v-slot:activator>
                <v-list-item-avatar tile size="22">
                  <img src="@/assets/Settings.svg" alt="Settings icon" />
                </v-list-item-avatar>
                <v-list-item-title class="lstctntit"
                  >Settings</v-list-item-title
                >
              </template>

              <div class="ml-4 pl-1" style="border-left: 3px solid #d9d9d9">
                <v-list-item class="pl-8" link to="/Userprofile">
                  <v-list-item-title class="lstctntit"
                    >User Profile</v-list-item-title
                  >
                </v-list-item>

                <v-list-item class="pl-8" link to="/Wealthprofile">
                  <v-list-item-title class="lstctntit"
                    >Wealth Profile</v-list-item-title
                  >
                </v-list-item>

             

                <v-list-item class="pl-8" link to="/Accounts">
                  <v-list-item-title class="lstctntit"
                    >Accounts</v-list-item-title
                  >
                </v-list-item>
              </div>
            </v-list-group>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>

    <!-- Desktop -->
    <div class="dsknavdraw d-none d-md-block">
      <v-navigation-drawer class="white pt-6 pl-2" app permanent>
        <template v-slot:prepend>
          <v-list-item class="mb-10">
            <v-row no-gutters>
              <v-col cols="10">
                <img width="120px" src="@/assets/wyselylogo.svg" alt="wyselylogo"/>
              </v-col>
              <v-col cols="2" class="pt-3 text-right">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      to="/Accounts"
                      v-bind="attrs"
                      v-on="on"
                      x-small
                      outlined
                      tile
                      color="#1877F2"
                      class="rounded pa-2"
                      size="32"
                      icon
                      light
                    >
                      <img src="@/assets/plus account.svg" width="20px" alt="plusaccount" />
                    </v-btn>
                  </template>
                  <span>Add Account</span>
                </v-tooltip>
              </v-col>
            </v-row>
          </v-list-item>
        </template>
        <v-list nav link>
          <v-list-item-group
            :value="false"
            no-action
            v-model="dskslcItm"
            color="#FF8D24"
          >
       
            <v-list-item to="/Dashboard">
              <v-list-item-avatar tile size="22">
                <img src="@/assets/Dashboard.svg" alt="Dashboard icon" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="lstctntit"
                  >Dashboard</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-group
              :value="false"
              no-action
              aria-hidden="false"
              :append-icon="lsticonone ? 'mdi-minus' : 'mdi-plus'"
              @click="
                (lsticonone = !lsticonone),
                  (lsticontwo = false),
                  (lsticontre = false),
                  (lsticonfro = false)
              "
              color="#FF8D24"
            >
              <template v-slot:activator>
                <v-list-item-avatar tile size="22">
                  <img src="@/assets/Portfolio.svg" alt="Portfolio icon" />
                </v-list-item-avatar>
                <v-list-item-title class="lstctntit"
                  >Portfolio</v-list-item-title
                >
              </template>

              <div class="ml-4 pl-1" style="border-left: 3px solid #d9d9d9">
                <v-list-item class="pl-8" link to="/Holding">
                  <v-list-item-title class="lstctntit"
                    >Holdings</v-list-item-title
                  >
                </v-list-item>

                <v-list-item class="pl-8" link to="/hpr">
                  <v-list-item-title class="lstctntit"
                    >HPR</v-list-item-title
                  >
                </v-list-item>

              

                <v-list-item class="pl-8" link to="/Corporate_actions">
                  <v-list-item-title class="lstctntit"
                    >Corporate Actions</v-list-item-title
                  >
                </v-list-item>

              
              </div>
            </v-list-group>

            <v-list-group
              :value="false"
              no-action
              aria-hidden="false"
              :append-icon="lsticontre ? 'mdi-minus' : 'mdi-plus'"
              @click="
                (lsticontre = !lsticontre),
                  (lsticonone = false),
                  (lsticontwo = false),
                  (lsticonfro = false)
              "
              lsticonfro
              color="#FF8D24"
            >
              <template v-slot:activator>
                <v-list-item-avatar tile size="22">
                  <img
                    src="@/assets/Insights Reports.svg"
                    alt="Insights Reports icon"
                  />
                </v-list-item-avatar>
                <v-list-item-title class="lstctntit"
                  >Insights & Reports</v-list-item-title
                >
              </template>

              <div class="ml-4 pl-1" style="border-left: 3px solid #d9d9d9">
                <v-list-item class="pl-8" link to="/Profit_Loss">
                  <v-list-item-title class="lstctntit"
                    >Profit & Loss</v-list-item-title
                  >
                </v-list-item>
                <v-list-item class="pl-8" link to="/Tradebook">
                  <v-list-item-title class="lstctntit"
                    >Tradebook</v-list-item-title
                  >
                </v-list-item>
               
              </div>
            </v-list-group>

            
            <v-list-group
              :value="false"
              no-action
              aria-hidden="false"
              :append-icon="lsticonfro ? 'mdi-minus' : 'mdi-plus'"
              @click="
                (lsticonfro = !lsticonfro),
                  (lsticonone = false),
                  (lsticontwo = false),
                  (lsticontre = false)
              "
              color="#FF8D24"
            >
              <template v-slot:activator>
                <v-list-item-avatar tile size="22">
                  <img src="@/assets/Settings.svg" alt="Settings icon" />
                </v-list-item-avatar>
                <v-list-item-title class="lstctntit"
                  >Settings</v-list-item-title
                >
              </template>

              <div class="ml-4 pl-1" style="border-left: 3px solid #d9d9d9">
                <v-list-item class="pl-8" link to="/Userprofile">
                  <v-list-item-title class="lstctntit"
                    >User Profile</v-list-item-title
                  >
                </v-list-item>

                <v-list-item class="pl-8" link to="/Wealthprofile">
                  <v-list-item-title class="lstctntit"
                    >Wealth Profile</v-list-item-title
                  >
                </v-list-item>

           
                <v-list-item class="pl-8" link to="/Accounts">
                  <v-list-item-title class="lstctntit"
                    >Accounts</v-list-item-title
                  >
                </v-list-item>
              </div>
            </v-list-group>
          </v-list-item-group>
        </v-list>

        <template v-slot:append>
          
          <v-divider></v-divider>
          <div>
            <v-list-item two-line>
              <v-list-item-avatar>
                <v-avatar color="#FF8D24">
                  <span class="white--text font-weight-bold title text-uppercase">{{
                    signusername.slice(0, 1)
                  }}</span>
                </v-avatar>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="lstctntit">{{
                  signusername
                }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  signinemailname
                }}</v-list-item-subtitle>
              </v-list-item-content>
              <button id="logout-button" @click="handleLogout">
                <v-icon size="24" color="primary">mdi-logout </v-icon>
              </button>
             
            </v-list-item>
          </div>
        </template>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueCryptojs from "vue-cryptojs";
Vue.use(VueCryptojs);
export default {
  data() {
    return {
      signusername: "",
      signinemailname: "",

      lsticnmblone: false,

      lsticnmbltwo: false,
      lsticnmbltre: false,
      lsticnmblfro: false,
      mblslcItm: 0,
      drawer: false,
      offset: true,

      lsticonone: false,
      lsticontwo: false,
      lsticontre: false,
      lsticonfro: false,
      dskslcItm: 0,
    };
  },
  mounted() {
    let decryptedsrtore = localStorage.decryptedstoredname;
    this.signusername = decryptedsrtore;
    console.log("declocalstore mounted", this.signusername);

    let declocalsrore = localStorage.decryptedstoredData;
    this.signinemailname = declocalsrore;
    console.log("declocalstore mounted", this.signinemailname);
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    handleLogout() {
      localStorage.clear();
      this.$router.push("/signin");
    },
  },
};
</script>

<style>
.lstctntit {
  font-weight: 700 !important;
}

.ctnbtl {
  font-weight: 500 !important;
}

.trmnucolsl {
  background-color: #f9fbfc !important;
  background-size: 80% !important;
}

.v-slide-group__prev.v-slide-group__prev--disabled {
    display: none !important;
}

.v-list--nav .v-list-item:not(:last-child):not(:only-child),
.v-list--rounded .v-list-item:not(:last-child):not(:only-child) {
  margin-bottom: 4px !important;
}

.v-data-table .v-data-table__wrapper table thead th {
  z-index: 0 !important;
  background-color: #f9fbfc !important;
  color: #878b93 !important;
  border-color: #eceef2 !important;
}

.v-data-footer__select {
    display: none !important;
}

.v-data-footer__icons-before,
.v-data-footer__icons-after {
    display: none !important;
}

.v-navigation-drawer__content::-webkit-scrollbar {
  width: 5px;
}

.v-navigation-drawer__content::-webkit-scrollbar-track {
  border-radius: 10px;
}

.v-navigation-drawer__content::-webkit-scrollbar-thumb {
  background: #c4c4c4;
  border-radius: 10px;
}

.v-main {
  padding-left: 256px !important;
}

@media only screen and (max-width: 959px) {
  .appbar {
    position: fixed !important;
    z-index: 1 !important;
  }

  .v-main {
    padding-left: 0px !important;
  }

  .v-menu__content {
    box-shadow: 0px 8px 16px -4px rgba(22, 34, 51, 0.08) !important;
  }
}
</style>