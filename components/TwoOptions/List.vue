<template>
  <div class="w-full pt-[20px] pb-[20px]">
    <div class="flex items-center gap-[20px] flex-col mx-[35px]">
      <div
        v-for="(dept, index) in filteredDepartments"
        :key="index"
        class="w-full"
      >
        <button
          @click="toggleAccordion(index)"
          :class="[
            'accordion w-full h-[100px] bg-[#E0EEFF] flex justify-center cursor-pointer overflow-hidden',
            {
              '!rounded-b-none !border-b-0 !shadow-none': activeIndex === index,
            },
          ]"
        >
          <div
            class="w-[8%] bg-[#C2DDFF] flex items-center justify-center border-r border-[#A4CCFF]"
          >
            <div
              class="bg-[#145CB8] flex items-center justify-center w-[38px] h-[28px] sm:w-[48px] sm:h-[35px] md:w-[58px] md:h-[43px] lg:w-[68px] lg:h-[50px] xl:w-[75px] xl:h-[55px] rounded-[10px]"
            >
              <p
                class="text-white text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl"
              >
                {{ index + 1 }}
              </p>
            </div>
          </div>

          <div
            class="w-[92%] flex items-center justify-between pl-[30px] pr-[10px]"
          >
            <p
              class="font-inter font-semibold text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl text-[#145CB8]"
            >
              {{ $t(`items.${dept.name}`) }}
            </p>
            <img
              :src="activeIndex === index ? down : right"
              alt="toggle icon"
              class="w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px] lg:w-[45px] lg:h-[45px] xl:w-[55px] xl:h-[55px]"
            />
          </div>
        </button>

        <Transition name="expand">
          <div
            v-show="activeIndex === index"
            class="panel bg-[#E0EEFF] border-x border-b border-[#A4CCFF] rounded-b-[30px] -mt-[1px]"
          >
            <div
              class="flex items-center mx-[40px] py-[30px] flex-col gap-[20px]"
            >
              <div
                v-for="(data, idx) in tableData"
                :key="idx"
                class="w-full flex items-stretch justify-center"
              >
                <div
                  class="w-[80%] pl-[20px] border-t-[1.193px] border-b-[1.193px] border-l-[1.193px] border-[#A4CCFF] flex items-center justify-start bg-[#E0EEFF] py-[20px] border-left"
                >
                  <p
                    class="text-[#145CB8] font-inter font-semibold text-base sm:text-2xl"
                  >
                    {{ idx + 1 }}
                    nimadir
                  </p>
                  <p
                    class="text-[#222932] font-inter font-semibold leading-[1.1] text-base px-[20px] sm:text-2xl"
                  >
                    {{ $t(`codes.${data.text}`) }}
                  </p>
                </div>

                <div
                  class="w-[20%] flex items-center justify-end pr-[20px] bg-[#145CB8] border-t-[1.193px] border-b-[1.193px] border-r-[1.193px] border-[#A4CCFF] border-right"
                >
                  <p
                    class="text-white text-right font-inter font-semibold text-base sm:text-2xl"
                  >
                    {{ data.number }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import right from "@/assets/images/right.svg";
import down from "@/assets/images/down.svg";
import { tableData } from "@/constants/tableData";
import { department } from "~/constants/departments";

const { t } = useI18n();
const activeIndex = ref(null);

//
const props = defineProps({
  search: {
    type: String,
    deffault: "",
    req: true,
  },
});

const filteredDepartments = computed(() => {
  if (!props.search) return department;

  const query = props.search.toLowerCase();

  return department.filter((dept) => {
    const translatedName = t(`items.${dept.name}`).toLowerCase();
    return translatedName.includes(query);
  });
});
//

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>
.panel {
  transition: 0.4s;
  box-shadow: 0 4.773px 19.091px 0 rgba(0, 0, 0, 0.16);
  overflow: hidden;
}

.accordion {
  transition: 0.2 s;
  border: 1px solid #a4ccff;
  box-shadow: 0 4.773px 19.091px 0 rgba(0, 0, 0, 0.16);
  border-radius: 30px;
}

/* Starting state for entering / Ending state for leaving */
.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

/* Ending state for entering / Starting state for leaving */
.expand-enter-to,
.expand-leave-from {
  max-height: 1000px; /* Set to a value larger than your content */
  opacity: 1;
}

/* The transition timing */
.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.4s ease-in-out, opacity 0.3s ease-out;
}
</style>
