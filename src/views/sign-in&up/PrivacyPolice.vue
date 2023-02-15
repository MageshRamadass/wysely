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
                <v-card class="elevation-0 rounded-0 pt-4 pt-md-16 px-4 px-sm-6 px-md-0">
                    <v-container class="pa-0 pt-md-10">
                        <p class="font-weight-bold mb-16" style="font-size:64px;">privacy policy</p>
                        <p class="font-weight-bold title">Disclosure:</p>
                    <p>
                    Wysely use and display the information received from Google APIs will adhere to <a href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes" target="_blank" rel="noopener">Google API Services User Data Policy</a>, including the Limited Use requirements.
                </p>
                        <div v-for="(item, i) in items" :key="i" class="pb-4">
                            <p class="font-weight-bold title" v-text="item.title"></p>
                            <p v-text="item.text"></p>
                        </div>
                    </v-container>
                </v-card>
                <v-divider></v-divider>
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

<script>
export default {
    data() {
        return {
            googlelink: 'https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes',
            items: [
                {
                    title: 'Personal Information from Users for the following purposes:',
                    text: 'The processing of Your/User’s name and contact information to provide You/User with access to WYSELY and to respond to requests made by You/User. To display personalized advertisements to You/User and to send All trading activity communications about WYSELY  to You/User. The processing of device and usage data to improve and customize WYSELY and to provide better performance, security and continued proper functioning. WYSELY may be required to share Personal Information collected from Users with the following parties',
                },
                {
                    title: 'WYSELY may be required to share Personal Information collected from Users with the following parties:',
                    text: 'Public and government authorities, to the extent WYSELY is compelled to disclose Personal Information to comply with its legal obligations',
                },
                {
                    title: 'Sharing and Disclosure of data with Third Parties:',
                    text: 'Subject to explicit and prior consent from you, we may disclose certain information that is created by your use of our WYSELY subsidiaries, affiliate entities and partners that are not acting as our suppliers or business partners. For the sake of clarity, we do not sell or lease such information. In some cases, when we believe that such disclosure is necessary to protect our rights, or the rights of others, or to comply with a judicial proceeding, court order, or legal process served on our website/app we would share such information pursuant to a lawful request from law enforcement agencies.',
                },
               
                {
                    title: 'Security:',
                    text: 'We may use the information to create and maintain a safe environment and use the same to detect and prevent fraud, span, abuse, security incidents and other harmful activity.',
                },
                {
                    title: 'Cookies:',
                    text: 'We use data collection devices such as “cookies”, etc. on certain parts of the App to help analyse the App Services, user interaction with the App, measure promotional effectiveness, and promote trust and safety. Please be informed that we offer certain features via the App that are only available through the use of a “cookie”. We also use cookies to allow you to enter a particular password less frequently during a session. Cookies also help us obtain information that assists us in curating the Services more targeted to your interests.You are always free to decline our cookies if your device permits, although in that case you may not be able to use certain features on the app and you may be required to provide a password more frequently during a session.',
                },
                {
                    title: 'Amendment rights:',
                    text: 'WYSELY reserves the right to change the contents of the terms and conditions from time to time; Any predominant change in the manner of use of personal information shall be notified on this site. We welcome your suggestions and queries on the same.',
                },
            ],
        }
    }
}
</script>