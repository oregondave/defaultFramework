"use strict";var proto=angular.module("proto",["ngSanitize","ngResource","ngRoute"]).config(["$routeProvider",function(t,e){t.when("/home",{templateUrl:"partials/home/home.html",controller:"homeController"}),t.when("/fte",{templateUrl:"partials/fte/fte.html",controller:"fteController"}),t.when("/userAccount",{templateUrl:"partials/fte/userAccount.html",controller:"userAccountController"}),t.when("/customerPricingForm",{templateUrl:"partials/fte/customerPricingForm.html",controller:"userAccountController"}),t.when("/accountAdmin",{templateUrl:"partials/fte/accountAdmin.html",controller:"fteController"})}]);