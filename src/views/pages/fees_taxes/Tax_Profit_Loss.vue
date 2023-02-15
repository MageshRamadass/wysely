<template>
    <v-app>
        <v-container class="pa-0 pa-sm-3 pa-md-3">
            <div class="pt-16 pa-6 pa-sm-4 pa-md-4">
                <v-row>
                    <v-col cols="12" sm="12" md="4">
                        <v-row>
                            <v-col cols="6">
                                <p class="lstctntit headline mb-1">Tax P&L</p>
                            </v-col>
                            <v-col cols="6" class=" d-md-none text-right px-0">
                                <v-btn style="text-transform: capitalize;" class=" elevation-0" small color="#F9FBFC">
                                    See Tax P&L
                                </v-btn>
                            </v-col>
                        </v-row>

                        <p class="body-1 mb-0 mb-sm-2 mb-md-2" color="#878B93">Check
                            your taxes for your trading activity</p>
                    </v-col>
                    <v-col class="pr-0 pb-0 d-none d-md-flex" cols="6" sm="2" md="2">
                        <v-select prepend-inner-icon="mdi-calendar-blank" append-icon="mdi-chevron-down" class="rounded-lg" color="gray" dense
                            label="Select FY" single-line outlined></v-select>
                    </v-col>
                    <v-col class="pr-0 pb-0 d-none d-md-flex" cols="6" sm="2" md="2">
                        <v-select prepend-inner-icon="mdi-view-dashboard" append-icon="mdi-chevron-down" class="rounded-lg" color="gray" dense
                            label="From quater" single-line outlined></v-select>
                    </v-col>
                    <v-col class="pr-0 pb-0 d-none d-md-flex" cols="6" sm="2" md="2">
                        <v-select dense color="gray" outlined class="rounded-lg" label="To quater"
                            prepend-inner-icon="mdi-view-dashboard" append-icon="mdi-chevron-down"></v-select>

                    </v-col>
                    <v-col class="pr-0 pb-0 d-none d-md-flex" cols="6" sm="2" md="2">
                        <v-btn class="font-weight-black" text color="#1877F2">See Tax P&L</v-btn>
                    </v-col>
                </v-row>

                <v-row class="pt-6">
                    <v-col cols="12" sm="12" md="6">
                        <div class="pt-0 pt-sm-4 pt-md-0">
                            <p class="title mb-1" color="#88CFFF">
                                Equity Fees & Taxes</p>
                            <v-card outlined class="elevation-0 rounded-lg pa-5">
                                <div class="mx-auto">
                                    <v-row>
                                        <v-col cols="6" v-for="(equity, i) in equitys" :key="i">
                                            <p class="body-2"
                                                style="color: #FF8D24; letter-spacing: 0.16em; text-transform: uppercase; "
                                                v-text="equity.text">
                                            </p>
                                            <span class="ctnbtl sumval" v-text="equity.amt"></span>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-card>
                        </div>
                    </v-col>

                    <v-col cols="12" sm="12" md="6">
                        <div class="pt-4 pt-md-0">
                            <p class="title mb-1" color="#88CFFF">F&O Fees & Taxes</p>
                            <v-card outlined class="elevation-0 rounded-lg pa-5">
                                <div class="mx-auto">
                                    <v-row>
                                        <v-col cols="6" v-for="(future, i) in futures" :key="i">
                                            <p class="body-2"
                                                style="color: #FF8D24; letter-spacing: 0.16em; text-transform: uppercase; "
                                                v-text="future.text">
                                            </p>
                                            <span class="ctnbtl title" v-text="future.amt"></span>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-card>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            equitys: [
                { text: 'Intraday profit', amt: '0' },
                { text: 'Intraday turnover', amt: '0' },
                { text: 'STCG realized profit', amt: '0' },
                { text: 'LTCG realized profit', amt: '0' },
                { text: 'Total charges', amt: '0' },
                { text: 'Other credits', amt: '0' }
            ],
            futures: [
                { text: 'Futures profit', amt: '0' },
                { text: 'Futures turnover', amt: '0' },
                { text: 'Options profit', amt: '0' },
                { text: 'Options turnover', amt: '0' },
                { text: 'Total charges', amt: '0' },
                { text: 'Other credits', amt: '0' }
            ],
        };
    },
}
</script>