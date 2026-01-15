<template>
  <div class="flex justify-center">
    <div
      class="h-auto sm:mt-[10px] md:mt-[15px] lg:mt-[20px] xl:mt-[30px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-[100%] pb-[20px] px-[40px] gap-[20px]"
    >
      <!-- /////////////// -->

      <button
        v-for="(dept, index) in filteredDepartments"
        :key="index"
        @click="openModal(dept)"
        class="flex flex-col items-center cursor-pointer"
      >
        <div
          class="bg-[#E0EEFF] border w-full aspect-[4/3] inputBorder-top flex items-center h-[150px] sm:h-[180px] md:h-[220px] lg:h-[260px] xl:h-[300px] justify-center"
        >
          <img
            :src="dept.image"
            alt="icon"
            class="w-[100px] sm:w-[140px] md:w-[170px] lg:w-[200px] xl:w-[220px] aspect-square"
          />
        </div>

        <div
          class="bg-[#145CB8] flex items-center justify-center w-full h-[100px] sm:h-[120px] md:h-[130px] lg:h-[140px] xl:h-[145px] shrink-0 inputBorder-bottom"
        >
          <p
            class="text-white text-center font-inte text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] xl:text-[32px] font-bold leading-[1.1]"
          >
            {{ $t(`items.${dept.name}`) }}
          </p>
        </div>
      </button>

      <!-- /////////////// -->
    </div>
  </div>
  <DeptModal v-if="showModal" :obj="obj" @close="closeModal" />
</template>

<script setup>
import DeptModal from "@/components/modals/deptModal.vue";
import { department } from "~/constants/departments";

const { t } = useI18n();

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

const showModal = ref(false);
const obj = ref({});

function openModal(data) {
  obj.value = data;
  showModal.value = true;
}
function closeModal() {
  showModal.value = false;
}
</script>
