/// <reference path="scripts/typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="scripts/typings/angularjs/angular.d.ts" />

module App {
    'use scripts';

    angular
        .module('Numenera')
        .config(config);

    config.$inject = [
        '$locationProvider',
        '$stateProvider',
        '$urlRouterProvider',
        '$mdIconProvider'
    ];

    function config($locationProvider: ng.ILocationProvider,
        $stateProvider: angular.ui.IStateProvider,
        $urlRouterProvider: angular.ui.IUrlRouterProvider,
        $mdIconProvider) {

        $mdIconProvider.defaultIconSet("img/mdi.svg");

        //html5 removes the need for # in URL
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $urlRouterProvider.otherwise('/');

        //angular-ui-router for multiple views
        $stateProvider
            .state('home', <ng.ui.IState>{
                url: '/',
                templateUrl: 'app/home/home.html'
            })
            .state('page', <ng.ui.IState>{
                url: '/page',
                templateUrl: 'app/app-page/page.html',
                controller: PageController,
                controllerAs: 'pagectrl'
            })
            .state('crea', <ng.ui.IState>{
                url: '/character_creation',
                template: '<ui-view></ui-view>',
                controller: Generator.CharacterCreationController,
                controllerAs: 'genCtrl'
            })
            .state('crea.init', <ng.ui.IState>{
                url: '/init',
                templateUrl: 'app/generator/character-creation-init.html',
            })
            .state('crea.fill', <ng.ui.IState>{
                url: '/fill',
                templateUrl: 'app/generator/character-creation-fill.html',
            });
    }
}



