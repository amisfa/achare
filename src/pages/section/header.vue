<template>
  <header class="bg-white shadow p-4 flex justify-between items-center">
    <img src="logo.svg"/>
    <nav class="space-x-4 flex">
      <router-link :to="{ name: 'user-upsert-address'}"
                   class="text-gray-600 hover:text-green-600 font-bold px-1"
                   :class="isUpsertPage ? 'text-green-600' : 'text-gray-600'">
        <div>ثبت آدرس</div>
      </router-link>
      <router-link :to="{ name: 'user-view-address'}"
                   class="text-gray-600 hover:text-green-600 font-bold px-1"
                   :class="isViewPage ? 'text-green-600' : 'text-gray-600'">
        <div>مشاهده آدرس‌ها</div>
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  computed: {
    isViewPage() {
      return this.$route.name === 'user-view-address'
    },
    isUpsertPage() {
      return this.$route.name === 'user-upsert-address'
    }
  },
}

</script>