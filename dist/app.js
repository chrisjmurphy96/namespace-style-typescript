var ye;
(function (ye) {
    // entry point
    angular.module('ye', []);
})(ye || (ye = {}));
// Makes a red thing
var ye;
(function (ye) {
    var reds;
    (function (reds) {
        console.log('hmm?');
        var MotherOfAllReds = /** @class */ (function () {
            function MotherOfAllReds() {
                this.someText = "Deflection (Physical)\n        Type: P \u2022 Range: LOS \u2022 Duration: S \u2022 DV: (F \u00F7 2) + 1\n        \n        Deflection protects the target by turning aside ranged\n        combat attacks. Every hit scored gives the target a +1 dice\n        pool modifier for defending against ranged physical attacks.\n        The effects of this spell are subtle enough to be discounted as\n        a missed shot or poor aim (at least at first).";
                this.textColor = 'black';
                console.log('hey, construct me');
            }
            Object.defineProperty(MotherOfAllReds, "baseColor", {
                get: function () {
                    return 'black';
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MotherOfAllReds, "alternateColor", {
                get: function () {
                    return 'red';
                },
                enumerable: true,
                configurable: true
            });
            MotherOfAllReds.prototype.flipColors = function () {
                if (this.textColor === MotherOfAllReds.baseColor) {
                    this.textColor = MotherOfAllReds.alternateColor;
                }
                else {
                    this.textColor = MotherOfAllReds.baseColor;
                }
                // console.log(this.textColor);
            };
            return MotherOfAllReds;
        }());
        var MotherOfAllRedsComponent = /** @class */ (function () {
            function MotherOfAllRedsComponent() {
                // public templateUrl: string = 'src/RedText.html';
                this.bindings = {
                // someText: '@'
                };
                this.template = "<p style=\"color: {{ $ctrl.textColor }};\" >\n            {{ $ctrl.someText }}\n        </p>\n        <button ng-click=\"$ctrl.flipColors()\">Flip the colors!</button>";
                this.controller = MotherOfAllReds;
                console.log('log THIS');
            }
            return MotherOfAllRedsComponent;
        }());
        angular
            .module('ye')
            // .controller('motherOfAllReds', MotherOfAllReds)
            .component('motherOfAllRedsComponent', new MotherOfAllRedsComponent());
    })(reds = ye.reds || (ye.reds = {}));
})(ye || (ye = {}));
//# sourceMappingURL=app.js.map