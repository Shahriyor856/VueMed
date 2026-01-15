<template>
  <div
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-10"
    @click="$emit('close')"
  >
    <div
      class="w-[100%] h-full flex flex-col rounded-[50px] overflow-hidden bg-[#FAFCFF]"
      @click.stop
    >
      <div
        class="bg-[#E0EEFF] w-full boder flex items-center justify-center flex-col px-[16px] pt-[24px] pb-[16px] sm:px-[24px] sm:pt-[36px] sm:pb-[24px] md:px-[32px] md:pt-[48px] md:pb-[32px] lg:px-[36px] lg:pt-[54px] lg:pb-[36px] xl:px-[40px] xl:pt-[60px] xl:pb-[40px]"
      >
        <div
          class="flex w-[100%] items-start justify-center flex-col pb-[18px] sm:pb-[28px] md:pb-[34px] lg:pb-[40px] xl:pb-[45px]"
        >
          <div
            class="pb-[8px] sm:pb-[12px] md:pb-[14px] lg:pb-[18px] xl:pb-[20px]"
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
          <div>
            <p
              class="text-[#222932] font-inter text-[30px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] font-bold leading-normal"
            >
              {{ $t(`items.${props.obj?.name}`) }}
            </p>
          </div>
        </div>
        <div
          class="w-[100%] flex items-center gap-[2%] px-[3%] rounded-[30px] border-2 border-[#ACC4E3] bg-[#F5F9FF]"
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

      <div class="overflow-y-auto mx-5">
        <div
          class="flex items-center justify-center flex-col pt-[26px] sm:pt-[38px] md:pt-[50px] lg:pt-[58px] xl:pt-[65px]"
        >
          <div
            v-for="(data, index) in filteredTableData"
            :key="index"
            class="w-full flex items-stretch justify-center px-5 mb-[16px] sm:mb-[24px] md:mb-[32px] lg:mb-[36px] xl:mb-[40px]"
          >
            <!-- Left Text Div -->
            <div
              class="w-[100%] border-t-[1.193px] border-b-[1.193px] border-l-[1.193px] border-[#A4CCFF] flex items-center justify-start bg-[#E0EEFF] p-[8px] gap-[8px] sm:p-[12px] sm:gap-[12px] md:p-[16px] md:gap-[16px] lg:p-[18px] lg:gap-[18px] xl:p-[20px] xl:gap-[20px] boder-left"
            >
              <p
                class="text-[#145CB8] text-center font-inter text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] xl:text-[56px] font-semibold leading-normal ml-[16px] sm:ml-[24px] md:ml-[32px] lg:ml-[36px] xl:ml-[40px]"
              >
                {{ index + 1 }}
              </p>
              <p
                class="text-[#222932] font-inter text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] xl:text-[56px] font-semibold leading-[1.1]"
              >
                {{ $t(`codes.${data.text}`) }}
              </p>
            </div>

            <!-- Right Number Div -->
            <div
              class="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[460px] xl:w-[518px] flex items-center justify-center bg-[#145CB8] border-t-[1.193px] border-b-[1.193px] border-r-[1.193px] border-[#A4CCFF] p-[20px] boder-right"
            >
              <p
                class="text-white text-right font-inter text-[56px] font-semibold leading-normal"
              >
                {{ data.number }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import search from "@/assets/images/search.svg";
import back from "@/assets/images/back.svg";
import { tableData } from "~/constants/tableData";

const { t } = useI18n();

const props = defineProps({
  obj: {
    type: Object,
    required: true,
  },
});

const searchQuery = ref("");

const filteredTableData = computed(() => {
  if (!searchQuery.value) return tableData;
  const q = searchQuery.value.toLowerCase();
  return tableData.filter((item) =>
    t(`codes.${item.text}`).toLowerCase().includes(q)
  );
});
</script>
