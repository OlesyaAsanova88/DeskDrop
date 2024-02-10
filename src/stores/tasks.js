import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usetakredTasksStore = defineStore('takredTasks', () => {
  
  const takredTasks = ref([
    {
      header: "На согласовании",
      color: "bg-[#FF99E9]",
      tasks: ['Задача 1', 
      'Доработка меню', 
      'Описать правила поведения интерфейса', 
      'Создание задачи с  очень длинным текстом описания в несколько строк, заполняющую примерно половину всей высоты столбца',
      'Создание задачи с  очень длинным текстом описания в несколько строк, заполняющую примерно половину всей высоты столбца ',
      'Создание задачи с  очень длинным текстом описания в несколько строк, заполняющую примерно половину всей высоты столбца '
       ],
    },
    {
      header: "Новые",
      color: "bg-[#66B8FF]",
      tasks: [],
    },
    {
      header: "В процессе",
      color: "bg-[#FFD466]",
      tasks: [],
    },
    {
      header: "Готово",
      color: "bg-[#53C666]",
      tasks: [],
    },
    {
      header: "Доработать",
      color: "bg-[#F53D5C]",
      tasks: [],
    },
  ]);


  return { takredTasks }
})
