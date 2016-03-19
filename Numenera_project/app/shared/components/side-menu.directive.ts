module App.Shared {
    "use strict";

    export interface ISideMenuDirective extends ng.IDirective {
    }

    export interface ISideMenuDirectiveScope extends ng.IScope {
        navModules: Array<Shared.NavModule>;
    }

    export interface ISideMenuDirectiveAttributes extends ng.IAttributes {
    }

    SideMenuDirective.$inject = [];
    export function SideMenuDirective($window: ng.IWindowService): ISideMenuDirective {
        return {
            restrict: "EA",
            templateUrl: "app/shared/components/side-menu.html",
            scope: {
                navModules: "="
            },
            link: link
        }

        function link(scope: ISideMenuDirectiveScope, element: ng.IAugmentedJQuery, attrs: ISideMenuDirectiveAttributes) {
        }
    }

    angular.module("Numenera").directive("sideMenu", SideMenuDirective);
}