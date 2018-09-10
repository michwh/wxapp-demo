// components/formulaRecord/formulaRecord.js
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
    title2:'水稻品种',
    title3:'生长季',
    title4:'施肥结点',
    title5:'公式的名称',
    title6:'公式的表达式（以;结尾）',
    placeholder1:'请填写公式的名称！',
    placeholder2:'请填写公式的表达式！',
    options2:["测试大米品种","黄华占"],//水稻品种测试数据
    options3:["早稻","中稻","晚稻"],//生长季数据
    options4:["抽穗期","灌浆期"],//施肥结点数据
    formulaExpression:'',
    formulaName:'',
    riceVariety:'',
    growingSeason:'',
    fertilizationNode:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    receiveFormulaExpression: function (e) {
      this.setData({
        formulaExpression:e.detail
      })
      //console.log(this.data.formulaExpression)
    },

    receiveFormulaName: function (e) {
      this.setData({
        formulaName: e.detail
      })
      //console.log(this.data.formulaName)
    },

    receiveRiceVariety: function (e) {
      this.setData({
        riceVariety: this.data.options2[e.detail]
      })
      //console.log(this.data.riceVariety)
    },

    receiveGrowingSeason: function (e) {
      this.setData({
        growingSeason: this.data.options3[e.detail]
      })
      //console.log(this.data.growingSeason)
    },

    receiveFertilizationNode: function (e) {
      this.setData({
        fertilizationNode: this.data.options4[e.detail]
      })
      //console.log(this.data.fertilizationNode)
    },

    submit: function (e) {
      wx.request({
        url: 'test.php', //仅为示例，并非真实的接口地址
        data: {
          formulaExpression: this.data.formulaExpression,
          formulaName: this.data.formulaName,
          riceVariety: this.data.riceVariety,
          growingSeason: this.data.growingSeason,
          fertilizationNode: this.data.fertilizationNode,
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
    //   options2: this.getRiceVarietyList(),
    //   options3: this.getGrowingSeasonList(),
    //   options4: this.getFertilizationNodeList()
    // })
  }
})
