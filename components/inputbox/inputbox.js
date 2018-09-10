// components/inputbox/inputbox.js
Component({
    properties: {
        title: String,
        helpText: {
            type: String,
            value: null,
            observer: function(oldval, newval, changed_path) {
                this.setData({
                    footerClass: this.data.footerClassHelp,
                    footer: newval,
                    titleColor: this.focusing ? this.properties.focusColor : this.properties.blurColor,
                    dividerColor: this.properties.blurColor,
                    subDividerColor: this.properties.focusColor
                })
            }
        },
        errorText: {
            type: String,
            value: null,
            observer: function(oldval, newval, changed_path) {
                this.setData({
                    footerClass: this.data.footerClassError,
                    footer: newval,
                    titleColor: this.data.errorColor,
                    dividerColor: this.data.errorColor,
                    subDividerColor: this.data.errorColor
                })
            }
        },
        blurColor: {
            type: String,
            value: "gray"
        },
        focusColor: {
            type: String,
            value: "rgb(33, 150, 243)"
        },
        password: {
            type: Boolean,
            value: false
        }
    },

    data: {
        footerClassHidden: "footer-hidden",
        footerClassHelp: "footer-help",
        footerClassError: "footer-error",
        footerClass: "footer-hidden",
        footer: "",
        errorColor: "red",
        titleColor: null,
        dividerColor: null,
        subDividerColor: null,
        animationData: null,
    },

    attached: function () {
        this.setData({
            titleColor: this.properties.blurColor,
            dividerColor: this.properties.blurColor,
            subDividerColor: this.properties.focusColor
        })
        if (this.properties.errorText != null) {
            this.setData({
                footerClass: this.data.footerClassError,
                footer: this.properties.errorText,
                titleColor: this.data.errorColor,
                dividerColor: this.data.errorColor,
                subDividerColor: this.data.errorColor
            })
        } else if (this.properties.helpText != null) {
            this.setData({
                footerClass: this.data.footerClassHelp,
                footer: this.properties.helpText,
                titleColor: this.focusing ? this.properties.focusColor : this.properties.blurColor,
                dividerColor: this.properties.blurColor,
                subDividerColor: this.properties.focusColor
            })
        }
        this.animation = null
        this.focusing = false
    },

    methods: {
        getAnimation: function() {
            return wx.createAnimation({
                duration: 300,
                timingFunction: "ease-in-out"
            })
        },

        onFocus: function (e) {
            if (!this.animation) {
                this.animation = this.getAnimation()
            }
            this.animation.width("100%").step()
            this.setData({
                animationData: this.animation.export(),
                titleColor: this.properties.errorText ? this.data.errorColor : this.properties.focusColor
            })
            this.focusing = true
        },

        onBlur: function (e) {
            if (!this.animation) {
                return
            }
            this.animation.width("0%").step()
            this.setData({
                animationData: this.animation.export(),
                titleColor: this.properties.errorText ? this.data.errorColor : this.properties.blurColor
            })
            this.focusing = false
        },

        onInput: function (e) {
            this.triggerEvent("textinputed", {
                value: e.detail.value
            })
        }
    }
})