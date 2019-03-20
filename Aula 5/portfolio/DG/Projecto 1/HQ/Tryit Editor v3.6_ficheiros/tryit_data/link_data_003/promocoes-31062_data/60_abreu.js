$(function(){
  abreu_pageLoad();
});


function abreu_pageLoad() {
  abreu_mainMenu();
  abreu_countdown();  
  abreu_popOver();   
  abreu_focuspoint();
  abreu_mason();
  abreu_addingBreakWord();
}


function abreu_addingBreakWord(){
  var $elem = $('.FootIcons .iconBox > a > p');
  
  $elem.html(function (i, html) {
    return html.replace(/(\w+\s)/, '$1<br/>')
  });
}


function abreu_cycle(cyclezone) {
  $('.'+ cyclezone +'').cycle({
    fx: 'fade',
    pause: 1,
    speed: 750,
    timeout: 5500
    });
}


function abreu_homepage(){
  renderTabs("21, 140, 186, 0.9","21, 140, 186, 0.2");
  
  $("form.homeSearchForms").unbind('submit').on('submit', function () {
    var $objRequired = $(this).find("input:required, select:required");
    var bol_return = true;

    loading();

    $(this).find('fieldset').removeClass("fieldError");

    $.each($objRequired, function () {
      if ($(this).val().trim() == "") {
        $(this).parents('fieldset').addClass('fieldError');
        bol_return = false;
      }
    });

    if(!bol_return){
      loading();
    }

    return bol_return;
  });
}

function abreu_mainMenu() {
  $('li.dropdown > a.dropdown-toggle').on("click", function(e) {
    var $element = $(this).parent();
    if ($element.hasClass("open")) {
      $element.removeClass("open");
      $element.find("li.open").removeClass("open");
    }
    else {
      $element.addClass("open");
    }
    e.stopPropagation();
    e.preventDefault();
  });
}


function abreu_runCollapse(){
  $("#myTab > li:first-child a").click();  
  
  $('.accordion').find('.accordion-toggle').click(function () {
    $(this).next().slideToggle('600');
    $(".accordion-content").not($(this).next()).slideUp('600');
  });  
  
  $('.accordion-toggle').on('click', function () {
      $(this).toggleClass('active').siblings().removeClass('active');
  });
  
  $('#myTab').tabCollapse();
}


function abreu_tabs(opacity, hexColor) {
  	var patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;
	var matches = patt.exec(hexColor);
	var rgba = parseInt(matches[1], 16)+","+parseInt(matches[2], 16)+","+parseInt(matches[3], 16)+ "," + (opacity/100);
  
  renderTabs(rgba, rgba);
}


function renderTabs(startLinear, endLinear) {
  $("div.tab-pane:not(:eq(0))").addClass("fade");
  $('#searchActionMenu').find('li > a').click(function () {
    var $this = $(this),
        thisBackground = $this.data("background"),
        thisMessage = $this.data("message");
        
    if ($.trim(thisBackground) != "")
      $this.parents("#mainSearch").css('background', 'linear-gradient(rgba(' + startLinear + '),rgba(' + endLinear + ')),url(' + thisBackground + ')');
    
    if ($.trim(thisMessage) != "")
      $this.parents("#searchArea").find('> h2').html(thisMessage);
    
  });
  
  $('#searchActionMenu').find('li:first-child a').click();
  
  buildDateTimePicker('dateFrom', 'dateArrival', 'DD/MM/YYYY');
  buildDateTimePicker('pickupDate', 'deliveryDate');
  buildDateTimePicker('dtSrch', undefined, 'DD/MM/YYYY');
  
  $('.homeSearchForms label.select:after').on('touchstart', function(e){
    e.preventDefault();
  });
  
}


