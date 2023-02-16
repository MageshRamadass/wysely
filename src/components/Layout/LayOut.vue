<template>
    <div>
        <SideMenubar />
        <v-main>
            <div class="mt-12 mt-md-0">
                <router-view />
            </div>
        </v-main>
    </div>
</template>

<script>
import SideMenubar from '../navdraw/SideMenubar.vue';

export default {
    components: { SideMenubar },

};
</script>