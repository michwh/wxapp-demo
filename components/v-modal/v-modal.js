// components/v-modal/v-modal.js
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
    modalHidden: false,
    value:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    modalConfirm: function (e){
      this.triggerEvent("modalValue", this.data.value)
      this.setData({
        modalHidden: true
      })
    },
    receiveInputValue: function (e){
      this.data.value=e.detail.value
      // console.log(this.data.value);
    },
    modalCancle: function (){
      this.setData({
        modalHidden: true
      })
    }
  }
})