function onLoadNewsList(str_openItemID){
  $('.accordion').find('.accordion-toggle').click(function () {
    $(this).next().slideToggle('600');
    $(".accordion-content").not($(this).next()).slideUp('600');
  });
  
  $('.accordion-toggle').on('click', function () {
      $(this).toggleClass('active').siblings().removeClass('active');
  });
  
  if($.trim(str_openItemID) == "")
  {
    $("#myTab > li:first-child a").click();
  }else{
    $("#myTab > li.active a").click();
    $("h2.accordion-toggle[data-itemID='"+str_openItemID+"']").click();
  }
  
  $('#myTab').tabCollapse();  
}


function abreu_countdown() {	
    $(".countdown").countdown({
      date: $(this).attr("data-date"),
      render: function(data) {
            $(this.el).html("<span class='icon-cronometro'></span><b>" + this.leadingZeros(data.days, 2) + "</b>d <b>" + this.leadingZeros(data.hours, 2) + "</b>h <b>" + this.leadingZeros(data.min, 2) + "</b>m <b>" + this.leadingZeros(data.sec, 2) + "</b>s");
          }
    });
}

function abreu_focuspoint() {
	$('.focuspoint').focusPoint();
}

function onLoadListOthers(){
  if (window.outerWidth>767){
    normalizeListItemHeight($(".brcOutros h3"), 3, function () {
      normalizeListItemHeight($(".brcOutros h2"), 3, function () {
        normalizeListItemHeight($(".brcOutros .paragraphText"), 3)
      });
    });
  }
}

function abreu_mason() {
	// Takes the gutter width from the bottom margin of .post

	var $grid = $('#grid'),
		$container = $grid.find('#posts'),
		$items = $container.children('div.post'),
		gutter = parseInt($items.css('marginBottom'));
	    



	// Creates an instance of Masonry on #posts

	$container.masonry({
		gutter: 30,
		itemSelector: '.post',
		columnWidth: '.post'
	});
	
	
	
	// This code fires every time a user resizes the screen and only affects .post elements
	// whose parent class isn't .container. Triggers resize first so nothing looks weird.
	
	$(window).bind('resize', function () {
		if (!$grid.hasClass('container')) {
						
			
			// Get calculated width 1 single time
			containerWidth = $items.width();
			containerInnerWidth = $container.innerWidth();
			
			
			// Resets all widths to 'auto' to sterilize calculations
			
			post_width = containerWidth + gutter;
			$container.css('width', 'auto');
			$grid.css('width', 'auto');
			
			
			// Calculates how many .post elements will actually fit per row. Could this code be cleaner?
			
			posts_per_row = containerInnerWidth / post_width;
			floor_posts_width = (Math.floor(posts_per_row) * post_width) - gutter;
			ceil_posts_width = (Math.ceil(posts_per_row) * post_width) - gutter;
			posts_width = (ceil_posts_width > containerInnerWidth) ? floor_posts_width : ceil_posts_width;
			if (posts_width == containerWidth) {
				posts_width = '100%';
			}
			
			
			// Ensures that all top-level elements have equal width and stay centered
			
			$container.css('width', posts_width);
			$grid.css({'width': posts_width,'margin': '0 auto'});
        
		}
	}).trigger('resize');
	
}

function onLoadRenting(){
  if ($(window).width()>767){
      normalizeListItemHeight($(".servicesRent li"), 3);
  }
}

function abreu_bxSlider(breaks,auto,pause,loop,controls,pager,element,pagerCustom) {
  var arr_breaks = breaks,
    bol_auto = true,
    bol_loop = false,
    bol_controls = true,
    bol_pager = false,
    int_pause = 3000,
    str_element = '.bxslider',
    str_pagerCustom = null;

  if(typeof(breaks) == "undefined"){arr_breaks = [{screen: 0, slides: 1},{screen: 768, slides: 3}];}
  if(typeof(auto) !== "undefined"){bol_auto = auto;}
  if(typeof(controls) != "undefined"){bol_controls = controls;}
  if(typeof(loop) !== "undefined"){bol_loop = loop;}
  if(typeof(pager) !== "undefined"){bol_pager = pager;}
  if(typeof(pause) !== "undefined"){int_pause = pause;}
  if(typeof(element) !== "undefined"){str_element = element;}
  if(typeof(pagerCustom) !== "undefined"){str_pagerCustom = pagerCustom;}

  $(str_element).bxSlider({
    autoReload: true,
    auto:bol_auto,
    infiniteLoop:bol_loop,
    minSlides: 1,
    moveSlides: 1,
    slideMargin: 0,
    controls: bol_controls,
    pager: bol_pager,
    nextText: "",
    prevText: "",
    pause:int_pause,
    breaks: arr_breaks,
    pagerCustom: str_pagerCustom
  });
}

