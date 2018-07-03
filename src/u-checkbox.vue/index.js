import { UCheckbox } from 'proto-ui.vusion';

export default {
    name: 'u-checkbox',
    extends: UCheckbox,
    watch: {
        currentValue(value) {
            this.watchValue(value);
        },
    },
    mounted() {
        this.watchValue(this.value);
    },
    methods: {
        watchValue(value) {
            this.$refs.checkbox.indeterminate = value === null;
        },
    },
};
