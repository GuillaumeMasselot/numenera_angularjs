module App {
    "use strict";

    export interface IPageController {
        title: string;
        someArray: Array<number>;
        activate: () => void;
        fiboNext: () => void;
    }

    export class PageController implements IPageController {
        title: string = "Page";
        someArray: Array<number>;

        static $inject: string[] = ["pageService"];
        constructor(private pageService: IPageService) {
            this.activate();
        }

        activate(): void {
            this.someArray = this.pageService.getData();
        }

        fiboNext(): void {
            var currentLength = this.someArray.length;

            if (currentLength == 0 || currentLength == 1) {
                this.someArray.push(1);
            }
            else {
                var last: number = this.someArray[this.someArray.length - 1];
                var preLast: number = this.someArray[this.someArray.length - 2];

                this.someArray.push(last + preLast);
            }
        }
    }

    angular.module("Numenera").controller("pageController", PageController);
}