import { provide, inject, computed, ref, Ref } from "vue";
const sourceDataSymbol = Symbol();
export const usesourceDataProvide = () => {
  let searchData = ref("");
  let resultData = ref([]);
  const setsearchData = (searchInfo) => {
    searchData = searchInfo;
  };
  const setresultData = (resultInfo) => {
    resultData = [...resultInfo];
  };
  provide(sourceDataSymbol, {
    searchData,
    resultData,
    setsearchData,
    setresultData,
  });
};

export const usesourceDataInject = () => {
  const globalsourceData = inject(sourceDataSymbol);

  if (!globalsourceData) {
    throw new Error(`useBookListInject must be used after useBookListProvide`);
  }

  return globalsourceData;
};

