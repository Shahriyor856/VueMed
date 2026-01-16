<template>
  <header class="w-full">
    <!-- Background Image -->
    <div
      class="relative w-full h-[280px] sm:h-[340px] md:h-[420px] lg:h-[480px] xl:h-[529px] flex items-center pl-4 sm:pl-6 md:pl-16 xl:pl-24"
    >
      <!-- Icon / Background -->
      <div
        class="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-br from-[#145CB8] to-[#092952]"
      >
        <img :src="Logo" class="h-full absolute object-cover right-0" />
      </div>

      <div
        class="flex bg-transparent z-10 items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7"
      >
        <div class="mb-4">
          <img
            :src="imageTwo"
            alt="icon"
            class="w-[80px] sm:w-[120px] md:w-[165px] lg:w-[180px] xl:w-[200px] 2xl:w-[222px] h-auto"
          />
        </div>

        <!-- Paragraph / Header Text -->
        <h1
          class="text-white font-inter text-[24px] sm:text-[32px] md:text-[42px] lg:text-[48px] xl:text-[54px] 2xl:text-[60px] font-semibold leading-none max-w-[70%]"
        >
          {{ $t("header") }}
        </h1>
      </div>
    </div>

    <!-- Overlay for content -->
    <div class="w-full">
      <div
        class="flex justify-between items-center bg-[#D7E8FF] w-full px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-6 xl:px-8 xl:py-10 2xl:px-10 2xl:py-12"
      >
        <!-- About / Info Button -->
        <NuxtLink
          to="/secondPage"
          class="flex items-center gap-2 sm:gap-3 md:gap-4 xl:gap-5 px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 xl:px-6 xl:py-5 rounded-[20px] transition-colors duration-200 bg-[#D7E8FF] border border-[#145CB8] cursor-pointer"
        >
          <img
            :src="Info"
            alt="icon"
            class="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 aspect-square"
          />
          <p
            class="text-[#145CBB] font-inter font-medium text-[12px] sm:text-[18px] md:text-[22px] xl:text-[25px] 2xl:text-[28px] leading-none text-center"
          >
            {{ $t("AboutUs") }}
          </p>
        </NuxtLink>

        <!-- Language Buttons -->
        <div
          class="flex items-center gap-2 sm:gap-3 md:gap-4 xl:gap-5 2xl:gap-6"
        >
          <button
            v-for="lang in language"
            :key="lang.code"
            @click="changeLang(lang.code)"
            :class="[
              'flex items-center gap-1 sm:gap-2 md:gap-4 xl:gap-5 px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 xl:px-6 xl:py-5 rounded-[20px] transition-colors duration-200 font-inter text-center text-xs sm:text-sm md:text-base xl:text-lg leading-none',
              activeLange === lang.code
                ? 'bg-[#145CB8] border-2 border-white/40 text-white font-medium'
                : 'bg-[#D7E8FF] border-2 border-[#AAC3E5] text-[#222932] font-medium',
            ]"
          >
            <img
              :src="lang.img"
              alt="flag"
              class="w-3 h-3 sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-full"
            />
            <p
              class="font-medium text-[12px] sm:text-[18px] md:text-[20px] xl:text-[25px] 2xl:text-[28px]"
            >
              {{ lang.label }}
            </p>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import Logo from "@/assets/images/logo.svg";
import imageTwo from "@/assets/images/Vector.svg";
import Info from "@/assets/images/info.svg";
import flagUz from "@/assets/images/flagUz.svg";
import flagRu from "@/assets/images/flagRu.svg";
import flagKingdom from "@/assets/images/flagKingdom.svg";

const { locale, setLocale } = useI18n();
const activeLange = ref("uz_cyrillic");

const language = [
  { code: "uz_cyrillic", label: "Ўз", img: flagUz },
  { code: "uz_latin", label: "O'z", img: flagUz },
  { code: "ru", label: "Ру", img: flagRu },
  { code: "en", label: "En", img: flagKingdom },
];

const changeLang = (code) => {
  activeLange.value = code;
  setLocale(code);
};
</script>
