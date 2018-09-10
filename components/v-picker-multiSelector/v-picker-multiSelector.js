// components/v-picker-multiSelector/v-picker-multiSelector.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    multiArray: Array,
    title: String,
    multiIndex: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    //multiIndex: [0, 0, 0], // 默认的下标
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //这个只有在点确定的时候才会触发
    bindPickerChange: function (e) {
      this.triggerEvent("multiSelectorValue", e.detail)// 更新下标字段multiIndex，event.detail = {value: value}
    },
    columnchange: function (e) {
      this.triggerEvent("multiSelectorColumn", e.detail)// detail包含当前改变的列和改变的列的数值，event.detail = {column: column, value: value}
    }
  }
})
