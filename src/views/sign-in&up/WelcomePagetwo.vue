<template>
  <v-app>
    <div class="lpcolslm">
      <img class="ml-6 mt-4" src="@/assets/wyselylogo.svg" alt="wyselylogo" width="25%">
      <div class="lpbg pa-8">
        <img src="@/assets/Welcome_to_wysely_chart.svg" alt="wyselylogo" width="100%">
        <p class="body-1" style="color: #FF8D24;  text-transform: uppercase;">Welcome to
          wysely</p>
        <p style=" font-weight: 700;" class="title">All your trades &
          tracking under one roof.</p>
        <p class="body-2 mb-0" style="color: #6B7280; ">
          Manage all your trading activity under one roof.
          Find insights and key updates for your holdings.</p>
      </div>
    </div>

    <v-row>
      <v-col class=" lptcolsl pa-6 pa-sm-10 pa-md-10 pb-sm-0 pb-md-0" cols="12" sm="6" md="6">
        <img src="@/assets/wyselylogo.svg" alt="wyselylogo" class="pl-6 pt-3">
        <div class="pl-6 lpbtmctn">
          <img class="lptonboimg" src="@/assets/Welcome_to_wysely_chart.svg" alt="wyselylogo" width="80%">
          <p class="lptonbohd title" style="color: #FF8D24;  text-transform: uppercase;">Welcome
            to wysely</p>
          <p class="lptonbotit display-1 pr-16">All your trades
            &
            tracking under one roof.</p>
          <p class="lptonbomsg title pr-16" style="color: #6B7280; ">
            Manage all your trading activity under one roof.
            Find
            insights and key updates for your holdings.</p>
        </div>
      </v-col>

      <v-col class="lptcols2 px-12 pt-6 px-md-12 px-sm-12 pt-md-14 pt-sm-14" cols="12" sm="6" md="6">
        <div class="mr-0 mr-sm-12 mr-md-16">
          <v-form ref="formsnd" lazy-validation>
            <div>
              <p class="mb-1" style="color: #FF8D24;">Preferences 2 of 2</p>
              <p class="title mb-1">Let’s get you setup to get
                track’d.</p>
              <p class="subtitle-1" style="color: #6B7280; ">Your trading details about you.</p>

              <p class="mb-2">What are your goals with trading and investing?</p>
              <v-select append-icon="mdi-chevron-down" :rules="[v => !!v || 'your goals is required']" required
                v-model="goal" outlined :items="goals" chips label="Share your goals here." multiple single-line>
              </v-select>

              <p class="mb-2">Where are you current trading happening?</p>
              <v-select append-icon="mdi-chevron-down" v-model="partner"
                :rules="[v => !!v || 'your trade partners is required']" required :items="partners"
                label="Select your trade partners" single-line outlined></v-select>

              <v-row>
                <v-col cols="6">
                  <p class="mb-2">Your monthly Income</p>
                  <v-select append-icon="mdi-chevron-down" v-model="salary"
                    :rules="[v => !!v || 'your Income is required']" required :items="salarys"
                    label="Select your Income" single-line outlined></v-select>
                </v-col>
                <v-col cols="6">
                  <p class="mb-2">Your monthly expenses</p>
                  <v-select append-icon="mdi-chevron-down" v-model="expense"
                    :rules="[v => !!v || 'your expenses is required']" required :items="expenses"
                    label="Select your expenses" single-line outlined></v-select>
                </v-col>
              </v-row>

              <p class="mb-2">Do you need any external support manage your wealth?</p>
              <v-select append-icon="mdi-chevron-down" v-model="intent" :rules="[v => !!v || 'your intent is required']"
                required :items="intents" label="Select your intent" single-line outlined></v-select>

              <v-btn class="btn mt-6 mb-4 mt-sm-0 mt-md-0" large outlined color="#1877F2" @click="validatesnd">Get
                started now!</v-btn>
            </div>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import axios from 'axios';
import { apiurl } from '../apiUrl';
export default {
  data() {
    return {
      /* eslint-disable */
      valid: false,
      goal: '',
      partner: '',
      salary: '',
      expense: '',
      intent: '',
      // $yourVariable:"",

      goals: [
        'Main strem income',
        'Passive income',
        'Creating crore',
        'Retirement',
        'Tax saveing',
        'Emergency fund',
        'Child education',
        'Other',
      ],
      partners: [
        'ZEBU',
      ],
      salarys: [
        'under 15,000',
        '15,000 to 24,999',
        '25,000 to 34,999',
        '35,000 to 49,999',
        '50,000 to 74,999',
        '75,000 to 99,999',
        '100,000 to 149,999',
        '150,000 to 199,999',
        '200,000 and over',
      ],
      expenses: [
        'below 20% ',
        '20% to 40%',
        '40% to 60%',
        '60% to 80%',
        '80% to 100%',
      ],
      intents: [
        'Investment advice and management',
        'General long - term financial planning',
        'Risk management and insurance planning',
        'Strategic tax planning',
        'Retirement planning',
        'no required',
        'Other',
      ],

    }
  },
  mounted() {
    console.log(this.$hostname)
  },
  methods: {
    validatesnd() {
      if (this.$refs.formsnd.validate()) {
        let welcometwoclisesion = localStorage.clientsessionstore
        console.log("welcomeone local cilent session", welcometwoclisesion);
        let axiosthis = this;
        let datasd = JSON.stringify({
          "userStatus": "Page2",
          "Email": this.$hostname,
          "Goals": this.goal,
          "CurrentHappening": this.partner,
          "AnnualSalary": this.salary,
          "AnnualExpenses": this.expense,
          "AnnualSupReq": this.intent,
        });
        console.log("saveuser details", datasd);
        let config = {
          method: 'post',
          url: `${apiurl}/saveuserdetails`,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': welcometwoclisesion
          },
          data: datasd
        };
        console.log("welcome page two header check", config);
        axios(config)
          .then(function (response) {
            console.log("welcome page 2 ", response);
            console.log("welcome page 2 status ", response.data.data);

            if (response.data.data == "Page 2 Details Added") {
              axiosthis.$router.push("/preferencecompleted")
            }
            else {
              axiosthis.$router.push('/signin')
              localStorage.clear();
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
  }
}
</script>