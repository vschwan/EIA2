"use strict";
var TestL01;
(function (TestL01) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let v = 1;
        v = v + 1;
        console.log(v);
        let a = { "wert1": true, "wert2": false };
        console.log(a);
        let vector = { x: 12.4, y: -7.2, meaning: "Ortsvektor" };
        console.log(vector);
        let v1 = 12;
        let v2 = v1;
        v1 = 13;
        console.log(v1, v2);
        let k1 = { x: 1, y: 8, meaning: "test" };
        let k2 = k1;
        k1 = { x: 3, y: 8, meaning: "test" };
        console.log(k1, k2);
    }
})(TestL01 || (TestL01 = {}));
//# sourceMappingURL=TestL01.js.map