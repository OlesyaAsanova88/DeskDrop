<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    showModalAlert: Boolean,
    
})
const emits = defineEmits(['closeModal', 'removeTask']);

const closeModel = () => {
  emits('closeModal');
};

// const removeTask = (task, index) => {     
//     emits('removeTask', task, index);
//     closeModel();
// };

const confirmRemoveTask = () => {
  emits('removeTask'); 
};

</script>

<template>
    <div class="modal" :style="{ display: showModalAlert ? 'block' : 'none' }">
      <div class="modal-content">
        <div class="flex justify-between items-center">
            <h2 class="text-[24px] font-[584]">Удалить задачу?</h2>
            <span 
            @click="closeModel"
            class="close" 
            >
            <img src="../assets/img/cross.png" alt="cross">
            </span>
        </div>

        <p class="pt-[20px] pb-[10px]">Задача 1</p>
  
        <div class="flex gap-[10px] justify-between pt-[20px] border-t-[1px] border-[#ffffff1a]">
            <button 
            class="bg-[#fff] flex-grow hover:bg-[#C4CAD4] border-[1px] border-[#C4CAD4] text-[#1C2530] font-bold py-[8px] px-[16px] rounded-[4px]"
            @click="closeModel"
            >Отмена
            </button>

            <button 
           @click="confirmRemoveTask"
           class="bg-[#fff] flex-grow hover:bg-[#C4CAD4] border-[1px] border-[#C4CAD4] text-[#1C2530]  font-bold py-[8px] px-[16px] rounded-[4px]"
           >Удалить
          </button>
       
        </div>
        
      </div>
    </div>
  </template>
  
  
  <style scoped lang="scss">
  .modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .modal-content {
    width: 500px;
    height: 196px;
    background-color: #fff;
    color: #1C2530;
    padding: 24px 40px 40px 40px;
    margin: 14% auto;
    border-radius: 8px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  }

  .close {
    float: right;
    font-size: 28px;
    cursor: pointer;
  }
  </style>