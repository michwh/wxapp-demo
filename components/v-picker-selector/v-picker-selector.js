// components/v-picker-selector/v-picker-selector.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    options:Array
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    index:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindPickerChange: function (e) {
      //console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value
      })
      this.triggerEvent("optionsValue", this.data.index)
    }
  }
})
