<script setup>
import { defineProps, defineEmits} from "vue";

const props = defineProps({
    showSelect: Boolean,
    showModalAlert: Boolean,
    task: String,
    index: Number
});

const emits = defineEmits(['openAlert', 'removeTask']);

const removeTask = (task, index) => {
  emits('openAlert', task, index);
};

</script>

<template>
    <div class="selected absolute top-[100px] left-[40px] bg-[#FFFFFF] w-[300px] h-[86px] border-[1px] border-[#E3E5E8] rounded-[4px] ">
            <div class="flex gap-[10px]  hover:bg-[#E1F1FF] p-[8px]">
              <img src="../assets/img/edit-3.png" alt="edit">
              <span>Редактировать</span>
            </div>
            <div 
            @click="removeTask(task, index)"
            class="flex gap-[10px] hover:bg-[#E1F1FF] p-[8px]">
              <img src="../assets/img/trash.png" alt="delete">
              <span>Удалить</span>
            </div>
          </div>
</template>