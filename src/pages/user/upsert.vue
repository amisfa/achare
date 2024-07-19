<template>
  <div class="auto-height px-4">
    <div>
      <h2 v-if="!submittedData" class="text-xl font-bold p-3 text-gray-500">ثبت آدرس</h2>
      <div v-if="!validatedData && !submittedData"
           class="sm:max-w-6xl max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
        <div class="flex sm:flex-row flex-col items-center justify-between">
          <div class="mb-4 px-2 clear-input-container w-full sm:w-1/2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="first-name">
              نام
            </label>
            <input
                v-model="item.firstName"
                @change="validateString('firstName', 3, 'string')"
                name="item.firstName"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-inset focus:ring-blue-400"
                :class="getCorrectErr('firstName') ? 'ring-2 ring-inset ring-red-400' :''"
                id="first-name" type="text" placeholder="نام...">
            <button
                v-if="item.firstName"
                @click="item.firstName = null"
                class="clear-input-button"
                type="reset"
                aria-label="پاک شود"
                title="پاک شود"
            >×
            </button>
            <p v-if="getCorrectErr('firstName')" style="left: 10px" class="absolute text-red-600 font-bold">{{
                getCorrectErr('firstName')['value']
              }}</p>
          </div>
          <div class="mb-4 px-2 clear-input-container w-full sm:w-1/2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="last-name">
              نام خانوادگی
            </label>
            <input
                v-model="item.lastName"
                @change="validateString('lastName', 3, 'string')"
                name="item.lastName"
                :class="getCorrectErr('lastName') ? 'ring-2 ring-inset ring-red-400' :''"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-inset focus:ring-blue-400"
                id="last-name" type="text" placeholder="نام خانوادگی...">
            <button
                v-if="item.lastName"
                @click="item.lastName = null"
                class="clear-input-button"
                type="reset"
                aria-label="پاک شود"
                title="پاک شود"
            >×
            </button>
            <p v-if="getCorrectErr('lastName')" style="left: 10px" class="absolute text-red-600 font-bold">{{
                getCorrectErr('lastName')['value']
              }}</p>
          </div>
        </div>
        <div class="flex sm:flex-row flex-col items-center justify-between">
          <div class="mb-4 px-2 clear-input-container w-full sm:w-1/2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="mobile-no">
              تلفن همراه
            </label>
            <input
                v-model="item.mobileNo"
                @change="validateString('mobileNo', 11, 'mobileNo')"
                :class="getCorrectErr('mobileNo') ? 'ring-2 ring-inset ring-red-400' :''"
                name="item.mobileNo"
                dir="ltr"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-inset focus:ring-blue-400 text-left"
                id="mobile-no" type="tel" placeholder="****98-912+">
            <button
                v-if="item.mobileNo"
                @click="item.mobileNo = null"
                class="clear-input-button"
                style="left: unset!important; right: 12px!important"
                type="reset"
                aria-label="پاک شود"
                title="پاک شود"
            >×
            </button>
            <p v-if="getCorrectErr('mobileNo')" style="left: 10px" class="absolute text-red-600 font-bold">{{
                getCorrectErr('mobileNo')['value']
              }}</p>
          </div>
          <div class="mb-4 px-2 clear-input-container w-full sm:w-1/2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="phone-no">
              تلفن ثابت
            </label>
            <input
                @change="validateString('phoneNo', 11, 'phoneNo')"
                v-model="item.phoneNo"
                :class="getCorrectErr('phoneNo') ? 'ring-2 ring-inset ring-red-400' :''"
                name="item.phoneNo"
                dir="ltr"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-inset focus:ring-blue-400 text-left"
                id="phone-no" type="tel" placeholder="********-021">
            <button
                v-if="item.phoneNo"
                @click="item.phoneNo = null"
                style="left: unset!important; right: 12px!important"
                class="clear-input-button"
                type="reset"
                aria-label="پاک شود"
                title="پاک شود"
            >×
            </button>
            <p v-if="getCorrectErr('phoneNo')" style="left: 10px" class="absolute text-red-600 font-bold">{{
                getCorrectErr('phoneNo')['value']
              }}</p>

          </div>
        </div>
        <div>
          <div class="mb-4 px-2 clear-input-container w-full">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
              آدرس
            </label>
            <textarea
                v-model="item.address"
                :class="getCorrectErr('address') ? 'ring-2 ring-inset ring-red-400' :''"
                @change="validateString('address', 10, 'string')"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-inset focus:ring-blue-400"
                id="address" placeholder="آدرس"/>
            <p v-if="getCorrectErr('address')" style="left: 10px" class="absolute text-red-600 font-bold">{{
                getCorrectErr('address')['value']
              }}</p>

          </div>
        </div>
        <div class="flex items-center">
          <div class="flex items-center">
            <input v-model="item.gender" name="item.gender" :checked="item.gender === 'male'" id="male-radio"
                   type="radio" value="male"
                   class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="male-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">مرد</label>
          </div>
          &nbsp;
          <div class="flex items-center">
            <input v-model="item.gender" :checked="item.gender === 'female'" id="female-radio" type="radio"
                   value="female"
                   name="item.gender"
                   class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="female-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">خانم</label>
          </div>
        </div>
        <button @click="continueDataEntry" class="bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4">
          برو مرحله بعدی
        </button>
      </div>
      <div v-if="validatedData && !submittedData" class="mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
        <div class="text-gray-500 text-md">
          موقعیت مورد نظر خود را روی نقشه مشخص کنید
        </div>
        <div style="width: 100%;height: 550px">
          <l-map
              ref="map"
              id="map"
              :max-zoom="zoom"
              v-model:zoom="zoom"
              v-model:center="center"
              :zoom-controls="true"
              :zoomAnimation="true"
              :markerZoomAnimation="true"
              :useGlobalLeaflet="true"
              @dblclick="onMapClick"
          >
            <template>
              <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"/>
            </template>
            <l-marker
                v-if="userSelectedLocation"
                visible
                draggable
                v-model:lat-lng="userSelectedLocation"
            />
          </l-map>
        </div>
        <p v-if="!userSelectedLocation" class="text-red-600 font-extrabold text-center">
          موقعیت خود را انتخاب کنید
        </p>
        <button @click="submit" :disabled="!userSelectedLocation"
                class="bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4">
          ثبت اطلاعات
        </button>
      </div>
      <div v-if="submittedData" class="h-full w-full" style="min-height: 50vh">
        <div class="flex items-center flex-col pt-32">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" id="check">
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z"></path>
          </svg>
          <div class="text-xl font-bold p-3 text-gray-500">اطلاعات شما با موفقیت ثبت شد</div>
          <router-link :to="{name: 'user-view-address'}">
            <button class="bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4">
              دیدن اطلاعات
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {LMap, LMarker, LTileLayer} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import service from "@/services/service";

