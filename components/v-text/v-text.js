// components/v-text/v-text.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    placeholder:String,
    value:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //当用户在文本框中输入时触发的事件
    inputChange: function (e) {
      this.triggerEvent("textValue", e.detail.value)
    }
  }
})
