<template>
    <div>
        <v-card class="lpappbar overflow-hidden elevation-0 rounded-0">
            <v-app-bar absolute color="transparent" class="elevation-0 rounded-0" width="100%" permanent outlined light>
                <v-container class="pa-0 pb-2">
                    <v-row no-gutters>
                        <v-col>
                            <a href="/" style="text-decoration: none;">
                                <img src="@/assets/wyselylogo.svg" alt="wyselylogo" class="pt-1" /></a>
                        </v-col>
                        <v-col class="text-right">
                            <v-btn to="/signin" class="rounded-lg white--text elevation-0 text-capitalize mt-3" large
                                color="#1877F2">
                                Join wysely
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-app-bar>

            <v-container fluid class="px-0 pt-16">
                <v-card class="elevation-0 rounded-0 wvfstcrd px-4 px-sm-6 px-md-0 py-4 py-md-16" width="100%">
                    <v-container class="pa-0 my-auto">
                        <v-row>
                            <v-col cols="12" sm="12" md="5" height="100%" class="d-flex align-center my-auto">
                                <div>
                                    <p class="lponbohd text-uppercase" style="color: #FF8D24; ">Welcome to
                                        wysely
                                    </p>
                                    <p class="lponbotit display-1">One simple tool to track and build your wealth
                                    </p>
                                    <p class="lponbomsg title" style="color: #6B7280; ">Manage all your trading
                                        activity
                                        under
                                        one roof. Find insights and key updates for your holdings.</p>
                                    <v-btn to="/signin" class="mt-2 mb-4 rounded-lg text-capitalize"
                                        style="border: 2px solid #1877F2;" large outlined color="#1877F2"><span
                                            class="font-weight-medium">Lets get
                                            cracking!</span></v-btn>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="12" md="7" class="wvcols2img py-0 d-none d-md-block">
                                <img src="@/assets/wysely landinview.svg" width="100%" alt="landinview" >
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
                <v-card class="elevation-0 rounded-0 pb-6" color="#F9FBFC">
                    <v-container class="pa-0">
                        <div class="pb-10 pt-16 px-4 px-sm-6 px-md-0">
                            <p class="text-center font-weight-medium black--text headline mb-0">All your trades &
                                tracking
                                under
                                one roof</p>
                        </div>

                        <v-row>
                            <v-col class="pb-10" cols="12" md="7">
                                <img class="wvscecrdimg" src="@/assets/Dashboard page.svg" alt="Dashboard-logo">
                            </v-col>
                            <v-col cols="12" md="5" class="d-flex align-center">
                                <div class="px-4 px-sm-6 px-md-0 py-2 py-md-0">
                                    <p class="mb-2 body-1" style="color: #FF8D24;"><img class="mr-2"
                                            src="@/assets/Track trades.svg" width="20px" alt="Track-trades-logo">Track
                                        trades</p>
                                    <p class="mb-6 mb-sm-12 mb-md-12 body-1" style="color: #6B7280;">Manage all your
                                        trading
                                        activity under one roof. Find insights and
                                        key updates for your holdings.</p>
                                    <p class="mb-2 body-1" style="color: #FF8D24;"><img class="mr-2"
                                            src="@/assets/Gather Insights.svg" width="20px" alt="Insights-logo">Gather Insights</p>
                                    <p class="mb-6 mb-sm-12 mb-md-12 body-1" style="color: #6B7280;">Gather all your
                                        trade
                                        related insights in one place and make it
                                        actionable for your future trades.</p>
                                    <p class="mb-2 body-1" style="color: #FF8D24;"><img class="mr-2"
                                            src="@/assets/All upcoming activites in one roof.svg" width="20px" alt="roof-logo">All
                                        upcoming activites in one roof</p>
                                    <p class="mb-6 mb-sm-12 mb-md-12 body-1" style="color: #6B7280;">All your stock
                                        specific
                                        activites and notifications in one place,
                                        Managed!</p>
                                    <p class="mb-2 body-1" style="color: #FF8D24;"><img class="mr-2"
                                            src="@/assets/Daily and weekly reports.svg" width="20px" alt="reports-logo">Daily and weekly
                                        report</p>
                                    <p class="mb-6 body-1" style="color: #6B7280;">Setup reports and
                                        notifications to your email to
                                        track the progress
                                        at the ease of your inbox.</p>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
           
                <v-card class="wvfivcrd elevation-0 rounded-0 py-4 py-md-16 px-4 px-sm-6 px-md-0" color="#2A2F3D">
                    <v-container class="pa-0 py-md-10">
                        <v-row>
                            <v-col cols="12" md="6" class="my-auto">
                                <p class="font-weight-medium headline white--text">
                                    All your accounts under one roof
                                </p>
                                <p class="font-weight-thin white--text">
                                    Connect your multi broker accounts and family accounts in one place, Managed!
                                </p>
                            </v-col>
                            <v-col cols="12" md="6" class="text-center">
                                <img src="@/assets/All your accounts under one roof.svg" alt="underaccounts-logo" class="wvforcrdimg">
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
                <v-card class="elevation-0 rounded-0">
                    <v-container class="pa-0 py-md-10">
                        <v-row>
                            <v-col cols="12" md="6" class="my-auto">
                                <p class="font-weight-medium headline black--text">
                                    Based on tracking by syncing your email and trade selection, we are exposing your
                                    portfolio.
                                </p>
                                <p class="font-weight-thin black--text">
                                    kickstart our tracking You can now observe your current and old trades too.
                                </p>
                                <v-list-item v-for="(item, i) in items" :key="i">
                                    <v-list-item-icon>
                                        <v-icon>mdi-chevron-right</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title v-text="item.text"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-col>
                            <v-col cols="12" md="6" class="text-center">
                                <img src="@/assets/wv_new_bg.svg" width="100%" class="" alt="wv_new-logo">
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
                <v-card class="wvsixcrd elevation-0 rounded-0 py-4 py-md-16 px-4 px-sm-6 px-md-0" color="#F9FBFC">
                    <v-container class="py-10 text-center">
                        <p class="font-weight-medium headline black--text">
                            Use Wysely for free
                        </p>
                        <v-btn to="/signin" class="rounded-lg white--text elevation-0 text-capitalize mt-3" large
                            color="#1877F2">
                            Sign in now
                        </v-btn>
                    </v-container>
                </v-card>
                <!-- Footer -->
                <v-card class="elevation-0 rounded-0 px-4 px-sm-6 px-md-0">
                    <v-container class="px-0">
                     
                        <v-row class="pt-6 flex-column-reverse flex-md-row">
                            <v-col cols="12" md="6" class="text-center text-md-left">
                                <p class="mb-0" style="color:#1F2024;">&#169; {{ new Date().getFullYear() }} Wysely.
                                    All
                                    rights reserved
                                </p>
                            </v-col>

                            <v-col cols="12" md="6" class="text-left text-md-right d-flex flex-row justify-md-end">
                                <v-btn to="/terms" color="#1877F2" text plain class="text-capitalize mt-n2">
                                    Terms & conditions
                                </v-btn> |
                                <v-btn to="/privacy" color="#1877F2" text plain class="text-capitalize mt-n2">
                                    Privacy Policy
                                </v-btn>
                            </v-col>
                        </v-row>

                      
                    </v-container>
                </v-card>
            </v-container>

        </v-card>
    </div>
