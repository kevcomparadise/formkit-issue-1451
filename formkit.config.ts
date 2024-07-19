import { defineFormKitConfig } from '@formkit/vue'
import {createFloatingLabelsPlugin} from "@formkit/addons";
import { defaultConfig } from '@formkit/vue'
import { rootClasses } from './formkit.theme'
import '@formkit/addons/css/floatingLabels'


export default defineFormKitConfig({
    plugins: [
        createFloatingLabelsPlugin()
    ],
    config : {
        rootClasses
    }
})