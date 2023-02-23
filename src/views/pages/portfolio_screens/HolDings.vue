<template>
  <v-app>
    <v-container class="pa-0 pa-sm-3 pa-md-3">
      <div class="pt-16 pa-6 pa-sm-4 pa-md-4">
        <v-row>
          <v-col cols="12" sm="9" md="8">
            <p class="lstctntit headline mb-1">Holdings</p>
            <p class="body-1 mb-0 mb-sm-4 mb-md-4" color="#878B93">
              Stocks held by you in your various accounts
            </p>
          </v-col>
          <v-col cols="12" sm="2" md="2">
            <div>
              <v-badge v-if="clientids.length > 1" bordered color="#FF8D24" :content="clientids.length - 1" overlap>
                <v-select v-model="clientidsindex" @change="selectHolding" :items="clientids"
                  append-icon="mdi-chevron-down" class="rounded-lg" color="gray" dense single-line return-object
                  outlined>
                </v-select>
              </v-badge>
              <div v-else-if="clientids.length == 0"></div>
              <v-select v-else v-model="clientidsindex" :items="clientids" append-icon="mdi-chevron-down"
                class="rounded-lg" color="gray" dense single-line return-object outlined>
              </v-select>
            </div>
          </v-col>
          <v-col cols="12" sm="2" md="2">
            <v-text-field v-model="Symbol" dense color="gray" outlined class="rounded-lg mx-4 d-none d-md-flex"
              label="Search" prepend-inner-icon="mdi-magnify"></v-text-field>
          </v-col>
        </v-row>
        <v-card color="#FFFAF6" outlined class="d-md-none elevation-0 rounded-lg pa-6">
          <div>
            <div class="text-center pa-4">
              <p class="caption txtcapsty">Total investment</p>
              <p class="ctnbtl headline mb-0" style="line-height: 28px; color: #505359">
                <span v-if="tol_buyvalue">{{ tol_buyvalue }}</span>
                <span v-else>0.00</span>
              </p>
            </div>
            <v-card outlined class="elevation-0 rounded-lg pa-4 pb-0">
              <v-row no-gutters>
                <v-col cols="12">
                  <v-row no-gutters>
                    <v-col cols="5">
                      <p class="caption txtcapsty">Holdings Value</p>
                    </v-col>
                    <v-col cols="7">
                      <p class="ctnbtl body-1 text-right" style="line-height: 28px; color: #505359">
                        <span v-if="tol_presentvalue">{{ tol_presentvalue }}</span>
                        <span v-else>0.00</span>
                      </p>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="12">
                  <v-row no-gutters>
                    <v-col cols="5">
                      <p class="caption txtcapsty">Total P&L</p>
                    </v-col>
                    <v-col cols="7">
                      <p class="ctnbtl sumval mb-0 text-right" style="line-height: 28px; color: #505359">
                        <span v-if="tol_presentvalue">{{ tol_pnl }}</span>
                        <span v-else>0.00</span>
                        <span v-if="tol_pnl">
                          <span v-if="tol_pnl > 0" class="caption ml-2 pa-1 rounded-lg"
                            style="background-color: #eeffed; color: #34a853">+{{
                              tol_pnl_chg
                            }}%</span>
                          <span v-else class="caption ml-2 pa-1 rounded-lg"
                            style="background-color: #ffeeee; color: #e12626">{{
                              tol_pnl_chg
                            }}%</span></span>
                        <span v-else class="caption ml-2 pa-1 rounded-lg"
                          style="background-color: rgb(135, 139, 147, 0.1);color: rgb(135, 139, 147);">0.00%</span>
                      </p>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="12">
                  <v-row no-gutters>
                    <v-col cols="5">
                      <p class="caption txtcapsty">ToDay's P&L</p>
                    </v-col>
                    <v-col cols="7">
                      <p class="ctnbtl sumval mb-0 text-right" style="line-height: 28px; color: #505359">
                        <span v-if="tol_presentvalue">{{ tol_tdypnl.toFixed(2) }}</span>
                        <span v-else>0.00</span>
                        <span v-if="tol_tdypnl">
                          <span v-if="tol_tdypnl > 0" class="caption ml-2 pa-1 rounded-lg"
                            style="background-color: #eeffed; color: #34a853">+{{
                              tol_tdypre
                            }}%</span>
                          <span v-else class="caption ml-2 pa-1 rounded-lg"
                            style="background-color: #ffeeee; color: #e12626">{{
                              tol_tdypre
                            }}%</span></span>
                        <span v-else class="caption ml-2 pa-1 rounded-lg"
                          style="background-color: rgb(135, 139, 147, 0.1); color: rgb(135, 139, 147);">0.00%</span>
                      </p>

                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </v-card>
        <v-card outlined class="d-none d-md-flex elevation-0 rounded-lg mt-4">
          <v-row no-gutters>
            <v-col cols="3" sm="6" md="3">
              <div class="pa-4">
                <p class="caption txtcapsty">Total investment</p>
                <p class="ctnbtl sumval mb-0" style="line-height: 28px; color: #505359">
                  <span v-if="tol_buyvalue">{{ tol_buyvalue }}</span>
                  <span v-else>0.00</span>
                </p>
              </div>
            </v-col>
            <v-divider class="d-none d-md-flex" vertical></v-divider>
            <v-col cols="3" sm="6" md="3">
              <div class="pa-4">
                <p class="caption txtcapsty">Holdings Value</p>
                <p class="ctnbtl sumval mb-0" style="line-height: 28px; color: #505359">
                  <span v-if="tol_presentvalue">{{ tol_presentvalue }}</span>
                  <span v-else>0.00</span>
                </p>
              </div>
            </v-col>
            <v-divider class="d-none d-md-flex" vertical></v-divider>
            <v-col cols="3" sm="6" md="3">
              <div class="pa-4">
                <p class="caption txtcapsty">Total P&L</p>
                <p class="ctnbtl sumval mb-0" style="line-height: 28px; color: #505359">
                  <span v-if="tol_presentvalue">{{ tol_pnl }}</span>
                  <span v-else>0.00</span>
                  <span v-if="tol_pnl">
                    <span v-if="tol_pnl > 0" class="caption ml-2 pa-2 rounded-lg"
                      style="background-color: #eeffed; color: #34a853">+{{
                        tol_pnl_chg
                      }}%</span>
                    <span v-else class="caption ml-2 pa-2 rounded-lg"
                      style="background-color: #ffeeee; color: #e12626">{{
                        tol_pnl_chg
                      }}%</span></span>
                  <span v-else class="caption ml-2 pa-2 rounded-lg"
                    style="background-color: rgb(135, 139, 147, 0.1);color: rgb(135, 139, 147);">0.00%</span>
                </p>
              </div>
            </v-col>
            <v-divider class="d-none d-md-flex" vertical></v-divider>
            <v-col cols="3" sm="6" md="3">
              <div class="pa-4">
                <p class="caption txtcapsty">ToDay's P&L</p>

                <p class="ctnbtl sumval mb-0" style="line-height: 28px; color: #505359">
                  <span v-if="tol_presentvalue">{{ tol_tdypnl.toFixed(2) }}</span>
                  <span v-else>0.00</span>
                  <span v-if="tol_tdypnl">
                    <span v-if="tol_tdypnl > 0" class="caption ml-2 pa-2 rounded-lg"
                      style="background-color: #eeffed; color: #34a853">+{{
                        tol_tdypre
                      }}%</span>
                    <span v-else class="caption ml-2 pa-2 rounded-lg"
                      style="background-color: #ffeeee; color: #e12626">{{
                        tol_tdypre
                      }}%</span></span>
                  <span v-else class="caption ml-2 pa-2 rounded-lg"
                    style="background-color: rgb(135, 139, 147, 0.1); color: rgb(135, 139, 147);">0.00%</span>
                </p>
              </div>
            </v-col>
          </v-row>
        </v-card>
        <div class="mt-2 mt-sm-0 mt-md-0">
          <v-toolbar color="transparent" class="elevation-0 px-0 toolbar">
            <v-col cols="8" class="px-0">
              <v-tabs v-model="tab" background-color="transparent" color="#1877F2" active-class="font-weight-bold" flat>
                <v-tab>Overview</v-tab>
                <v-tab>Marketcap</v-tab>
                <v-tab>Duration</v-tab>
                <v-tab>sector</v-tab>
                <v-tab v-if="clientidsindex == 'All'">Account</v-tab>
              </v-tabs>
            </v-col>
            <v-col class="px-0 d-flex justify-end" cols="4">
              <div>
                <v-btn text color="#878B93"><img class="pr-2" src="@/assets/download icon.svg" width="25px" alt="downloadicon" />Download
                </v-btn>
              </div>
            </v-col>
          </v-toolbar>

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <div class="mb-4">
                <button class="d-none" ref="Btn" @click="logClicked">Click</button>
                <v-data-table :loading="printsumgetloader" mobile-breakpoint fixed-header disable-sort
                  :headers="overviewhead" :items="newhold" hide-default-footer style="border: 1px solid #efeef3"
                  class="cliidsty elevation-0 rounded-lg" :page.sync="scrpage" :items-per-page="newhold.length"
                  @page-count="pageCount = $event" group-by="Symbol" height="80vh" ref="ovrtable">
                  <template v-slot:[`item.Avg_Price`]="{ item }">
                    <span>{{ item.Avg_Price.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.ltp`]="{ item }">
                    <span>{{ item.ltp.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.Net_Value`]="{ item }">
                    <span>{{ item.Net_Value.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.present_value`]="{ item }">
                    <span>{{ item.present_value.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.pnl`]="{ item }">
                    <span>{{ item.pnl.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.pnl_change`]="{ item }">
                    <span>{{ item.pnl_change.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`group.header`]="{ items, isOpen, toggle }">
                    <td colspan="1" @click="toggle">
                      <strong>{{ items[0].Symbol }}</strong>
                      <v-icon>{{ isOpen? 'mdi-chevron-up': 'mdi-chevron-down' }}
                      </v-icon>
                    </td>
                    <td @click="toggle" class="text-right">{{ Math.trunc(subTotal(items, 'Quantity')) }}</td>
                    <td @click="toggle" class="text-right">{{ subTotal(items, 'Avg_Price') }}</td>
                    <td @click="toggle" class="text-right">{{ subTotal(items, 'ltp') }}</td>
                    <td @click="toggle" class="text-right">{{ subTotal(items, 'Net_Value') }}</td>
                    <td @click="toggle" class="text-right">{{ subTotal(items, 'present_value') }}</td>
                    <td @click="toggle" class="text-right">{{ subTotal(items, 'pnl') }}</td>
                    <td @click="toggle" class="text-right">{{ ((subTotal(items, 'pnl') / subTotal(items, 'Net_Value')) *100).toFixed(2)
                    }}</td>
                  </template>
                  <template v-slot:[`item.scrpit`]="{ item }">
                    <v-list-item v-if="clientidsindex == 'All'">
                      <v-list-item-content>
                        <v-list-item-title class="font-weight-regular">
                          {{ item.Symbol }}
                        </v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon class="mb-1 mt-2">
                        <div v-if="item.Client_Code.slice(0, 1) == 'Z'">
                          <img style="border: 1px solid #efeef3" width="24px" class="pa-1 rounded"
                            src="@/assets/Ma_zebu.svg" alt="Ma_zebu-logo">
                        </div>
                        <div v-else>
                          <v-avatar tile size="32"><v-card class="elevation-0 pa-1" rounded outlined>
                              <span class="font-weight-bold">
                                {{ item.Client_Code.slice(0, 2) }}
                              </span>
                            </v-card></v-avatar>
                        </div>
                      </v-list-item-icon>
                    </v-list-item>
                    <td v-else>
                      <span>{{ item.Symbol }}</span>
                    </td>
                  </template>
                  <template v-if="usertotaldata" v-slot:[`body.append`]>
                    <tr class="black--text">
                      <td colspan="4" class="text-left">
                        <span v-if="clientidsindex == 'All'" class="subtitle-1 font-weight-medium pa-1 rounded mr-1"
                          style="background-color: #e8ebed; color: #505359">{{ clientids.length - 1 }}
                          accounts</span>
                        <span class="subtitle-1 font-weight-medium pa-1 rounded"
                          style="background-color: #e8ebed; color: #505359">{{ total_Summary }} holdings</span>
                      </td>
                      <td class="subtitle-1 text-right font-weight-medium">
                        {{ tol_buyvalue }}
                      </td>
                      <td class="subtitle-1 text-right font-weight-medium">
                        {{ tol_presentvalue }}
                      </td>
                      <td class="subtitle-1 text-right font-weight-medium">
                        <span v-if="tol_pnl == 0">{{ tol_pnl }}</span>
                        <span v-else>
                          <span class="font-weight-medium pa-1 rounded" v-if="tol_pnl > 0"
                            style="background-color: #eeffed; color: #34a853">{{ tol_pnl }}</span>
                          <span class="font-weight-medium pa-1 rounded" v-else
                            style="background-color: #ffeeee; color: #e12626">{{ tol_pnl }}</span>
                        </span>
                      </td>
                      <td class="subtitle-1 text-right font-weight-medium">
                        <span v-if="tol_pnl == 0">{{ tol_pnl }}</span>
                        <span v-else>
                          <span class="font-weight-medium pa-1 rounded" v-if="tol_pnl > 0"
                            style="background-color: #eeffed; color: #34a853">+{{ tol_pnl_chg }}%</span>
                          <span class="font-weight-medium pa-1 rounded" v-else
                            style="background-color: #ffeeee; color: #e12626">{{ tol_pnl_chg }}%</span>
                        </span>
                      </td>
                    </tr>
                  </template>
                
                  <template v-if="usernodata" v-slot:no-data>
                    <v-col class="mx-auto pa-15">
                      <v-img class="align-self-stretch mx-auto" width="100px"
                        :src="require('@/assets/no data folder.svg')" />
                      <h4>No data available</h4>
                    </v-col>
                  </template>
                </v-data-table>
              </div>
            </v-tab-item>

            <v-tab-item>
              <div class="mb-4">
                <v-data-table :loading="printsumgetloader" mobile-breakpoint fixed-header disable-sort
                  :headers="MarketCaphead" :items="newhold" hide-default-footer style="border: 1px solid #efeef3"
                  class=" elevation-0 rounded-lg" :page.sync="cappage" :items-per-page="10"
                  @page-count="pageCount = $event" group-by="MarketCapType">
                  <template v-slot:[`item.Avg_Price`]="{ item }">
                    <span>{{ item.Avg_Price.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.ltp`]="{ item }">
                    <span>{{ item.ltp.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.Net_Value`]="{ item }">
                    <span>{{ item.Net_Value.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.present_value`]="{ item }">
                    <span>{{ item.present_value.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.pnl`]="{ item }">
                    <span>{{ item.pnl.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.pnl_change`]="{ item }">
                    <span>{{ item.pnl_change.toFixed(2) }}</span>
                  </template>
                  <template v-if="clientidsindex == 'All'" v-slot:[`item.Symbol`]="{ item }">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="font-weight-regular">
                          {{ item.Symbol }}
                        </v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon class="mb-1 mt-2">
                        <div v-if="item.Client_Code.slice(0, 1) == 'Z'">
                          <img style="border: 1px solid #efeef3" width="24px" class="pa-1 rounded"
                            src="@/assets/Ma_zebu.svg" alt="Ma_zebu-logo">
                        </div>
                        <div v-else>
                          <v-avatar tile size="32"><v-card class="elevation-0 pa-1" rounded outlined>
                              <span class="font-weight-bold">
                                {{ item.Client_Code.slice(0, 2) }}
                              </span>
                            </v-card></v-avatar>
                        </div>
                      </v-list-item-icon>
                    </v-list-item>
                  </template>
                  <template v-if="usertotaldata" v-slot:[`body.append`]>
                    <tr class="black--text">
                      <td colspan="4" class="text-left">
                        <span v-if="clientidsindex == 'All'" class="subtitle-1 font-weight-medium pa-1 rounded mr-1"
                          style="background-color: #e8ebed; color: #505359">{{ clientids.length - 1 }}
                          accounts</span>
                        <span class="subtitle-1 font-weight-medium pa-1 rounded"
                          style="background-color: #e8ebed; color: #505359">{{ total_Summary }} holdings</span>
                      </td>
                      <td class="subtitle-1 text-right font-weight-medium">
                        {{ tol_buyvalue }}
                      </td>
                      <td class="subtitle-1 text-right font-weight-medium">
                        {{ tol_presentvalue }}
                      </td>
                      <td class="subtitle-1 text-right font-weight-medium">
                        <span v-if="tol_pnl == 0">{{ tol_pnl }}</span>
                        <span v-else>
                          <span class="font-weight-medium pa-1 rounded" v-if="tol_pnl > 0"
                            style="background-color: #eeffed; color: #34a853">{{ tol_pnl }}</span>
                          <span class="font-weight-medium pa-1 rounded" v-else
                            style="background-color: #ffeeee; color: #e12626">{{ tol_pnl }}</span>
                        </span>
                      </td>
                      <td class="subtitle-1 text-right font-weight-medium">
                        <span v-if="tol_pnl == 0">{{ tol_pnl }}</span>
                        <span v-else>
                          <span class="font-weight-medium pa-1 rounded" v-if="tol_pnl > 0"
                            style="background-color: #eeffed; color: #34a853">+{{ tol_pnl_chg }}%</span>
                          <span class="font-weight-medium pa-1 rounded" v-else
                            style="background-color: #ffeeee; color: #e12626">{{ tol_pnl_chg }}%</span>
                        </span>
                      </td>
                    </tr>
                  </template>
                  <template v-slot:[`group.header`]="{ headers, items }">
                    <td :colspan="headers.length">
                      <strong>{{ items[0].MarketCapType }}</strong>
                    </td>
                  </template>
                  <template v-slot:[`footer`]>
                    <v-divider></v-divider>
                    <div class="text-center py-2">
                      <v-pagination :total-visible="7" v-model="cappage" :length="pageCount"></v-pagination>
                    </div>
                  </template>
                  <template v-if="usernodata" v-slot:no-data>
                    <v-col class="mx-auto pa-15">
                      <v-img class="align-self-stretch mx-auto" width="100px"
                        :src="require('@/assets/no data folder.svg')" />
                      <h4>No data available</h4>
                    </v-col>
                  </template>
                </v-data-table>
              </div>
            </v-tab-item>

            <v-tab-item>
              <div class="mb-4">
                <v-data-table :loading="printsumgetloader" mobile-breakpoint fixed-header disable-sort
                  :headers="Durationhead" :items="newhold" hide-default-footer style="border: 1px solid #efeef3"
                  class=" elevation-0 rounded-lg" :page.sync="durpage" :items-per-page="10"
                  @page-count="pageCount = $event" group-by="DurationTerm">
                  <template v-slot:[`item.Avg_Price`]="{ item }">
                    <span>{{ item.Avg_Price.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.ltp`]="{ item }">
                    <span>{{ item.ltp.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.Net_Value`]="{ item }">
                    <span>{{ item.Net_Value.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.present_value`]="{ item }">
                    <span>{{ item.present_value.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.pnl`]="{ item }">
                    <span>{{ item.pnl.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.pnl_change`]="{ item }">
                    <span>{{ item.pnl_change.toFixed(2) }}</span>
                  </template>
                  <template v-if="clientidsindex == 'All'" v-slot:[`item.Symbol`]="{ item }">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="font-weight-regular">
                          {{ item.Symbol }}
                        </v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon class="mb-1 mt-2">
                        <div v-if="item.Client_Code.slice(0, 1) == 'Z'">
                          <img style="border: 1px solid #efeef3" width="24px" class="pa-1 rounded"
                            src="@/assets/Ma_zebu.svg" alt="Ma_zebu-logo" >
                        </div>
                        <div v-else>
                          <v-avatar tile size="32"><v-card class="elevation-0 pa-1" rounded outlined>
                              <span class="font-weight-bold">
                                {{ item.Client_Code.slice(0, 2) }}
                              </span>
                            </v-card></v-avatar>
                        </div>
                      </v-list-item-icon>
                    </v-list-item>
                  </template>
                  <template v-if="usertotaldata" v-slot:[`body.append`]>
                    <tr class="black--text">
                      <td colspan="5" class="text-left">
                        <span v-if="clientidsindex == 'All'" class="subtitle-1 font-weight-medium pa-1 rounded mr-1"
                          style="background-color: #e8ebed; color: #505359">{{ clientids.length - 1 }}
                          accounts</span>
                        <span class="subtitle-1 font-weight-medium pa-1 rounded"
                          style="background-color: #e8ebed; color: #505359">{{ total_Summary }} holdings</span>
                      </td>
                      <td class="subtitle-1 text-right font-weight-medium">
                        {{ tol_buyvalue }}
                      </td>
                      <td class="subtitle-1 text-right font-weight-medium">
                        {{ tol_presentvalue }}
                      </td>
                      <td class="subtitle-1 text-right font-weight-medium">
                        <span v-if="tol_pnl == 0">{{ tol_pnl }}</span>
                        <span v-else>
                          <span class="font-weight-medium pa-1 rounded" v-if="tol_pnl > 0"
                            style="background-color: #eeffed; color: #34a853">{{ tol_pnl }}</span>
                          <span class="font-weight-medium pa-1 rounded" v-else
                            style="background-color: #ffeeee; color: #e12626">{{ tol_pnl }}</span>
                        </span>
                      </td>
                      <td class="subtitle-1 text-right font-weight-medium">
                        <span v-if="tol_pnl == 0">{{ tol_pnl }}</span>
                        <span v-else>
                          <span class="font-weight-medium pa-1 rounded" v-if="tol_pnl > 0"
                            style="background-color: #eeffed; color: #34a853">+{{ tol_pnl_chg }}%</span>
                          <span class="font-weight-medium pa-1 rounded" v-else
                            style="background-color: #ffeeee; color: #e12626">{{ tol_pnl_chg }}%</span>
                        </span>
                      </td>
                    </tr>
                  </template>
                  <template v-slot:[`item.Duration`]="{ item }">
                    <v-card outlined class="elevation-0 rounded pa-1" height="60%" width="100%">
                      <v-list-item class="pl-2 pr-0">
                        <v-list-item-icon class="ma-0 mt-1">
                          <p class="mb-0">
                            <img src="@/assets/Durationicon.svg" width="18px" alt="Durationicon" >
                            <span class="font-weight-bold pl-2">{{ item.Duration }}</span>
                          </p>
                        </v-list-item-icon>
                      </v-list-item>
                    </v-card>
                  </template>
                  <template v-slot:[`group.header`]="{ headers, items }">
                    <td :colspan="headers.length">
                      <strong>{{ items[0].DurationTerm }}</strong>
                    </td>
                  </template>
                  <template v-slot:[`footer`]>
                    <v-divider></v-divider>
                    <div class="text-center py-2">
                      <v-pagination :total-visible="7" v-model="durpage" :length="pageCount"></v-pagination>
                    </div>
                  </template>
                  <template v-if="usernodata" v-slot:no-data>
                    <v-col class="mx-auto pa-15">
                      <v-img class="align-self-stretch mx-auto" width="100px"
                        :src="require('@/assets/no data folder.svg')" />
                      <h4>No data available</h4>
                    </v-col>
                  </template>
                </v-data-table>
              </div>
            </v-tab-item>

            <v-tab-item>
              <div class="mb-4">
                <v-data-table :loading="printsumgetloader" mobile-breakpoint fixed-header disable-sort
                  :headers="Sectorhead" :items="newhold" hide-default-footer style="border: 1px solid #efeef3"
                  class=" elevation-0 rounded-lg" :page.sync="secpage" :items-per-page="10"
                  @page-count="pageCount = $event" group-by="sector">
                  <template v-slot:[`item.Avg_Price`]="{ item }">
                    <span>{{ item.Avg_Price.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.ltp`]="{ item }">
                    <span>{{ item.ltp.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.Net_Value`]="{ item }">
                    <span>{{ item.Net_Value.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.present_value`]="{ item }">
                    <span>{{ item.present_value.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.pnl`]="{ item }">
                    <span>{{ item.pnl.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.pnl_change`]="{ item }">
                    <span>{{ item.pnl_change.toFixed(2) }}</span>
                  </template>
                  <template v-if="clientidsindex == 'All'" v-slot:[`item.Symbol`]="{ item }">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="font-weight-regular">
                          {{ item.Symbol }}
                        </v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon class="mb-1 mt-2">
                        <div v-if="item.Client_Code.slice(0, 1) == 'Z'">
                          <img style="border: 1px solid #efeef3" width="24px" class="pa-1 rounded" src="@/assets/Ma_zebu.svg" alt="Ma_zebu-logo" >
                        </div>
                        <div v-else>
                          <v-avatar tile size="32"><v-card class="elevation-0 pa-1" rounded outlined>
                              <span class="font-weight-bold">
                                {{ item.Client_Code.slice(0, 2) }}
                              </span>
                            </v-card></v-avatar>
                        </div>
                      </v-list-item-icon>
                    </v-list-item>
                  </template>
                  <template v-if="usertotaldata" v-slot:[`body.append`]>
                    <tr class="black--text">
                      <td colspan="4" class="text-left">
                        <span v-if="clientidsindex == 'All'" class="subtitle-1 font-weight-medium pa-1 rounded mr-1"
                          style="background-color: #e8ebed; color: #505359">{{ clientids.length - 1 }}
                          accounts</span>
                        <span class="subtitle-1 font-weight-medium pa-1 rounded"
                          style="background-color: #e8ebed; color: #505359">{{ total_Summary }} holdings</span>
                      </td>
                      <td class="subtitle-1 text-right font-weight-medium">
                        {{ tol_buyvalue }}
                      </td>
                      <td class="subtitle-1 text-right font-weight-medium">
                        {{ tol_presentvalue }}
                      </td>
                      <td class="subtitle-1 text-right font-weight-medium">
                        <span v-if="tol_pnl == 0">{{ tol_pnl }}</span>
                        <span v-else>
                          <span class="font-weight-medium pa-1 rounded" v-if="tol_pnl > 0"
                            style="background-color: #eeffed; color: #34a853">{{ tol_pnl }}</span>
                          <span class="font-weight-medium pa-1 rounded" v-else
                            style="background-color: #ffeeee; color: #e12626">{{ tol_pnl }}</span>
                        </span>
                      </td>
                      <td class="subtitle-1 text-right font-weight-medium">
                        <span v-if="tol_pnl == 0">{{ tol_pnl }}</span>
                        <span v-else>
                          <span class="font-weight-medium pa-1 rounded" v-if="tol_pnl > 0"
                            style="background-color: #eeffed; color: #34a853">+{{ tol_pnl_chg }}%</span>
                          <span class="font-weight-medium pa-1 rounded" v-else
                            style="background-color: #ffeeee; color: #e12626">{{ tol_pnl_chg }}%</span>
                        </span>
                      </td>
                    </tr>
                  </template>
                  <template v-slot:[`group.header`]="{ headers, items }">
                    <td :colspan="headers.length">
                      <strong>{{ items[0].sector }}</strong>
                    </td>
                  </template>
                  <template v-slot:[`footer`]>
                    <v-divider></v-divider>
                    <div class="text-center py-2">
                      <v-pagination :total-visible="7" v-model="secpage" :length="pageCount"></v-pagination>
                    </div>
                  </template>
                  <template v-if="usernodata" v-slot:no-data>
                    <v-col class="mx-auto pa-15">
                      <v-img class="align-self-stretch mx-auto" width="100px"
                        :src="require('@/assets/no data folder.svg')" />
                      <h4>No data available</h4>
                    </v-col>
                  </template>
                </v-data-table>
              </div>
            </v-tab-item>

            <v-tab-item v-if="clientidsindex == 'All'">
              <div class="mb-4">
                <v-data-table :loading="printsumgetloader" mobile-breakpoint fixed-header disable-sort
                  :headers="allacchead" :items="newhold" hide-default-footer style="border: 1px solid #efeef3"
                  class="elevation-0 rounded-lg" :page.sync="scrpage" :items-per-page="10"
                  @page-count="pageCount = $event" group-by="Client_Code">
                  <template v-slot:[`item.Avg_Price`]="{ item }">
                    <span>{{ item.Avg_Price.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.ltp`]="{ item }">
                    <span>{{ item.ltp.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.Net_Value`]="{ item }">
                    <span>{{ item.Net_Value.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.present_value`]="{ item }">
                    <span>{{ item.present_value.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.pnl`]="{ item }">
                    <span>{{ item.pnl.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`item.pnl_change`]="{ item }">
                    <span>{{ item.pnl_change.toFixed(2) }}</span>
                  </template>
                  <template v-slot:[`group.header`]="{ headers, items }">
                    <td :colspan="headers.length">
                      <strong>{{ items[0].Client_Code }}</strong>
                    </td>
                  </template>
                  <template v-if="usertotaldata" v-slot:[`body.append`]>
                    <tr class="black--text">
                      <td colspan="4" class="text-left">
                        <span v-if="clientidsindex == 'All'" class="subtitle-1 font-weight-medium pa-1 rounded mr-1"
                          style="background-color: #e8ebed; color: #505359">{{ clientids.length - 1 }}
                          accounts</span>
                        <span class="subtitle-1 font-weight-medium pa-1 rounded"
                          style="background-color: #e8ebed; color: #505359">{{ total_Summary }} holdings</span>
                      </td>
                      <td class="subtitle-1 text-right font-weight-medium">
                        {{ tol_buyvalue }}
                      </td>
                      <td class="subtitle-1 text-right font-weight-medium">
                        {{ tol_presentvalue }}
                      </td>
                      <td class="subtitle-1 text-right font-weight-medium">
                        <span v-if="tol_pnl == 0">{{ tol_pnl }}</span>
                        <span v-else>
                          <span class="font-weight-medium pa-1 rounded" v-if="tol_pnl > 0"
                            style="background-color: #eeffed; color: #34a853">{{ tol_pnl }}</span>
                          <span class="font-weight-medium pa-1 rounded" v-else
                            style="background-color: #ffeeee; color: #e12626">{{ tol_pnl }}</span>
                        </span>
                      </td>
                      <td class="subtitle-1 text-right font-weight-medium">
                        <span v-if="tol_pnl == 0">{{ tol_pnl }}</span>
                        <span v-else>
                          <span class="font-weight-medium pa-1 rounded" v-if="tol_pnl > 0"
                            style="background-color: #eeffed; color: #34a853">+{{ tol_pnl_chg }}%</span>
                          <span class="font-weight-medium pa-1 rounded" v-else
                            style="background-color: #ffeeee; color: #e12626">{{ tol_pnl_chg }}%</span>
                        </span>
                      </td>
                    </tr>
                  </template>
                  <template v-slot:[`footer`]>
                    <v-divider></v-divider>
                    <div class=" text-center py-2">
                      <v-pagination :total-visible="7" v-model="scrpage" :length="pageCount"></v-pagination>
                    </div>
                  </template>
                  <template v-if="usernodata" v-slot:no-data>
                    <v-col class="mx-auto pa-15">
                      <v-img class="align-self-stretch mx-auto" width="100px"
                        :src="require('@/assets/no data folder.svg')" />
                      <h4>No data available</h4>
                    </v-col>
                  </template>
                </v-data-table>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </div>
    </v-container>
    <div class="">
      <v-snackbar style="z-index: 2 !important;" transition="slide-x-reverse-transition" v-model="snackbar"
        :timeout="2000" :value="true" color="warning" absolute outlined top right>
        <v-icon color="warning">mdi-alert-outline</v-icon>
        Session <strong>expired</strong> Kindly Login again.
      </v-snackbar>
    </div>
  </v-app>
</template>

<script>
import { apiurl, apinew } from "../../apiUrl";
// 
import axios from "axios";
export default {
  data() {
    return {
      clientidsindex: "",
      snackbar: false,
      allpage: 1,
      scrpage: 1,
      cappage: 1,
      durpage: 1,
      secpage: 1,
      accpage: 1,

      pageCount: 0,
      usertotaldata: true,
      holdusertotaldata: true,
      usernodata: false,
      holdusernodata: false,
      tab: 0,

      Symbol: '',

      printsumgetloader: true,
      allholdloader: true,
      clientids: [
        'All'
      ],
      allids: [],
      emailDatafetch: [],

      newhold: [],
      allholdings: [],

      tol_buyvalue: 0.00,
      tol_pnl: 0.00,
      tol_pnl_chg: 0.00,
      tol_presentvalue: 0.00,
      tol_tdypnl: 0.00,
      tol_tdypre: 0.00,
      total_Summary: 0.00,
    };
  },

  methods: {
    checkClientSync() {
      let gauthclientseassion = localStorage.clientsessionstore
      let email = localStorage.getItem('decryptedstoredData')
      let data = JSON.stringify({
        email: email,
      });

      let config = {
        method: "post",
        url: `${apiurl}/syncEmailDetails`,
        headers: {
          "Content-Type": "application/json",
          'Authorization': gauthclientseassion
        },
        data: data,
      };
      let axiosThis = this;
      axios(config)
        .then(function (response) {

          if (response.data.msg == "Token is Expired." || response.data.msg == "Token is Invalid.") {
            axiosThis.snackbar = true;
            setTimeout(function () {
              axiosThis.$router.push("/signin");
            }, 2000);
          }
          axiosThis.emailDatafetch = response.data.Data;
          if (response.data.msg == 'No Email Sync data available for User') {
            axiosThis.printsumgetloader = false;
            axiosThis.usertotaldata = false;
            axiosThis.usernodata = true;
          }
          for (const element of axiosThis.emailDatafetch) {
            // let clientIds = element.clientID;
            axiosThis.clientids.push(element.clientID);
          }
          axiosThis.clientidsindex = axiosThis.clientids[0]
          axiosThis.selectHolding();
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    selectHolding() {
      this.newhold = [];
      this.tol_buyvalue = 0.00;
      this.tol_pnl = 0.00;
      this.tol_pnl_chg = 0.00;
      this.tol_presentvalue = 0.00;
      this.tol_tdypnl = 0.00;
      this.tol_tdypre = 0.00;
      this.total_Summary = 0.00;
      this.printsumgetloader = true;
      let ids;
      if (this.clientidsindex == 'All') {
        ids = this.clientids.filter(function (e) { return e !== 'All' })
      } else {
        ids = [this.clientidsindex]
      }
      let data = JSON.stringify({
        "clientid": ids
      });
      let config = {
        method: 'post',
        url: `${apinew}/allholdings`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };
      let axiosThis = this;

      axios(config)
        .then(function (response) {
          axiosThis.newhold = response.data.holdings;
          axiosThis.tol_buyvalue = response.data.tol_buyvalue;
          axiosThis.tol_pnl = response.data.tol_pnl;
          axiosThis.tol_pnl_chg = response.data.tol_pnl_chg;
          axiosThis.tol_presentvalue = response.data.tol_presentvalue;
          axiosThis.tol_tdypnl = response.data.tol_tdypnl;
          axiosThis.tol_tdypre = response.data.tol_tdypre;
          axiosThis.total_Summary = response.data.total_Summary;
          if (axiosThis.total_Summary > 0) {
            axiosThis.printsumgetloader = false;
            axiosThis.$refs.Btn.click()

          } else if (response.data.msg == 'No Data Available') {
            axiosThis.printsumgetloader = false;
            axiosThis.usertotaldata = false;
            axiosThis.usernodata = true;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    subTotal(items, column) {
      return items.reduce((sum, item) => sum + item[column], 0).toFixed(2);
    },
    logClicked() {
      let axiosThis = this;

      setTimeout(function () {
        let table = axiosThis.$refs.ovrtable;
        let keys = Object.keys(table.$vnode.componentInstance.openCache);
        keys.forEach(x => {
          table.$vnode.componentInstance.openCache[x] = false;
        })
      }, 0);
    }
  },
  mounted() {
    this.checkClientSync();
  },

  computed: {
    overviewhead() {
      return [
        { text: "Company", value: "scrpit", align: "left", groupable: false, },
        { text: "", value: "Symbol", align: "left", groupable: false, },
        { text: "Qty", value: "Quantity", align: "right" },
        { text: "Buy avg.", value: "Avg_Price", align: "right" },
        { text: "LTP", value: "ltp", align: "right" },
        { text: "Buy value", value: "Net_Value", align: "right" },
        { text: "Present value", value: "present_value", align: "right" },
        { text: "P&L", value: "pnl", align: "right" },
        { text: "P&L change", value: "pnl_change", align: "right" },
      ];
    },
    MarketCaphead() {
      return [
        { text: "Company", value: "Symbol", align: "left", groupable: false, },
        { text: "Qty", value: "Quantity", align: "right" },
        { text: "Buy avg.", value: "Avg_Price", align: "right" },
        { text: "LTP", value: "ltp", align: "right" },
        { text: "Buy value", value: "Net_Value", align: "right" },
        { text: "Present value", value: "present_value", align: "right" },
        { text: "P&L", value: "pnl", align: "right" },
        { text: "P&L change", value: "pnl_change", align: "right" },
        { text: "MarketCap", value: "MarketCapType" },
      ];
    },
    Durationhead() {
      return [
        { text: "Company", value: "Symbol", align: "left", groupable: false, },
        { text: "", value: "Duration", align: "centre" },
        { text: "Qty", value: "Quantity", align: "right" },
        { text: "Buy avg.", value: "Avg_Price", align: "right" },
        { text: "LTP", value: "ltp", align: "right" },
        { text: "Buy value", value: "Net_Value", align: "right" },
        { text: "Present value", value: "present_value", align: "right" },
        { text: "P&L", value: "pnl", align: "right" },
        { text: "P&L change", value: "pnl_change", align: "right" },
      ];
    },
    Sectorhead() {
      return [
        { text: "Company", value: "Symbol", align: "left", groupable: false, },
        { text: "Qty", value: "Quantity", align: "right" },
        { text: "Buy avg.", value: "Avg_Price", align: "right" },
        { text: "LTP", value: "ltp", align: "right" },
        { text: "Buy value", value: "Net_Value", align: "right" },
        { text: "Present value", value: "present_value", align: "right" },
        { text: "P&L", value: "pnl", align: "right" },
        { text: "P&L change", value: "pnl_change", align: "right" },
        { text: "sector", value: "sector" },
      ];
    },
    allacchead() {
      return [
        { text: "Company", value: "Symbol", align: "left", groupable: false, },
        { text: "Qty", value: "Quantity", align: "right" },
        { text: "Buy avg.", value: "Avg_Price", align: "right" },
        { text: "LTP", value: "ltp", align: "right" },
        { text: "Buy value", value: "Net_Value", align: "right" },
        { text: "Present value", value: "present_value", align: "right" },
        { text: "P&L", value: "pnl", align: "right" },
        { text: "P&L change", value: "pnl_change", align: "right" },
        { text: "Client_Code", value: "Client_Code", align: "right" },

      ];
    },
  },
};
</script>
<style>
.txtcapsty {
  color: #ff8d24;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.toolbar .v-toolbar__content {
  padding: 0 !important;
}

.cliidsty thead.v-data-table-header {
  position: relative;
  z-index: 10 !important;
}

tr.v-row-group__header {
  background-color: #fffaf6 !important;
  color: #ff8d24 !important;
  font-weight: 700;
}

.cliidsty tr.v-row-group__header {
  background-color: white !important;
  color: black !important;
  font-weight: 700;
}

.capsum .v-btn.v-btn--icon,
.tbhold .v-btn.v-btn--icon {
  display: none !important;
}

.v-pagination__navigation,
.v-pagination__item,
.v-pagination__item--active {
  box-shadow: none !important;
}
</style>