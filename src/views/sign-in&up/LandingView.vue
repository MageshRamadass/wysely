<style>
.lpcolsld {
  background-image: url(@/assets/landpgirl.svg) !important;
  background-color: #F9FBFC !important;
  background-size: 80% !important;
  background-position: right !important;
}

.lpctn {
  position: absolute;
  width: 30% !important;
  bottom: 20px !important;
}

.lponbotit {
  font-weight: 500 !important;
  line-height: 44px !important;
}

.lpcolslm {
    display: none !important;
}

@media only screen and (max-width: 600px) {
  .lpcolsld {
      display: none !important;
  }

  .lpcolslm {
    display: contents;
  }

  .lpctn {
    position: static;
    width: 80% !important;
    bottom: none !important;
  }

  .lpbg {
    background: linear-gradient(180deg, #FFFFFF -7.53%, #F9FBFC 100%) !important;
  }

  .btn {
    width: 100%;
  }
}
</style>
<template>
  <v-app>
    <div class="lpcolslm">
      <img class="ml-9 mt-4" src="@/assets/wyselylogo.svg" width="25%" alt="wyselylogo">
      <div class="lpbg pa-7">
        <img src="@/assets/lvwimg.svg" width="100%" alt="lvwimg-logo">
      </div>
    </div>
    <v-row class=" my-auto">
      <v-col class=" lpcolsld pa-6 pa-sm-10 pa-md-10 pb-sm-0 pb-md-0" cols="12" sm="6" md="6">
        <img src="@/assets/wyselylogo.svg" class="pl-6" alt="wyselylogo">

        <div class="pl-6 lpctn">
          <p class="lponbohd title" style="color: #FF8D24; ">Onboarding
          </p>
          <p class="lponbotit display-1">All your trades &
            tracking under one roof.</p>
          <p class="lponbomsg title" style="color: #6B7280; ">Manage all
            your trading activity under one roof. Find
            insights and key updates for your holdings.</p>
        </div>
      </v-col>

      <v-col class="lpcols2 px-12 pt-4 pt-sm-10 pt-md-10" cols="12" sm="6" md="6">
        <div class="mr-0 mr-sm-16 mr-md-16">
          <p class="mb-1" style="color: #FF8D24;"><img class="mr-2" src="@/assets/Track trades.svg" width="20px" alt="tracktrade-logo">Track
            trades</p>
          <p class="mb-6 mb-sm-12 mb-md-12" style="color: #6B7280;">Manage all your trading activity under one roof.
            Find insights and
            key updates for your holdings.</p>
          <p class="mb-1" style="color: #FF8D24;"><img class="mr-2" src="@/assets/Gather Insights.svg"
              width="20px" alt="Insights-logo">Gather Insights</p>
          <p class="mb-6 mb-sm-12 mb-md-12" style="color: #6B7280;">Gather all your trade related insights in one place
            and make it
            actionable for your future trades.</p>
          <p class="mb-1" style="color: #FF8D24;"><img class="mr-2"
              src="@/assets/All upcoming activites in one roof.svg" alt="roof-logo" width="20px">All upcoming activites in one roof</p>
          <p class="mb-6 mb-sm-12 mb-md-12" style="color: #6B7280;">All your stock specific activites and notifications
            in one place,
            Managed!</p>
          <p class="mb-1" style="color: #FF8D24;"><img class="mr-2" src="@/assets/Daily and weekly reports.svg"
              width="20px" alt="reports-logo">Daily and weekly report</p>
          <p class="mb-12 mb-sm-12 mb-md-12" style="color: #6B7280;">Setup reports and notifications to your email to
            track the progress
            at the ease of your inbox.</p>
          <v-btn class="btn mb-4 rounded-lg text-capitalize" to="/preferenceone" style="border: 2px solid #1877F2;" large
            outlined color="#1877F2"><span class="font-weight-medium">Lets get
              cracking!</span></v-btn>
        </div>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {

  data: () => ({

  }),
}
</script>