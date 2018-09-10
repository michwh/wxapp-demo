// pages/recordInfo/recordInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    operateOptions: ["种植区录入", "公式录入", "生产数据录入", "处方创建"],
    operateOptionsIndex: 0,
    operateOptionsTitle:'当前操作',
    plantingAreaRecord:true,
    formulaRecord:false,
    productionDataRecord:false,
    prescriptionCreate:false
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
  
  },

  /**
   * 根据用户选择不同的当前操作，显示不同的组件
   */
  receiveOperateOptionsValue: function (e) {
    //console.log(e.detail)
    this.setData({
      operateOptionsIndex: e.detail
    })
    switch (this.data.operateOptionsIndex) {
      case "0":
        this.setData({
          plantingAreaRecord: true,
          formulaRecord: false,
          productionDataRecord: false,
          prescriptionCreate: false
        })
        break
      case "1":
        this.setData({
          plantingAreaRecord:false,
          formulaRecord: true,
          productionDataRecord: false,
          prescriptionCreate: false
        })
        break
      case "2":
        this.setData({
          plantingAreaRecord: false,
          formulaRecord: false,
          productionDataRecord: true,
          prescriptionCreate: false
        })
        break
      case "3":
        this.setData({
          plantingAreaRecord: false,
          formulaRecord: false,
          productionDataRecord: false,
          prescriptionCreate: true
        })
        break
    }
  }

})