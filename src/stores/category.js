import {defineStore} from "pinia";
import {ref} from "vue";
import {getCategoryApi} from "@/apis/layout";

export const useCategoryStore = defineStore('category', () => {
  // 导航列表数据
  const categoryList = ref([])
  // action 获取导航功能
  const getCategory = async () => {
    await getCategoryApi().then(res => {
      categoryList.value = res.result
    })
  }
  return {categoryList, getCategory}
})