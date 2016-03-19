
module App {
    "use strict";

    export interface DbModules {
        modules: Array<Shared.NavModule>;
    }

    export interface ICoreService {
        getModules: () => ng.IPromise<DbModules>;
    }
    
    export class CoreService implements ICoreService {

        static $inject: string[] = ["$q", "$http"];
        constructor(private $q: ng.IQService, private $http: ng.IHttpService) {
        }

        getModules(): ng.IPromise<DbModules> {
            var deferredData = this.$q.defer();
            return this.$http.get("http://localhost:36659/db/modules.json").success(function (data: DbModules) {
                deferredData.resolve(data);
            }).error(function (err) {
                deferredData.reject(err);
            });
        }
    }

    angular.module("Numenera").service("coreService", CoreService);
}