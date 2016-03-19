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
            .state('views', <ng.ui.IState>{
                url: '/views',
                views: {

                    // the main template will be placed here (relatively named)
                    '': { templateUrl: 'app/app-other-page/page-with-views.html' },

                    // the child views will be defined here (absolutely named)
                    'columnOne@views': { template: 'Look I am a column!' },

                    // for column two, we'll define a separate controller 
                    'columnTwo@views': {
                        templateUrl: 'app/app-other-page/column-two.html',
                        controller: ColumnTwoController,
                        controllerAs: 'coltwoctrl'
                    }
                }
            });
            //more states here.
    }
}



