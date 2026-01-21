"use strict";

    function _classCallCheck(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    var _createClass = function() {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var i = n[t];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(n, t, i) {
            return t && e(n.prototype, t), i && e(n, i), n
        }
    }();
    document.docReady(function() {
        ! function(e) {
            var n = e(".qrcodescan").first(),
                t = n.find(".preview-wrap").first(),
                i = n.find(".result-template")[0].innerHTML,
                r = n.find(".result").first();
            window.setTimeout(function() {
                t.hasClass("scanning") || t.hasClass("no-camera") || (t.removeClass("loading"), t.addClass("error"))
            }, 7e3);
            var a = new Instascan.Scanner({
                video: t.find("video")[0],
                mirror: !1
            });
            a.addListener("scan", function(e) {
                document.location.href = e;
            }), a.addListener("active", function() {
                t.addClass("scanning"), t.removeClass("loading"), t.removeClass("error"), t.show()
            }), a.addListener("inactive", function() {
                t.removeClass("scanning"), t.hide()
            }), Instascan.Camera.getCameras().then(function(e) {
                if (e.length > 0) {
                    1 == e.length && (a.mirror = !0), e.reverse();
                    for (var n = 0, i = 0; i < e.length; i++) /back/.match(e[i].name) && (n = i);
                    a.start(e[n])
                } else t.removeClass("loading"), t.addClass("no-camera"), console.error("No cameras found.")
            })["catch"](function(e) {
                console.error(e)
            });

        }(jQuery)
    });