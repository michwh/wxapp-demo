// components/v-picker-region/v-picker-region.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    region: ['广东省', '广州市', '海珠区']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindRegionChange: function (e) {
      this.setData({
        region: e.detail.value
      })
      this.triggerEvent("regionValue", this.data.region)
    }
  }
})
