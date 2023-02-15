
<template>
    <div>
        <v-card class="lpappbar overflow-hidden elevation-0 rounded-0">
            <v-app-bar absolute color="transparent" class="elevation-0 rounded-0" width="100%" permanent outlined light>
                <v-container class="pa-0 pb-2">
                    <v-row no-gutters>
                        <v-col>
                            <a href="/" style="text-decoration: none;">
                            <img  src="@/assets/wyselylogo.svg" alt="wyselylogo" class="pt-1" /></a>
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
                <v-card class="elevation-0 rounded-0 pt-4 pt-md-16 px-4 px-sm-6 px-md-0">
                    <v-container class="pa-0 pt-md-10">
                        <p class="font-weight-bold mb-16" style="font-size:64px;">terms and
                            conditions</p>

                        <div v-for="(item, i) in items" :key="i" class="pb-4">
                            <p class="font-weight-bold title" v-text="item.title"></p>
                            <p v-text="item.text"></p>
                        </div>
                    </v-container>
                </v-card>
                <v-divider></v-divider>
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

<script>
export default {
    data() {
        return {
            items: [
                {
                    title: 'DEFINITION:',
                    text: 'Wysely Platform” means any platform owned subscribed used by ‘Wysely or ‘Wysely Group Entities including but not limited to the ‘Wysely Website, the ‘Wysely  social media channels or any other communication medium or mechanism used by Wysely Entities to provide services to the Users',
                },
                {
                    title: 'Your Use of Wysely:',
                    text: 'All registration information you submit is truthful, complete and accurate and you agree to maintain accurate, complete and up-to-date account information in your account. Your use of the App shall not violate any applicable law or regulation. You are responsible for all activity that occurs under your account.	Your use of the Wysely App, and Wysely Platforms shall be only for Stocks held by you in your various accounts',
                },
                {
                    title: 'USER OBLIGATIONS:',
                    text: 'Subject to the terms and conditions of this Agreement, User may generally publicize the benefit of use of the Wysely and associated however, User may not issue any press release with respect to Wysely  with respect to this Agreement without our prior written consent.',
                },
                {
                    title: 'PERSONAL INFORMATION:',
                    text: 'The Privacy Policy defines the scope for the sharing of Personal Information of Users. Keeping this in mind, Wyselywill not disclose Personal Information outside of the scope of what is defined in the Privacy Policy. Notwithstanding any provision to the contrary in this Agreement, Wysely may also disclose Personal Information to the extent required by any applicable legal process.',
                },
                {
                    title: 'INFORMATION DISCLAIMER:',
                    text: 'You/User acknowledges that the information provided through the use of Wysely is compiled from sources that are beyond the control of Wysely. Though such information is recognized by You/User and Wysely to be generally reliable, You/User acknowledges that inaccuracies may occur and Wysely does not warrant the accuracy or suitability of the information.',
                },
                {
                    title: 'LIABILITIES & DISCLAIMERS:',
                    text: 'Under this Agreement, User assumes all risk of errors and/or omissions out of the control of Wysely, including the transmission or translation of information, if any/all documentation or data is lost at any time.',
                },

                {
                    title: 'Disclosure of information:',
                    text: 'However, Wysely shall be allowed to share the details of the client as mentioned in the client registration form or any other information pertaining to the client with parties/entities with the express permission of the client. Wysely hereby undertakes to maintain the details of the client as mentioned in the client registration form or any other information pertaining to the client, in confidence. We shall not disclose the same to any person/entity except when required by the law.',
                },
            ],
        }
    }
}
</script>