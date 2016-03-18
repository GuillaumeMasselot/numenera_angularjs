module App {
    "use strict";

    export interface ISomeDirective extends ng.IDirective {
    }

    export interface ISomeDirectiveScope extends ng.IScope {
        value: number;
    }

    export interface ISomeDirectiveAttributes extends ng.IAttributes {
    }

    SomeDirective.$inject = ["$window"];
    export function SomeDirective($window: ng.IWindowService): ISomeDirective {
        return {
            restrict: "EA",
            templateUrl: "app/shared/some.html",
            scope: {
                value: "=base"
            },
            link: link
        }

        function link(scope: ISomeDirectiveScope, element: ng.IAugmentedJQuery, attrs: ISomeDirectiveAttributes) {
            /* Exemple d'utilisation de l'injection de $windows*/
            //$window.alert("alert from directive");
        }
    }

    angular.module("BlankApp").directive("some", SomeDirective);
}