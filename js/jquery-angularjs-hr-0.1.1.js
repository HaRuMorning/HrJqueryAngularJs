/*
	Version : 0.0.1
	Homepage : https://github.com/HaRuMorning/HrJqueryAngularJs
	Copyright : HrRuMorning@gmail.com
*/
(jQuery || $).fn.hrAngularJs = (function($){
	var options = {
		ngApp:null
		,ngAppName:"$$HrNgAppModule"
	}

	var getHrCount = function(){
		if(!$.$$HrCnt){
			$.$$HrCnt = 1;
		} else {
			$.$$HrCnt++;
		}
		return $.$$HrCnt;
	}

	var hrBeforeHook = function(o, w) {
		return function() {
			w.apply(this, arguments);
			return o.apply(this, arguments);
		}
	}

	var hrAfterHook = function(o, w) {
		return function() {
			var ret_val = o.apply(this, arguments);
			w.apply(this, arguments);
			return ret_val;
		}
	}

	var setHrJquerySetting = function($){
		$.fn.val = hrAfterHook($.fn.val, function(value) {
			if(angular && angular.element(this).controller('ngModel')){
				angular.element(this).controller('ngModel').$setViewValue(value);
			}
		});
	}

	var setHrDirectiveSetting = function(ngModual){
		
		ngModual.directive('hrJqDatepicker', function () {
			return {
				restrict: 'A',
				require : '^?ngModel',
				transclude: true,
				replace: true,
				link: function (scope, element, attrs, ngModelCtrl) {				
					var options = null;
					var defaultDateFormat = "yy-mm-dd";

					try{	options = eval("("+attrs.hrJqDatepicker+")");	}
					catch(e){	options = {dateFormat:attrs.hrJqDatepicker};	}

					if(!options.dateFormat) options.dateFormat = defaultDateFormat;

					$(element).datepicker(options);
				}
			};
		});

	}

	var hrModule = function(ngOptions){

		var ngOptions = ngOptions || {};

		ngOptions.ngApp 		= $(this).get(0);

		if(!ngOptions.ngApp.controller && !ngOptions.ngApp.directive && !ngOptions.ngApp.config && !ngOptions.ngApp.run){
			ngOptions.ngAppName 	= ngOptions.ngAppName || options.ngAppName+"_"+getHrCount();
			ngOptions.ngApp = angular.module(ngOptions.ngAppName, []);
			setHrDirectiveSetting(ngOptions.ngApp);
			angular.bootstrap(this, [ngOptions.ngAppName]);
		} else {
			setHrDirectiveSetting(ngOptions.ngApp);
		}

		setHrJquerySetting($);
	}


	return hrModule;
})((jQuery || $));