# HrJqueryAngularJs
Jquery + AngularJs ( Directive )


##Directive Manual

###hrJqDatepicker
ex1 ) &lt;input type="text" hr-jq-datepicker="yy-mm-dd" ng-model="modeltest" /&gt;<br />
ex2 ) &lt;input type="text" hr-jq-datepicker ng-model="modeltest" /&gt;<br />
ex3 ) &lt;input type="text" hr-jq-datepicker="yy-mm-dd" /&gt;<br />

ex4 ) &lt;input type="text" hr-jq-datepicker="{
			dateFormat:'yy/mm/dd',
			onSelect:function(date){ 
				alert(date); 
			}
		}" /&gt;<br />


###Auto Jquery Sync
해당 JS적용 후 실행시 데이터 싱크 자동맞춤 --&gt; $("#sample").val("sample");


