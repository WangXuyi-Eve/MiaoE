// pages/inputZone/passageSearch/passageSearch.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      // 数据源
      language:[
        "应用文 Pratical Writing",
        "说明文 Expository Writing",
        "记叙文 Narrative Writing",
        "学术文体 Academic Writing",
        "文学名著 Literary Work",
        "法律文献 Legal Text",
        "科技文献 Scientific and Technical Paper", 
        "政治热点 Political Topic",
        "经济金融 Economical Article",
        "文艺娱乐 Pop Culture",
        "医疗卫生 Medical Literature"
        // 更多数据...
      ]
    },
    toMore: function (){
      wx.switchTab({
        url: '../../outputZone/outputDefault/outputDefault',
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