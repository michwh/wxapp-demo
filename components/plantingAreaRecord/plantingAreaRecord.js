// components/plantingAreaRecord/plantingAreaRecord.js
Component({
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
    title2:'种植区名称',
    title3:'种植区介绍',
    placeholder1:'请填写种植区名称！',
    placeholder2:'请填写种植区介绍！',
    region:[],
    plantingAreaIntroduction:'',
    plantingAreaName:'' 
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //当用户改变种植区选项触发的事件
    receiveRegionValue: function (e) {
      this.setData({
        region: e.detail //格式：["广西壮族自治区", "南宁市", "兴宁区"]
      })
    },

    //当用户点提交时触发的事件
    submit: function () {
      wx.request({
        url: 'test.php', //仅为示例，并非真实的接口地址
        data: {
          region:this.data.region,
          plantingAreaName: this.data.plantingAreaName,
          plantingAreaIntroduction: this.data.plantingAreaIntroduction
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
    },

    //当用户在多行文本框中输入时触发的事件
    receiveTextareaValue: function (e) {
      this.setData({
        plantingAreaIntroduction:e.detail
      })
      //console.log(this.data.plantingAreaIntroduction)
    },

    //当用户在文本框中输入时触发的事件
    receiveTextValue: function (e) {
      this.setData({
        plantingAreaName: e.detail
      })
    }
  }
})