</template>

<style>
.lpappbar .theme--light.v-app-bar.v-toolbar.v-sheet {
    position: fixed !important;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(4px);
    /* border-bottom: thin solid rgba(0, 0, 0, 0.12) !important; */
}

.wvcols2img {
    height: 100% !important;
    /* background-image: url(@/assets/wysely\ landinview.svg) !important; */
    background-color: white !important;
    background-size: 100% !important;
    background-repeat: no-repeat !important;
}



.wvsixcrd {
    background-image: url(@/assets/Welcome_to_wysely_chart.svg) !important;
    background-color: #F9FBFC !important;
    background-size: 100% !important;
    background-repeat: no-repeat !important;
}

.wvfivcrd {
    background-image: url(@/assets/wvs_new_bg.svg) !important;
    background-color: #2A2F3D !important;
    background-size: 100% !important;
    background-repeat: no-repeat !important;
}

.wvscecrdimg {
    height: 100%;
    width: 100%;
}

@media only screen and (max-width: 960px) {
    .wvfstcrd {
        height: 100% !important;
    }

    .wvforcrdimg {
        width: 70%;

    }
}
</style>

<script>
export default {
    data() {
        return {
            items: [
                { text: 'Stocks held by you in your various accounts.' },
                { text: 'Actively open trading positions.' },
                { text: 'Track corporate activity of your portfolio under one roof.' },
                { text: 'Track your dividend performance.' },
                { text: 'Profit and Loss for your trades.' },
                { text: 'All your trade activity based on dates.' },
            ],
        }
    }
}
</script>