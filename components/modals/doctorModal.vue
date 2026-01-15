<template>
  <div
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto p-10"
    @click="$emit('close')"
  >
    <div
      class="w-[100%] h-full flex flex-col rounded-[50px] overflow-hidden bg-[#FAFCFF]"
      @click.stop
    >
      <div
        class="bg-[#E0EEFF] w-full flex items-start justify-center flex-col px-[16px] pt-[24px] pb-[16px] sm:px-[24px] sm:pt-[36px] sm:p b-[24px] md:px-[32px] md:pt-[48px] md:pb-[32px] lg:px-[36px] lg:pt-[54px] lg:pb-[36px] xl:px-[40px] xl:pt-[60px] xl:pb-[40px]"
      >
        <button
          @click="$emit('close')"
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

      <div class="overflow-y-auto mx-5 bg-[#FAFCFF]">
        <div
          class="overflow-y-auto bg-[#FAFCFF] w-full flex items-center justify-center flex-col pt-[26px] sm:pt-[38px] md:pt-[50px] lg:pt-[58px] xl:pt-[65px] pb-[30px]"
        >
          <img
            :src="doctor.image"
            alt="doctor image"
            class="object-cover shadow-md w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] xl:w-[900px] xl:h-[900px] inputBorder-top inputBorder-bottom"
          />

          <p
            class="text-center text-[16px] sm:text-[18px] md:text-[24px] lg:text-[32px] xl:text-[40px] font-normal pt-[10px] sm:pt-[15px] md:pt-[20px] lg:pt-[30px] xl:pt-[40px] sm:font-normal md:font-medium lg:font-semibold xl:font-bold"
          >
            {{ $t(`doctors.${doctor.text}`) }}
          </p>
          <p
            class="text-center text-[16px] sm:text-[18px] md:text-[22px] lg:text-[28px] xl:text-[33px] font-light sm:font-light md:font-medium lg:font-semibold xl:font-normal"
          >
            {{ $t(`doctors.${doctor.textTwo}`) }}
          </p>

          <div
            class="w-[95%] pt-[20px] sm:pt-[30px] md:pt-[50px] lg:pt-[75px] xl:pt-[100px]"
          >
            <p
              class="text-[16px] sm:text-[20px] md:text-[28px] lg:text-[36px] xl:text-[45px] font-normal text-[rgba(34,41,50,0.7)]"
            >
              {{ $t("InfoDoc") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import back from "@/assets/images/back.svg";

defineProps({
  doctor: Object,
});
</script>
