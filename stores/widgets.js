export const useWidgetStore = defineStore('widgetStore', () => {
  // state = data
  const widgets = ref([]);

  // actions = functions
  async function fetchWidgets() {
    const { data } = await useFetch('/api/widgets');
    widgets.value = data;
  }

  return {
    widgets,
    fetchWidgets,
  };
});
