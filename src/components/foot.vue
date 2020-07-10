<template>
    <div class="foot">
        <div>
            <Icon type="md-home" class="icon" />
        </div>
        <div class="path">
            <Icon type="md-folder" class="icon" />user/dddd/ssdfa/asdfas
        </div>
        <div class="logs">asdf</div>
        <div>
            <Icon type="md-sync" class="icon" />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.foot {
    height: 28px;
    line-height: 28px;
    background: #1d2935;
    color: #fff;
    display: flex;
    text-align: left;
    .path {
        width: 250px;
    }
    .logs {
        flex: 1;
    }
    &>div{
        padding: 0 5px;
    }
}
.icon {
    font-size: 20px;
    vertical-align: sub;
}
</style>