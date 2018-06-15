(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['flashCard'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<article class=\"flash\">\r\n  <div class=\"flash-content\">\r\n    <p class=\"flash-text\">\r\n      "
    + container.escapeExpression(((helper = (helper = helpers.front || (depth0 != null ? depth0.front : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"front","hash":{},"data":data}) : helper)))
    + "\r\n    </p>\r\n  </div>\r\n</article>";
},"useData":true});
})();