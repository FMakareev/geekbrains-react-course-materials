
/**
 * @param reducer - функция для формирования нового состояния при выполнении экшенов
 * @param initialState - начальное состояние хранилища
 *
 * @desc простая реализация redux
 * */
export const createSimpleStore = (reducer, initialState) => {

    /** @desc объект состояния хранилища*/
    let currentState = initialState;

    /** @desc массив функций подписанных на изменение состояния */
    let listeners = [];

    /** @desc метод получения текущего состояния хранилища */
    const getState = () => currentState;

    /** @desc метод для вызова экшенов и изменения состояния */
    const dispatch = (action) => {
        currentState = reducer(currentState, action)
        listeners.forEach((listener) => listener())
    }

    /** @desc метод для добавления подписчиков на изменение состояния */
    const subscribe = (listener) => {

        listeners.push(listener);

        /**
         * @desc метод для отписки от изменений, сохраняется в переменную при выполнении подписки и далее может быть вызван для отписки
         * @example
         * const store = createStore();
         * const unsubscribe = store.subscribe(() => ...)
         * unsubscribe();
         * */
        return function unsubscribe() {
            const index = listeners.indexOf(listener);
            listeners.splice(index, 1);
        }
    }


    return {
        getState,
        dispatch,
        subscribe
    }
}