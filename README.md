# HrJqueryAngularJs
Jquery + AngularJs ( Directive )


##Directive Manual

###hrJqDatepicker
ex1 ) <input type="text" hr-jq-datepicker="yy-mm-dd" ng-model="modeltest" />
ex2 ) <input type="text" hr-jq-datepicker ng-model="modeltest" />
ex3 ) <input type="text" hr-jq-datepicker="yy-mm-dd" />

ex4 ) <input type="text" hr-jq-datepicker="{
			dateFormat:'yy/mm/dd',
			onSelect:function(date){ 
				alert(date); 
			}
		}" />


###Auto Jquery Sync
�ش� JS���� �� ����� ������ ��ũ �ڵ����� --> $("#sample").val("sample");


