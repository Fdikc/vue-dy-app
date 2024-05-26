<template>
  <div id="NavMenu">
    <el-menu
        :default-active="toIndex"
        class="el-menu-demo"
        text-color="#000000"
        active-text-color="#3989fa"
        mode="horizontal"
        @select="handleSelect"
    >
      <el-menu-item v-for="(item, index) in itemList" :index="item.path" :key="index">
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      itemList: [    // 水平一级菜单栏的菜单
        { path: '/', title: '首页' },
        { path: '/movie', title: '电影' },
        { path: '/novel', title: '小说' },

      ],
    };
  },
  computed: {
    toIndex(){  // 根据路径绑定到对应的一级菜单，防止页面刷新重新跳回第一个
      return '/' + this.$route.path.split('/')[1];
    },
  },
  methods: {
    handleSelect(path){  // 切换菜单栏
      this.$router.push({
        path: path
      });
    },
  },

};
</script>

<style scoped>
</style>
