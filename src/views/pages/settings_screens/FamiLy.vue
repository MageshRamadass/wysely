<template>
    <v-app>
        <v-container class="pa-0 pa-sm-3 pa-md-3">
            <div class="pt-16 pa-6 pa-sm-4 pa-md-4">
                <div>
                    <p class="lstctntit headline mb-1">
                        Ramesh`s Family
                    </p>
                    <p class="body-1 mb-0" color="#878B93">Add your family member details here.</p>
                </div>

                <div class="mt-8">

                </div>
                <v-card style="z-index: 0 !important;" class="elevation-0 rounded-lg">
                    <v-expansion-panels v-model="panel" flat>
                        <v-expansion-panel style="background-color:#F9FBFC;" class="rounded-lg">
                            <v-expansion-panel-header expand-icon="">
                                <v-row no-gutters>
                                    <v-col cols="3" >
                                        <v-list-item-content class="pt-1">
                                            <v-list-item-title class="lstctntit">Total Family Wealth <v-btn icon dense>
                                                    <v-icon v-if="panelicon">mdi-chevron-up</v-icon>
                                                    <v-icon v-else>mdi-chevron-down</v-icon>
                                                </v-btn>
                                            </v-list-item-title>
                                            <v-list-item-subtitle>
                                                <v-chip label color="#E8EBED">4/4 Members</v-chip>
                                            </v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-col>
                                    <v-col cols="9" >
                                        <v-list-item class="pl-0 my-auto">
                                            <v-list-item-content>
                                                <v-list-item-subtitle>
                                                    <p>Total Investment</p>
                                                </v-list-item-subtitle>
                                                <v-list-item-title class="ctnbtl">3,22,800.00</v-list-item-title>
                                            </v-list-item-content>

                                            <v-list-item-content>
                                                <v-list-item-subtitle>
                                                    <p>Current Value</p>
                                                </v-list-item-subtitle>
                                                <v-list-item-title class="ctnbtl">6,54,800.00</v-list-item-title>
                                            </v-list-item-content>

                                            <v-list-item-content>
                                                <v-list-item-subtitle>
                                                    <p>Holdings Value</p>
                                                </v-list-item-subtitle>
                                                <v-list-item-title class="ctnbtl">5,42,152.85</v-list-item-title>
                                            </v-list-item-content>

                                            <v-list-item-content>
                                                <v-list-item-subtitle>
                                                    <p>Total P&L</p>
                                                </v-list-item-subtitle>
                                                <v-list-item-title class="ctnbtl ">2,19,352.85 <span
                                                        class="subtitle-2 pa-2 ml-2"
                                                        style="background-color: #E8EBED; color: #505359;">+80.89%</span>
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-card outlined class=" elevation-0 rounded-lg">
                                    <div v-for="(item, i) in items" :key="i">
                                        <v-list-item>
                                            <v-list-item-avatar>
                                                <v-img :src="item.avatar"></v-img>
                                            </v-list-item-avatar>

                                            <v-list-item-content>
                                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                                                <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-divider></v-divider>
                                    </div>
                                </v-card>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card>
            </div>
        </v-container>

    </v-app>
</template>

<script>

export default {
    data() {
        return {
            panel: 0,
            items: [
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    title: 'Brunch this weekend?',
                    subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
                },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                    title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                    subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
                },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'Oui oui',
                    subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
                },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                    title: 'Recipe to try',
                    subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
                },
            ],
        };
    },
}

</script>
