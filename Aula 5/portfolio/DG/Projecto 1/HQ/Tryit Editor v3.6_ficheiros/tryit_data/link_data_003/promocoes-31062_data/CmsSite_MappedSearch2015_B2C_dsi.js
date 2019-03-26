// global namespace
var CmsSite = CmsSite || {};
CmsSite.MappedSearch2015 = CmsSite.MappedSearch2015 || {};

//===========================================================================
$(CmsSite.MappedSearch2015).extend(CmsSite.MappedSearch2015, function () {
  var exposedJS = {};

  exposedJS.autoCompleteNormal = function (name, type) {
    $(name).autocomplete({
      source: function (request, response) {
        jQuery.ajax({
          url: window.location.href.substr(0, window.location.href.lastIndexOf('/')) + "/Ajax/CmsSiteMappedFreeSearchAjax.ashx?",
          dataType: "json",
          data: {
            term: request.term,
            gac: CmsSite.MappedSearch2015.geographicAreaCode,
            webSiteId: CmsSite.MappedSearch2015.webSiteId,
            type: type,
            culture: CmsSite.MappedSearch2015.culture,
            typology: "Package",
            ts: new Date().getTime(),
            cctga: CmsSite.MappedSearch2015.classifierCriteriaTypeCodeMapped.join(",")
          },
          success: function (data) {
            response(data);
          }
        });
      },
      minLength: 3,
      select: function (event, ui) {
        $(name).val(ui.item.value);
        $(name + "Hdn_dsi").val(CmsSite.Common2015.Helper.EscapeHtml(JSON.stringify(ui.item)));
        return false;
      },
      change: function (event, ui) {
        if (!ui.item && !CmsSite.MappedSearch2015.onLoadPackage) {
          $(name + "Hdn_dsi").val("");
        } else {
          CmsSite.MappedSearch2015.onLoadPackage = false;
        }
        return false;
      }
    })
      .data("ui-autocomplete")._renderItem = function (ul, item) {
      var search = $(name).val(), regex, aux;
      regex = new RegExp(search, 'gi');
      aux = item.label.replace(regex, "<span class='CmsSite_MappedSearch_Autocomplete_Green'>" + search + "</span>");

      return $("<li></li>")
        .data("ui-autocomplete-item", item)
        .append("<a class='CmsSite_MappedSearch_Autocomplete_Gray'><span class='" + item.imgUrl + "'></span>" + aux + "</a>")
        .appendTo(ul);
    };
  };

  return exposedJS;
}());

//=====================================================================================================================
$(document).ready(function () {
  // $("form.homeSearchForms").submit(function () {
  //   loading();
  // });

  //PACKAGE----------------------------------------------------------------------------------------------------------
  if ($("#CmsSite_MappedSearchResult_TxtPackageSearch").length) {
    CmsSite.MappedSearch2015.autoCompleteNormal("#CmsSite_MappedSearchResult_TxtPackageSearch", CmsSite.MappedSearch2015.packageCodes);
    /*$("#CmsSite_MappedSearchResult_TxtPackageSearch").change(function () {
      $("#CmsSite_MappedSearchResult_TxtPackageSearchHdn_dsi").val("");
      $("#CmsSite_MappedSearchResult_TxtPackageSearchAdvancedHdn_dsi").val("");
    });*/
  }


  //CIRCUIT----------------------------------------------------------------------------------------------------------
  if ($("#CmsSite_MappedSearchResult_TxtCircuitSearch").length) {
    CmsSite.MappedSearch2015.autoCompleteNormal("#CmsSite_MappedSearchResult_TxtCircuitSearch", CmsSite.MappedSearch2015.circuitCodes);
    $("#CmsSite_MappedSearchResult_TxtCircuitSearch").change(function () {
      $("#CmsSite_MappedSearchResult_TxtCircuitSearchHdn_dsi").val("");
      $("#CmsSite_MappedSearchResult_TxtCircuitSearchAdvancedHdn_dsi").val("");
    });
  }
});