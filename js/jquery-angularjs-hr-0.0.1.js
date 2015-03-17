$.fn.hrAngularJs = (function($){
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

	var setHrDirectiveSetting = function(ngModual){
		
		ngModual.directive('hrJqDatepicker', function () {
			return {
				restrict: 'A',
				require : '^?ngModel',
				transclude: true,
				replace: true,
				link: function (scope, element, attrs, ngModelCtrl) {
					
					var options = null;
					var onSelect = null;

					var settingModel = function(date,ngModelCtrl){
						if(ngModelCtrl){
							ngModelCtrl.$setViewValue(date);
							ngModelCtrl.$render();
						}
					}

					try{
						options = eval("("+attrs.hrJqDatepicker+")");
						if(options.onSelect) { onSelect = options.onSelect;};
						if(onSelect){
							options.onSelect = function(date){
								onSelect(date);
								settingModel(date,ngModelCtrl);
							}
						} else {
							options.onSelect = function(date){
								settingModel(date,ngModelCtrl);
							}
						}
					}
					catch(e){
						options = {
							dateFormat:attrs.hrJqDatepicker
							,onSelect:function(date){
								settingModel(date,ngModelCtrl);
							}
						};
					}

					if(!options.dateFormat) options.dateFormat = "yy-mm-dd";
					
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

		$.valHooks.input = {
			set: function( elem, value ) {
				if(angular.element(elem).controller('ngModel')){
					angular.element(elem).controller('ngModel').$setViewValue(value);
				}
			}
		};

		$.valHooks.textarea = {
			set: function( elem, value ) {
				if(angular.element(elem).controller('ngModel')){
					angular.element(elem).controller('ngModel').$setViewValue(value);
				}
			}
		};

		
	}
/*
	hrModule.val = function(val){
		alert(this);
		var ret_val;
		ret_val = $(this).val(val);
		$(this).trigger('input');
		return ret_val;
	}
*/
	return hrModule;
})($);