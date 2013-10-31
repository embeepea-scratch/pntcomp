(function($,d3) {

    $(document).ready(function() {

        var width = 1400;
        var height = 650;


        var colors_by_level = {
            "00" : "#2066ab",
            "01" : "#3c93c4",
            "02" : "#91c4e1",
            "03" : "#d3e5f3",
            "04" : "#fbdbc6",
            "05" : "#f4a580",
            "06" : "#da6048",
            "07" : "#b11e2a"
        };

        $('#yearlabel').text("2010");

        var svg = d3.select("svg")
                .attr("width", width)
                .attr("height",height);

		//Define map projection
		var projection = d3.geo.albersUsa()
				.translate([width/2, height/2])
				.scale([width]);

		//Define path generator
		var path = d3.geo.path()
				.projection(projection);

        function dolevel(g, json, e) {
            var legenditemrect = undefined;
            if (e) {
                legenditemrect = d3.select('.legenditem.level'+e.level+' rect').attr({
                    'width' : 50,
                    'height' : 20
                });
            }
            var t = g.selectAll("path")
    				 .data(json.features)
    				 .enter()
    				 .append("path")
    				 .attr("d", path)
                     .style({"fill":e.color,"stroke":"black"});
            ;
            if (e) {
                t.on("mouseover", function () {
                    t.style("fill", "url(#diagonalHatch"+e.level+")");
                    legenditemrect.style("fill", "url(#diagonalHatch"+e.level+")");
                }).on("mouseout", function () {
                    t.style("fill", e.color);
                    legenditemrect.style("fill", e.color);
                });
                legenditemrect.on("mouseover", function () {
                    t.style("fill", "url(#diagonalHatch"+e.level+")");
                    legenditemrect.style("fill", "url(#diagonalHatch"+e.level+")");
                }).on("mouseout", function () {
                    t.style("fill", e.color);
                    legenditemrect.style("fill", e.color);
                });
            }
        }

        d3.json("30year-running-avg--1901-1930/2010.contours.json", function(json) {
            var i,
                level,
                featureCollection;
            for (i=0; i<json.length; ++i) {
                level = json[i].level;
                featureCollection = json[i].featureCollection;
                dolevel(svg.append("g").attr("class", "level"),
                        featureCollection,
                        { "color" : colors_by_level[level], "level" : level });
            }

            d3.json("us-states.json", function(json) {
                svg.append("g")
                    .attr("class", "level")
                    .selectAll("path")
    				.data(json.features)
    				.enter()
    				.append("path")
    				.attr("d", path)
                    .style({"fill":"none","stroke":"black"});
            });

        });



    });

}(jQuery,d3));
