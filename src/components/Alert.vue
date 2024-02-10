<script setup>
import { defineProps, defineEmits, onMounted } from 'vue';

const emits = defineEmits(['closeAlert']);

const props = defineProps({
    showAlertGreen: Boolean
})

const closeAlert = () => {
    emits('closeAlert');
}

onMounted(() => {
    setTimeout(() => {
        closeAlert();
    }, 2000); // Закрыть окно через 2 секунды
});
</script>

<template>
    <div class="alert flex w-[400px] h-[76px] gap-[10px] justify-between items-center p-[16px] absolute right-[10px] bottom-[10px] border-[1px] border-l-[5px] border-l-[#22C33D] border-[#E3E5E8] bg-[#FFFFFF] rounded-[8px]">
       <div class="flex gap-[10px]">
        <img src="../assets/img/yes.png" alt="yes">
       <span>Успешно</span>
       </div>
       <img 
       @click="closeAlert"
       src="../assets/img/cross.png" alt="">
    </div>
</template>