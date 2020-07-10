<template>
    <div id="nav">
        <Card class="card" v-for="(tab,index) in tabs" :key='index'>
            <div style="text-align:center" @click="pushRouter(tab.routerName)">
                <Icon :type="tab.icon" class="icon" />
                <h3>{{tab.title}}</h3>
            </div>
        </Card>
        <div class="box" v-for=" n in 8">1</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                {
                    icon: "md-cloudy",
                    title: "自动部署",
                    routerName: "deploy"
                },
                {
                    icon: "md-cog",
                    title: "可视化操作",
                    routerName: "project"
                },
                {
                    icon: "ios-switch",
                    title: "可视化编程",
                    routerName: ""
                }
            ]
        };
    },
    methods: {
        pushRouter(name) {
            if (name) {
                this.$router.push({ name });
            } else {
                this.$Notice.warning({ title: "敬请期待！！！" });
            }
        }
    }
};
</script>

<style lang="scss" scoped>
#nav {
    padding: 30px 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .card {
        cursor: pointer;
        width: 200px;
        margin-bottom: 30px;
        &:hover {
            color: rgb(15, 30, 228);
        }
    }
    .icon {
        font-size: 60px;
        margin-bottom: 10px;
    }
    .box {
        visibility: hidden;
        width: 200px;
    }
}
</style>