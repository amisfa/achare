<template>
  <div v-if="addressData" class="h-full p-4">
    <h2 class="text-xl font-bold mb-4 p-3">آدرس ها و مشخصات</h2>
    <div v-for="(address, index) of addressData" :key="`address-data-no-${index}`" class="sm:max-w-4xl max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <p class="font-semibold text-gray-400">نام و نام خانوادگی</p>
          <p class="text-gray-500">{{address.last_name}} {{ address.first_name }}</p>
        </div>
        <div>
          <p class="font-semibold text-gray-400">جنسیت</p>
          <p class="text-gray-500">{{address.gender}}</p>
        </div>
        <div>
          <p class="font-semibold text-gray-400">شماره تلفن همراه</p>
          <p class="text-gray-500">{{address.coordinate_mobile}}</p>
        </div>
        <div>
          <p class="font-semibold text-gray-400">شماره تلفن ثابت</p>
          <p class="text-gray-500">{{address.coordinate_phone_number}}</p>
        </div>
        <div class="col-span-2">
          <p class="font-semibold text-gray-400">آدرس</p>
          <p class="text-gray-500">{{address.address}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import service from "@/services/service";

export default {
  name: "viewData",
  data() {
    return {
      addressData: null
    }
  },
  async mounted() {
    this.$store.state.loader = true
    this.addressData = (await service.getAddress()).data;
    this.$store.state.loader = false
  }
}
</script>