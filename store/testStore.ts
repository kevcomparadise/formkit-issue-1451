import {defineStore} from "pinia";
import {useStorageAsync} from "@vueuse/core";

export const useTestStore =  defineStore('testStore', () => {
    const data = useStorageAsync('deepData', {
        deep: {
            test : {
                name : ''
            }
        }
    });

    const scalarData = useStorageAsync('sclardata', '')

    return {
        data,
        scalarData
    }

}, {
    persist: true
})