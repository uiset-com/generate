import Vue from 'vue';
// import icons from '../icons';
import {
    mdiGithub,
    mdiPencil,
    mdiWeb,
    mdiMagnify,
    mdiInvertColors
} from '@mdi/js';

Vue.use({
    install: function(Vue) {
        Vue.prototype.$icon = {
            mdiGithub,
            mdiPencil,
            mdiWeb,
            mdiMagnify,
            mdiInvertColors
        };
    }
});
