// pages/inputZone/passageShow/passageShow.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        date: "2022.1.27",
        title: "Multiculturalism",
        term1:"Multiculturalism", 
        passage1: " (cultural pluralism) refers to a mix of cultures and", 
        vocab1: "ethnicities", 
        passage2: " within a particular place or nation-state. It can be understood as another way of speaking about multi-ethnic states, but also refers to government policies, particularly ",
        phrase2: "with respect to ",
        passage3: "immigration.",

        passage4:"Given that populations are ", 
        vocab2:"arguably",
        passage5: " more mobile now, multiculturalism continues to be an issue",
        phrase1: " in the context of",
        passage6: " education, social cohesion and social welfare systems.",
        passage7:" Two phrases are often used to describe the United States of America as a multi-ethnic state. One is ",
        term2: "melting pot", 
        passage8: " and the other " ,
        term3: "salad bowl.",

        vocab:" ethnicity, arguably, cohesion",
        phrase:" with respect to, in the context of",
        term:" multiculturalism, melting pot, salad bowl"
    
    },

    toOutput: function (){
        wx.navigateTo({
          url: '/pages/outputZone/outputDefault/outputDefault',
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