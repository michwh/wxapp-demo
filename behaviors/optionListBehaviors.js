module.exports = Behavior({
  behaviors: [],
  properties: {
    
  },
  data: {
    
  },
  attached: function () { },
  methods: {
    //获取水稻品种选项列表
    getRiceVarietyList: function () {
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

    //获取生长季选项列表
    getGrowingSeasonList: function () {
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

    //获取施肥结点选项列表
    getFertilizationNodeList: function () {
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

    //获取田块选项列表
    getFieldBlockList: function () {
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

    //获取多光谱文件选项列表
    getMultispectralFileList: function () {
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

    //获取可见光文件选项列表
    getVisibleLightFileList: function () {
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
    }
  }
})