function abreu_popOver(){
		$('a[rel=popover]').popover({
			html: 'true',
		placement: 'bottom'
		})
}

function onLoadContactos(){
	ajaxMenuLateral();
}

/*
function onLoadDSIRecruitment(){
 
}
*/

function ajaxMenuLateral(){
  var isMobile = false;
    
  if ($(window).width() < 768 || ($(window).width() >= 768 &&  $(window).width() <= 991))
  {
    isMobile = true;
  }
 
	$(".zonas > ul > li > a").click(function(e){
      e.preventDefault();
      
      var element = $(this),
          idPagina = element.attr('href').split("=")[1];
      
      $("#accLojasContainer").addClass("loading");
      
      if(!isMobile)
      {
        deleteAllSActiveStates();
        
        for(var i = 0, j = regions.length; i < j; i++){
          if(regions[i].data('pageID') == parseInt(idPagina))
          {           
            
            regions[i].node.style.fill = '#54667a';
            regions[i].node.style.opacity = '1';
            regions[i].node.state = 1;
          }
        }        
        
        $("#region-name").text(element.text());
      }
      
      $.ajax({
        url:element.attr('href'),
         dataType:'html',
         success:function(data){
           if(!isMobile){
             $("#accLojasContainer").html('<div class="panel-group" id="accordion">'+$(data).find("#accordion").html()+'</div>');
           }             
           else{
             if(!$(element).parent().find('.panel-group').length)
             	$(element).parent().append('<div class="panel-group" id="accordion">'+$(data).find("#accordion").html()+'</div>');
           }            
           
           $("#accLojasContainer").removeClass("loading");
           
           getZonasAccordion();
         }
        });      
    });
  
  function getZonasAccordion()
  {
    $("#accordion .panel-title > a").on('click',function(e){
      e.preventDefault();
      var element = $(this),
          elementoPai = element.parents('.panel-default'),
          elementParent = element.parent();
      
      elementParent.addClass("loading");
      
      $.ajax({
			url:element.attr('data-attribute'),
			dataType:'html',
			success:function(data){
              if(!elementoPai.find('.accordion-group').length){
                var elementAAA = $(data).find(".panel-collapse.collapse").parent();                
                elementoPai.find('> .panel-heading').hide()
                elementoPai.append(elementAAA.html());                
                elementoPai.find(".panel-title:first-of-type a").click();
                elementParent.removeClass("loading");
              }	
			}
		});
    });
  }
  
}

function buildDateTimePicker(picker1, picker2, format) {
  var str_format = false,
    arrivalPicker = false;

  if (typeof format !== "undefined") {
    str_format = format;
  }
  if (typeof picker2 !== "undefined") {
    arrivalPicker = true;
  }

  var input = $('input[name="' + picker1 + '"]');

  $(input).on('keydown paste', function(e){
    e.preventDefault();
  });

  input.each(function () {
    var $this = $(this);

    $this.datetimepicker({
      minDate: moment().add(2, 'days'),
      format: str_format,
      locale: 'pt',
      stepping: 15,
      sideBySide: true,
      // ignoreReadonly: true,
      useCurrent:false
    });

    if (arrivalPicker) {
      var arrivalDate = $this.parents('form').find('input[name="' + picker2 + '"]').datetimepicker({
        locale: 'pt',
        format: str_format,
        stepping: 15,
        // ignoreReadonly: true,
        sideBySide: true
      });

      $this.on("dp.change", function (e) {
        arrivalDate.data("DateTimePicker").minDate(e.date.add(1, 'days'));
      });
    }
  });
}