<template>
    <div v-html="icons[name].html"></div>
</template>
<script>
import icons from '@/icons';
export default {
    name: 'CustomIcon',
    props: {
        name: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            icons: icons
        };
    }
};
</script>
