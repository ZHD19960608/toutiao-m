<template>
    <div class="layout_bar">
        <router-view></router-view>
        <van-tabbar v-model="active">
           <van-tabbar-item icon="home-o">主页</van-tabbar-item>
           <van-tabbar-item icon="comment-o">问答</van-tabbar-item>
           <van-tabbar-item icon="video-o">视频</van-tabbar-item>
           <van-tabbar-item icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
