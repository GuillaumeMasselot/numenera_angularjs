module App.Shared {
    "use strict";

    export interface ISideMenuDirective extends ng.IDirective {
    }

    export interface ISideMenuDirectiveScope extends ng.IScope {
        navModules: Array<Shared.NavModule>;
        isSelected: (mod: Shared.NavModule) => boolean;
        selectedModule: Shared.NavModule;
        select: (mod: Shared.NavModule) => void;
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

            scope.$watch("navModules", (newvalue: Array<Shared.NavModule>, oldvalue: Array<Shared.NavModule>) => {
                if(newvalue.length > 0) scope.selectedModule = newvalue[0];
            });

            scope.isSelected = function (mod: Shared.NavModule): boolean {
                if (mod === scope.selectedModule) {
                    return true;
                }
                else return false;
            };

            scope.select = function (mod: Shared.NavModule): void {
                scope.selectedModule = mod;
            }
        }
    }

    angular.module("Numenera").directive("sideMenu", SideMenuDirective);
}