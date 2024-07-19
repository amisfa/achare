<template>
  <div id="app" class="bg-gray-100 h-full" dir="rtl">
    <div v-if="$store.state.loader"
         class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-500/50 flex flex-col items-center justify-center">
      <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-800-300 h-12 w-12 mb-4"></div>
      <h2 class="text-center text-white text-xl font-semibold">صبر بفرمایید...</h2>
    </div>
    <header-section/>
    <router-view/>
  </div>
</template>

<script>
import '@/assets/style.css';
import headerSection from "./pages/section/header.vue";

export default {
  components: {headerSection},
  name: 'App',
}
</script>
