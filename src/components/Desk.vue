<script setup>
import { ref, } from "vue";
import { usetakredTasksStore } from "../stores/tasks.js";
import { storeToRefs } from "pinia";
// import ModalAlert from './ModalAlert.vue';
import Alert from './Alert.vue';
import Selected from './Selected.vue';


const store = usetakredTasksStore();

const { takredTasks } = storeToRefs(store);


const selectedTakr = ref(null);
  const showModal = ref(false);
  
  const newTaskText = ref("");
  const newText = ref("");
  const dragIndex = ref(null);
  
  const showSelect = ref(false);
  const showModalAlert = ref(false);
  const showAlertGreen = ref(false);
  

  const cancelAddTask = () => {
    newTaskText.value = "";
    newText.value = "";
    showModal.value = false;
  };
  
  const dragStart = (takr, task) => {
    dragIndex.value = { takr, task };
  };
  
  const drop = (targetTakr) => {
    moveTask(dragIndex.value.takr, targetTakr, dragIndex.value.task);
  };
  
  const moveTask = (sourceTakr, targetTakr, task) => {
    const sourceIndex = takredTasks.value.findIndex(
      (takr) => takr === sourceTakr
    );
    const targetIndex = takredTasks.value.findIndex(
      (takr) => takr === targetTakr
    );
    if (sourceIndex !== -1 && targetIndex !== -1) {
      takredTasks.value[sourceIndex].tasks = takredTasks.value[
        sourceIndex
      ].tasks.filter((t) => t !== task);
      takredTasks.value[targetIndex].tasks.push(task);
    }
  };
  const openModal = (takr) => {
    selectedTakr.value = takr;
    showModal.value = true;
  };
  
  const pushingTask = (task) => {
    if (newTaskText.value.trim() !== "") {
      task.push(newTaskText.value);
      newTaskText.value = "";
      showModal.value = false;
      showAlertGreen.value = true;
    }
  };

  const removeTask = (task, index) => {
    task.splice(index, 1);
  };
  
  const openAlert = () => {
      showModalAlert.value = true
       showSelect.value = false
    }
  
  const closeModel = () => {
    showModal.value = false;
  };

</script>

<template>
  <div class="wrapper flex gap-[20px] relative">

    <div
      class="block w-[177px] flex flex-col flex-grow border-[1px] border-[#E3E5E8] rounded-[8px]"
      v-for="takr in takredTasks"
      :key="takr"
      @dragover.prevent
      @drop="drop(takr)"
    >
      <div
        class="flex justify-center rounded-t-[8px] text-[#1C2530] text-[14px] p-[7px] font-[584]"
        :class="takr.color"
      >
        {{ takr.header }}
      </div>
      <div class="bg-[#F7F7F7] content p-[10px]">
        <div
          v-for="(task, index) in takr.tasks"
          :key="task"
          draggable="true"
          @dragstart="dragStart(takr, task)"
          class="task flex justify-between border-[1px] border-[#C4CAD4] bg-[#FFFFFF] rounded-[4px] p-[10px] mb-[10px] cursor-pointer"
        >
          <div class="mr-[10px] w-[150px] break-words">
            {{ task }}
          </div>

          <!-- modal alert -->

        <!-- <ModalAlert 
        v-if="showModalAlert"
        @close-model="closeModel"
        @open-alert="openAlert"
        @removeTask="removeTask(takr.tasks, index)"
        :showModalAlert="showModalAlert"
        /> -->

          <!-- end modal -->

          <!-- @click="showSelect = !showSelect"  поменять клик в блоке ниже при раскоменте модалки -->
          <div
          @click="removeTask(takr.tasks, index)"
            class="cursor-pointer pt-[5px]"
          >
            <img src="../assets/img/Vector.png" alt="" />
          </div>
        </div>

          <!-- Selected -->

          <Selected 
          v-if="showSelect"
          :showModalAlert="showModalAlert"
          :showSelect="showSelect"
          @open-alert="openAlert"
          />

          <!-- end Selected -->

        <div @click="openModal(takr)" class="flex items-center cursor-pointer">
          <i class="mdi mdi-plus text-[#3D86F4] text-[24px]"></i>
          <span class="text-[#3D86F4] text-[14px]">Добавить</span>
        </div>

        <!-- Модальное окно для добавления задачи -->
        <div class="modal" v-if="showModal && selectedTakr === takr">
          <div class="modal-content flex relative">
            <textarea
              class="w-full h-[100px] p-[10px] border-[1px] focus:outline-none focus:border-[#66B8FF] rounded-[4px] resize-none"
              v-model="newTaskText"
              placeholder="Введите текст задачи"
            ></textarea>
            <div
              class="button-group flex flex-col absolute right-[10px] top-[10px]"
            >
              <button @click="pushingTask(takr.tasks)">
                <img src="../assets/img/check.png" alt="chek" />
              </button>
              <button @click="cancelAddTask">
                <img src="../assets/img/x.png" alt="x" />
              </button>
            </div>
          </div>
        </div>
        <!-- end modal -->
      </div>
    </div>

    <Alert 
    v-if="showAlertGreen"
    @close-alert="showAlertGreen = false"
    :showAlertGreen="showAlertGreen"
    />

  </div>
</template>

<style scoped lang="scss">

.content {
  height: 100vh;
  max-height: 800px;
  overflow-y: auto;
}
.task:hover {
  box-shadow: 0 0 15px #c4cad4;
}

@media (max-width: 768px) {
  .alert {
    width: 100% !important;
    top: 10px;
    left: 0;
  }

  .wrapper {
    height: 100%;
    width: 100%;
    flex-direction: column;
  }
  .block {
    width: 100%;
  }

  .content {
    max-height: 400px;
  }
}

</style>
