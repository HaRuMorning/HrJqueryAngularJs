$.fn.hrAngularJs = (function($){
	var options = {
		ngApp:null
		,ngAppName:"NgAppModule"
	}

	var hrModule = function(ngOptions){

		
		var ngOptions = ngOptions || {};
		
		options.ngApp 		= this;
		options.ngAppName 	= ngOptions.ngAppName || $(options.ngApp).attr("ng-app") || options.ngAppName;

		if(!$(options.ngApp).attr("ng-app")){
			$(options.ngApp).attr("ng-app",options.ngAppName);
		}
		
		(function(){
			
			angular.module(options.ngAppName, [])
			
			.directive('hrJqDatepicker', function () {
			    return {
			        restrict: 'A',
			        link: function (scope, element, attrs, ngModelCtrl) {
				        
				        var dateFormat = attrs.hrJqDatepicker || "yy-mm-dd";
				        
			            $(element).datepicker({
				            dateFormat:dateFormat
					        ,onSelect:function(date){
						        if(ngModelCtrl){
						        	ngModelCtrl.$setViewValue(date);
						        	ngModelCtrl.$render();
						        }
					        }
					    });
			        }
			    };
			});
			
		})();


		
	}

	return hrModule;
})($);
