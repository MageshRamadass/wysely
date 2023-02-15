<template>
    <v-app>
        <v-container class="pa-0 pa-sm-3 pa-md-3">
            <div class="pt-16 pa-6 pa-sm-4 pa-md-4">
                <div>
                    <p  class="lstctntit headline mb-1">
                        Notifications (9)
                    </p>
                    <p  class="body-1 mb-0" color="#878B93">Track
                        your
                        activity all in one place</p>
                </div>

                <div>
                    <v-row>
                        <v-col>
                            <div>
                                <v-list>
                                    <template v-for="(item, index) in items">
                                        <v-divider v-if="item.divider" :key="index" :inset="item.inset"></v-divider>

                                        <v-list-item class="pt-2 px-0 pt-md-4 px-md-4" v-else :key="item.title">
                                            <v-list-item-avatar size="45">
                                                <v-img :src="item.avatar"></v-img>
                                            </v-list-item-avatar>

                                            <v-list-item-content>
                                                <v-list-item-subtitle class="pb-1" v-text="item.subtitle"
                                                    color="#878B93"
                                                    style="text-transform: uppercase; font-weight: 700;">
                                                </v-list-item-subtitle>
                                                <p>{{ item.title }}</p>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </template>
                                </v-list>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </v-container>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        items: [
            {
                avatar: require('@/assets/ntf Corporate Action.svg'),
                subtitle: 'Profile Completion',
                title: `Your profile is incomplete, please complete it to get better insights and  proper notifications.<span style="color: #1877F2; font-weight: 700;"><a
                                    style="text-decoration: none;" href="./">Complete Profile</a></span>`,
            },
            { divider: true },
            {
                avatar: require('@/assets/ntf Taxes.svg'),
                subtitle: 'Taxes',
                title: `Your yearly tax filing dates are nearing. Please file them now. Tax computation for your trade activity can be <span style="color: #1877F2; font-weight: 700;"><a
                                    style="text-decoration: none;" href="./">downloaded here</a></span>`,
            },
            { divider: true },
            {
                avatar: require('@/assets/ntf STCG Update.svg'),
                subtitle: 'STCG Update ',
                title: `STCG accumation for the current month & quater has been updated. Your current balance is 1,56,377. <span style="color: #1877F2; font-weight: 700;"><a
                                    style="text-decoration: none;" href="./PosiTions">Checkout taxes</a></span> `,
            },
            { divider: true },
            {
                avatar: require('@/assets/ntf Dividend Credit.svg'),
                subtitle: 'Dividend Credit ',
                title: `You’ve have a new dividend credit for <b>HDFC bank.</b> Total amount of <b>1,325</b> to be credited. `,
            },
            { divider: true },
            {
                avatar: require('@/assets/ntf Corporate Action.svg'),
                subtitle: 'Corporate Action ',
                title: `<b>Tata Elxsi</b> is going for a stock split with a <b>2:5 ratio.</b> The record date has been set for <b>31st Aug, 2022</b> `,
            },
            { divider: true },
            {
                avatar: require('@/assets/ntf Corporate Action.svg'),
                subtitle: 'Corporate Action ',
                title: `<b>Piramal Enterprises</b> is going for a stock bonus with a <b>2:5 ratio.</b> The record date has been set for <b>31st Aug, 2022</b> `,
            },
            { divider: true },
            {
                avatar: require('@/assets/ntf Corporate Action.svg'),
                subtitle: 'Corporate Action ',
                title: `<b>Tata Elxsi</b> is going for a demerger, it will split into two with one share for each share. The record date has been set for <b>31st Aug, 2022</b> `,
            },
            { divider: true },
            {
                avatar: require('@/assets/ntf loss harvesting.svg'),
                subtitle: 'Loss Harvesting ',
                title: `Yearly taxes are here and you can harvest your losses to manage your taxes. <span style="color: #1877F2; font-weight: 700;"><a
                                    style="text-decoration: none;" href="./TaxlossHarvesting"> Tax harvest now</a></span> `,
            },
            { divider: true },
            {
                avatar: require('@/assets/ntf Squaring Positions.svg'),
                subtitle: 'Squaring Positions ',
                title: `You have active positions that made losses greater than 10%, we suggest you close them out. <span style="color: #1877F2; font-weight: 700;"><a
                                    style="text-decoration: none;" href="./PosiTions">View poistions</a></span> `,
            },

        ],
    }),
}
</script>