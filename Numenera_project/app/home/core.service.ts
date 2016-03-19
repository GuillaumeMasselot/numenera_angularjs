
module App {
    "use strict";

    export interface MyDatabase {
        modules: Array<Shared.NavModule>;
    }

    export interface ICoreService {
        getModules: () => ng.IPromise<MyDatabase>;
    }
    
    export class CoreService implements ICoreService {

        static $inject: string[] = ["$q", "$http"];
        constructor(private $q: ng.IQService, private $http: ng.IHttpService) {
        }

        getModules(): ng.IPromise<MyDatabase> {
            var deferredData = this.$q.defer();
            return this.$http.get("http://localhost:36659/db/db.json").success(function (data: MyDatabase) {
                deferredData.resolve(data);
            }).error(function (err) {
                deferredData.reject(err);
            });
        }
    }

    angular.module("Numenera").service("coreService", CoreService);
}