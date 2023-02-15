<template>
  <v-container class="pa-0 pa-sm-3 pa-md-3">
    <v-dialog v-model="emailfetchdialog" width="800">
      <v-card class="rounded-lg" style="overflow: hidden">
        <div>
          <v-row class="my-auto">
            <v-col class="trmnucolsl d-none d-md-block" cols="12" md="5">
              <div class="pt-2 pl-6">
                <p class="ctnbtl headline mb-2" style="color: #505359">
                  Add your trades
                </p>
                <p class="body-2" style="color: #6b7280">
                  You can now add your current and old trades to start tracking
                  them.
                </p>
              </div>
              <v-card color="transparent" height="100%" class="elevation-0 d-flex align-end justify-end">
                <img src="@/assets/Add your Demat account.svg" width="50%" alt="image" />
              </v-card>
            </v-col>
            <v-col class="trmnucols2" cols="12" sm="7">
              <div class="pt-2 px-6 pr-1">
                <v-row no-gutters>
                  <v-col cols="10">
                    <p class="mb-0 body-2" style="
                        color: #ff8d24;
                        letter-spacing: 0.16em;
                        text-transform: uppercase;
                      ">
                      Sync your trades
                    </p>
                  </v-col>
                  <v-col cols="2" class="text-right">
                    <v-btn @click="emailfetchdialog = false" class="mx-2" icon light>
                      <v-icon light> mdi-close </v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
                <div class="pr-6">
                  <p class="ctnbtl title" style="line-height: 28px">
                    Start tracking by sync your email here
                  </p>
                  <p class="text-center pt-14">
                    <v-btn
                      href="https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/gmail.readonly&access_type=offline&redirect_uri=https://app.wysely.in/Dashboard&response_type=code&client_id=841602117530-fflcske9v6nltk6spfj4gramgbsmhn0l.apps.googleusercontent.com"
                      x-large color="success" depressed dark>
                      Email Fetch
                    </v-btn>
                  </p>
                  <p class="
                      mb-1
                      mt-0
                      pt-0
                      mb-sm-1
                      mt-sm-8
                      pt-sm-8
                      mb-md-1
                      mt-md-10
                      pt-md-10
                    " style="color: #ff8d24; letter-spacing: 0.16em">
                    <img class="mr-3" src="@/assets/Contract Notes.svg" width="20px" alt="ContractNoteslogo" />EMAIL ID
                  </p>
                  <p class="body-1 mb-1 pr-0 pr-sm-6 pr-md-6 mb-sm-4 mb-md-4" style="color: #6b7280">
                    Email id contain all the information about your trades on
                    the exchanges.
                  </p>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-dialog>

    <div v-if="awesome" class="pt-16 pa-6 pa-sm-4 pa-md-4">
      <p class="lstctntit headline mb-1">Dashboard</p>
      <p class="body-1" color="#878B93">
        Snapshot of your holdings and trading activity
      </p>

      <v-row>
        <v-col cols="12" sm="8" md="8">
          <div class="pt-4">
            <p class="body-1 mb-1" color="#878B93">Wealth segmentation</p>
            <v-card outlined class="elevation-0 rounded-lg">
              <v-row>
                <v-col cols="12" sm="5" md="5" class="my-auto">
                  <div class="pa-8">
                    <img src="@/assets/Wealth segmentation chart bw.svg" width="100%" alt="Wealthsegmentationlogo" />
                  </div>
                </v-col>
                <v-col cols="12" sm="7" md="7" class="my-auto pr-5">
                  <div class="text-center">
                    <img src="@/assets/No trades yet.svg" alt="Notradesyet" />
                    <p class="title mb-2">No trades yet</p>
                    <p class="body-1 px-16">
                      You haven’t added any trades to your account. Start adding
                      your trades to track them.
                    </p>
                    <v-btn @click="emailfetchdialog = true" large outlined color="#1877F2">
                      Add your trades!</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </v-col>

        <v-col cols="12" sm="4" md="4">
          <div class="pt-4">
            <p class="body-1 mb-1" color="#878B93">Holding summary</p>
            <v-card outlined class="elevation-0 rounded-lg pa-5">
              <div class="mx-auto">
                <v-row>
                  <v-col>
                    <p class="body-2 mb-0" style="
                        color: #ff8d24;
                        letter-spacing: 0.16em;
                        text-transform: uppercase;
                      ">
                      VESTMENT
                    </p>
                    <span class="ctnbtl sumval" style="line-height: 28px; color: #505359">{{
    Math.abs(holdingtotal.Net_Value).toFixed(2)
}}</span>
                  </v-col>
                  <v-col>
                    <p class="body-2 mb-0" style="
                        color: #ff8d24;
                        letter-spacing: 0.16em;
                        text-transform: uppercase;
                      ">
                      HOLDINGS VALUE
                    </p>
                    <span class="ctnbtl sumval" style="line-height: 28px; color: #505359">{{ holdingtotal.BuyOrSell
}}</span>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <p class="body-2 mb-0" style="
                        color: #ff8d24;
                        letter-spacing: 0.16em;
                        text-transform: uppercase;
                      ">
                      TOTAL P&L
                    </p>
                    <span class="ctnbtl sumval" style="line-height: 28px; color: #505359">
                      {{ holdingtotal.Exchange }}
                    </span>
                  </v-col>
                  <v-col>
                    <p class="body-2 mb-0" style="
                        color: #ff8d24;
                        letter-spacing: 0.16em;
                        text-transform: uppercase;
                      ">
                      TODAY'S P&L
                    </p>
                    <span class="ctnbtl sumval" style="line-height: 28px; color: #505359">
                      {{ holdingtotal.pnlval }}
                    </span>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </div>
          <div class="pt-6">
            <p class="body-1 mb-1" color="#878B93">P&L summary</p>
            <v-card outlined class="elevation-0 rounded-lg pa-5">
              <div class="mx-auto">
                <v-row>
                  <v-col>
                    <p class="body-2 mb-0" style="
                        color: #ff8d24;
                        letter-spacing: 0.16em;
                        text-transform: uppercase;
                      ">
                      Total Capital
                    </p>
                    <span class="ctnbtl sumval" style="line-height: 28px; color: #505359">
                      {{ Math.abs(pnltotal.Mtm.toLocaleString()).toFixed(2) }}
                    </span>
                  </v-col>
                  <v-col>
                    <p class="body-2 mb-0" style="
                        color: #ff8d24;
                        letter-spacing: 0.16em;
                        text-transform: uppercase;
                      ">
                      Realised P&L
                    </p>
                    <div v-if="pnltotal.Quantity == 0">
                      <span v-if="pnltotal.Mtm > 0" class="ctnbtl sumval" style="line-height: 28px; color: #34a853">
                        {{ pnltotal.Mtm.toLocaleString() }}
                      </span>
                      <span v-else class="ctnbtl sumval" style="line-height: 28px; color: #e12626">
                        {{ pnltotal.Mtm.toLocaleString() }}
                      </span>
                    </div>
                    <span v-else class="ctnbtl sumval" style="line-height: 28px">0.00</span>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <p class="body-2 mb-0" style="
                        color: #ff8d24;
                        letter-spacing: 0.16em;
                        text-transform: uppercase;
                      ">
                      Current Value
                    </p>
                    <span class="ctnbtl sumval" style="line-height: 28px; color: #505359">
                      {{ Math.abs(pnltotal.Net_rate.toLocaleString()).toFixed(2) }}
                    </span>
                  </v-col>
                  <v-col>
                    <p class="body-2 mb-0" style="color: #ff8d24;
                        letter-spacing: 0.16em;
                        text-transform: uppercase;
                      ">
                      UNRealised P&L
                    </p>
                    <div v-if="pnltotal.Quantity != 0">
                      <span v-if="pnltotal.Mtm > 0" class="ctnbtl sumval" style="line-height: 28px; color: #34a853">
                        {{ pnltotal.Mtm.toLocaleString() }}
                      </span>
                      <span v-else class="ctnbtl sumval" style="line-height: 28px; color: #e12626">
                        {{ pnltotal.Mtm.toLocaleString() }}
                      </span>
                    </div>
                    <span v-else class="ctnbtl sumval" style="line-height: 28px">0.00</span>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </div>
          <div class="pt-6">
            <p class="body-1 mb-1" color="#878B93">Upcoming events</p>
            <v-card outlined class="elevation-0 rounded-lg px-4">

              {{ upcomingEvents }}
              <div v-for="uPdata in upcomingEvents" :key="uPdata.Industry">
                <v-list-item>
                  <div class="text-center pa-2">
                    <p class="pa-16">{{uPdata}}</p>
                  </div>
                </v-list-item>
                <v-divider></v-divider>
              </div>
            </v-card>
          </div>
        </v-col>
      </v-row>
      <v-dialog v-model="manualdialog" width="800">
        <v-card class="rounded-lg" style="overflow: hidden">
          <div v-if="fileuploaddialog">
            <v-card class="rounded-lg" style="overflow: hidden">
              <div>
                <v-row class="my-auto">
                  <v-col class="trmnucolsl" cols="12" sm="5" md="5">
                    <div class="pt-4 px-8">
                      <p class="ctnbtl headline mb-2" style="color: #505359">
                        Add your trades
                      </p>
                      <p class="body-2 pb-0 mb-sm-16 pb-sm-16 mb-md-16 pb-md-16" style="color: #6b7280">
                        You can now add your current and old trades to start
                        tracking them.
                      </p>

                      <p class="
                          mb-1
                          mt-0
                          pt-0
                          mb-sm-1
                          mt-sm-16
                          pt-sm-16
                          mb-md-1
                          mt-md-16
                          pt-md-16
                        " style="color: #ff8d24; letter-spacing: 0.16em">
                        <img class="mr-3" src="@/assets/Contract Notes.svg" width="20px" alt="ContractNoteslogo" />CONTRACT NOTES
                      </p>
                      <p class="body-1 mb-1 pr-0 pr-sm-6 pr-md-6 mb-sm-4 mb-md-4" style="color: #6b7280">
                        Contract notes contain all the information about your
                        trades on the exchanges.
                      </p>
                    </div>
                  </v-col>

                  <v-col class="trmnucols2" cols="12" sm="7" md="7">
                    <v-form role="form" enctype="multipart/form-data" @submit.prevent="onSubmit">
                      <div class="pt-1 px-8 pt-sm-5 pt-md-5">
                        <p class="mb-2 body-2" style="
                            color: #ff8d24;
                            letter-spacing: 0.16em;
                            text-transform: uppercase;
                          ">
                          Upload Contract Note
                        </p>
                        <p class="
                            ctnbtl
                            title
                            mr-0
                            pr-0 pr-sm-10
                            mr-sm-16
                            pr-md-10
                            mr-md-16
                          " style="line-height: 28px">
                          Start wysely by uploading your daily contract notes
                        </p>

                        <div v-if="!itemsAdded">
                          <div class="form-group">
                            <v-card @ondragover="onChange" :class="dragging ? 'dropAreaDragging' : ''"
                              @dragenter="dragging = true" @dragend="dragging = false" @dragleave="dragging = false"
                              class="
                                fileupload
                                elevation-0
                                rounded-lg
                                text-center
                              " style="border: 1px dashed #d0d3d6">
                              <div class="innerfilup">
                                <img class="mb-6" src="@/assets/file drop.svg" width="25px" alt="filedroplogo" />
                                <p class="mb-0">
                                  You can drop your contract notes here to be
                                  uploaded
                                </p>
                              </div>
                              <input type="file" id="items" name="items[]" required multiple @change="onChange" />
                            </v-card>
                          </div>
                        </div>

                        <div v-else>
                          <p><strong>Names</strong></p>
                          <ol>
                            <li v-for="name in itemsNames" :key="name">
                              {{ name }}
                            </li>
                          </ol>
                          <p><strong>Sizes</strong></p>
                          <ol>
                            <li v-for="size in itemsSizes" :key="size">
                              {{ size }}
                            </li>
                          </ol>
                          <p><strong>Total files:</strong> {{ itemsAdded }}</p>
                          <p>
                            <strong>Total upload size:</strong>
                            {{ itemsTotalSize }}
                          </p>
                          <v-btn @click="
  (fileuploaddata = true),
  (fileuploaddialog = false)
