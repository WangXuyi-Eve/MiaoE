// pages/homeZone/userInfoShow/userInfoShow.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        motto: 'Hello World',
        // orderItems
        orderItems: [
          {
            typeId: 0,
            name: '输入语料',
            url: 'bill',
            content: 1
          },
          {
            typeId: 1,
            name: '输出预料',
            url: 'bill',
            content: 2
          },
          {
            typeId: 2,
            name: '累计积分',
            url: 'bill',
            content: 3
          },
          {
            typeId: 3,
            name: '连续签到',
            url: 'bill',
            content: 4
          }
        ],
      },

    toOrder: function () {
        wx.navigateTo({
          url: '../order/order'
        })
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
  
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})