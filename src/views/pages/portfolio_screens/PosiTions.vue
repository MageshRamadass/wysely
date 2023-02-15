<template>
    <v-app>
        <v-container class="pa-0 pa-sm-3 pa-md-3">
            <div class="pt-16 pa-6 pa-sm-4 pa-md-4">
                <v-row>
                    <v-col cols="12" sm="12" md="6">
                        <v-row>
                            <v-col cols="7">
                                <p class="lstctntit headline mb-1">
                                    Positions</p>
                            </v-col>
                            <v-col cols="5" class="text-right">
                                <v-btn style="text-transform: capitalize;" class="d-md-none elevation-0" small
                                    color="#F9FBFC">
                                    <v-icon size="15">mdi-format-align-bottom</v-icon>positions
                                </v-btn>
                            </v-col>
                        </v-row>

                        <p class="body-1 mb-6 mb-sm-4 mb-md-4" color="#878B93">Actively open trading positions</p>
                    </v-col>
                    <v-col class="pr-0 d-none d-md-flex" cols="3" sm="2" md="2">
                        <v-select prepend-inner-icon="mdi-chart-arc" append-icon="mdi-chevron-down" class="rounded-lg" color="gray" dense
                            label="Select Segment" single-line outlined></v-select>
                    </v-col>
                    <v-col class="pr-0 d-none d-md-flex" cols="3" sm="2" md="2">
                       
                        <v-select prepend-inner-icon="mdi-calendar-blank" append-icon="mdi-chevron-down" class="rounded-lg" color="gray" dense
                            label="Select Date" single-line outlined></v-select>
                    </v-col>
                    <v-col class="px-0 d-none d-md-flex" cols="6" sm="2" md="2">
                        <v-btn class="font-weight-black" text color="#1877F2">Filter positions</v-btn>
                    </v-col>
                </v-row>

                <v-card color="#FFFAF6" outlined class="d-md-none elevation-0 rounded-lg pa-6">
                    <div class="text-center">
                        <p class="caption" style="color: #FF8D24; letter-spacing: 0.16em; ">
                            Total Position</p>

                        <v-card outlined class="elevation-0 rounded-lg pa-5 mb-4">
                            <v-row>
                                <v-col class="pa-0">
                                    <span class="body-2 pa-2 rounded-lg" style="color: #505359; "><b>5</b>
                                        Closed</span>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pa-0">
                                    <span class="body-2 pa-2 rounded-lg" style="color: #34A853; "><b>3</b>
                                        Positive</span>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pa-0">
                                    <span class="body-2 pa-2 rounded-lg" style="color: #E12626; "><b>2</b>
                                        Negative</span>
                                </v-col>
                            </v-row>
                        </v-card>
                    </div>

                    <v-card outlined class="elevation-0 rounded-lg pa-4 pb-0">
                        <v-row no-gutters>

                            <v-col cols="12">
                                <v-row no-gutters>
                                    <v-col cols="5">
                                        <p class="caption"
                                            style="color: #FF8D24; letter-spacing: 0.16em; text-transform: uppercase; ">
                                            Open Postions</p>
                                    </v-col>
                                    <v-col cols="7">
                                        <p class="ctnbtl body-1 text-right" style="line-height:28px; color: #505359; ">
                                            21,852.85<span class="overline ml-2 pa-1 rounded-lg"
                                                style="background-color: #FFEEEE; color: #E12626; ">-0.23%</span>
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-col>

                            <v-col cols="12">
                                <v-row no-gutters>
                                    <v-col cols="5">
                                        <p class="caption"
                                            style="color: #FF8D24; letter-spacing: 0.16em; text-transform: uppercase; ">
                                            Trade Value</p>
                                    </v-col>
                                    <v-col cols="7">
                                        <p class="ctnbtl body-1 text-right" style="line-height:28px; color: #505359; ">
                                            3,22,800.00</p>
                                    </v-col>
                                </v-row>
                            </v-col>

                            <v-col cols="12">
                                <v-row no-gutters>
                                    <v-col cols="5">
                                        <p class="caption"
                                            style="color: #FF8D24; letter-spacing: 0.16em; text-transform: uppercase; ">
                                            Total P&L</p>
                                    </v-col>
                                    <v-col cols="7">
                                        <p class="ctnbtl body-1 text-right" style="line-height:28px; color: #505359; ">
                                            29,352.85<span class="overline ml-2 pa-1 rounded-lg"
                                                style="background-color: #EEFFED; color: #34A853; ">+80.89%</span>
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-card>

                <v-card outlined class="d-none d-md-flex elevation-0 rounded-lg mt-4">
                    <v-row no-gutters>
                        <v-col cols="12" sm="3" md="3">
                            <div class="pa-4">
                                <p class="caption"
                                    style="color: #FF8D24; letter-spacing: 0.16em; text-transform: uppercase; ">
                                    Traded Value</p>
                                <p class="ctnbtl sumval mb-0" style="line-height:28px; color: #505359; ">
                                    2,19,352<small>.85</small><span class="caption ml-2 pa-2 rounded-lg"
                                        style="background-color: #EEFFED; color: #34A853; ">+80.89%</span>
                                </p>
                            </div>
                        </v-col>
                        <v-divider class="d-none d-md-flex" vertical></v-divider>
                        <v-col cols="12" sm="3" md="3">
                            <div class="pa-4">
                                <p class="caption"
                                    style="color: #FF8D24; letter-spacing: 0.16em; text-transform: uppercase; ">
                                    Open positions</p>
                                <v-row class="mt-4">
                                    <v-col class="pa-0">
                                        <span class="caption pa-2 rounded-lg"
                                            style="background-color: #E8EBED; color: #505359; "><b>5</b>
                                            Closed</span>
                                    </v-col>
                                    <v-col class="pa-0">
                                        <span class="caption pa-2 rounded-lg"
                                            style="background-color: #EEFFED; color: #34A853; "><b>3</b>
                                            Positive</span>
                                    </v-col>
                                    <v-col class="pa-0">
                                        <span class="caption pa-2 rounded-lg"
                                            style="background-color: #FFEEEE; color: #E12626; "><b>2</b>
                                            Negative</span>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>
                        <v-divider class="d-none d-md-flex" vertical></v-divider>
                        <v-col cols="12" sm="3" md="3">
                            <div class="pa-4">
                                <p class="caption"
                                    style="color: #FF8D24; letter-spacing: 0.16em; text-transform: uppercase; ">
                                    Trade positions</p>
                                <p class="ctnbtl sumval mb-0" style="line-height:28px; color: #505359; ">
                                    5,42,152<small>.85</small></p>
                            </div>
                        </v-col>
                        <v-divider class="d-none d-md-flex" vertical></v-divider>
                        <v-col cols="12" sm="3" md="3">
                            <div class="pa-4">
                                <p class="caption"
                                    style="color: #FF8D24; letter-spacing: 0.16em; text-transform: uppercase; ">
                                    Profit / Loss (ROI)</p>
                                <p class="ctnbtl sumval mb-0" style="line-height:28px; color: #505359; ">
                                    21,852<small>.85</small><span class="caption ml-2 pa-2 rounded-lg"
                                        style="background-color: #FFEEEE; color: #E12626; ">-0.23%</span>
                                </p>
                            </div>
                        </v-col>
                    </v-row>

                </v-card>
                <div class="pt-4 ">
                    <v-row no-gutters>
                        <v-col cols="6" class="px-0">
                            <p class="body-1 mb-1" color="#878B93">Open Positions</p>
                        </v-col>
                        <v-col class="px-0 d-flex justify-end" cols="6">
                            <v-btn text color="#878B93"><img class="pr-2" src="@/assets/download icon.svg"
                                    width="25px" alt="downloadicon" >Download
                            </v-btn>
                        </v-col>
                    </v-row>

                    <div class=" mb-4">
                        <v-data-table mobile-breakpoint fixed-header disable-sort :headers="Overviewheaders"
                            :items="desserts" :items-per-page="7" style="border: 1px solid #EFEEF3;"
                            class="elevation-0 rounded-lg">
                            <template v-slot:no-data>
                                <v-col class="mx-auto pa-15">
                                    <v-img class="align-self-stretch mx-auto" width="100px"
                                        :src="require('@/assets/no data folder.svg')" />
                                    <h4>No data available</h4>
                                </v-col>
                            </template>
                        </v-data-table>
                    </div>
                </div>

                <div class="pt-4">
                    <v-row no-gutters>
                        <v-col cols="6" class="px-0">
                            <p class="body-1 mb-1" color="#878B93">Closed Positions</p>
                        </v-col>
                        <v-col class="px-0 d-flex justify-end" cols="6">
                            <v-btn text color="#878B93"><img class="pr-2" src="@/assets/download icon.svg"
                                    width="25px" alt="download-icon" >Download
                            </v-btn>
                        </v-col>
                    </v-row>

                    <div class=" mb-4">
                        <v-data-table mobile-breakpoint fixed-header disable-sort :headers="Overviewheaders"
                            :items="desserts" :items-per-page="7" style="border: 1px solid #EFEEF3;"
                            class="elevation-0 rounded-lg">
                            <template v-slot:no-data>
                                <v-col class="mx-auto pa-15">
                                    <v-img class="align-self-stretch mx-auto" width="100px"
                                        :src="require('@/assets/no data folder.svg')" />
                                    <h4>No data available</h4>
                                </v-col>
                            </template>
                        </v-data-table>
                    </div>
                </div>

            </div>
        </v-container>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            Overviewheaders: [
                { text: "Instruments", value: "" },
                { text: "Qty", value: "" },
                { text: "Buy avg.", value: "" },
                { text: "LTP", value: "" },
                { text: "P&L", value: "" },
                { text: "P&L change", value: "" },
            ],

        };
    },
}
</script>