<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="[]" @select="handleSelect">

          <el-submenu index="1">
            <template slot="title">css</template>
            <el-menu-item-group title="布局">
              <el-menu-item index="1-1">111</el-menu-item>
              <el-menu-item index="1-2">222</el-menu-item>
            </el-menu-item-group>
            <!-- <el-menu-item-group title="浮动">
              <el-menu-item index="1-1">111</el-menu-item>
              <el-menu-item index="1-2">222</el-menu-item>
            </el-menu-item-group> -->
            <!-- <el-menu-item-group title="定位">
              <el-menu-item index="1-1">111</el-menu-item>
              <el-menu-item index="1-2">222</el-menu-item>
            </el-menu-item-group> -->
            <!-- <el-menu-item-group title="flex">
              <el-menu-item index="1-1">111</el-menu-item>
              <el-menu-item index="1-2">222</el-menu-item>
            </el-menu-item-group> -->
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">ES5</template>
            <el-menu-item-group title="title1">
              <el-menu-item index="2-1">Js 语言精粹</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

           <el-submenu index="3">
            <template slot="title">ES6</template>
            <el-menu-item-group title="title1">
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">jq</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">vue</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">node</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      
      <el-container>
        <el-header class="header-style">
          header
        </el-header>
        
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'App',
  methods: {
    handleSelect: function (key, path) {
      switch (key) {
        case '2-1':
          this.$router.push('/jsGoodPart');
          break;

      }
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.header-style{
  background: #ccc;
  font-size: 24px;
  text-align: center;
  line-height: 60px;
}
/* 不知道如何引入icon  */
.el-icon-arrow-down:before{
  content: '';
}
</style>
