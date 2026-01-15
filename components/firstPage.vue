<template>
  <!--Main Div ////////////////////-->
  <div class="w-full">
    <!-- H1 + P -->
    <div class="py-[3%] flex flex-col items-center">
      <h1
        class="text-[#222932]text-[24px] sm:text-[32px] md:text-[42px] lg:text-[48px] xl:text-[54px] 2xl:text-[66px] text-center font-inter font-bold"
      >
        {{ $t("PriceList") }}
      </h1>
      <p
        class="text-[rgba(34,41,50,0.7)] text-center font-inter text-[8px] sm:text-[15px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[30px] font-normal max-w-[60%] sm:max-w-[85%] md:max-w-[92%] lg:max-w-[90%] xl:max-w-[90%] 2xl:max-w-[90%] pt-[6px] sm:pt-[8px] md:pt-[10px] lg:pt-[12px] xl:pt-[12px] 2xl:pt-[14px] leading-normal"
      >
        {{ $t("Hone") }}
      </p>
      <p
        class="text-[rgba(34,41,50,0.7)] text-center font-inter stext-center font-inter text-[8px] sm:text-[15px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[30px] font-normal leading-normal"
      >
        {{ $t("Htwo") }}
      </p>
    </div>

    <!-- Search Div -->
    <div class="flex justify-center">
      <div class="w-[100%] px-[40px]">
        <div class="py-[1%] bg-[#C2DDFF] inputBorder-top flex items-center">
          <p
            class="text-[#145CB8] text-center font-inter text-[15px] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[43px] 2xl:text-[50x] font-bold leading-normal flex-1"
          >
            {{ $t("inputP") }}
          </p>
        </div>
        <div
          class="py-[2%] bg-[#E0EEFF] flex items-center justify-center inputBorder-bottom shadow-[0_4.773px_19.091px_0_rgba(0,0,0,0.16)]"
        >
          <div
            class="w-[97%] flex items-center gap-[2%] px-[3%] rounded-[30px] border-2 border-[#ACC4E3] bg-[#F5F9FF]"
          >
            <!-- Image + right border -->
            <div
              class="relative flex-shrink-0 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[55px] md:h-[55px] xl:w-[60px] xl:h-[60px]"
            >
              <img
                :src="search"
                alt="search"
                class="w-full h-full object-cover transform sm:-translate-x-[2px] md:-translate-x-[5px] lg:-translate-x-[10px] xl:-translate-x-[15px] 2xl:-translate-x-[20px]"
              />
              <div
                class="absolute top-0 right-0 h-full border-r-4 border-[#B8CBE3]"
              ></div>
            </div>

            <!-- Input -->
            <input
              v-model="searchQuery"
              type="text"
              :placeholder="$t('input')"
              class="flex-1 py-[1.5%] text-[rgba(34,41,50,0.6)] font-inter text-[15px] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px] font-normal leading-normal bg-[#F5F9FF] outline-none"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Two change buttons -->

    <div class="flex gap-[10px] justify-end mt-[80px] px-[40px]">
      <button
        @click="() => changeMode('grid')"
        :class="[
          'flex items-center justify-center w-[60px] h-[50px] sm:w-[80px] sm:h-[70px] md:w-[100px] md:h-[90px] lg:w-[110px] lg:h-[100px] xl:w-[125px] xl:h-[115px] rounded-[20px] border-2 border-[rgba(20,92,184,0.4)]',
          mode === 'grid' ? '!bg-[#145CB8]' : 'bg-[#D7E8FF]',
        ]"
      >
        <IconGrid
          :color="mode === 'grid' ? '#D7E8FF' : '#145CB8'"
          
          class="w-[15px] h-[15px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] lg:w-[55px] lg:h-[55px] xl:w-[70px] xl:h-[70px]"
        />
      </button>
      <button
        @click="() => changeMode('list')"
        :class="['flex items-center justify-center w-[60px] h-[50px] sm:w-[80px] sm:h-[70px] md:w-[100px] md:h-[90px] lg:w-[110px] lg:h-[100px] xl:w-[125px] xl:h-[115px]  rounded-[20px] border-2 border-[rgba(20,92,184,0.4)]',
          mode === 'list'? '!bg-[#145CB8]' :'bg-[#D7E8FF]'  
        ]"
      >
        <img
          :src="list"
          alt="icon"
          :class="[
            'w-[15px] h-[15px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] lg:w-[55px] lg:h-[55px] xl:w-[70px] xl:h-[70px]',

            mode === 'list' ? 'brightness-0 invert' : '',
          ]"
        />
      </button>
    </div>

    <!-- Two change buttons -->

    <!--Single Divs-->
    <div v-if="mode === 'grid'">
      <Grid :search="searchQuery" />
    </div>
    <div v-if="mode === 'list'">
      <List :search="searchQuery" />
    </div>
  </div>
  
</template>

<script setup>
import list from "../assets/images/list.svg";
import Grid from "@/components/TwoOptions/Grid.vue";
import List from "./TwoOptions/List.vue";

// import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import search from "@/assets/images/search.svg";
import IconGrid from "./icons/IconGrid.vue";

const { t, locale } = useI18n();
const mode = ref("grid");
const changeMode = (m) => {
  mode.value = m;
};

const color = ref("blue");
const changeColor = (m) => {
  color.value = m;
};

const searchQuery = ref("");

// const filteredDepartments = computed(() => {
//   if (!searchQuery.value) return department;

//   const query = searchQuery.value.toLowerCase();

//   return department.filter((dept) => {
//     const translatedName = t(`items.${dept.name}`).toLowerCase();
//     return translatedName.includes(query);
//   });
// });
</script>
