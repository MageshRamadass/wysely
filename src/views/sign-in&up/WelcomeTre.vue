<template>
  <v-app>
    <div class="lpcolslm">
      <img class="ml-6 mt-4" src="@/assets/wyselylogo.svg" width="25%" alt="wyselylogo">
      <div class="lpbg pa-8">
        <img src="@/assets/Welcome_to_wysely_chart.svg" width="100%" alt="wyselylogo">
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
        <img src="@/assets/wyselylogo.svg" alt="logo" class="pl-6 pt-3">
        <div class="pl-6 lpbtmctn">
          <img class="lptonboimg" src="@/assets/Welcome_to_wysely_chart.svg" alt="wysely_chart-logo" width="80%">
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
        <div class="text-center" style="margin-top: 25%;">
          <img src="@/assets/Enjoy wysely.svg" alt="wysely-logo">
          <p class="title" style="color: #FF8D24;">Enjoy wysely</p>
          <p class="startedtomsg headline mb-12 mb-sm-14 mb-md-16">You are all set,
            start tracking<br>your trades now!</p>
          <v-btn class="mb-4 mb-sm-0 mb-md-0" to="/Accounts" large outlined color="#1877F2">Get started now!</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
    }
  },

}
</script>