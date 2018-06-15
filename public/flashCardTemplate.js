(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['flashCard'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<article class=\"flash\"><div class=\"flash-content\"><p class=\"flash-text\">"
    + container.escapeExpression(((helper = (helper = helpers.front || (depth0 != null ? depth0.front : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"front","hash":{},"data":data}) : helper)))
    + "</p></div></article>";
},"useData":true});
})();