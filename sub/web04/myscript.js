$(document).ready(function()
{
	
	$("#Match").on({
		 'click': function(){

			$("#imgslider").hide();
			$("#jumbotron").hide();
			$("#matchfeature").hide();
			$("#mvpheader").hide();
			$("#mvp").hide();
			$("#VND").hide();
			$("#matchheader").show();
			$("#matchinfo").show();
			$("#Squadheader").hide();
			$("#playerRow1").hide();
			$("#playerRow2").hide();
			$("#playerRow3").hide();
			$("#playerRow4").hide();
			$("#playerRow5").hide();
			$("#game").hide();
			$("#Squad,#Home,#Play").removeClass("active");
			$(this).addClass("active");  
 		}
	});
	
	$("#Squad").on({
		 'click': function(){

			$("#imgslider").hide();
			$("#jumbotron").hide();
			$("#matchfeature").hide();
			$("#mvpheader").hide();
			$("#mvp").hide();
			$("#VND").hide();
			$("#matchheader").hide();
			$("#matchinfo").hide();
			$("#Squadheader").show();
			$("#playerRow1").show();
			$("#playerRow2").show();
			$("#playerRow3").show();
			$("#playerRow4").show();
			$("#playerRow5").show();
			$("#game").hide();
			$("#Match,#Home,#Play").removeClass("active");
			$(this).addClass("active");  
			
 		}
	});
	
	$("#Home , #logo").on({
		 'click': function(){

			$("#imgslider").show();
			$("#jumbotron").show();
			$("#matchfeature").show();
			$("#mvpheader").show();
			$("#mvp").show();
			$("#VND").show();
			$("#matchheader").hide();
			$("#matchinfo").hide();
			$("#Squadheader").hide();
			$("#playerRow1").hide();
			$("#playerRow2").hide();
			$("#playerRow3").hide();
			$("#playerRow4").hide();
			$("#playerRow5").hide();
			$("#game").hide();
			$("#Match,#Squad,#Play").removeClass("active");
			$("#Home").addClass("active");  
			
 		}
	});
	
	
	
	

});