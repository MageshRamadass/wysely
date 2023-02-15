<template>
    <div>
        <v-container>
      <v-card max-width="400px" class="mx-auto my-auto elevation-0 py-8 pb-1 rounded-lg text-center">
        <div class="px-4 px-sm-6 px-md-8">

          <v-form v-model="isFormValid">

            <v-text-field
            label="Client ID"
            outlined
            v-model="clientid"
            oninput="this.value = this.value.toUpperCase()"
          ></v-text-field>

          <v-text-field
            label="Mobile No"
            outlined
            v-model="mobileNum"
            type="number"
          ></v-text-field>
          </v-form>

          <v-btn @click="verifyOtp()" :disabled="!isFormValid" class="mt-4" block>GEnerate</v-btn>

       
             <v-row no-gutters class="my-4">
              <v-col cols="12">
                <v-divider class="mx-2 mt-2" color="#DBE3EA"></v-divider>
              </v-col>
            </v-row>
            <a href="/totpsignup">Login with TOTP
            </a>

            <v-text-field
            class="mt-6"
            label="Secret Key"
            outlined
            v-model="secretKey"
            readonly
            v-if="secretTextBox"
            append-icon="mdi-content-copy"
            @click:append="copyText()"
          ></v-text-field>
        </div>
      </v-card>
      <v-snackbar style="z-index: 2 !important;" transition="slide-x-reverse-transition" v-model="snackbar"
        :timeout="20000" :value="true" color="warning" absolute outlined top right>
        <v-icon color="warning">mdi-alert-outline</v-icon>
         User not exist.
      </v-snackbar>
    </v-container>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            secretTextBox: false,
            snackbar: false,
            secretKey: '',
            responseData:'',
            otp: '',
            length: 6,
            mobileNum:'',
            clientid:''
        }
    },
    computed: {
      isActive () {
        return this.otp.length === this.length
      },
    },
    methods: {
        copyText() {
      navigator.clipboard.writeText(this.secretKey);
    },
        verifyOtp() {
            console.log(this.clientid,this.mobileNum,this.otp)
            let axiosthis = this

             let data = JSON.stringify({
                "email": "venkateshwaranns@gmail.com",
                "mobile": this.mobileNum,
                "userid": this.clientid,
                });

                let config = {
                method: 'post',
                url: 'http://192.168.5.94:5000/totp',
                headers: { 
                    'Content-Type': 'application/json'
                },
                data : data
                };

                axios(config)
                .then(function (response) {
                console.log("topt responce",response.data);
                axiosthis.responseData = response.data
                if ((axiosthis.responseData.status == "user not exist"))  {
                    axiosthis.snackbar = true
                } else {
                    axiosthis.secretTextBox = true
                    axiosthis.secretKey = axiosthis.responseData.secret_key
                }
                })
                .catch(function (error) {
                console.log(error);
                });
        }
    }
}
</script>