">next</v-btn>
                        </div>

                        <p class="green--text" v-if="successMsg !== ''">
                          {{ successMsg }}
                        </p>
                        <p class="red--text" v-if="errorMsg !== ''">
                          An error has occurred: {{ errorMsg }}
                          <br />retryErrorMessage
                        </p>

                        <p class="green--text" v-if="itemsAdded && itemsAdded < minItems">
                          {{ minFilesErrorMessage }}: {{ minItems }}. <br />
                          retryErrorMessage
                        </p>
                        <p class="red--text" v-if="itemsAdded && itemsAdded > maxItems">
                          {{ maxFilesErrorMessage }}: {{ maxItems }}. <br />
                          retryErrorMessage
                        </p>
                        <p class="text-center pt-6" style="color: #1877f2">
                          Where can you find your contract notes?
                        </p>
                      </div>
                    </v-form>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </div>

          <div v-else-if="fileuploaddata">
            <div class="pt-8 pb-10 px-8">
              <p class="mb-2 body-2" style="
                  color: #ff8d24;
                  letter-spacing: 0.16em;
                  text-transform: uppercase;
                ">
                Verify Transactions
              </p>
              <p class="
                  ctnbtl
                  title
                  mr-0
                  pr-0
                  mr-sm-16
                  pr-sm-10
                  mr-md-16
                  pr-md-10
                " style="line-height: 28px">
                We’ve found these transactions from your contract notes, please
                verify and approve.
              </p>
              <v-card class="elevation-1">
      
                <v-divider></v-divider>
                <v-row class="px-3 py-3 d-none d-sm-flex d-md-flex">
                  <v-col cols="12" sm="6" md="6" class="pb-0">
                    <v-btn small depressed class="ma-0">
                      No trade selected
                    </v-btn>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" class="pb-0 text-right">
                    <v-btn small text color="#1877F2" class="ma-0">
                      Add trades
                    </v-btn>
                    <v-btn @click="
  (fileuploaddata = false), (fileuploaddialog = false)
