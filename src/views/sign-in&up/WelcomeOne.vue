<style>
.lptcolsl {
  background-color: #f9fbfc !important;
  background-size: 80% !important;
}

.lpbtmctn {
  position: absolute;
  width: 45%;
  bottom: 20px !important;
}

.lptonbotit {
  font-weight: 500 !important;
  line-height: 44px !important;
}

.startedtomsg {
  font-weight: 500 !important;
}

.v-input__slot {
  margin-bottom: 0 !important;
}

@media only screen and (max-width: 600px) {
  .lptcolsl {
      display: none !important;
  }

  .btn {
    width: 100%;
  }
}
</style>
<template>
  <v-app>
    <div class="lpcolslm">
      <img class="ml-6 mt-4" src="@/assets/wyselylogo.svg" alt="wyselylogo" width="25%" />
      <div class="lpbg pa-8">
        <img src="@/assets/Welcome_to_wysely_chart.svg" alt="wysely_chart-logo" width="100%" />
        <p class="body-1" style="color: #ff8d24; text-transform: uppercase">
          Welcome to wysely
        </p>
        <p style="font-weight: 700" class="title">
          All your trades & tracking under one roof.
        </p>
        <p class="body-2 mb-0" style="color: #6b7280">
          Manage all your trading activity under one roof. Find insights and key
          updates for your holdings.
        </p>
      </div>
    </div>

    <v-row>
      <v-col
        class="lptcolsl pa-6 pa-sm-10 pa-md-10 pb-sm-0 pb-md-0"
        cols="12"
        sm="6"
        md="6"
      >
        <img src="@/assets/wyselylogo.svg" alt="wyselylogo" class="pl-6 pt-3" />
        <div class="pl-6 lpbtmctn">
          <img
            class="lptonboimg"
            src="@/assets/Welcome_to_wysely_chart.svg"
            width="80%" alt="wysely_chart-logo"
          />
          <p
            class="lptonbohd title"
            style="color: #ff8d24; text-transform: uppercase"
          >
            Welcome to wysely
          </p>
          <p class="lptonbotit display-1 pr-16">
            All your trades & tracking under one roof.
          </p>
          <p class="lptonbomsg title pr-16" style="color: #6b7280">
            Manage all your trading activity under one roof. Find insights and
            key updates for your holdings.
          </p>
        </div>
      </v-col>

      <v-col
        class="lptcols2 px-12 pt-6 px-md-12 px-sm-12 pt-md-14 pt-sm-14"
        cols="12"
        sm="6"
        md="6"
      >
        <div class="mr-0 mr-sm-12 mr-md-16">
          <v-form ref="form" v-model="valid" lazy-validation>
            <p class="mb-1" style="color: #ff8d24">Preferences 1 of 2</p>
            <p class="title mb-1">Let’s get you setup to get track’d.</p>
            <p class="subtitle-1" style="color: #6b7280">
              Some basic details about you.
            </p>

            <p class="mb-2">What do we call you?</p>
            <v-text-field
              v-model="name"
              :rules="nameRules"
              required
              label="Your display name"
              single-line
              outlined
            >
            </v-text-field>

            <p class="mb-2">Email we can reach you at?</p>
            <v-text-field
              v-model="signinemailname"
              :rules="emailRules"
              disabled
              required
              label="Your email"
              single-line
              outlined
            >
            </v-text-field>

            <v-row>
              <v-col cols="6">
                <p class="mb-2">Date of birth</p>
                <v-menu
                  ref="dobmenu"
                  v-model="dobmenu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      :rules="[(v) => !!v || 'Your Date of birth is required']"
                      required
                      placeholder="Select Date of Birth"
                      v-model="date"
                      label="YYYY/MM/DD"
                      append-icon="mdi-calendar"
                      outlined
                      color="gray"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    >
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="dobmenu = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dobmenu.save(date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="6">
                <p class="mb-2">Mobile Number</p>
                <v-text-field
                  v-model="mobile"
                  :rules="mobileRules"
                  required
                  type="number"
                  label="Your Mobile Number"
                  single-line
                  outlined
                >
                </v-text-field>
              </v-col>
            </v-row>

            <p class="mb-2">How many members in your family?</p>
            <v-select
              append-icon="mdi-chevron-down"
              v-model="family"
              :rules="[(v) => !!v || 'Your family members count is required']"
              required
              :items="familys"
              label="Family members"
              single-line
              outlined
            ></v-select>

            <v-btn
              class="btn mt-6 mb-4 mt-sm-0 mt-md-0"
              :disabled="!valid"
              large
              outlined
              color="#1877F2"
              @click="validate"
              >Go to next step</v-btn
            >
          </v-form>
        </div>
       
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import axios from "axios";
import { apiurl } from "../apiUrl";
export default {
  data() {
    return {
      date: null,

      valid: false,
      validsnd: false,
      name: "",
      signinemailname: '',
      dobmenu: "",
      mobile: "",
      family: "",
      nameRules: [
        (v) => !!v || "Your Name is required",
        (v) => (v && v.length >= 3) || "Name must be more than 3 characters",
      ],
      emailRules: [
        (v) => !!v || "Your E-mail is required",
      ],
      mobileRules: [
        (v) => !!v || "Your mobile number is required",
        (v) =>
          /^[6-9]\d{9}$/.test(v) || "mobile number must be 10 Digit Number",
      ],
      familys: [
        "Below 2 members",
        "2 to 4 members",
        "5 to 7 members",
        "7 to 9 members",
        "9 or more members",
      ],
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
      console.log(this.$refs.form.validate());
      if (this.$refs.form.validate()) {
        let welcomeoneclisesion = localStorage.clientsessionstore;
        console.log("welcomeone local cilent session", welcomeoneclisesion);
        let axiosthis = this;
        console.log("data", data);

        let data = JSON.stringify({
          UserName: this.name,
          Email: this.signinemailname,
          userStatus: "Page1",
          No_Of_FamilyMem: this.family,
          DOB: this.date,
          MobileNo: this.mobile,
        });

        let config = {
          method: "post",
          url: `${apiurl}/saveuserdetails`,
          headers: {
            "Content-Type": "application/json",
            Authorization: welcomeoneclisesion,
          },
          data: data,
        };
        console.log("welcome page header check response", config);

        axios(config)
          .then(function (response) {
            console.log("welcomepage1 response", response);
            console.log("welcomepage1 status", response.data.data);

            if (response.data.data == "Page 1 Details Added") {
              axiosthis.$router.push("/preferencetwo");
              console.log(JSON.stringify(response.data));
              console.log("validateresponse", response.data);
            } else {
              axiosthis.$router.push("/signin");
              localStorage.clear();
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }

      console.log(this.name);
      console.log(this.email);
      console.log(this.select);
      console.log(this.goals);
    },
  },
  mounted() {
    let access_tokenlocalstr = localStorage.aceesTokenstore;
    this.res = access_tokenlocalstr;
    console.log("acces_token loc variable store", this.res);
    let declocalsrore = localStorage.decryptedstoredData;
    this.signinemailname = declocalsrore;
    console.log("signinemailname", this.signinemailname);
  },
};
</script>

<style>
.v-input input::-webkit-outer-spin-button,
.v-input input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0 !important;
}
</style>