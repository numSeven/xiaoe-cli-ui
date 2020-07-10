<template>
    <div class="tips" :style="{height:isShowTips?'45px':'0'}">
        <Icon type="md-flash" />连接已断开
    </div>
</template>

<script>
export default {
    props: {
        isShowTips: {
            defualt: false,
            type: Boolean
        }
    }
};
</script>

<style lang="scss" scoped>
.tips {
    width: 100%;
    color: #fff;
    background: rgb(232, 48, 48);
    height: 0;
    line-height: 45px;
    font-size: 16px;
    transition: all 0.5s;
}
</style>