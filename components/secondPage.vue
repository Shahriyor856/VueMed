<template>
  <!-- Main Div -->
  <div class="w-full">
    <div class="pb-[16px] md:pb-[24px] xl:pb-[40px]">
      <div
        class="pb-[8px] sm:pb-[12px] md:pb-[14px] lg:pb-[18px] xl:pb-[20px] xl:px-10 xl:py-12"
      >
        <button
          @click="router.back()"
          class="boder-buttom-modal flex items-center py-2 px-2 gap-1 sm:py-3 sm:px-3 sm:gap-[6px] md:py-4 md:px-4 md:gap-[7px] lg:py-[18px] lg:px-[18px] lg:gap-[7.5px] xl:py-5 xl:px-5 xl:gap-2 bg-[#CCE3FF] rounded-[50px]"
        >
          <img
            :src="back"
            alt="icon"
            class="w-[26px] h-[26px] sm:w-[38px] sm:h-[38px] md:w-[46px] md:h-[46px] lg:w-[54px] lg:h-[54px] xl:w-[60px] xl:h-[60px]"
          />

          <p
            class="text-[#222932] font-inter text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] xl:text-[40px] font-semibold leading-normal"
          >
            {{ $t("back") }}
          </p>
        </button>
      </div>
      <div class="py-[3%] flex flex-col items-center">
        <h1
          class="text-[#222932]text-[24px] sm:text-[32px] md:text-[42px] lg:text-[48px] xl:text-[54px] 2xl:text-[66px] text-center font-inter font-bold"
        >
          {{ $t("AboutUs") }}
        </h1>
        <p
          class="text-[rgba(34,41,50,0.7)] text-center font-inter text-[8px] sm:text-[15px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[30px] font-normal max-w-[60%] sm:max-w-[85%] md:max-w-[92%] lg:max-w-[90%] xl:max-w-[90%] 2xl:max-w-[90%] pt-[6px] sm:pt-[8px] md:pt-[10px] lg:pt-[12px] xl:pt-[12px] 2xl:pt-[14px] leading-normal"
        >
          {{ $t("Doctor") }}
        </p>
      </div>

      <!-- Doctors //////////// -->

      <div
        class="grid grid-cols-1 xl:grid-cols-2 px-[10px] sm:px-[20px] md:px-[30px] lg:px-[50px] xl:px-[66px] 2xl:px-[80px] gap-[10px] sm:gap-[15px] md:gap-[20px] lg:gap-[30px] xl:gap-[40px] 2xl:gap-[50px] "
      >
        <div
          v-for="(doctor, index) in doctorData"
          :key="index"
          class="flex flex-col items-center justify-center cursor-pointer"
          @click="openModal(doctor)"
        >
          <div>
            <img
              :src="doctor.image"
              alt="image"
              class="object-cover shadow-md w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[900px] 2xl:w-[1000px] inputBorder-top"
            />
            <div
              class="py-[10px] px-[15px] /* base */ sm:py-[12px] sm:px-[20px] /* small screens ≥640px */ md:py-[16px] md:px-[30px] /* medium screens ≥768px */ lg:py-[18px] lg:px-[35px] /* large screens ≥1024px */ xl:py-[20px] xl:px-[40px] / bg-[#145CB8] inputBorder-bottom text-white"
            >
              <p
                class="text-center text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] xl:text-[30px] font-normal sm:font-normal md:font-medium lg:font-semibold xl:font-bold"
              >
                {{ $t(`doctors.${doctor.text}`) }}
              </p>
              <p
                class="text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[23px] font-light sm:font-light md:font-medium lg:font-semibold xl:font-normal"
              >
                {{ $t(`doctors.${doctor.textTwo}`) }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <doctorModal
        v-if="showModal"
        :doctor="selectedDoctor"
        @close="closeModal"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import back from "@/assets/images/back.svg";
import { doctorData } from "../constants/doctor";
import { useRouter } from "vue-router";
import doctorModal from "../components/modals/doctorModal.vue";
const router = useRouter();

const showModal = ref(false);
const selectedDoctor = ref(null);

function openModal(doctor) {
  selectedDoctor.value = doctor;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}
</script>
