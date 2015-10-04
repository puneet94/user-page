(function(){
    $(document).ready(function(){
        $('.toggle_button').on('click',function(){
            $('.sideMenu').height($(document).height());
        	$('.sideMenu').animate({'right':'0%'},function(){
        		$('.sideMenuHideArea').css('background','rgba(0,0,0,0.7)');		
        	});
        	$('.sideMenu').data('shown','1');
        });
        $('.sideMenuHideArea').on('click',function(){
        	$('.sideMenuHideArea').css('background','transparent');	
        	$('.sideMenu').animate({'right':'100%'});
        	$('.sideMenu').data('shown','0');
        });
        $(".searchSectionIconButton").click(function(){
    		$(".fullSearch").show();
            $(window).scrollTop(0);
            console.log($(".fullSearch").scrollTop());
            $(".fullSearch").height($(document).height());
		});
		$('body').on('click','.searchSectionCloseButton',function(){
			$(".fullSearch").hide();
		});
        $(".categoriesLink").click(function(){
            $(".inputPopUp").show();
            $(window).scrollTop(0);
            console.log($(".inputPopUp").scrollTop());
        });
        $(".locationsLink").click(function(){
            $(".locationPopUp").show();
            $(window).scrollTop(0);
            console.log($(".locationPopUp").scrollTop());
        });
        $(".inputPopUpClose").click(function(){
            $(".inputPopUp").hide();
        });
        $(".locationPopUpClose").click(function(){
            $(".locationPopUp").hide();
        });
        $(".searchSectionLocationInput, .searchSectionStoreInput").blur(function(){
            $(window).scrollTop(0);
        });
        $(".searchSectionLocationInput, .searchSectionStoreInput").keyup(function(event){
            if(event.keyCode == 13){
                $(window).scrollTop(0);
            }
        });
    });
})();