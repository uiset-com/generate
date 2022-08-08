import Vue from 'vue';
const EventBus = new Vue();

Vue.use({
    install: function(Vue) {
        Vue.prototype.EventBus = EventBus;
    }
});
