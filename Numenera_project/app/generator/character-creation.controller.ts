
module App.Generator {
    "use strict";

    export interface ICharacterCreationController {
        title: string;
        heroesData: Array<DbHeroesData>;
        currentHero: any;
        activate: () => void;
    }

    export class CharacterCreationController implements ICharacterCreationController {
        title: string = "CharacterCreationController";
        heroesData = new Array<DbHeroesData>();
        currentHero: any;

        static $inject: string[] = ["generatorService"];
        constructor(private generatorService: GeneratorService) {
            this.activate();
        }

        activate() {
            var vm = this;
            this.currentHero = {
                noun: null,
                adjective: null,
                verb: null
            };

            this.generatorService.getHeroesData().then(function (dbPromise: any) {
                vm.heroesData = dbPromise.data;
                console.log(vm.heroesData);
            });
        }

        isDisabled(): boolean {
            return this.currentHero.noun == undefined || this.currentHero.adjective == undefined || this.currentHero.verb == undefined;
        }
    }

    angular.module("Numenera").controller("CharacterCreationController", CharacterCreationController);
}