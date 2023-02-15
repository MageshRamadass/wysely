<template>
  <v-app>
    <v-container class="pa-0 pa-sm-3 pa-md-3">
      <div class="pt-16 pa-6 pa-sm-4 pa-md-4">
        <div>
          <p class="lstctntit headline mb-1">Wealth Profile</p>
          <p class="body-1 mb-0" color="#878B93">
            Update your PAN, Wealth and trading details here.
          </p>
        </div>

        <div class="mt-8">
          <v-row no-gutters>
            <v-col cols="12" md="7">
              <p class="mb-2">your goals with trading and investing</p>
              <div class="userdataview">
                <v-text-field :readonly="userdataview" single-line outlined>
                  <template v-slot:prepend-inner>
                    <v-chip-group class="mt-n3" column>
                      <v-chip v-for="tag in chip" :key="tag">
                        {{ tag }}
                      </v-chip>
                    </v-chip-group>
                  </template>
                </v-text-field>
              </div>
              <p class="mb-2">your current trading happening</p>
              <v-text-field :readonly="userdataview" v-model="UserDetails.curtrhappening"
                label="Select your trade partners" single-line outlined>
              </v-text-field>

              <v-row>
                <v-col cols="6">
                  <p class="mb-2">Your monthly Income</p>
                  <v-text-field :readonly="userdataview" v-model="UserDetails.annualsal" label="Select your Income"
                    single-line outlined>
                  </v-text-field>
                </v-col>
                <v-col cols="6">
                  <p class="mb-2">Your monthly expenses</p>
                  <v-text-field :readonly="userdataview" v-model="UserDetails.annualexp" label="Select your expenses"
                    single-line outlined>
                  </v-text-field>
                </v-col>
              </v-row>

              <p class="mb-2">
                External support manage of your wealth
              </p>
              <v-text-field :readonly="userdataview" v-model="UserDetails.externalsupport" :items="intents"
                label="Select your intent" single-line outlined>
              </v-text-field>
            </v-col>
          </v-row>
        </div>
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
      snackbar: false,
      signinemailname: "",
      userdataview: true,
      getUserDetails: [],
      UserDetails: [],
      newcreate: "new",
      goals: [],
      goalchange: [],
      chip: []

    };
  },
  mounted() {
    let axiosThis = this;
    let decryptedsrtore = localStorage.decryptedstoredname;
    this.signusername = decryptedsrtore;
    console.log("declocalstore mounted", this.signusername);

    let declocalsrore = localStorage.decryptedstoredData;
    this.signinemailname = declocalsrore;
    console.log("declocalstore mounted", this.signinemailname);
    let wealthprofileseasion = localStorage.clientsessionstore
console.log("wealth profile seasion",wealthprofileseasion);
    let data = JSON.stringify({
      email: this.signinemailname,
    });

    let config = {
      method: "post",
      url: `${apiurl}/getUserDetails`,
      headers: {
        "Content-Type": "application/json",
        'Authorization': wealthprofileseasion
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("response wealth profile",response);
        console.log(JSON.stringify(response.data));
        if (response.data.msg == "Token is Expired." || response.data.msg == "Token is Invalid.") {
            axiosThis.snackbar = true;
            setTimeout(function () {
              axiosThis.$router.push("/signin");

            }, 2000);
          }
          else {

          // }
        for (const element of response.data) {
          axiosThis.getUserDetails.push(element);
          console.log("getuser detailes", axiosThis.getUserDetails);
        }
        axiosThis.UserDetails = axiosThis.getUserDetails[0];
        console.log(axiosThis.UserDetails, "UserDetails");
        axiosThis.goals = axiosThis.UserDetails.goals;
        axiosThis.goalchange.push(axiosThis.goals)
        console.log("user change value", axiosThis.goalchange);
        let d = []
        console.log("axiosthis goal changes",axiosThis.goalchange);
        let sa = axiosThis.goals.replace(/[*]+/g, 'C')
        let sd = sa.replace(/[[]+/g, '')
        // eslint-disable-next-line 
        let ss = sd.replace(/]+/g, '')
     


        let sdd = ss.replace(/'+/g, '')

        d = sdd.split(",")
        axiosThis.chip = d
        console.log("userdetails get change", d);
        console.log("goal change", axiosThis.goalschange);
      }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style>
.userdataview .v-text-field>.v-input__control>.v-input__slot>.v-text-field__slot {
    display: none !important;
}
</style>