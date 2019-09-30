// Makes a red thing
var ye;
(function (ye) {
    var reds;
    (function (reds) {
        var MotherOfAllReds = /** @class */ (function () {
            function MotherOfAllReds() {
                this.someText = "Deflection (Physical)\n        Type: P \u2022 Range: LOS \u2022 Duration: S \u2022 DV: (F \u00F7 2) + 1\n        \n        Deflection protects the target by turning aside ranged\n        combat attacks. Every hit scored gives the target a +1 dice\n        pool modifier for defending against ranged physical attacks.\n        The effects of this spell are subtle enough to be discounted as\n        a missed shot or poor aim (at least at first).";
                this.textColor = 'black';
            }
            MotherOfAllReds.prototype.reddify = function () {
                this.textColor = 'red';
            };
            return MotherOfAllReds;
        }());
        var MotherOfAllRedsComponent = /** @class */ (function () {
            function MotherOfAllRedsComponent() {
                this.templateUrl = 'RedText.html';
                this.bindings = {
                    someText: '<',
                    reddify: '&'
                };
            }
            return MotherOfAllRedsComponent;
        }());
        angular
            .module('ye')
            .controller('MotherOfAllReds', MotherOfAllReds)
            .component('MotherOfAllRedsComponent', new MotherOfAllRedsComponent());
    })(reds = ye.reds || (ye.reds = {}));
})(ye || (ye = {}));
//# sourceMappingURL=RedThing.js.map