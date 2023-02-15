<template>
  <v-app>
    <v-row class="my-auto">
      <v-col class="colsl pa-6 pa-sm-2 pa-md-8 pb-sm-0 pb-md-0" cols="12" sm="6" md="6">
        <img src="@/assets/wyselylogo.svg" alt="wyselylogo" class="pl-0 pl-sm-8 pl-md-8 pt-sm-2 pt-md-2" />

        <div class="cols2txtmbl">
          <img style="color: white" src="@/assets/image 2m.svg" width="100%" alt="image" />
        </div>

        <div class="
            text-center
            ma-4
            pa-sm-0 pa-md-12
            mx-sm-8 mx-md-12
            pb-sm-10 pb-md-10
            mb-sm-6 mb-md-6
          ">
          <p class="title pb-6">Sign in your account using with Google</p>
          <v-btn @click="googleSignIn" block large class="btn white rounded-lg"><img class="pa-2"
              src="@/assets/google.svg" alt="googlelogo" /><span><b>Sign in with Google</b></span></v-btn><br />
          <v-btn @click="facebookSignIn" block large class="btn white mb-12 rounded-lg"><img class="pa-2"
              src="@/assets/facebook.svg" alt="facebooklogo" /><span><b>Sign in with Facebook</b></span></v-btn>
          <p style="color: #858b95" class="mt-8">
            By continuing with Google, you agree our <a style="text-decoration: none;" href="/terms">Terms</a> and
            <a style="text-decoration: none;" href="/privacy">Privacy Policy.</a>
          </p>
        </div>
      </v-col>

      <v-col class="cols2 pa-6" cols="12" sm="6" md="6">
        <div class="cols2img"></div>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>

import { apiurl } from "../apiUrl";
import axios from "axios";
import Vue from "vue";
import VueCryptojs from "vue-cryptojs";


Vue.use(VueCryptojs);
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  // fetchSignInMethodsForEmail,
  // signOut,
} from "firebase/auth";

