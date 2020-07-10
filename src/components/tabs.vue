<template>
    <div class="tabs">
        <div
            class="tab"
            v-for="(tab,index) in tabs"
            :key="index"
            :class="{boder:index==intab}"
            @click="clickTab(tab,index)"
            v-down-change-color
        >
            <Icon v-if="tab.icon" :type="tab.icon" class="icon" />
            {{tab.title}}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            intab: 0
        };
    },
    props: {
        tabs: {
            type: Array,
            default() {
                return [];
                
            }
        }
    },
     directives: {
        downChangeColor: {
            inserted(el) {
                el.onmousedown = function () {
                     this.style.background = 'inherit'
                     
                }
                el.onmouseup = function () {
                     this.style.background = ''
                }
            }
        }
    },
    methods: {
        clickTab(tab, index) {
            this.intab = index;
            this.$emit("clickTab", tab);
        }
    }
};
</script>

<style lang="scss" scoped>
.tab {
    display: inline-block;
    padding: 0 18px;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 2px;
    .icon {
        // vertical-align: sub;
        font-size: 20px;
    }
    &.boder {
        border-bottom: 2px solid #6806c1;
        color: #6806c1;
    }
    &:hover {
        background: #ebf8f1;
    }
}
</style>