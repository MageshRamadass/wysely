
<template>
    <div align-item="center">
        <v-container >
      <v-card max-width="400px" class="mx-auto my-auto elevation-0 py-8 pb-1 rounded-lg text-center">
        <div class="px-4 px-sm-6 px-md-8">


            <v-text-field
            label="Client ID"
            outlined
            v-model="clientid"
            oninput="this.value = this.value.toUpperCase()"
          ></v-text-field>
          <v-btn @click="verifyClient()" class="mt-4" block>Verify</v-btn>

            <div v-if="otpScreen">
            <v-card-subtitle class="px-0 pb-0" style="text-align:left">TOTP</v-card-subtitle>
            <v-otp-input
            v-model="otp"
            :length="length"
          ></v-otp-input>
          <v-btn @click="verifyOtp()" class="mt-4" block :disabled="!isActive">Ready</v-btn>
        </div>

             <v-row no-gutters class="my-4">
              <v-col cols="12">
                <v-divider class="mx-2 mt-2" color="#DBE3EA"></v-divider>
              </v-col>
            </v-row>
            <a href="/totpgenerate" style="color:;">Generate TOTP
            </a>
        </div>
      </v-card>
      <v-snackbar style="z-index: 2 !important;" transition="slide-x-reverse-transition" v-model="snackbar"
        :timeout="5000" :value="true" color="warning" absolute outlined top right>
        <v-icon color="warning">mdi-alert-outline</v-icon>
         {{ responseData.status }}  {{ errmsg }}
      </v-snackbar>

    </v-container>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            verifyBtn: true,
            snackbar: false,
            otpScreen: false,
            responseData:'',
            checkRes:'',
            otp: '',
            length: 6,
            mobileNum:'',
            clientid:'',
            errmsg:''
        }
    },
    computed: {
      isActive () {
        return this.otp.length === this.length
      },
    },
    methods: {
        verifyClient() {
            let axiosthis = this
                            let data = JSON.stringify({
                "email": "venkateshwaranns@gmail.com",
                "mobile": "7639366224",
                "userid": this.clientid
                });

                let config = {
                method: 'post',
                url: 'http://192.168.5.94:5000/userid',
                headers: { 
                    'Content-Type': 'application/json'
                },
                data : data
                };

                axios(config)
                .then(function (response) {
                console.log(JSON.stringify(response.data.data));
                axiosthis.checkRes = response.data.data
                if (axiosthis.checkRes == "Valid User") {
                    axiosthis.otpScreen = true
                    // axiosthis.verifyBtn = false
                } else {
                    axiosthis.errmsg = "Invalid User"
                    axiosthis.snackbar = true
                }
                })
                .catch(function (error) {
                console.log(error);
                });

        },
        verifyOtp() {
            console.log(this.clientid,this.mobileNum,this.otp)
            let axiosthis = this
             let data = JSON.stringify({
                "email": "venkateshwaranns@gmail.com",
                "mobile": "76393",
                "userid": this.clientid,
                "totp": this.otp
                });

                let config = {
                method: 'post',
                url: 'http://192.168.5.94:5000/totpverify',
                headers: { 
                    'Content-Type': 'application/json'
                },
                data : data
                };

                axios(config)
                .then(function (response) {
                    axiosthis.errmsg = ''
                console.log("topt responce",response.data);
                axiosthis.responseData = response.data
                if ((axiosthis.responseData.status == "Totp is Not-valid") || (axiosthis.responseData.status == "User not exist"))  {
                    axiosthis.snackbar = true
                } 
                })
                .catch(function (error) {
                console.log(error);
                axiosthis.errmsg = "Server not reachable, Please try again later"
                axiosthis.snackbar = true
                });
        }
    }
}
</script>