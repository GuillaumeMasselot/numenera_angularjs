
module App.Generator {
    "use strict";

    export interface DbHeroesData {
        nouns: Array<Shared.Noun>;
        adjectives: Array<Shared.Adjective>;
        verbs: Array<Shared.Verb>;
    }

    export interface IGeneratorService {
        getHeroesData: () => ng.IPromise<DbHeroesData>;
    }
    
    export class GeneratorService implements IGeneratorService {

        static $inject: string[] = ["$q", "$http"];
        constructor(private $q: ng.IQService, private $http: ng.IHttpService) {
        }

        getHeroesData(): ng.IPromise<DbHeroesData> {
            var deferredData = this.$q.defer();
            return this.$http.get("http://localhost:36659/db/heroes.json").success(function (data: DbHeroesData) {
                deferredData.resolve(data);
            }).error(function (err) {
                deferredData.reject(err);
            });
        }
    }

    angular.module("Numenera").service("generatorService", GeneratorService);
}