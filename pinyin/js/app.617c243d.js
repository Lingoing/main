(function () {
    "use strict";
    var n = {
        9220: function (n, t, e) {
            var r = e(7195)
                , i = function () {
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
                            click: function (t) {
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
                    ["一",
                        "牛",
                        "给",
                        "啊",
                        "平易近人",
                        "冰清玉洁",
                        "持之以恒",
                        "锲而不舍",
                        "废寝忘食",
                        "大义凛然",
                        "临危不俱",
                        "光明磊落",
                        "不屈不挠",
                        "鞠躬尽瘁",
                        "行路难，唐，李白，金樽清酒斗十千，玉盘珍羞直万钱。停杯投箸不能食，拔剑四顾心茫然。欲渡黄河冰塞川，将登太行雪满山。闲来垂钓碧溪上，忽复乘舟梦日边。行路难，行路难，多歧路，今安在？长风破浪会有时，直挂云帆济沧海。",
                        "蜀道难,唐,李白,噫吁嚱，危乎高哉！蜀道之难，难于上青天！蚕丛及鱼凫，开国何茫然！尔来四万八千岁，不与秦塞通人烟。西当太白有鸟道，可以横绝峨眉巅。地崩山摧壮士死，然后天梯石栈相钩连。上有六龙回日之高标，下有冲波逆折之回川。黄鹤之飞尚不得过，猿猱欲度愁攀援。青泥何盘盘，百步九折萦岩峦。扪参历井仰胁息，以手抚膺坐长叹。问君西游何时还？畏途巉岩不可攀。但见悲鸟号古木，雄飞雌从绕林间。又闻子规啼夜月，愁空山。蜀道之难，难于上青天，使人听此凋朱颜！连峰去天不盈尺，枯松倒挂倚绝壁。飞湍瀑流争喧豗，砯崖转石万壑雷。其险也如此，嗟尔远道之人胡为乎来哉！剑阁峥嵘而崔嵬，一夫当关，万夫莫开。所守或匪亲，化为狼与豺。朝避猛虎，夕避长蛇；磨牙吮血，杀人如麻。锦城虽云乐，不如早还家。蜀道之难，难于上青天，侧身西望长咨嗟！",
                        "琵琶行，唐，白居易，浔阳江头夜送客，枫叶荻花秋瑟瑟。主人下马客在船，举酒欲饮无管弦。醉不成欢惨将别，别时茫茫江浸月。忽闻水上琵琶声，主人忘归客不发。寻声暗问弹者谁，琵琶声停欲语迟。移船相近邀相见，添酒回灯重开宴。千呼万唤始出来，犹抱琵琶半遮面。转轴拨弦三两声，未成曲调先有情。弦弦掩抑声声思，似诉平生不得志。低眉信手续续弹，说尽心中无限事。轻拢慢捻抹复挑，初为《霓裳》后《六幺》。大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。间关莺语花底滑，幽咽泉流冰下难。冰泉冷涩弦凝绝，凝绝不通声暂歇。别有幽愁暗恨生，此时无声胜有声。银瓶乍破水浆迸，铁骑突出刀枪鸣。曲终收拨当心画，四弦一声如裂帛。东船西舫悄无言，唯见江心秋月白。沉吟放拨插弦中，整顿衣裳起敛容。自言本是京城女，家在虾蟆陵下住。十三学得琵琶成，名属教坊第一部。曲罢曾教善才服，妆成每被秋娘妒。五陵年少争缠头，一曲红绡不知数。钿头银篦击节碎，血色罗裙翻酒污。今年欢笑复明年，秋月春风等闲度。弟走从军阿姨死，暮去朝来颜色故。门前冷落鞍马稀，老大嫁作商人妇。商人重利轻别离，前月浮梁买茶去。去来江口守空船，绕船月明江水寒。夜深忽梦少年事，梦啼妆泪红阑干。我闻琵琶已叹息，又闻此语重唧唧。同是天涯沦落人，相逢何必曾相识！我从去年辞帝京，谪居卧病浔阳城。浔阳地僻无音乐，终岁不闻丝竹声。住近湓江地低湿，黄芦苦竹绕宅生。其间旦暮闻何物？杜鹃啼血猿哀鸣。春江花朝秋月夜，往往取酒还独倾。岂无山歌与村笛？呕哑嘲哳难为听。今夜闻君琵琶语，如听仙乐耳暂明。莫辞更坐弹一曲，为君翻作《琵琶行》。感我此言良久立，却坐促弦弦转急。凄凄不似向前声，满座重闻皆掩泣。座中泣下谁最多？江州司马青衫湿。",
                        "岳阳楼记，宋，范仲淹，庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴，乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上，属予作文以记之。予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯，朝晖夕阴，气象万千，此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？若夫淫雨霏霏，连月不开，阴风怒号，浊浪排空，日星隐曜，山岳潜形，商旅不行，樯倾楫摧，薄暮冥冥，虎啸猿啼。登斯楼也，则有去国怀乡，忧谗畏讥，满目萧然，感极而悲者矣。至若春和景明，波澜不惊，上下天光，一碧万顷，沙鸥翔集，锦鳞游泳，岸芷汀兰，郁郁青青。而或长烟一空，皓月千里，浮光跃金，静影沉璧，渔歌互答，此乐何极！登斯楼也，则有心旷神怡，宠辱偕忘，把酒临风，其喜洋洋者矣。嗟夫！予尝求古仁人之心，或异二者之为，何哉？不以物喜，不以己悲，居庙堂之高则忧其民，处江湖之远则忧其君。是进亦忧，退亦忧。然则何时而乐耶？其必曰“先天下之忧而忧，后天下之乐而乐”乎！噫！微斯人，吾谁与归？时六年九月十五日。",
                    ])
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
                                            document.getElementsByClassName('main')[0].title = this.currentData.current
                                            var mp3Url = "https://hanyu-word-pinyin-short.cdn.bcebos.com/" + pinyinPro.pinyin(this.currentData.current, {
                                                toneType: 'num'
                                            }).replaceAll('ü', 'v').replaceAll('0', '5') + ".mp3"
                                            var player = new Audio(mp3Url)
                                            player.play()
                                        }
                                        //多个字									
                                        else if (this.currentData.current.length > 1) {
                                            document.getElementsByClassName('main')[0].title = this.currentData.current
                                            /*var arr = this.currentData.current;
                                            var length = this.currentData.current.length;
                                            var index = 0;
                                            var m_time = setInterval(function () {
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
                                            }
                                            var word = ""
                                            for (var i = 0; i < this.currentData.current.length; i++) {
                                                word += this.currentData.current[i] + "(" + pinyinPro.pinyin(this.currentData.current[i], { toneType: 'num' }).replaceAll('ü', 'v').replaceAll('0', '5') + ")"
                                            }*/
                                            var mp3Url = "https://tts.baidu.com/text2audio?tex=" + this.currentData.current + "&cuid=dict&lan=ZH&ctp=1&pdt=30&vol=9&per=4100"
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
                    install(n, t = {
                        time: 500
                    }) {
                        n.directive("longpress", {
                            bind: function (n, e, r) {
                                if ("function" !== typeof e.value) {
                                    const n = r.context.name;
                                    let t = `[longpress:] provided expression '${e.expression}' is not afunction, but has to be `;
                                    n && (t += `Found in component '${n}' `),
                                        console.warn(t)
                                }
                                let i = null
                                    , s = n => {
                                        "click" === n.type && 0 !== n.button || null === i && (i = setTimeout((() => {
                                            o()
                                        }
                                        ), t.time))
                                    }
                                    , a = () => {
                                        null !== i && (clearTimeout(i),
                                            i = null)
                                    }
                                    ;
                                const o = n => {
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
                    render: n => n(h)
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
        function () {
            var n = [];
            e.O = function (t, r, i, s) {
                if (!r) {
                    var a = 1 / 0;
                    for (g = 0; g < n.length; g++) {
                        r = n[g][0],
                            i = n[g][1],
                            s = n[g][2];
                        for (var o = !0, u = 0; u < r.length; u++)
                            (!1 & s || a >= s) && Object.keys(e.O).every((function (n) {
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
        function () {
            e.n = function (n) {
                var t = n && n.__esModule ? function () {
                    return n["default"]
                }
                    : function () {
                        return n
                    }
                    ;
                return e.d(t, {
                    a: t
                }),
                    t
            }
        }(),
        function () {
            e.d = function (n, t) {
                for (var r in t)
                    e.o(t, r) && !e.o(n, r) && Object.defineProperty(n, r, {
                        enumerable: !0,
                        get: t[r]
                    })
            }
        }(),
        function () {
            e.g = function () {
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
        function () {
            e.o = function (n, t) {
                return Object.prototype.hasOwnProperty.call(n, t)
            }
        }(),
        function () {
            var n = {
                143: 0
            };
            e.O.j = function (t) {
                return 0 === n[t]
            }
                ;
            var t = function (t, r) {
                var i, s, a = r[0], o = r[1], u = r[2], c = 0;
                if (a.some((function (t) {
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
    var r = e.O(void 0, [998], (function () {
        return e(9220)
    }
    ));
    r = e.O(r)
}
)();
//# sourceMappingURL=app.617c243d.js.map
