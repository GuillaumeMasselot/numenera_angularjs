module App.Shared {
    "use strict";

    export interface ICharacterInitDirective extends ng.IDirective {
    }

    export interface ICharacterInitDirectiveScope extends ng.IScope {
    }

    export interface ICharacterInitDirectiveAttributes extends ng.IAttributes {
    }

    CharacterInitDirective.$inject = [];
    export function CharacterInitDirective($window: ng.IWindowService): ICharacterInitDirective {
        return {
            restrict: "EA",
            templateUrl: "app/shared/components/character-init.html",
            scope: {
                hero: "=",
                heroesData: "="
            },
            link: link
        }

        function link(scope: ICharacterInitDirectiveScope, element: ng.IAugmentedJQuery, attrs: ICharacterInitDirectiveAttributes) {
        }
    }

    angular.module("Numenera").directive("characterInit", CharacterInitDirective);
}