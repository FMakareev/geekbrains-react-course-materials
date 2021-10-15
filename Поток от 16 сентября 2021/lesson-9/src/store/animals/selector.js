export const getAnimalsStore = (store) => store.animals;
export const getAnimalsData = (store) => getAnimalsStore(store).data;
export const getAnimalsLoading = (store) => getAnimalsStore(store).isLodaing;
export const getAnimalsError = (store) => getAnimalsStore(store).isError;

export const animalsSelectors = {
    getAnimalsStore,
    getAnimalsData,
    getAnimalsLoading,
    getAnimalsError
};
