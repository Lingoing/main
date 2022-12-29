(function() {
    "use strict";
    var n = {
        9220: function(n, t, e) {
            var r = e(7195)
              , i = function() {
                var n = this
                  , t = n._self._c;
                return t("div", {
                    attrs: {
                        id: "app"
                    }
                }, [t("div", {
                    directives: [{
                        name: "longpress",
                        rawName: "v-longpress",
                        value: n.longpress,
                        expression: "longpress"
                    }],
                    staticClass: "main",
                    on: {
                        click: n.next
                    }
                }, [n._v(n._s(pinyinPro.pinyin(n.currentData.current === undefined ? "" : n.currentData.current.toString())))]), t("div", {
                    staticClass: "desc"
                }, [n._v(n._s("wrongs" == n.mode ? "错题本复习，" : "题库练习，") + "剩余：" + n._s(n.currentData.data.length))]), t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: n.showingMenu,
                        expression: "showingMenu"
                    }],
                    staticClass: "menu-wrapper",
                    on: {
                        click: function(t) {
                            n.showingMenu = !1
                        }
                    }
                }, [t("div", {
                    staticClass: "flex-spacer"
                }), t("div", {
                    staticClass: "menu"
                }, [t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: n.currentData.prev && n.currentData.prev !== n.currentData.current,
                        expression: "currentData.prev && currentData.prev !== currentData.current"
                    }],
                    staticClass: "menu-item",
                    on: {
                        click: n.goPrev
                    }
                }, [n._v("上一个")]), t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "wrongs" !== n.mode,
                        expression: "mode !== 'wrongs'"
                    }],
                    staticClass: "menu-item",
                    on: {
                        click: n.addWrongs
                    }
                }, [n._v("加入错题本")]), t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: n.wrongs.data.length > 0 && "wrongs" !== n.mode,
                        expression: "wrongs.data.length > 0 && mode !== 'wrongs'"
                    }],
                    staticClass: "menu-item",
                    on: {
                        click: n.openWrongs
                    }
                }, [n._v("进入错题本 " + n._s(`[${n.wrongs.data.length}个]`))]), t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "wrongs" == n.mode,
                        expression: "mode == 'wrongs'"
                    }],
                    staticClass: "menu-item",
                    on: {
                        click: n.removeCurrentWrong
                    }
                }, [n._v("记住了，移出："), t("span", {
                    staticStyle: {
                        "font-family": "'pinyin'"
                    }
                }, [n._v(n._s(n.currentData.current))])]), t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "wrongs" == n.mode,
                        expression: "mode == 'wrongs'"
                    }],
                    staticClass: "menu-item",
                    staticStyle: {
                        color: "#F56C6C"
                    },
                    on: {
                        click: n.clearWrongs
                    }
                }, [n._v("清空错题本")]), t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "wrongs" == n.mode,
                        expression: "mode == 'wrongs'"
                    }],
                    staticClass: "menu-item",
                    on: {
                        click: n.exitWrongs
                    }
                }, [n._v("退出错题本")])]), t("div", {
                    staticClass: "flex-spacer"
                })])])
            }
              , s = []
              , a = (e(7658),
            ["一","丁","丂","七","丄","丅","丆","万","丈","三","上","下","李白","范仲淹","平易近人","冰清玉洁","持之以恒","锲而不舍","废寝忘食","大义凛然","临危不俱","光明磊落","不屈不挠","鞠躬尽瘁","行路难君不见长安城北渭桥边枯木横槎卧古田昔日含红复含紫常时留雾亦留烟春景春风花似雪香车玉舆恒阗咽若个游人不竞攀若个倡家不来折倡家宝袜蛟龙帔公子银鞍千万骑黄莺一向花娇春青鸟双双将子戏千尺长条百尺枝月桂星榆相蔽亏珊瑚叶上鸳鸯鸟凤凰巢里雏鹓儿巢倾枝折凤归去条枯叶落任风吹一朝零落无人问万古摧残君讵知人生贵贱无终始倏忽须臾难久恃谁家能驻西山日谁家能堰东流水汉家陵树满秦川行来行去尺哀怜自昔公卿二千石咸拟荣华一万年不见朱唇将白貌惟闻素棘与黄泉金貂有时须换酒玉麈但摇莫计钱寄言坐客神仙署一生一死交情处苍龙阙下君不来白鹤山前我应去云间海上邈难期赤心会合在何时但愿尧年一百万长作巢由也不辞"])
              , o = {
                data() {
                    return {
                        currentData: {
                            data: []
                        },
                        normal: {
                            current: "",
                            prev: "",
                            bakCurrent: "",
                            data: [...a]
                        },
                        wrongs: {
                            current: "",
                            prev: "",
                            bakCurrent: "",
                            data: JSON.parse(localStorage.getItem("pinyin-wrongs")) || []
                        },
                        showingMenu: !1
                    }
                },
                computed: {
                    mode() {
                        return this.currentData === this.normal ? "normal" : "wrongs"
                    }
                },
                mounted() {
                    this.currentData = this.normal,
                    this.next(!0)
                },
                methods: {
                    next(n) {
                        if (n || !this.showingMenu)
                            if (0 !== this.currentData.data.length) {
                                if (this.currentData.prev = this.currentData.current,
                                this.currentData.bakCurrent)
                                    return this.currentData.current = this.currentData.bakCurrent,
                                    void (this.currentData.bakCurrent = "");
                                this.currentData.current = this.currentData.data.splice(Math.floor(Math.random() * this.currentData.data.length), 1)[0]

                                if (this.currentData.current !== undefined && this.currentData.current !== "") {
									//单个字
                                    if (this.currentData.current.length === 1) {
										document.getElementsByClassName('main')[0].title=this.currentData.current
                                        var mp3Url = "https://hanyu-word-pinyin-short.cdn.bcebos.com/" + pinyinPro.pinyin(this.currentData.current, {
                                            toneType: 'num'
                                        }) + ".mp3"
                                        var player = new Audio(mp3Url)
                                        player.play()
                                    }
									//多个字									
									else if (this.currentData.current.length > 1) {
/*                                         var arr = this.currentData.current;
                                        var length = this.currentData.current.length;
                                        var index = 0;
                                        var m_time = setInterval(function() {
                                            getVoice()
                                        }, 600);
                                        var player = new Audio()
										var mp3Url
                                        function getVoice() {
                                            mp3Url = "https://hanyu-word-pinyin-short.cdn.bcebos.com/" + pinyinPro.pinyin(arr[index], {
                                                toneType: 'num'
                                            }) + ".mp3"
                                            player.src = mp3Url
                                            player.play()
                                            console.log(index);
                                            index += 1;
                                            if (index >= length)
                                                clearInterval(m_time);
                                        } */
										var word=""
										for(var i=0;i<this.currentData.current.length;i++)
										{
											word+=this.currentData.current[i]+"("+pinyinPro.pinyin(this.currentData.current[i], {toneType: 'num'})+")"
										}
										var mp3Url = "https://tts.baidu.com/text2audio?tex="+word+"&cuid=dict&lan=ZH&ctp=1&pdt=30&vol=9&per=4100"
                                        var player = new Audio(encodeURI(mp3Url))
                                        player.play()
                                    }
                                }
                            } else
                                alert("恭喜你 练完了，刷新重来！")
                    },
                    goPrev() {
                        this.currentData.bakCurrent = this.currentData.current,
                        this.currentData.current = this.currentData.prev
                    },
                    longpress() {
                        this.showingMenu = !0
                    },
                    addWrongs() {
                        -1 === this.wrongs.data.indexOf(this.currentData.current) && (this.wrongs.data.push(this.currentData.current),
                        localStorage.setItem("pinyin-wrongs", JSON.stringify(this.wrongs.data)))
                    },
                    openWrongs() {
                        this.currentData = this.wrongs,
                        this.next(!0)
                    },
                    removeCurrentWrong() {
                        this.wrongs.data.splice(this.wrongs.data.indexOf(this.currentData.current), 1),
                        localStorage.setItem("pinyin-wrongs", JSON.stringify(this.wrongs.data))
                    },
                    clearWrongs() {
                        window.confirm("确认要清空错题本吗？") && (this.wrongs.data = [],
                        this.wrongs.current = "",
                        this.wrongs.prev = "",
                        this.wrongs.bakCurrent = "",
                        localStorage.setItem("pinyin-wrongs", JSON.stringify(this.wrongs.data)),
                        this.exitWrongs())
                    },
                    exitWrongs() {
                        this.currentData = this.normal
                    }
                }
            }
              , u = o
              , c = e(1001)
              , g = (0,
            c.Z)(u, i, s, !1, null, null, null)
              , h = g.exports
              , l = {
                install(n, t={
                    time: 500
                }) {
                    n.directive("longpress", {
                        bind: function(n, e, r) {
                            if ("function" !== typeof e.value) {
                                const n = r.context.name;
                                let t = `[longpress:] provided expression '${e.expression}' is not afunction, but has to be `;
                                n && (t += `Found in component '${n}' `),
                                console.warn(t)
                            }
                            let i = null
                              , s = n=>{
                                "click" === n.type && 0 !== n.button || null === i && (i = setTimeout((()=>{
                                    o()
                                }
                                ), t.time))
                            }
                              , a = ()=>{
                                null !== i && (clearTimeout(i),
                                i = null)
                            }
                            ;
                            const o = n=>{
                                e.value(n)
                            }
                            ;
                            n.addEventListener("mousedown", s),
                            n.addEventListener("touchstart", s),
                            n.addEventListener("click", a),
                            n.addEventListener("mouseout", a),
                            n.addEventListener("touchend", a),
                            n.addEventListener("touchcancel", a)
                        }
                    })
                }
            };
            r.ZP.use(l, {
                time: 500
            }),
            r.ZP.config.productionTip = !1,
            new r.ZP({
                render: n=>n(h)
            }).$mount("#app")
        }
    }
      , t = {};
    function e(r) {
        var i = t[r];
        if (void 0 !== i)
            return i.exports;
        var s = t[r] = {
            exports: {}
        };
        return n[r](s, s.exports, e),
        s.exports
    }
    e.m = n,
    function() {
        var n = [];
        e.O = function(t, r, i, s) {
            if (!r) {
                var a = 1 / 0;
                for (g = 0; g < n.length; g++) {
                    r = n[g][0],
                    i = n[g][1],
                    s = n[g][2];
                    for (var o = !0, u = 0; u < r.length; u++)
                        (!1 & s || a >= s) && Object.keys(e.O).every((function(n) {
                            return e.O[n](r[u])
                        }
                        )) ? r.splice(u--, 1) : (o = !1,
                        s < a && (a = s));
                    if (o) {
                        n.splice(g--, 1);
                        var c = i();
                        void 0 !== c && (t = c)
                    }
                }
                return t
            }
            s = s || 0;
            for (var g = n.length; g > 0 && n[g - 1][2] > s; g--)
                n[g] = n[g - 1];
            n[g] = [r, i, s]
        }
    }(),
    function() {
        e.n = function(n) {
            var t = n && n.__esModule ? function() {
                return n["default"]
            }
            : function() {
                return n
            }
            ;
            return e.d(t, {
                a: t
            }),
            t
        }
    }(),
    function() {
        e.d = function(n, t) {
            for (var r in t)
                e.o(t, r) && !e.o(n, r) && Object.defineProperty(n, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }
    }(),
    function() {
        e.g = function() {
            if ("object" === typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (n) {
                if ("object" === typeof window)
                    return window
            }
        }()
    }(),
    function() {
        e.o = function(n, t) {
            return Object.prototype.hasOwnProperty.call(n, t)
        }
    }(),
    function() {
        var n = {
            143: 0
        };
        e.O.j = function(t) {
            return 0 === n[t]
        }
        ;
        var t = function(t, r) {
            var i, s, a = r[0], o = r[1], u = r[2], c = 0;
            if (a.some((function(t) {
                return 0 !== n[t]
            }
            ))) {
                for (i in o)
                    e.o(o, i) && (e.m[i] = o[i]);
                if (u)
                    var g = u(e)
            }
            for (t && t(r); c < a.length; c++)
                s = a[c],
                e.o(n, s) && n[s] && n[s][0](),
                n[s] = 0;
            return e.O(g)
        }
          , r = self["webpackChunkpinyin_vue"] = self["webpackChunkpinyin_vue"] || [];
        r.forEach(t.bind(null, 0)),
        r.push = t.bind(null, r.push.bind(r))
    }();
    var r = e.O(void 0, [998], (function() {
        return e(9220)
    }
    ));
    r = e.O(r)
}
)();
//# sourceMappingURL=app.617c243d.js.map