">next</v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </div>
          </div>

          <div v-else>
            <div class="pt-8 pb-10 px-8">
              <p class="ctnbtl mb-2 body-2" style="
                  color: #ff8d24;
                  letter-spacing: 0.16em;
                  text-transform: uppercase;
                ">
                Add Transactions
              </p>
              <p class="ctnbtl title mb-16" style="line-height: 28px">
                Based on your selection, we are adding trades to your account.
              </p>

              <v-row class="mb-16">
                <v-col>
                  <div>
                    <p class="caption" style="
                        color: #ff8d24;
                        letter-spacing: 0.16em;
                        text-transform: uppercase;
                      ">
                      Total Trades Added
                    </p>
                    <p>
                      <span class="ctnbtl display-1" style="line-height: 28px">15</span>
                      trades
                    </p>
                  </div>
                </v-col>
                <v-col>
                  <div>
                    <p class="caption" style="
                        color: #ff8d24;
                        letter-spacing: 0.16em;
                        text-transform: uppercase;
                      ">
                      Total Trade Value
                    </p>
                    <p class="ctnbtl display-1" style="line-height: 28px">
                      5,42,152<small>.85</small>
                    </p>
                  </div>
                </v-col>
              </v-row>

              <v-btn large outlined color="#1877F2" @click="awesome = false">Add to wysely</v-btn>
            </div>
          </div>
        </v-card>
      </v-dialog>
    </div>

    <div v-else class="pt-16 pa-6 pa-sm-4 pa-md-4">
      <p class="lstctntit headline mb-1">Dashboard</p>
      <p class="body-1" color="#878B93">
        Snapshot of your holdings and trading activity
      </p>
      <v-row>
        <v-col cols="12" sm="7" md="8">
          <div class="pt-0 pt-sm-4 pt-md-4">
            <p class="body-1 mb-1" color="#878B93">Wealth segmentation</p>
            <v-card outlined class="elevation-0 rounded-lg">
              <v-row>
                <v-col cols="12" sm="12" md="5" class="my-auto">
                  <div class="
                      ma-6
                      mb-0
                      pa-6
                      py-0
                      pb-sm-0
                      pa-sm-5 pa-md-5
                      ma-sm-0 ma-md-0
                    ">
                    <WealthSegmentation />
                  </div>
                </v-col>
                <v-col cols="12" sm="12" md="7" class="
                    text-center text-sm-left text-md-left
                    pt-0
                    mt-0
                    my-8
                    pr-5
                    my-sm-0
                    pr-sm-0
                    my-md-8
                    pr-md-5
                  ">
                  <div>
                    <v-row class="my-auto mx-sm-auto">
                      <v-col cols="6" sm="6" md="6" class="pr-0 pr-sm-0">
                        <div class="mx-auto my-0 mr-sm-0 ma-sm-3 ma-md-3">
                          <p class="body-2" style="
                              color: #1877f2;
                              letter-spacing: 0.16em;
                              text-transform: uppercase;
                            ">
                            <v-icon class="pr-2" size="12" color="#1877F2">
                              mdi-checkbox-blank-circle</v-icon>Positions
                          </p>

                          <span class="ctnbtl title pl-sm-0 pl-md-5" style="color: #505359">0<small>.00</small></span>
                        </div>
                      </v-col>
                      <v-divider class="d-none d-md-flex" vertical></v-divider>
                      <v-col cols="6" sm="6" md="6" class="pr-0 pr-sm-0">
                        <div class="mx-auto my-0 mr-sm-0 ma-sm-3 ma-md-3">
                          <p class="body-2" style="
                              color: #ff8d24;
                              letter-spacing: 0.16em;
                              text-transform: uppercase;
                            ">
                            <v-icon class="pr-2" size="12" color="#FF8D24">
                              mdi-checkbox-blank-circle</v-icon>Holdings
                          </p>
                          <span class="ctnbtl title pl-sm-0 pl-md-5" style="color: #505359">0<small>.00</small></span>
                        </div>
                      </v-col>
                    </v-row>
                    <v-divider class="d-none d-md-flex"></v-divider>
                    <v-row class="mt-3 mx-sm-auto mt-sm-0 mt-md-0">
                      <v-col cols="6" sm="6" md="6" class="pr-0 pr-sm-0">
                        <div class="mx-auto my-0 mr-sm-0 ma-sm-3 ma-md-3">
                          <p class="body-2" style="
                              color: #2ece14;
                              letter-spacing: 0.16em;
                              text-transform: uppercase;
                            ">
                            <v-icon class="pr-2" size="12" color="#2ECE14">
                              mdi-checkbox-blank-circle</v-icon>Currency
                          </p>
                          <span class="ctnbtl title pl-sm-0 pl-md-5" style="color: #505359">0<small>.00</small></span>
                        </div>
                      </v-col>
                      <v-divider class="d-none d-md-flex" vertical></v-divider>
                      <v-col cols="6" sm="6" md="6" class="pr-0 pr-sm-0">
                        <div class="mx-auto my-0 mr-sm-0 ma-sm-3 ma-md-3">
                          <p class="body-2" style="
                              color: #00b2fe;
                              letter-spacing: 0.16em;
                              text-transform: uppercase;
                            ">
                            <v-icon class="pr-2" size="12" color="#00B2FE">
                              mdi-checkbox-blank-circle</v-icon>Commodity
                          </p>
                          <span class="ctnbtl title pl-sm-0 pl-md-5" style="color: #505359">0<small>.00</small></span>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </v-col>

        <v-col cols="12" sm="4" md="4">
          <div class="pt-4">
            <p class="body-1 mb-1" color="#878B93">Holding summary</p>
            <v-card outlined class="elevation-0 rounded-lg pa-5">
              <div class="mx-auto">
                <v-row>
                  <v-col>
                    <p class="body-2 mb-0" style="
                        color: #ff8d24;
                        letter-spacing: 0.16em;
                        text-transform: uppercase;
                      ">
                      TOTAL INVESTMENT
                    </p>
                    <span class="ctnbtl sumval" style="line-height: 28px; color: #505359">{{
    Math.abs(tol_buyvalue).toFixed(2)}}</span>
                  </v-col>
                  <v-col>
                    <p class="body-2 mb-0" style="
                        color: #ff8d24;
                        letter-spacing: 0.16em;
                        text-transform: uppercase;
                      ">
                      HOLDINGS VALUE
                    </p>
                    <span class="ctnbtl sumval" style="line-height: 28px; color: #505359">{{ total_Summary
}}</span>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <p class="body-2 mb-0" style="
                        color: #ff8d24;
                        letter-spacing: 0.16em;
                        text-transform: uppercase;
                      ">
                      TOTAL P&L
                    </p>
                    <span class="ctnbtl sumval" style="line-height: 28px; color: #505359">
                      {{ tol_tdypnl }}
                    </span>
                  </v-col>
                  <v-col>
                    <p class="body-2 mb-0" style=" color: #ff8d24;
                        letter-spacing: 0.16em;
                        text-transform: uppercase;
                      ">
                      TODAY'S P&L
                    </p>
                    <span class="ctnbtl sumval" style="line-height: 28px; color: #505359">
                      {{ tol_pnl }}
                    </span>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </div>
          <div class="pt-6">
            <p class="body-1 mb-1" color="#878B93">P&L summary</p>
            <v-card outlined class="elevation-0 rounded-lg pa-5">
              <div class="mx-auto">
                <v-row>
                  <v-col>
                    <p class="body-2 mb-0" style=" color: #ff8d24;
                        letter-spacing: 0.16em;
                        text-transform: uppercase;
                      ">
                      Total Capital
                    </p>
                    <span class="ctnbtl sumval" style="line-height: 28px; color: #505359">
                      <!-- {{ Math.abs(pnltotal.Mtm.toLocaleString()).toFixed(2) }} -->
                      {{ tol_Summ_mtm.toFixed(2) }}
                    </span>
                  </v-col>
                  <v-col>
                    <p class="body-2 mb-0" style=" color: #ff8d24;
                        letter-spacing: 0.16em;
                        text-transform: uppercase;
                      ">
                      Realised P&L
                    </p>
                    <div v-if="pnltotal.Quantity == 0">
                      <span v-if="pnltotal.Mtm > 0" class="ctnbtl sumval" style="line-height: 28px; color: #34a853">
                        {{ pnltotal.Mtm.toLocaleString() }}
                      </span>
                      <span v-else-if="pnltotal.Mtm == 0" class="ctnbtl sumval" style="line-height: 28px">0.00</span>
                      <span v-else class="ctnbtl sumval" style="line-height: 28px; color: #e12626">
                        {{ pnltotal.Mtm.toLocaleString() }}
                      </span>
                    </div>
                    <span v-else class="ctnbtl sumval" style="line-height: 28px">0.00</span>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <p class="body-2 mb-0" style=" color: #ff8d24;
                        letter-spacing: 0.16em;
                        text-transform: uppercase;
                      ">
                      Current Value
                    </p>
                    <span class="ctnbtl sumval" style="line-height: 28px; color: #505359">
                      {{ total_summary }}
                    </span>
                  </v-col>
                  <v-col>
                    <p class="body-2 mb-0" style="
                        color: #ff8d24;
                        letter-spacing: 0.16em;
                        text-transform: uppercase;
                      ">
                      UNRealised P&L
                    </p>
                    <div v-if="tol_Summ_mtm != 0">
                      <span v-if="tol_Summ_mtm > 0" class="ctnbtl sumval" style="line-height: 28px; color: #34a853">
                        {{ tol_Summ_mtm.toFixed(2) }}
                      </span>
                      <span v-else class="ctnbtl sumval" style="line-height: 28px; color: #e12626">
                        {{ tol_Summ_mtm.toFixed(2) }}
                      </span>
                    </div>
                    <span v-else class="ctnbtl sumval" style="line-height: 28px">0.00</span>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </div>
          <div class="pt-6">
            <p class="body-1 mb-1" color="#878B93">Upcoming events</p>
            <v-card v-if="upcomingEvents" outlined class="elevation-0 rounded-lg px-4">
                <div v-for="n in upcomingEvents" :key="n">
                  <v-list-item>
                    <v-row>
                      <v-col cols="2" class="pr-0">
                        <v-list-item-content width="100">
                          <v-list-item-subtitle style="color: #ff8d24; text-transform: uppercase">
                            {{ n['Ex-Date'].slice(3, 6) }}
                          </v-list-item-subtitle>
                          <v-list-item-title style="color: #ff8d24">
                            {{ n['Ex-Date'].slice(0, 2) }}
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-col>
                      <v-col cols="10">
                        <v-list-item class="pl-0">
                          <v-list-item-content>
                            <v-list-item-title>{{ n.Company }}</v-list-item-title>
                            
                            <div style="color:#ff8d24; font-size: 10px !important;">{{ n.Symbol }}</div>

                            <div style="color:darkgray; font-size: 14px !important;">{{ n.Purpose }}</div>
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
    <div>
      <v-snackbar style="z-index: 2 !important;" transition="slide-x-reverse-transition" v-model="snackbar"
        :timeout="2000" :value="true" color="warning" absolute outlined top right>
        <v-icon color="warning">mdi-alert-outline</v-icon>
        Session <strong>expired</strong> Kindly Login again.
      </v-snackbar>
    </div>
  </v-container>

