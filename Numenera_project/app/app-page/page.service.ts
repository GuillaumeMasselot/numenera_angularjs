
module App {
    "use strict";

    export interface IPageService {
        getData: () => Array<number>;
    }

    export class PageService implements IPageService {

        static $inject: string[] = ["$http"];
        constructor(private $http: ng.IHttpService) {
        }

        getData(): Array<number> {
            return [1, 2, 3, 5, 8, 13, 21];
        }
    }

    angular.module("Numenera").service("pageService", PageService);
}