export default {
  name: "upsertData",
  components: {
    LMap,
    LMarker,
    LTileLayer,
  },
  data() {
    return {
      errors: [],
      defaultLocation: {
        lat: 8.9806,
        lng: 38.7578
      },
      userSelectedLocation: null,
      zoom: 18,
      center: [35.692997228, 51.335998656],
      dragging: false,
      validatedData: false,
      submittedData: false,
      item: {
        firstName: null,
        lastName: null,
        mobileNo: null,
        phoneNo: null,
        address: null,
        gender: null
      }
    }
  },
  computed: {
    getCorrectErr() {
      return (itemName) => {
        let foundedErr = this.errors.find(err => err.name === itemName)
        if (foundedErr) return foundedErr
        return null
      }
    }
  },
  methods: {
    async onMapClick(value) {
      this.userSelectedLocation = value.latlng;
    },
    validateString(itemName, len, type) {
      let foundedError = this.errors.filter(error => error.name === itemName)
      if (!foundedError.length) {
        if (!this.item[itemName]) {
          this.errors.push({
            name: itemName,
            value: 'وارد کردن فیلد اجباریست'
          });
        } else if (this.item[itemName] && this.item[itemName].length < len) {
          if (type == 'string') {
            this.errors.push({
              name: itemName,
              value: `حداقل ${len} حرف الزامیست`
            });
          } else if (type == 'phoneNo') {
            this.errors.push({
              name: itemName,
              value: `شماره تلفن صحبح نیست`
            });
          } else if (type == 'mobileNo') {
            this.errors.push({
              name: itemName,
              value: `شماره موبایل صحبح نیست`
            });
          }
        } else if (type == 'mobileNo' && !(new RegExp('^(\\+98|0)?9\\d{9}$').test(this.item[itemName]))) {
          this.errors.push({
            name: itemName,
            value: `فرمت موبایل صحبح نیست`
          });
        }
      } else {
        this.errors = this.errors.filter(error => error.name !== itemName)
        this.validateString(itemName, len, type)
      }
    },
    checkAllValidation() {
      this.validateString('firstName', 3, 'string')
      this.validateString('lastName', 3, 'string')
      this.validateString('address', 11, 'string')
      this.validateString('phoneNo', 11, 'phoneNo')
      this.validateString('mobileNo', 11, 'mobileNo')
    },
    continueDataEntry() {
      this.checkAllValidation()
      if (this.errors.length) return
      this.validatedData = true
    },
    async submit() {
      if (!this.userSelectedLocation) return
      this.$store.state.loader = true
      const res = await service.upsertAddress({
        id: 663908,
        address_id: 'a31f2326-ec61-4b46-be3c-2a29dfebf9de',
        first_name: this.item.firstName,
        last_name: this.item.lastName,
        coordinate_mobile: this.item.mobileNo,
        coordinate_phone_number: this.item.phoneNo,
        address: this.item.address,
        region: 1,
        lat: this.userSelectedLocation.lat,
        lng: this.userSelectedLocation.lng,
        gender: this.item.gender
      });
      if (res) this.submittedData = true
      this.$store.state.loader = false
    }
  }
}
</script>
<style>
.auto-height {
  height: calc(100vh - 71px);
}
</style>