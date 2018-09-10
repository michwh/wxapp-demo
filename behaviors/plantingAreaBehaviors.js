module.exports = Behavior({
  behaviors: [],
  properties: {
    
  },
  data: {
    multiArray: [],
    multiIndex: [0, 0, 0],
    provinceList: [],
    cityList: [],
    plantingAreaList: [],
    region:[]
  },
  attached: function () { },
  methods: {
    //种植区选项中获取省列表
    getProvince: function () {
      wx.request({
        url: 'test.php', //仅为示例，并非真实的接口地址
        data: {},
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

    //种植区选项中根据省获取市列表
    getCity: function (province) {
      wx.request({
       url: 'test.php', //仅为示例，并非真实的接口地址
        data: { province: this.data.province },
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

    //种植区选项中根据市获取种植区列表
    getPlantingArea: function (city) {
      wx.request({
        url: 'test.php', //仅为示例，并非真实的接口地址
        data: { city: this.data.city },
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

    //测试用
    testGetCity: function (e) {
      if (e == "广东省") {
        return ["广州市", "云浮市"]
      } else {
        return ["武汉市", "宜昌市"]
      }
    },
    testGetPlantingArea: function (e) {
      if (e == "广州市") {
        return ["华农跃进北实验田"]
      } else if (e == "云浮市") {
        return ["云浮北实验田"]
      } else if (e == "武汉市") {
        return ["武汉大学"]
      } else {
        return ["宜昌试验田"]
      }
    },

    //当用户确定种植区时触发的事件
    receiveMultiSelectorValue: function (e) {
      this.setData({
        multiIndex: e.detail.value
      })
      this.data.region[0] = this.data.multiArray[0][this.data.multiIndex[0]]
      this.data.region[1] = this.data.multiArray[1][this.data.multiIndex[1]]
      this.data.region[2] = this.data.multiArray[2][this.data.multiIndex[2]]
      this.setData({
        region: this.data.region
      })
      //console.log(this.data.region)
    },

    //当用户改变种植区某列选项时触发的事件
    receiveMultiSelectorColumn: function (e) {
      const column = e.detail.column
      const columnValue = e.detail.value
      switch (column) {
        case 0:
          this.data.multiIndex[0] = columnValue //更新省值

          //this.data.multiArray[1] = this.getCity(this.data.provinceList[columnValue])//获取市列表
          this.data.multiArray[1] = this.testGetCity(this.data.provinceList[columnValue]) //测试用，更新市列表
          this.data.cityList = this.data.multiArray[1] //更新市列表
          this.data.multiIndex[1] = 0 // 将市默认选择第一个

          //this.data.multiArray[2] = this.getPlantingArea(this.data.cityList[0])//获取区列表
          this.data.multiArray[2] = this.testGetPlantingArea(this.data.cityList[0]) //测试用,获取区列表
          this.data.plantingAreaList = this.data.multiArray[2] //更新种植区列表
          this.data.multiIndex[2] = 0 // 将区默认选择第一个

          this.setData({
            multiArray: this.data.multiArray,
            multiIndex: this.data.multiIndex
          })
          break

        case 1:
          this.data.multiIndex[1] = columnValue //更新市值

          //this.data.multiArray[2] = this.getPlantingArea(this.data.cityList[columnValue])//获取区列表
          this.data.multiArray[2] = this.testGetPlantingArea(this.data.cityList[columnValue]) //测试用,获取区列表
          this.data.plantingAreaList = this.data.multiArray[2] //更新种植区列表
          this.data.multiIndex[2] = 0 // 将区默认选择第一个

          this.setData({
            multiArray: this.data.multiArray,
            multiIndex: this.data.multiIndex
          })
          break
      }
    }
  },

  /**
 * 在组件布局完成后执行的函数
 * 初始化种植区选项的数据
 */
  ready: function () {
    
    //初始化三级选择器的选项值
    this.setData({
      //provinceList: this.getProvince(),
      provinceList: ["广东省", "湖北省"], //测试用数据
    })
    this.data.multiArray[0] = this.data.provinceList
    this.setData({
      multiArray: this.data.multiArray,
      //cityList: this.getCity(this.data.provinceList[0]),
      cityList: ["广州市", "云浮市"], //测试用数据
    })
    this.data.multiArray[1] = this.data.cityList
    this.setData({
      multiArray: this.data.multiArray,
      //plantingAreaList: this.getPlantingArea(this.data.cityList[0]),
      plantingAreaList: ["华农跃进北实验田"],//测试用数据
    })
    this.data.multiArray[2] = this.data.plantingAreaList
    this.setData({
      multiArray: this.data.multiArray
    })

  }
})