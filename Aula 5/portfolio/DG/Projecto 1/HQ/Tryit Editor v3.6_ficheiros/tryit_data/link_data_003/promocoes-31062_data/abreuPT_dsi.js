AbreuPT.dsiCommon = {
  hotelFullInfo: function () {

    $("a.hotelFullInfo").unbind('click').click(function (e) {
      e.preventDefault();
      var anchorHref = $(this).attr('href');
      var stringFormType = $(this).parents('form').attr('data-type') || "";

      // If it's at HotelPart
      if($(this).attr('data-type'))
      {
        stringFormType = $(this).attr('data-type') || "";
      }

      if (stringFormType.indexOf("OptiGest") !== -1) {
        $.ajax({
          type: "POST",
          url: "../Ajax/OptiGest.Details.Ajax.ashx",
          data: {hotel: $(this).attr('data-hoteldata')},
          // dataType: "json",
          complete: function () {
            setTimeout(function () {
              alert('<iframe width="100%" height="' + (parseInt($(window).innerHeight() * 0.6666)) + '" src="' + anchorHref + '" frameborder="0" allowfullscreen></iframe>', 'Descrição Hotel', '', 'large',undefined,undefined,'hotelFullInfoWindow');
            }, 700)
          }
        });
      } else {
        alert('<iframe width="100%" height="' + (parseInt($(window).innerHeight() * 0.6666)) + '" src="' + anchorHref + '" frameborder="0" allowfullscreen></iframe>', 'Descrição Hotel', '', 'large',undefined,undefined,'hotelFullInfoWindow');
      }
    });
  }
};