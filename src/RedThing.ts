// Makes a red thing

interface IComponentBindings {
    // taken from the AngularJS types file so I don't
    // have to keep typing this out
    [boundProperty: string]: string
}

namespace ye.reds {
    console.log('hmm?');

    class MotherOfAllReds implements ng.IController {
        public someText: string = `Deflection (Physical)
        Type: P • Range: LOS • Duration: S • DV: (F ÷ 2) + 1
        
        Deflection protects the target by turning aside ranged
        combat attacks. Every hit scored gives the target a +1 dice
        pool modifier for defending against ranged physical attacks.
        The effects of this spell are subtle enough to be discounted as
        a missed shot or poor aim (at least at first).`;

        public textColor: string = 'black';

        private static get baseColor(): string {
            return 'black';
        }

        private static get alternateColor(): string {
            return 'red';
        }

        public flipColors(): void {
            if(this.textColor === MotherOfAllReds.baseColor) {
                this.textColor = MotherOfAllReds.alternateColor;
            }
            else {
                this.textColor = MotherOfAllReds.baseColor
            }
            // console.log(this.textColor);
        }

        constructor() {
            console.log('hey, construct me');
        }
    }

    class MotherOfAllRedsComponent implements ng.IComponentOptions {
        // public templateUrl: string = 'src/RedText.html';
        public bindings: IComponentBindings = {
            // someText: '@'
        }
        public template = 
        `<p style="color: {{ $ctrl.textColor }};" >
            {{ $ctrl.someText }}
        </p>
        <button ng-click="$ctrl.flipColors()">Flip the colors!</button>`;

        public controller =  MotherOfAllReds;

        public constructor() {
            console.log('log THIS');
        }
    }

    angular
        .module('ye')
        // .controller('motherOfAllReds', MotherOfAllReds)
        .component('motherOfAllRedsComponent', new MotherOfAllRedsComponent());
}