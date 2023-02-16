<template>
    <v-app>
        <v-container class="pa-0 pa-sm-3 pa-md-3">
            <v-dialog v-model="emailfetchdialog" width="800">
                <v-card class="rounded-lg" style="overflow: hidden;">
                    <div>
                        <v-row class="my-auto">
                            <v-col class="trmnucolsl d-none d-md-block" cols="12" md="5">
                                <div class="pt-2 pl-6">
                                    <p class="ctnbtl headline mb-2" style="color: #505359;">
                                        Add your trades</p>
                                    <p class="body-2" style="color: #6B7280;">
                                        You can now
                                        add your current and old trades to start
                                        tracking
                                        them.</p>
                                </div>
                                <v-card color="transparent" height="100%"
                                    class="elevation-0 d-flex align-end justify-end">
                                    <img src="@/assets/Add your Demat account.svg" width="50%" alt="Demataccount-logo">
                                </v-card>
                            </v-col>
                            <v-col class="trmnucols2" cols="12" md="7">
                                <div v-if="emaildatadialog" class="pt-2 px-6 pr-1">
                                    <v-row no-gutters>
                                        <v-col cols="10">
                                            <p class="mb-0 body-2"
                                                style="color: #FF8D24; letter-spacing: 0.16em; text-transform: uppercase;">
                                                Sync your trades</p>

                                        </v-col>
                                        <v-col cols="2" class="text-right">
                                            <v-btn @click="emailfetchdialog = false" class="mx-2" icon light>
                                                <v-icon light>
                                                    mdi-close
                                                </v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                    <div class="pr-6">
                                        <p class="ctnbtl title" style="line-height:28px;">
                                            Start tracking by sync your email here</p>
                                        <p class="text-center pt-14">
                                   
                                                    <a href="https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/gmail.readonly&access_type=offline&redirect_uri=http://localhost:8080/Accounts&response_type=code&client_id=841602117530-fflcske9v6nltk6spfj4gramgbsmhn0l.apps.googleusercontent.com">
                                                <img class=" rounded-lg" 
                                                    src="@/assets/googleimage.png" width="65%" alt="googleimage-logo" ></a>
                                                
                                        </p>
                                        <p class="mb-1 mt-0 pt-0 mb-sm-1 mt-sm-8 pt-sm-8 mb-md-1 mt-md-10 pt-md-10"
                                            style="color: #FF8D24; letter-spacing: 0.16em;">
                                            <img class="mr-3" src="@/assets/Contract Notes.svg" width="20px" alt="Contract-notes" >EMAIL ID
                                        </p>
                                        <p class="body-1 mb-1 pr-0 pr-sm-6 pr-md-6 mb-sm-4 mb-md-4"
                                            style="color: #6B7280;">
                                            Email id
                                            contain all the information about your
                                            trades on
                                            the
                                            exchanges.</p>
                                    </div>
                                </div>
                                <div v-if="accountdatadialog" class="pt-2 px-6 pr-1">
                                    <v-row no-gutters>
                                        <v-col cols="10">
                                            <p class="title mb-1">Let’s get you setup to get
                                                track’d.</p>
                                        </v-col>
                                        <v-col cols="2" class="text-right">
                                            <v-btn @click="emailfetchdialog = false" class="mx-2" icon light>
                                                <v-icon light>
                                                    mdi-close
                                                </v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                    <div class="pr-6">
                                        <p class="subtitle-1" style="color: #6B7280; ">Some basic
                                            details about you.</p>

                                        <v-form ref="form" v-model="valid" lazy-validation>
                                            <p class="mb-2">Name</p>
                                            <v-text-field type="text" v-model="name" :rules="nameRules" required
                                                label="Your display name" single-line outlined>
                                            </v-text-field>

                                            <v-row no-gutters>
                                                <v-col class="pr-2" cols="6">
                                                    <p class="mb-2">PAN</p>
                                                    <v-text-field v-model="pan" :rules="panRules" required
                                                        label="Your PAN number" single-line outlined
                                                        oninput="this.value = this.value.toUpperCase()">
                                                    </v-text-field>
                                                </v-col>
                                                <v-col class="pl-2" cols="6">
                                                    <p class="mb-2">Relationship</p>
                                                    <v-select v-model="relationship"
                                                        :rules="[v => !!v || 'Your Relationship is required']" required
                                                        :items="Relationship" label="Relationship" single-line outlined>
                                                    </v-select>
                                                </v-col>
                                            </v-row>

                                            <v-row no-gutters>
                                                <v-col class="pr-2" cols="6">
                                                    <p class="mb-2">Broker ID</p>
                                                    <v-select v-model="broker"
                                                        :rules="[v => !!v || 'Your Broker ID is required']" required
                                                        :items="Broker" label="Your Broker ID" single-line outlined>
                                                    </v-select>
                                                </v-col>
                                                <v-col class="pl-2" cols="6">
                                                    <p class="mb-2">Client ID</p>
                                                    <v-text-field v-model="client" :rules="ClientRules" required
                                                        label="Your Client ID" single-line outlined
                                                        oninput="this.value = this.value.toUpperCase()">
                                                    </v-text-field>
                                                </v-col>
                                            </v-row>

                                            <p class="mb-2">Contract notes password</p>
                                            <v-text-field :append-icon="pwseyeicon ? 'mdi-eye' : 'mdi-eye-off'"
                                                :type="pwseyeicon ? 'text' : 'password'" class="input-group--focused"
                                                @click:append="pwseyeicon = !pwseyeicon" v-model="password" required
                                                label="Your Contract notes password" single-line outlined>
                                            </v-text-field>
                                            <v-btn class="mt-2 mb-4" large outlined color="#1877F2"
                                                @click="validate">Add account</v-btn>
                                        </v-form>
                                    </div>
                                </div>
                                <div v-if="completedatadialog">
                                    <p class="text-right mb-0">
                                        <v-btn @click="emailfetchdialog = false" class="mx-2 " icon light>
                                            <v-icon light>
                                                mdi-close
                                            </v-icon>
                                        </v-btn>
                                    </p>
                                    <div class="text-center pt-12 pb-16">
                                        <v-card class="elevation-0 my-16">
                                            <img src="@/assets/accountadded.svg" width="60px" alt="accountadded-logo">
                                            <p class="font-weight-bold headline mt-2">You’ve added <span
                                                    style="color:#FF8D24;">{{ name }}</span>
                                                <br>has a successfully.
                                            </p>
                                        </v-card>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </v-card>
            </v-dialog>

            <!-- ===============================================second pop Start============================================ -->


            <!-- ====================================================second pop END======================================= -->
            <div class="pt-16 pa-6 pa-sm-4 pa-md-4">
                <v-row no-gutters>
                    <v-col cols="12" sm="9" md="9">
                        <p class="lstctntit headline mb-1">
                            {{ signusername }} Accounts
                        </p>
                        <p class="body-1 mb-0" color="#878B93">Add your Demat & Trading account details here.</p>
                    </v-col>
                    <v-col cols="12" sm="3" md="3" class="d-flex flex-row-reverse">
                        <v-btn class="mt-6 mb-4 mt-sm-0 mt-md-0" large outlined color="#1877F2" :disabled="btnaddacc"
                            @click="emailfetchdialog = true, emaildatadialog = true, accountdatadialog = false, completedatadialog = false">
                            Add Account</v-btn>
                    </v-col>
                </v-row>
                <div class="mt-8">

                </div>
                <v-card color="#F9FBFC" style="z-index: 0 !important;" class="elevation-0 rounded-lg pa-4 ">
                    <v-row class="mb-4">
                        <v-col cols="8"><span class="title lstctntit">Total Accounts</span>
                            <v-chip class="text-center ml-3" label color="#E8EBED"><span v-if="dspemailaccount">{{
                                    dspemailaccount.length
                            }}</span><span v-else>0</span>/5
                            </v-chip>
                        </v-col>
                    </v-row>
                    <div v-if="dspnoaccounts" class="text-center ">
                        <img src="@/assets/No trades yet.svg" alt="No-trades-logo" >
                        <p class="title mb-2">No account yet</p>

                        <v-btn class="mt-6 mb-4 mt-sm-0 mt-md-0" plain text color="#1877F2"
                            @click="emailfetchdialog = true, emaildatadialog = true, accountdatadialog = false, completedatadialog = false">
                            Add Account</v-btn>
                    </div>
                    <div v-else>
                        <v-card v-for="item in dspemailaccount" :key="item" outlined
                            class=" elevation-0 rounded-lg mb-2">
                            <v-list-item>
                                <v-row>
                                    <v-col cols="3" md="1">
                                        <v-list-item-avatar class="pb-0">
                                            <v-avatar size="40" color="#e84d76">
                                                <span class="white--text font-weight-bold title text-uppercase">{{
                                                        item.name.slice(0, 1)
                                                }}</span>
                                            </v-avatar>
                                        </v-list-item-avatar>
                                    </v-col>
                                    <v-col cols="5" md="2" class="pb-0 pb-md-3"> <v-list-item-content>
                                            <v-list-item-title>{{ item.name }}</v-list-item-title>
                                            <v-list-item-subtitle>{{ item.accountType }}</v-list-item-subtitle>

                                        </v-list-item-content></v-col>
                                    <v-col cols="4" md="2" class="pb-0 pb-md-3"> <v-list-item-content>
                                            <v-list-item-subtitle>PAN</v-list-item-subtitle>
                                            <v-list-item-title>{{ item.pan }}</v-list-item-title>
                                        </v-list-item-content></v-col>
                                    <v-col cols="3" md="2" class="pt-0 pt-md-3">
                                        <v-list-item-content>
                                            <v-list-item-subtitle>{{ item.BrokerID }}</v-list-item-subtitle>
                                            <v-list-item-title>{{ item.clientID }}</v-list-item-title>
                                        </v-list-item-content></v-col>
                                    <v-col cols="5" md="3" class="pt-0 pt-md-3"> <v-list-item-content>
                                            <v-list-item-subtitle>EMAIL</v-list-item-subtitle>
                                            <v-list-item-title>{{ item.email }}</v-list-item-title>
                                        </v-list-item-content></v-col>
                                    <v-col cols="4" md="2" class="pt-0 pt-md-3"> <v-list-item-content>
                                            <v-list-item-subtitle>LAST SYNC</v-list-item-subtitle>
                                            <v-list-item-title>{{ item.last_sync_date }}</v-list-item-title>
                                        </v-list-item-content></v-col>
                                </v-row>
                            </v-list-item>
                            <v-divider></v-divider>
                        </v-card>
                    </div>
                </v-card>
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
import axios from "axios";
import qs from 'qs'
import { apiurl } from "@/views/apiUrl";
export default {
    data() {
        return {
            snackbar: false,
            signusername: "",

            /* eslint-disable */
            errMsg: "",
            response: "",
            refreshToken: '',
            res: '',
            res_ref: "",

            emailfetchdialog: false,
            emaildatadialog: true,
            accountdatadialog: false,
            completedatadialog: false,
            btnaddacc: false,
            dspnoaccounts: false,
            noofaccnt: '0',
            valid: false,
            validsnd: false,
            pwseyeicon: false,
            name: "",
            pan: '',
            password: '',
            email: this.$hostname,
            broker: "",
            relationship: "",
            client: '',
            $hostname: "",
            nameRules: [
                v => !!v || 'Your Name is required',
                v => (v && v.length >= 3) || 'Name must be more than 3 characters',
            ],
            panRules: [
                v => !!v || 'Your PAN is required',

                v => /[A-Z]{5}\d{4}[A-Z]$/.test(v) || 'PAN number must be valid',

            ],

            ClientRules: [
                v => !!v || 'Your Client ID is required',
            ],
            
            Broker: [
                'ZEBU',
                'Zerodha',
            ],
            Relationship: [
                'Self',
                'Son',
                'Daughter',
                'Wife',
                'Other',
            ],
            color: [
                '#e84d76',
                '#6e6aff',
                '#f5d24c',
                '#63c8d1'
            ],
            loginEmail: '',
            emailDatafetch: [],
            dspemailaccount: [],
        };
    },

    mounted() {
        let access_tokenlocalstr = localStorage.aceesTokenstore
        this.res = access_tokenlocalstr
        console.log("acces_token loc variable store", this.res)


        let errormeassgwtoken = localStorage.refreshTokenalredygen
        console.log("refreshtoken already generatede", errormeassgwtoken)
        this.errMsg = errormeassgwtoken
        console.log("undefinded...........", this.errMsg)

        let decryptedsrtore = localStorage.decryptedstoredname
        this.signusername = decryptedsrtore
        console.log("declocalstore mounted", this.signusername)

        let declocalsrore = localStorage.decryptedstoredData
        this.signinemailname = declocalsrore
        console.log("declocalstore mounted", this.signinemailname)
    },
    created() {
        this.gauthclientseassion = localStorage.clientsessionstore;

        let url = new URL(window.location.href);
        let cOde = url.searchParams.get("code");
        this.loginEmail = localStorage.getItem('decryptedstoredData')
   
        this.emailFetch()

        
        console.log("decoded", cOde)
        if (cOde) {
            let dataX = qs.stringify({
                'code': cOde,
                'client_id': '841602117530-fflcske9v6nltk6spfj4gramgbsmhn0l.apps.googleusercontent.com', // NEW CLIENT ID

                'client_secret': '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', // NEW SECRET ID
                'redirect_uri': 'http://localhost:8080/Accounts',

               
                'grant_type': 'authorization_code',
                'access_type': 'offline',
            });
            console.log("data user mail id", dataX)
            const axiosthis = this;
            const config = {
                method: 'post',
                url: 'https://accounts.google.com/o/oauth2/token',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: dataX
            };
            console.log("da", dataX)
            console.log("CONF", config)
            axios(config)
                .then(function (response) {
                    console.log("response value", response);

                    if (response.data.refresh_token == undefined) {
                        axiosthis.errMsg = "Refresh token already generated"
                        alert("Refresh token already generated")
                        console.log("err meassge", axiosthis.errMsg);
                    }
                    else {
                        axiosthis.errMsg = ""
                    }
                    axiosthis.$router.replace("/Accounts")
                    axiosthis.refreshToken = response.data.refresh_token
                    axiosthis.res = response.data.access_token
                    console.log("acces token meassage", axiosthis.res);
                    axiosthis.res_ref = response.data.refresh_token
                    console.log("res-ref message", axiosthis.res_ref);
                    console.log('axiosthis.res', axiosthis.res)

                    let configx = {
                        method: 'get',
                        url: 'https://gmail.googleapis.com/gmail/v1/users/me/profile',
                        headers: {
                            'Authorization': 'Bearer ' + axiosthis.res
                        },
                    };

                    axios(configx)
                        .then(function (response) {
                            console.log(JSON.stringify(response.data));
                            axiosthis.useremaild = response.data.emailAddress
                            localStorage.setItem('localstroageemailfetch', response.data.emailAddress)
                            console.log("local stroage set item", localStorage.localstroageemailfetch);
                            if (response.data.emailAddress) {
                                console.table('asd')
                                axiosthis.emailfetchdialog = true;
                                axiosthis.emaildatadialog = false;
                                axiosthis.accountdatadialog = true;
                            }
                            console.log("accestok==============", axiosthis.useremaild, axiosthis.res, axiosthis.res_ref);


                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    methods: {
        emailFetch() {
            this.gauthclientseassion = localStorage.clientsessionstore;

            let axiosthis = this
            let data = JSON.stringify({
                "email": this.loginEmail
            });

            let config = {
                method: 'post',
                url: `${apiurl}/syncEmailDetails`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.gauthclientseassion
                },
                data: data
            };

            axios(config)
                .then(function (response) {
                    console.warn("&&&", response)


                    if(response.data.msg == "Token is Expired." || response.data.msg == "Token is Invalid."){
                        axiosthis.snackbar = true;
          setTimeout(function () {
            axiosthis.$router.push("/signin");
           
          }, 2000);
        }
                    axiosthis.emailDatafetch = response.data;
                    axiosthis.dspemailaccount = axiosthis.emailDatafetch.Data;
                    if (response.data.msg == "No Email Sync data available for User") {
                        axiosthis.dspnoaccounts = true
                        axiosthis.emailfetchdialog = true;

                    }
                    if (axiosthis.dspemailaccount.length >= 5) {
                        axiosthis.btnaddacc = true;
                    }
                    console.log("dspemailaccount", axiosthis.dspemailaccount);

                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        addAccount() {
            let axiosthis = this
            console.log("out of addaccount if")

            if (this.res_ref) {
                console.log("inside addaccounrt if")

                let data = JSON.stringify({
                    "login_Email": this.loginEmail,
                    "sync_Email": this.useremaild,
                    "pan": this.pan,
                    "name": this.name,
                    "accessToken": this.res,
                    "refreshToken": this.res_ref,
                    "brokerId": this.broker,
                    "clientId": this.client,
                    "emailSyncNo": "1",
                    "accountType": this.relationship,
                    "Contract_Note_Pass": this.password
                });

                console.log("emailacees referesh", data)
                this.gauthclientseassion = localStorage.clientsessionstore

                let config = {
                    method: 'post',
                    url: `${apiurl}/addSyncEmail`,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': this.gauthclientseassion
                    },
                    data: data
                };
                console.log("saveartoken clientseassion", config)
                axios(config)
                    .then(function (response) {
                        console.log("savetoken", response);
                        console.log("saver token messsage", response.data.data)
                        if (response.data.msg == "User Email for Sync Added") {
                            axiosthis.dspnoaccounts = false
                            axiosthis.accountdatadialog = false;
                            axiosthis.completedatadialog = true;
                            axiosthis.emailFetch()
                        } else {
                            alert("Facing issue in server");
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        validate() {
            this.$refs.form.validate()
            console.log(this.$refs.form.validate())
            if (this.$refs.form.validate()) {
                console.log("validate if")
               
                this.addAccount()
            }
        }
    },
}
</script>

<style>
.btn {
    box-shadow: 0px 8px 16px -4px rgba(22, 34, 51, 0.08) !important;
}
.btntextformatechange{
    text-transform: unset !important;
}

</style>