</template>
<script>
import axios from "axios";
import { apiurl } from "../apiUrl";
import WealthSegmentation from "../charts/WealthSegmentation.vue";
import HoldingCurve from "../charts/HoldingCurve.vue";
import TradeCurve from "../charts/TradeCurve.vue";
// import qs from 'qs'
export default {
  props: {
    postURL: {
      type: String,
      required: true,
    },
    minItems: {
      type: Number,
      default: 1,
    },
    maxItems: {
      type: Number,
      default: 5,
    },
    method: {
      type: String,
      default: "post",
    },
    postMeta: {
      type: [String, Array, Object],
      default: "",
    },
    postData: {
      type: [Object],
      default: () => { },
    },
    postHeader: {
      type: [Object],
      default: () => { },
    },
    successMessagePath: {
      type: String,
      required: true,
    },
    errorMessagePath: {
      type: String,
      required: true,
    },

    showHttpMessages: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      snackbar: false,
      /* eslint-disable */
      emailfetchdialog: false,

      manualdialog: false,
      fileuploaddata: true,
      fileuploaddialog: false,
      // popupmodel: true,
      awesome: false,
      dialog: false,
      headers: [
        { text: "Instruments", value: "" },
        { text: "Qty", value: "" },
        { text: "Buy avg.", value: "" },
        { text: "Invest value", value: "" },
        { text: "Select trade", value: "" },
      ],
      response: "",
      res: "",
      res_ref: "",

      dragging: false,
      items: [],
      itemsAdded: "",
      itemsNames: [],
      itemsSizes: [],
      itemsTotalSize: "",
      formData: "",
      successMsg: "",
      errorMsg: "",
      isLoaderVisible: false,

      holdingdetails: [],
      holdingsumget: [],
      holdingclsval: [],
      holdingclosepnl: 0,
      holdingprint: [],
      holdingtokens: [],
      holdingtableData: [],
      upcomingEvents: [],
      pnldetails: [],
      pnlsumget: [],
      pnlprint: [],
      pnltoken: [],
      pnltableData: [],
      pnltoks: [],

      tol_buyvalue: 0.00,
      tol_pnl: 0.00,
      tol_pnl_chg: 0.00,
      tol_presentvalue: 0.00,
      tol_tdypnl: 0.00,
      tol_tdypre: 0.00,
      total_Summary: 0.00,

      newPnL: [],
      PnLSummary: [],
      PnLdaywise: [],
      tol_DW_mtm: 0,
      tol_Summ_mtm: 0,
      total_day_wise: 0,
      total_summary: 0,
      DW_qty: 0,
      Summ_qty: 0,
    };
  },

  methods: {
    upcomingEvent() {
      let axiosThis = this
            console.log("Upcomming running");
                    let config = {
            method: 'get',
            url: `${apiurl}/upcoming`,
            headers: { }
          };
            console.log("Upcomming",config);

          axios(config)
          .then(function (response) {
            axiosThis.upcomingEvents =  response.data.data
            console.log("Upcomming",(response.data.data));
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    refreshTokenCheck(email) {
      let axiosthis = this;
      console.warn("functiooooonnn");
      let checkrefreshtoken = localStorage.clientsessionstore;
      let data = JSON.stringify({
        Email: email,
      });
      console.log("refresh token user email", data);
      let config = {
        method: "post",
        url: `${apiurl}/checkrefreshtoken`,
        headers: {
          "Content-Type": "application/json",
          Authorization: checkrefreshtoken,
        },
        data: data,
      };
      console.log("checkrefreshtoken", checkrefreshtoken);
      axios(config)
        .then(function (response) {
          console.log("checkrefreshtoken response", response);
          console.log("checkrefreshtoken msg ", response.data.msg);

          if (response.data.msg == "Refresh Token Available") {
            axiosthis.popupmodel = false;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    bytesToSize(bytes) {
      const sizes = ["Bytes", "KB", "MB"];
      if (bytes === 0) return "n/a";
      let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      if (i === 0) return bytes + " " + sizes[i];
      return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i];
    },

    onChange(e) {
      this.successMsg = "";
      this.errorMsg = "";
      this.formData = new FormData();
      let files = e.target.files || e.dataTransfer.files;
      this.itemsAdded = files.length;
      let fileSizes = 0;
      for (let x in files) {
        if (!isNaN(x)) {
          this.items = e.target.files[x] || e.dataTransfer.files[x];
          this.itemsNames[x] = files[x].name;
          this.itemsSizes[x] = this.bytesToSize(files[x].size);
          fileSizes += files[x].size;
          this.formData.append("items[]", this.items);
        }
      }
      this.itemsTotalSize = this.bytesToSize(fileSizes);
    },

    removeItems() {
      this.items = "";
      this.itemsAdded = "";
      this.itemsNames = [];
      this.itemsSizes = [];
      this.itemsTotalSize = "";
      this.dragging = false;

      
    },

    onSubmit() {
      this.isLoaderVisible = true;
     },
  },
  mounted() {
    let userBrokerClientId = localStorage.getItem("client-id");
    let gauthclientseassion = localStorage.clientsessionstore
    this.upcomingEvent()
    let axiosThis = this;
    
    let data = JSON.stringify({
      // clientid: ["ZE1A57"],
      clientid: [userBrokerClientId],

    });

    // holding final api start<-----------------------------------------------
    let holdingconfig = {
      method: "post",
      url: `${apiurl}/allholdings`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(holdingconfig)
      .then(function (response) {
        console.log("allholdings",response)
        axiosThis.holdingsumget = response.data
        console.log(axiosThis.holdingsumget)
        axiosThis.tol_buyvalue = response.data.tol_buyvalue;
        axiosThis.tol_pnl = response.data.tol_pnl;
        axiosThis.tol_pnl_chg = response.data.tol_pnl_chg;
        axiosThis.tol_tdypnl = response.data.tol_tdypnl;
        axiosThis.tol_presentvalue = response.data.tol_presentvalue;
        axiosThis.tol_tdypre = response.data.tol_tdypre;
        axiosThis.total_Summary = response.data.total_Summary;
       

      })
      .catch(function (error) {
        console.log(error);
      });

    // holding final api end-------------------------------------------------->

    // profit and lose api start

    let pnlconfig = {
      method: "post",
      url: `${apiurl}/allpnl`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': gauthclientseassion
      },
      data: data,
    };

    axios(pnlconfig)
      .then(function (response) {
        console.log("p&L",response)
        axiosThis.newPnL = response.data;
          axiosThis.DW_qty = response.data.DW_qty;
          axiosThis.Summ_qty = response.data.Summ_qty;
          axiosThis.PnLSummary = response.data.Summary;
          axiosThis.PnLdaywise = response.data.Daywise;
          axiosThis.tol_DW_mtm = response.data.tol_DW_mtm;
          axiosThis.tol_Summ_mtm = response.data.tol_Summ_mtm;
          axiosThis.total_summary = response.data.total_summary;
          axiosThis.total_day_wise = response.data.total_day_wise;
    
      })
      .catch(function (error) {
        console.log(error);
      });
    // profit and lose api end-------------------------------------------------->

  },

  components: { WealthSegmentation, HoldingCurve, TradeCurve },

  computed: {
    holdingtotal() {
      const holdingtotal = this.holdingtableData.reduce(
        (acc, d) => {
          acc.Quantity += d.Quantity;
          acc.Avg_Price += d.Avg_Price;
          acc.Net_Value += d.Net_Value;
          acc.Brok += d.Brok;
          acc.close += d.close;
          acc.pnlval += d.pnlval;
          acc.BuyOrSell += d.BuyOrSell;
          acc.Exchange += d.Exchange;
          return acc;
        },
        {
          Quantity: 0,
          Avg_Price: 0.00,
          Net_Value: 0.00,
          Brok: 0.00,
          BuyOrSell: 0.00,
          Exchange: 0.00,
          pnlval: 0.00,
          none: "",
        }
      );
      holdingtotal.Avg_Price = holdingtotal.Avg_Price.toFixed(2);
      holdingtotal.Net_Value = holdingtotal.Net_Value.toFixed(2);
      holdingtotal.Brok = holdingtotal.Brok.toFixed(2);
      holdingtotal.BuyOrSell = holdingtotal.BuyOrSell.toFixed(2);
      holdingtotal.Exchange = holdingtotal.Exchange.toFixed(2);
      holdingtotal.pnlval = holdingtotal.pnlval.toFixed(2);
      return holdingtotal;
    },
    pnltotal() {
      const pnltotal = this.pnltableData.reduce(
        (acc, d) => {
          acc.Net_rate += d.Net_rate;
          acc.Quantity += d.Quantity;
          acc.Mtm += d.Mtm;
          return acc;
        },
        {
          Net_rate: 0,
          Quantity: 0,
          Mtm: 0,
          none: "",
        }
      );
      pnltotal.Net_rate = pnltotal.Net_rate.toFixed(2)
      pnltotal.Mtm = pnltotal.Mtm.toFixed(2)
      return pnltotal;
    },
  },
};
</script>

<style>
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: rgba(128, 128, 128, 0.6);
  border-radius: 16px;
}

.sumval {
  font-size: 22px;
}

.v-application--is-ltr .v-data-table--fixed-header .v-data-footer {
  margin-right: 0;
}

@media only screen and (max-width: 1264px) {
  .sumval {
    font-size: 16px;
  }
}

@media only screen and (max-width: 960px) {
  .sumval {
    font-size: 17px;
  }
}

@media only screen and (max-width: 600px) {
  .sumval {
    font-size: 18px;
  }
}

@media only screen and (max-width: 425px) {
  .sumval {
    font-size: 13px;
  }
}

.fileupload {
  position: relative;
  text-align: center;
}

.fileupload input {
  cursor: pointer !important;
  width: 100% !important;
  height: 180px !important;
  opacity: 0 !important;
}

.innerfilup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>