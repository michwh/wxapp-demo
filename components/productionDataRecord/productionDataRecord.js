// components/productionDataRecord/productionDataRecord.js
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
    title1:'种植区',
    title2: '田块',
    title3: '种植密度',
    title4: '施肥量',
    title5: '农药用量',
    title6: '产量',
    placeholder1:'请填写种植密度！',
    placeholder2: '请填写施肥量！',
    placeholder3: '请填写农药用量！',
    placeholder4: '请填写产量！',
    options1:["A1","A2","B1","B2"], //测试用数据
    fileBlock:'',
    plantingDensity:'',
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    receiveFieldBlock: function (e) {
      this.setData({
        fieldBlock: this.data.options1[e.detail]
      })
      console.log(this.data.fieldBlock)
    },

    receivePlantingDensity: function (e) {
      this.setData({
        plantingDensity: e.detail
      })
      console.log(this.data.plantingDensity)
    },

    receivePesticideDosage: function (e) {
      this.setData({
        pesticideDosage: e.detail
      })
      console.log(this.data.pesticideDosage)
    },

    receiveFertilizationAmount: function (e) {
      this.setData({
        fertilizationAmount: e.detail
      })
      console.log(this.data.fertilizationAmount)
    },

    receiveOutput: function (e) {
      this.setData({
        Output: e.detail
      })
      console.log(this.data.Output)
    },

    submit: function (e) {
      wx.request({
        url: 'test.php', //仅为示例，并非真实的接口地址
        data: {
          fieldBlock: this.data.fieldBlock,
          plantingDensity: this.data.plantingDensity,
          pesticideDosage: this.data.pesticideDosage,
          fertilizationAmount: this.data.fertilizationAmount,
          Output: this.data.Output,
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
    //   options1: this.getFieldBlockList()
    // })
  }
})
