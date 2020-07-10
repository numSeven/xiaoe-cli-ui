<template>
    <div class="project">
        <div class="tabs">
            <h2 class="title">项目管理器</h2>
            <Tabs :tabs="tabData" @clickTab="clickTab"></Tabs>
        </div>
    </div>
</template>

<script>
import Tabs from "@/components/tabs";
export default {
    data() {
        return {
            tabData: [
                {
                    icon: "md-menu",
                    title: "项目",
                    name: "project"
                },
                {
                    icon: "md-add-circle",
                    title: "创建",
                    name: "creat"
                },
                {
                    icon: "md-archive",
                    title: "导入",
                    name: "import"
                }
            ]
        };
    },
   
    components: {
        Tabs
    },
    methods: {
        clickTab(tab) {
            console.log(tab);
        }
    }
};
</script>

<style lang="scss" scoped>
.project {
    height: 100%;
    display: flex;
    flex-direction: column;
    .tabs {
        background: #c8ebdf;
        .title {
            padding: 20px;
        }
    }
}
</style>