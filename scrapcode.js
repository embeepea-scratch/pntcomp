//        function dolevel(jsonfile, classname, style, e) {
//            var g = svg.append("g")
//                    .attr("class", classname);
//            var legenditemrect = undefined;
//            if (e) {
//                legenditemrect = d3.select('.legenditem.level'+e.level+' rect').attr({
//                    'width' : 50,
//                    'height' : 20
//                });
//            }
//            d3.json(jsonfile, function(json) {
//                var t =
//    				    g.selectAll("path")
//    				    .data(json.features)
//    				    .enter()
//    				    .append("path")
//    				    .attr("d", path)
//                        .style(style)
//                ;
//                if (e) {
//                    t.on("mouseover", function () {
//                            t.style("fill", "url(#diagonalHatch"+e.level+")");
//                            legenditemrect.style("fill", "url(#diagonalHatch"+e.level+")");
//                    }).on("mouseout", function () {
//                        t.style("fill", e.color);
//                        legenditemrect.style("fill", e.color);
//                    });
//                    legenditemrect.on("mouseover", function () {
//                        t.style("fill", "url(#diagonalHatch"+e.level+")");
//                        legenditemrect.style("fill", "url(#diagonalHatch"+e.level+")");
//                    }).on("mouseout", function () {
//                        t.style("fill", e.color);
//                        legenditemrect.style("fill", e.color);
//                    });
//                }
//    		});
//        }
//
//
//        dolevel("tavg-1981-2010--1901-1960-00.json", "level",
//                { "fill" : "#2066ab", "stroke" : "black" }, 
//                { "color" : "#2066ab", "hcolor" : "#000000" /*"#1375d4"*/, "legend": "< -1.5", "level" : "00" });
//        dolevel("tavg-1981-2010--1901-1960-01.json", "level",
//                { "fill" : "#3c93c4", "stroke" : "black" }, 
//                { "color" : "#3c93c4", "hcolor" : "#000000" /*"#229ce1"*/, "legend": "-1.5 to -1.0", "level" : "01" });
//        dolevel("tavg-1981-2010--1901-1960-02.json", "level",
//                { "fill" : "#91c4e1", "stroke" : "black" }, 
//                { "color" : "#91c4e1", "hcolor" : "#000000" /*"#4db5f0"*/, "legend": "-1.0 to -0.5", "level" : "02" });
//        dolevel("tavg-1981-2010--1901-1960-03.json", "level",
//                { "fill" : "#d3e5f3", "stroke" : "black" }, 
//                { "color" : "#d3e5f3", "hcolor" : "#000000" /*"#6cbbf9"*/, "legend": "-0.5 to 0.0", "level" : "03" });
//        dolevel("tavg-1981-2010--1901-1960-04.json", "level",
//                { "fill" : "#fbdbc6", "stroke" : "black" }, 
//                { "color" : "#fbdbc6", "hcolor" : "#000000" /*"#fda063"*/, "legend": "0.0 to 0.5", "level" : "04" });
//        dolevel("tavg-1981-2010--1901-1960-05.json", "level",
//                { "fill" : "#f4a580", "stroke" : "black" }, 
//                { "color" : "#f4a580", "hcolor" : "#000000" /*"#f97c41"*/, "legend": "0.5 to 1.0", "level" : "05" });
//        dolevel("tavg-1981-2010--1901-1960-06.json", "level",
//                { "fill" : "#da6048", "stroke" : "black" }, 
//                { "color" : "#da6048", "hcolor" : "#000000" /*"#ec4727"*/, "legend": "1.0 to 1.5", "level" : "06" });
//        dolevel("tavg-1981-2010--1901-1960-07.json", "level",
//                { "fill" : "#b11e2a", "stroke" : "black" }, 
//                { "color" : "#b11e2a", "hcolor" : "#000000" /*"#d81222"*/, "legend": "> 1.5", "level" : "07" });
//
//        dolevel("us-states.json", "us-states", { "fill" : "none", "stroke" : "black" });
