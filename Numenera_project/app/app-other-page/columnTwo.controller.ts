
module App {
    "use strict";

    export interface IColumnTwoController {
        title: string;
        activate: () => void;
    }

    export class ColumnTwoController implements IColumnTwoController {
        title: string = "ColumnTwoController";

        constructor() {
            this.activate();
        }

        activate() {

        }
    }

    angular.module("BlankApp").controller("ColumnTwoController", ColumnTwoController);
}