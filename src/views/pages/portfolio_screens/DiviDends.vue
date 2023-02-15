<template>
    <v-app>
        <v-container class="pa-0 pa-sm-3 pa-md-3">
            <div class="pt-16 pa-6 pa-sm-4 pa-md-4">
                <div>
                    <p  class="lstctntit headline mb-1">Dividends
                    </p>
                    <p  class="body-1" color="#878B93">Track your
                        dividend performance</p>
                </div>

                <v-card color="#FFFAF6" outlined class="d-md-none elevation-0 rounded-lg pa-4">
                    <v-row class="py-2">
                        <v-col cols="5">
                            <p class="caption mb-0"
                                style="color: #FF8D24; letter-spacing: 0.16em; text-transform: uppercase; ">
                                2022 Dividends</p>
                        </v-col>
                        <v-col cols="7">
                            <p class="ctnbtl body-1 text-right mb-0"
                                style="line-height:28px; color: #505359; ">
                                21852.85<span class="overline ml-2 pa-1 rounded-lg"
                                    style="background-color: #FFEEEE; color: #E12626; ">-0.23%</span>
                            </p>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <v-row class="py-2">
                        <v-col cols="5">
                            <p class="caption mb-0"
                                style="color: #FF8D24;letter-spacing: 0.16em; text-transform: uppercase; ">
                                dividend Holdings
                            </p>
                        </v-col>
                        <v-col cols="7">
                            <p class="ctnbtl body-1 text-right mb-0"
                                style="line-height:28px; color: #505359; ">
                                9
                                <span 
                                    class="caption">holdings</span><span class="overline ml-2 pa-1 rounded-lg"
                                    style="background-color: #EEFFED; color: #34A853;">+12%</span>
                            </p>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <v-row class="py-2">
                        <v-col cols="5">
                            <p class="caption mb-0"
                                style="color: #FF8D24; letter-spacing: 0.16em; text-transform: uppercase; ">
                                Dividend Yield </p>
                        </v-col>
                        <v-col cols="7">
                            <p class="ctnbtl body-1 text-right mb-0"
                                style="line-height:28px; color: #505359; ">
                                2.4%</p>
                        </v-col>
                    </v-row>
                </v-card>

                <v-card outlined class="d-none d-md-flex elevation-0 rounded-lg mt-8">
                    <v-row class="rounded-lg" no-gutters>
                        <v-col cols="12" sm="4" md="4">
                            <div class="pa-4">
                                <p class="caption mb-2"
                                    style="color: #FF8D24; letter-spacing: 0.16em; text-transform: uppercase; ">
                                    2022 Dividends <span class="ctnbtl sumval mb-0 ml-2"
                                        style="line-height:28px; color: #505359; ">
                                        21852<small>.85</small></span><span class="caption ml-2 pa-2 rounded-lg"
                                        style="background-color: #FFEEEE; color: #E12626; ">-0.23%</span>
                                </p>
                            </div>
                        </v-col>
                        <v-divider class="d-none d-md-flex" vertical></v-divider>
                        <v-col cols="12" sm="5" md="5">
                            <div class="pa-4">
                                <p class="caption mb-2">
                                    <span
                                        style="color: #FF8D24;letter-spacing: 0.16em; text-transform: uppercase; ">dividend
                                        Holdings</span>
                                    <span class="ctnbtl sumval mb-0 ml-2"
                                        style="line-height:28px; color: #505359; ">9
                                    </span>
                                    <span 
                                        class="title">holdings</span><span class="caption ml-2 pa-2 rounded-lg"
                                        style="background-color: #EEFFED; color: #34A853;">+12%</span>
                                </p>
                            </div>
                        </v-col>
                        <v-divider class="d-none d-md-flex" vertical></v-divider>
                        <v-col cols="12" sm="3" md="3">
                            <div class="pa-4">
                                <p class="caption mb-2"
                                    style="color: #FF8D24; letter-spacing: 0.16em; text-transform: uppercase; ">
                                    Dividend Yield <span class="ctnbtl sumval mb-0 ml-2"
                                        style="line-height:28px; color: #505359; ">
                                        2.4%</span></p>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>

                <v-row>
                    <v-col cols="12" sm="12" md="8">
                        <div class="pt-4 ">
                            <p  class="body-1 mb-1"
                                color="#878B93">Dividends</p>
                            <v-card style="z-index: 0 !important;" outlined class="elevation-0 rounded-lg">
                                <v-expansion-panels v-model="panel" flat>
                                    <v-expansion-panel v-for="n in 6" :key="n" outlined color="#FF8D24">
                                        <v-expansion-panel-header @click="minus = !minus">
                                            <template v-slot:actions>
                                                <v-icon v-if="panel == n - 1" color="#FF8D24">
                                                    mdi-minus-circle-outline
                                                </v-icon>
                                                <v-icon v-else color="#FF8D24">
                                                    mdi-plus-circle-outline
                                                </v-icon>
                                            </template>
                                            <v-row>
                                                <v-col class="px-0 px-md-4" cols="8">
                                                    <div>
                                                        <span class="title mb-0"
                                                            style="color:#FF8D24; ">
                                                            2022 <span class="body-1 ml-2 ml-sm-6 ml-md-16"
                                                                style="color:#878B93; ">dividends
                                                                (6)</span>
                                                        </span>
                                                    </div>
                                                </v-col>
                                                <v-col cols="4" class="text-right px-0 pr-4 pr-sm-6 pr-md-16">
                                                    <p class="body-1 title-md mb-0 lstctntit"
                                                        >
                                                        9717<small>.00</small></p>
                                                </v-col>
                                            </v-row>
                                        </v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            <div v-for="n in 6" :key="n" class="mb-1">
                                                <v-list-item style="background-color: #F9FBFC;" class="rounded-lg">
                                                    <v-row>
                                                        <v-col cols="12" sm="12" md="8">
                                                            <v-list-item class="pl-0">
                                                                <v-list-item-content>
                                                                    <v-list-item-title class="ctnbtl">Accelya
                                                                    </v-list-item-title>
                                                                    <v-list-item-subtitle>15 Aug 2022
                                                                    </v-list-item-subtitle>
                                                                </v-list-item-content>

                                                                <v-list-item-content class="text-center">
                                                                    <v-list-item-subtitle>Div /share <strong>45</strong>
                                                                    </v-list-item-subtitle>
                                                                </v-list-item-content>
                                                                <v-list-item-content class="text-center">
                                                                    <v-list-item-subtitle>Div. Yield
                                                                        <strong>2.3%</strong>
                                                                    </v-list-item-subtitle>
                                                                </v-list-item-content>
                                                            </v-list-item>
                                                        </v-col>

                                                        <v-col cols="12" sm="12" md="4">
                                                            <v-list-item class="pl-0">
                                                                <v-list-item-content>
                                                                    <v-list-item-title class="lstctntit"><span
                                                                            class="pa-1 rounded-lg"
                                                                            style="background-color: #E8EBED; color: #505359; ">Final</span>
                                                                    </v-list-item-title>
                                                                </v-list-item-content>

                                                                <v-list-item-content class="text-right">
                                                                    <v-list-item-title class="lstctntit">881.40
                                                                    </v-list-item-title>
                                                                    <v-list-item-subtitle>Qty 200</v-list-item-subtitle>
                                                                </v-list-item-content>
                                                            </v-list-item>
                                                        </v-col>
                                                    </v-row>
                                                </v-list-item>
                                            </div>
                                        </v-expansion-panel-content>
                                        <v-divider></v-divider>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-card>
                        </div>
                    </v-col>

                    <v-col cols="12" sm="12" md="4">
                        <div class="pt-4">
                            <p  class="body-1 mb-1"
                                color="#878B93">Upcoming dividends</p>
                            <v-card outlined class="elevation-0 rounded-lg px-4">
                                <div v-for="n in 6" :key="n">
                                    <v-list-item>
                                        <v-row>
                                            <v-col cols="2" class="pl-1 text-center">
                                                <v-list-item-content width="100">
                                                    <v-list-item-subtitle
                                                        style="color: #FF8D24; text-transform: uppercase;">
                                                        <span>Aug</span>
                                                    </v-list-item-subtitle>
                                                    <v-list-item-title
                                                        style="color: #FF8D24; ">
                                                        <span class="lstctntit body-1">22</span>
                                                    </v-list-item-title>
                                                </v-list-item-content>
                                            </v-col>
                                            <v-col cols="10">
                                                <v-list-item class="pl-0">
                                                    <v-list-item-content>
                                                        <v-list-item-title>Laurus Labs</v-list-item-title>
                                                        <v-list-item-subtitle>Dividend <strong>33/sh</strong>
                                                        </v-list-item-subtitle>
                                                    </v-list-item-content>

                                                    <v-list-item-content class="text-right">
                                                        <v-list-item-title class="lstctntit">881.40
                                                        </v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-col>
                                        </v-row>
                                    </v-list-item>
                                    <v-divider></v-divider>
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
            minus: true,
            panel: null,
        };
    },
}
</script>