// components/prescriptionCreate/prescriptionCreate.js
const plantingAreaBehaviors = require('../../behaviors/plantingAreaBehaviors.js')
const optionListBehaviors = require('../../behaviors/optionListBehaviors.js')
Component({
  behaviors: [plantingAreaBehaviors, optionListBehaviors],
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    title1:"种植区",
    title2: "多光谱NDVI文件",
    title3: "可见光NDVI文件",
    title4: "水稻品种",
    title5: "处方名称",
    options2:["文件1","文件2"], //测试用数据，多光谱文件选项
    options3: ["文件1","文件2"], //测试用数据，可见光文件选项
    options4: ["黄花占","测试大米品种"],//测试用数据，水稻品种
    placeholder1: '请填写处方名称！',
    prescriptionName:'', //处方名称,
    multispectralFile:'', //多光谱文件
    visibleLightFile:'', //可见光文件
    riceVariety:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    receiveMultispectralFile: function (e) {
      this.setData({
        multispectralFile: this.data.options2[e.detail]
      })
      //console.log(this.data.multispectralFile)
    },

    receiveVisibleLightFile: function (e) {
      this.setData({
        visibleLightFile: this.data.options3[e.detail]
      })
      //console.log(this.data.visibleLightFile)
    },

    receiveRiceVariety: function (e) {
      this.setData({
        riceVariety: this.data.options4[e.detail]
      })
      //console.log(this.data.riceVariety)
    },

    receivePrescriptionName: function (e) {
      this.setData({
        prescriptionName: e.detail
      })
      //console.log(this.data.prescriptionName)
    },

    submit: function () {
      wx.request({
        url: 'test.php', //仅为示例，并非真实的接口地址
        data: {
          multispectralFile: this.data.multispectralFile,
          visibleLightFile: this.data.visibleLightFile,
          riceVariety: this.data.riceVariety,
          prescriptionName: this.data.prescriptionName,
          region: this.data.region
        },
        method: "post",
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          //console.log(res.data)
          return res.data
        }
      })
    }
  },

  /**
* 在组件布局完成后执行的函数
* 初始化种植区选项的数据
*/
  ready: function () {
    // this.setData({
    //   options2: this.getMultispectralFileList(),
    //   options3: this.getVisibleLightFileList(),
    //   options4: this.getRiceVarietyList()
    // })
  }
})
