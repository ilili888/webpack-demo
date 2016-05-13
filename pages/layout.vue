<template>
  <header class="am-topbar">
  <div class="am-container">
    <h1 class="am-topbar-brand">
      <a href="#">Webpack Test</a>
    </h1>
    <div class="am-collapse am-topbar-collapse">
      <ul class="am-nav am-nav-pills am-topbar-nav">
        <li><a v-link="'/'">首页</a></li>
        <li><a v-link="'/image'">看图</a></li>
        <li class="am-dropdown" data-am-dropdown>
          <a class="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:;">
            下拉
          </a>
          <ul class="am-dropdown-content">
            <li class="am-dropdown-header">标题</li>
            <li><a href="#">1. 去月球</a></li>
            <li class="am-active"><a href="#">2. 去火星</a></li>
            <li><a href="#">3. 还是回地球</a></li>
            <li class="am-disabled"><a href="#">4. 下地狱</a></li>
            <li class="am-divider"></li>
            <li><a href="#">5. 桥头一回首</a></li>
          </ul>
        </li>
      </ul>

      <div class="am-topbar-right">
        <button class="am-btn am-btn-primary am-topbar-btn am-btn-sm">登录</button>
        <button class="am-btn am-btn-secondary am-topbar-btn am-btn-sm am-dropdown-toggle">其他</button>
      </div>
    </div>
  </div>
  </header>
  <div class="am-container">
    <router-view></router-view>
  </div>
</template>
