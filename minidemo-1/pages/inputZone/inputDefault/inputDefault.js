// pages/inputZone/inputDefault/inputDefault.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        date: "2022.1.27",
        title: "Multiculturalism",
        passage1:"Multiculturalism (cultural pluralism) refers to a mix of cultures and ethnicities within a particular place or nation-state. It can be understood as another way of speaking about multi-ethnic states, but also refers to government policies, particularly with respect to immigration.",
        passage2:"Given that populations are arguably more mobile now, multiculturalism continues to be an issue in the context of education, social cohesion and social welfare systems.",
        passage3:" Two phrases are often used to describe the United States of America as a multi-ethnic state. One is melting pot and the other salad bowl."

    },

    toHighlight: function (){
        wx.navigateTo({
          url: '/pages/inputZone/passageShow/passageShow',
        })
    },

    toMore: function (){
        wx.switchTab({
          url: '../passageSearch/passageSearch',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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