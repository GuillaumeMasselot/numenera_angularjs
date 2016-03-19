module App {
    "use strict";

    export interface IHomeController {
        title: string;
        modules: Array<Shared.NavModule>;
        activate: () => void;
    }

    export class HomeController implements IHomeController {
        title: string = "Home";
        modules= new Array<Shared.NavModule>();

        static $inject: string[] = ["coreService"];
        constructor(private coreService: ICoreService) {
            this.activate();
        }

        activate(): void {
            var vm = this;
            this.coreService.getModules().then(function (dbPromise: any) {
                vm.modules = dbPromise.data.modules;
            });
        }
    }

    angular.module("Numenera").controller("HomeController", HomeController);
}