<template>
  <v-app>
    <div class="">
      <v-snackbar style="z-index: 2 !important;" transition="slide-x-reverse-transition" v-model="snackbar" 
        :timeout="2000" :value="true" color="warning" absolute outlined top right>
        <v-icon color="warning">mdi-alert-outline</v-icon>
        Session <strong>expired</strong> Kindly Login again.
      </v-snackbar>
    </div>
    <v-container class="pa-0 pa-sm-3 pa-md-3">
      <div class="pt-16 pa-6 pa-sm-4 pa-md-4">
        <div>
          <p class="lstctntit headline mb-1">User Profile</p>
          <p class="body-1 mb-0" color="#878B93">
            Update your photo and personal details here.
          </p>
        </div>

        <div class="mt-8">
          <v-row no-gutters class="d-flex flex-column-reverse flex-md-row">
      
            <v-col cols="12" md="7">
              <p class="mb-2">Name</p>
              <v-text-field
                :readonly="userdataview"
                v-model="UserDetails.username"
                label="Your display name"
                single-line
                outlined
              >
              </v-text-field>

              <p class="mb-2">Email ID</p>
              <v-text-field
                :readonly="userdataview"
                v-model="UserDetails.useremail"
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
                        :readonly="userdataview"
                        placeholder="Select Date of Birth"
                        v-model="UserDetails.dob"
                        label="YYYY/MM/DD"
                        append-icon="mdi-calendar"
                        outlined
                        color="gray"
                        v-bind="attrs"
                        v-on="on"
                      >
                      </v-text-field>
                    </template>
                    <v-date-picker
                      v-model="UserDetails.dob"
                      :readonly="userdataview"
                      no-title
                      scrollable
                    >
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="6">
                  <p class="mb-2">Mobile Number</p>
                  <v-text-field
                    :readonly="userdataview"
                    v-model="UserDetails.mobileno"
                    type="number"
                    label="Your Mobile Number"
                    single-line
                    outlined
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <p class="mb-2">family members count</p>
              <v-text-field
                :readonly="userdataview"
                v-model="UserDetails.nofamilymembers"
                label="Family members"
                single-line
                outlined
              >
              </v-text-field>
            </v-col>

            <v-col cols="12" md="5" class="text-center mb-6">
              <p class="font-weight-bold">Profile Photo</p>
              <v-avatar color="#E3E7EC" size="160">
                <v-icon color="#FFFFFF" size="158" v-if="addimageprofile">mdi-account</v-icon>
                <img :src="preview" class="img-fluid" width="20" alt="img-fluid" />
              </v-avatar>
              <div class="mr-n8">
                <v-btn
                
                  class="mx-2 elevation-0 mt-n16 mr-n16"
                  fab
                  dark
                  small
                  multiple
                  color="#FF8D24"
                >
                <label>
                  <v-icon dark> mdi-camera </v-icon>
                  <input type="file" name="myfile" @change="previewImage" accept="image/*" style="display:none">
                </label>
                </v-btn>
              </div>
  
              <span class="subtitle-2 gray--text font-weight-regular"
                >Click to upload or drag and drop<br />SVG, PNG, JPG or
                GIF</span
              >
              <v-row class="d-flex justify-center">
                <v-switch loading="none" value input-value="true"></v-switch>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
    
  </v-app>
</template>

<script>
import { apiurl } from "../../apiUrl";
import axios from "axios";

export default {
  data() {
    return {
      addimageprofile:true,
      preview: null,
      image: null,
      snackbar:false,
      signinemailname: "",
      imageUrl: '',
      date: null,
      name: "",
      email: "",
      dobmenu: "",
      mobile: "",
      family: "",
      familys: [
        "Below 2 members",
        "2 to 4 members",
        "5 to 7 members",
        "7 to 9 members",
        "9 or more members",
      ],
      userdataview: true,
      getUserDetails: [],
      UserDetails: [],
      switch1: false,
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
    let userprofileseasion = localStorage.clientsessionstore
    console.log("userprofileseasion",userprofileseasion);
    let data = JSON.stringify({
      email: this.signinemailname,
    });

    let config = {
      method: "post",
      url: `${apiurl}/getUserDetails`,
      headers: {
        "Content-Type": "application/json",
        'Authorization': userprofileseasion
      },
      data: data,
    };
    console.log("config seasion check",config);

    axios(config)
      .then(function (response) {
       
        console.log("user profile response",response);
       
        console.log("response getuser detailes",response.data.msg);
          
       
    if(response.data.msg == "Token is Expired." || response.data.msg == "Token is Invalid."){
          axiosThis.snackbar = true;
          setTimeout(function () {
            axiosThis.$router.push("/signin");
          }, 2000);
        }
      else{
        for (const element of response.data) {
          axiosThis.getUserDetails.push(element);
        }
    
        axiosThis.UserDetails = axiosThis.getUserDetails[0];
        console.log(axiosThis.UserDetails, "UserDetails");
         }

      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods :{
    previewImage: function(event) {
      let input = event.target;
      if (input.files) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
          if (this.preview) {
            this.addimageprofile=false
          }
        }
        this.image=input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    
    resizeImg(img, height, width) {
    img.height = height;
    img.width = width;
},
    chooseImage () {
      this.$refs.fileInput.click()
    },

    onSelectFile () {
      const input = this.$refs.fileInput
      const files = input.files
      if (files && files[0]) {
        const reader = new FileReader
        reader.onload = e => {
          this.imageData = e.target.result
        }
        reader.readAsDataURL(files[0])
        this.$emit('input', files[0])
      }
    }
  },
  computed :{
    template: '#image-input',
  }
};
</script>
<style lang="scss">
.file-input{
  display: none
  }
.profile-container {
    width: 150px;
    height: 150px;
    overflow: hidden;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
}
</style>