export default {
  data() {
    return {
      // $hostname: "",
      // $signinusername: "",
      secret: "12345678",
    };
  },
  methods: {
    getTokenDetials() {
      let data = '';
      let config = {
        method: 'post',
        url: `${apiurl}/getToken`,
        headers: {},
        data: data
      };

      axios(config)
        .then(function (response) {
          console.log("getTokendata", response.data.Token)
          localStorage.setItem(
            "getTokendata",
            response.data.Token
          );
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    checkClientSync(email) {
      let gauthclientseassion = localStorage.clientsessionstore;
      console.warn("&&&-WoRKING",email,gauthclientseassion);
      let axiosthis = this;
      let data = JSON.stringify({
        email: email,
      });

      let config = {
        method: "post",
        url: `${apiurl}/syncEmailDetails`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': gauthclientseassion
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          axiosthis.emailDatafetch = response.data.Data;
          console.warn("&&&", axiosthis.emailDatafetch[0].clientID);

          localStorage.setItem(
            "client-id",
            axiosthis.emailDatafetch[0].clientID
          );
       
          console.log("dspemailaccount", axiosthis.dspemailaccount);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    googleSignIn: function () {
      
      const provider = new GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");
      // provider.addCredentialHelper('firebaseui.auth.CredentialHelper.GOOGLE_YOLO')
      // console.log("provider",provider)

      provider.setCustomParameters({
        // 'credentialHelper': "firebaseui.auth.CredentialHelper.GOOGLE_YOLO",
        prompt: "select_account",
      });
      signInWithPopup(getAuth(), provider)
        .then((result) => {
          console.log("Logged In", result);
          this.google = true;
          this.getTokenDetials();
          let axiosthis = this;

          let data = JSON.stringify({
            UserName: result._tokenResponse.fullName,
            Email: result._tokenResponse.email,
            Provider: result.providerId,
            SessionId: result.user.accessToken,
          });
          console.log("result acess token", data);
          //signinuserename encrept&decryted start
          let encryptedsignname = this.$CryptoJS.AES.encrypt(
            result._tokenResponse.fullName,
            "Secret Passphrase"
          ).toString();
          console.log("encryptedText", encryptedsignname);
          localStorage.storedData = encryptedsignname;
          console.log("encript local stroage", localStorage.storedData);
          let localStoragestorename = localStorage.storedData;
          let decryptedname = this.$CryptoJS.AES.decrypt(
            localStoragestorename,
            "Secret Passphrase"
          ).toString(this.$CryptoJS.enc.Utf8);
          console.log("decrypted store value", decryptedname);
          localStorage.decryptedstoredname = decryptedname;
          console.log(
            "decrypted local stroage store value",
            localStorage.decryptedstoredname
          );
          // signinusername  end
          // signinuseremailid encrept&decryted start
          let encryptedText = this.$CryptoJS.AES.encrypt(
            result._tokenResponse.email,
            "Secret Passphrase"
          ).toString();
          console.log("encryptedText", encryptedText);
          localStorage.storedData = encryptedText;
          console.log("encript local stroage", localStorage.storedData);
          let localStoragestore = localStorage.storedData;
          let decryptedText = this.$CryptoJS.AES.decrypt(
            localStoragestore,
            "Secret Passphrase"
          ).toString(this.$CryptoJS.enc.Utf8);
          console.log("decrypted store value", decryptedText);
          localStorage.decryptedstoredData = decryptedText;
          console.log(
            "decrypted local stroage store value",
            localStorage.decryptedstoredData
          );
          // signinuseremail id end

          //  global variable declare signin usename&emailid
          (Vue.prototype.$hostname = result._tokenResponse.email);
            console.log("globalvariablename", this.$hostname);
          (Vue.prototype.$signinusername = result._tokenResponse.fullName);
            console.log("signin user fullname", this.$signinusername);
          // global variable end
          let config = {
            method: "post",
            url: `${apiurl}/saveuser`,
            headers: {
              "Content-Type": "application/json",
              // 'Authorization': 'Bearer ' +localstroageget
            },
            data: data,
          };
          console.log("check header value", config);
          axios(config)
            .then(function (response) {
              console.log("response value change", response.data);
              console.log("client seassion", response.data.clientsession);
              localStorage.clientsessionstore = response.data.clientsession;
              axiosthis.checkClientSync(result._tokenResponse.email);

              console.log(
                "localStorage clientsession",
                localStorage.clientsessionstore
              );
            })
            .catch(function (error) {
              console.log(error);
            });
            setTimeout(function(){
          let datas = JSON.stringify({
            Email: result._tokenResponse.email,
          });
          console.log("datas", datas);
          let localstroageget = localStorage.clientsessionstore;
          console.log("localstroage get value", localstroageget);
          let configs = {
            method: "post",
            url: `${apiurl}/getuserdetailstatus`,
            headers: {
              "Content-Type": "application/json",
              Authorization: localstroageget,
            },
            data: datas,
          };

          console.log("header get local stroage value", configs);
          axios(configs)
            .then(function (response) {
              console.log("get user detail status response", response);

              if ((response.data.userstatus == "Page2") || (response.data.userstatus == "User Already Available")) {
                if (axiosthis.emailDatafetch) {
                  axiosthis.$router.push("/Dashboard");
                } else {
                  // axiosthis.$router.push('Accounts')
                  axiosthis.$router.push("/Accounts");
                }
              }
              if (response.data.userstatus == "User not available") {
                axiosthis.$router.push("/welcome");
              }
              if (response.data.userstatus == "Page1") {
                // preferencetwo
                axiosthis.$router.push("/preferencetwo");
              }
            })
            .catch(function (error) {
              console.log(error);
            });
            }, 1000);
       
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    facebookSignIn: function () {
      const provider = new FacebookAuthProvider();
      provider.setCustomParameters({
        prompt: "select_account",
      });
      signInWithPopup(getAuth(), provider).then((result) => {
        console.log("Logged In ", result);
        this.facebook = true;
        // this.$router.push('landing')
        this.checkClientSync(result._tokenResponse.email);
        let data = JSON.stringify({
          UserName: result._tokenResponse.fullName,
          Email: result._tokenResponse.email,
          Provider: result.providerId,
          IdToken: result._tokenResponse.idToken,
          SessionId: result.user.accessToken,
        });
        console.log("result acess token", data);
        let encryptedsignname = this.$CryptoJS.AES.encrypt(
          result._tokenResponse.fullName,
          "Secret Passphrase"
        ).toString();
        console.log("encryptedText", encryptedsignname);
        localStorage.storedData = encryptedsignname;
        console.log("encript local stroage", localStorage.storedData);
        let localStoragestorename = localStorage.storedData;
        let decryptedname = this.$CryptoJS.AES.decrypt(
          localStoragestorename,
          "Secret Passphrase"
        ).toString(this.$CryptoJS.enc.Utf8);
        console.log("decrypted store value", decryptedname);
        localStorage.decryptedstoredname = decryptedname;
        console.log(
          "decrypted local stroage store value",
          localStorage.decryptedstoredname
        );
        // signinusername  end
        // signinuseremailid encrept&decryted start
        let encryptedText = this.$CryptoJS.AES.encrypt(
          result._tokenResponse.email,
          "Secret Passphrase"
        ).toString();
        console.log("encryptedText", encryptedText);
        localStorage.storedData = encryptedText;
        console.log("encript local stroage", localStorage.storedData);
        let localStoragestore = localStorage.storedData;
        let decryptedText = this.$CryptoJS.AES.decrypt(
          localStoragestore,
          "Secret Passphrase"
        ).toString(this.$CryptoJS.enc.Utf8);
        console.log("decrypted store value", decryptedText);
        localStorage.decryptedstoredData = decryptedText;
        console.log(
          "decrypted local stroage store value",
          localStorage.decryptedstoredData
        );
        // signinuseremail id end

        //  global variable declare signin usename&emailid
        // global variable end
        let config = {
          method: "post",
          url: `${apiurl}/saveuser`,
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };
        console.log("check header value", config);
        axios(config)
          .then(function (response) {
            console.log("Facebook signin response", response);
            console.log("Facebook signin response.data", response.data);
            console.log("client seassion", response.data.clientsession);
            localStorage.clientsessionstore = response.data.clientsession;
            console.log(
              "localStorage clientsession",
              localStorage.clientsessionstore
            );
          })
          .catch(function (error) {
            console.log(error);
          });

        let axiosthis = this;
        let datas = JSON.stringify({
          Email: result._tokenResponse.email,
        });


        console.log("fb getuser email", datas);
        let localstroageget = localStorage.clientsessionstore;
        console.log("localstroage get value", localstroageget);
        let configs = {
          method: "post",
          url: `${apiurl}/getuserdetailstatus`,
          headers: {
            "Content-Type": "application/json",
            Authorization: localstroageget,
          },
          data: datas,
        };

        console.log("header get local stroage value", configs);
        axios(configs)
          .then(function (response) {
            console.log("get user detail status response", response);
           
            if (response.data.userstatus == "Page1") {
              axiosthis.$router.push("/preferencetwo");
            }
            if ((response.data.userstatus == "Page2") || (response.data.userstatus == "User Already Available")) {
              if (axiosthis.emailDatafetch) {
                axiosthis.$router.push("/Dashboard");
              } else {
                axiosthis.$router.push("/Accounts");
              }
            }
            if (response.data.userstatus == "User not available") {
              axiosthis.$router.push("/welcome");
            }
          
          })
          .catch(function (error) {
            console.log(error);
          });


      });
    },
  },

 
};
</script>

<style>
.v-application,
.v-application .display-1,
.v-application .headline,
.v-application .title,
.v-application .subtitle-1,
.v-application .subtitle-2,
.v-application .body-1,
.v-application .body-2,
.v-application .caption,
.v-application .overline {
  font-family: "DM Sans", sans-serif !important;
}

.colsl {
  background-color: #f9fbfc !important;
}

.cols2img {
  height: 100% !important;
  background-image: url(@/assets/image\ 2m.svg) !important;
  background-color: white !important;
  background-size: 100% !important;
}

.cols2txt {
  position: absolute;
  bottom: 15% !important;
  font-weight: 500 !important;
}

.lpbtmctn {
  position: absolute;
  bottom: 0 !important;
  width: 45% !important;
}

.cols2txtmbl {
    display: none !important;
}

@media only screen and (max-width: 600px) {
  .colsl {
    background-color: white !important;
    text-align: center;
  }

  .cols2txtmbl {
    display: contents !important;
  }

  .cols2 {
      display: none !important;
  }

  .cols2txt {
    position: static;
    bottom: none !important;
  }

  .lpbtmctn {
    position: absolute;
    bottom: 0 !important;
    width: 100% !important;
  }

  .btn {
    box-shadow: 0px 8px 16px -4px rgba(22, 34, 51, 0.08) !important;
  }
}
</style>