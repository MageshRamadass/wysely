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
function sum(a, b) {
  return a + b;
}
module.exports = sum;
export default {
    components: { SideMenubar },
    mounted() {

    }
};
</script>