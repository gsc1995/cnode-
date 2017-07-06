// pages/topics/topics.js
Page({
    data: {
        navList: [{
                id: 'all',
                title: '全部'
            },
            {
                id: 'good',
                title: '精华'
            },
            {
                id: 'share',
                title: '分享'
            },
            {
                id: 'ask',
                title: '问答'
            },
            {
                id: 'job',
                title: '招聘'
            }
        ],
        activeIndex: 2
    },
    onTapTag: function(e) {
        this.setData({
            activeIndex: e.currentTarget.dataset.index
        })
    },

    onLoad: function(options) {
        // 页面初始化 options为页面跳转所带来的参数
    },
    onReady: function() {
        // 页面渲染完成
    },
    onShow: function() {
        // 页面显示
    },
    onHide: function() {
        // 页面隐藏
    },
    onUnload: function() {
        // 页面关闭
    }
})