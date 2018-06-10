(function(){
    module.exports = function(weekNormal,weekHeight,weekLow,monthNormal,monthHeight,monthLow){
        //周
        var weekNormaldataset = [];
        var weekHeightdataset = [];
        var weekLowdataset = [];
        weekNormaldataset[0] = weekNormal;
        weekNormaldataset[1] = 100 - weekNormaldataset[0];
        weekHeightdataset[0] = weekHeight;
        weekHeightdataset[1] = 100 - weekHeightdataset[0];
        weekLowdataset[0] = weekLow;
        weekLowdataset[1] = 100 - weekLowdataset[0];
        //月
        var monthNormaldataset = [];
        var monthHeightdataset = [];
        var monthLowdataset = [];
        monthNormaldataset[0] = monthNormal;
        monthNormaldataset[1] = 100 - monthNormaldataset[0];
        monthHeightdataset[0] = monthHeight;
        monthHeightdataset[1] = 100 - monthHeightdataset[0];
        monthLowdataset[0] = monthLow;
        monthLowdataset[1] = 100 - monthLowdataset[0];

        var width = 100;
        var height = 100;

        //周
        var svg = d3.select(".oneWeekNormal") 
            .append("svg")
            .attr("width", width)
            .attr("height", height);
        var svg1 = d3.select(".oneWeekHeight") 
            .append("svg")
            .attr("width", width)
            .attr("height", height);
        var svg2 = d3.select(".oneWeekLow") 
            .append("svg")
            .attr("width", width)
            .attr("height", height);
        //月
        var svg3 = d3.select(".oneMonthNormal") 
            .append("svg")
            .attr("width", width)
            .attr("height", height);
        var svg4 = d3.select(".oneMonthHeight") 
            .append("svg")
            .attr("width", width)
            .attr("height", height);
        var svg5 = d3.select(".oneMonthLow") 
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        var pie = d3.layout.pie();

        //周
        var weekNormalpiedata = pie(weekNormaldataset);
        var weekHeightpiedata = pie(weekHeightdataset);
        var weekLowpiedata = pie(weekLowdataset);
        //月
        var monthNormalpiedata = pie(monthNormaldataset);
        var monthHeightpiedata = pie(monthHeightdataset);
        var monthLowpiedata = pie(monthLowdataset);

        var outerRadius = 50;	//外半径
        var innerRadius = 40;	//内半径，为0则中间没有空白
    
        var arc = d3.svg.arc()	//弧生成器
            .innerRadius(innerRadius)	//设置内半径
            .outerRadius(outerRadius);	//设置外半径
        
        var normalColor = ['#1BBD8F', '#E8EBED'];
        var heightColor = ['#FF455B', '#E8EBED'];
        var lowColor = ['#FF970C', '#E8EBED'];
        
        //周
        var arcs = svg.selectAll("g")
            .data(weekNormalpiedata)
            .enter()
            .append("g")
            .attr("transform","translate("+ (width/2) +","+ (width/2) +")");

        arcs.append("path")
            .attr('stroke-linecap', 'round')
            .attr("fill",function(d,i){
                return normalColor[i];
            })
            .attr("d",function(d){
                return arc(d);
            });

        var arcs1 = svg1.selectAll("g")
            .data(weekHeightpiedata)
            .enter()
            .append("g")
            .attr("transform","translate("+ (width/2) +","+ (width/2) +")");
                      
        arcs1.append("path")
            .attr('stroke-linecap', 'round')
            .attr("fill",function(d,i){
                return heightColor[i];
            })
            .attr("d",function(d){
                return arc(d);
            });
        
        var arcs2 = svg2.selectAll("g")
            .data(weekLowpiedata)
            .enter()
            .append("g")
            .attr("transform","translate("+ (width/2) +","+ (width/2) +")");
                      
        arcs2.append("path")
            .attr('stroke-linecap', 'round')
            .attr("fill",function(d,i){
                return lowColor[i];
            })
            .attr("d",function(d){
                return arc(d);
            });
        //月
        var arcs3 = svg3.selectAll("g")
            .data(monthNormalpiedata)
            .enter()
            .append("g")
            .attr("transform","translate("+ (width/2) +","+ (width/2) +")");
                      
        arcs3.append("path")
            .attr('stroke-linecap', 'round')
            .attr("fill",function(d,i){
                return normalColor[i];
            })
            .attr("d",function(d){
                return arc(d);
            });
        console.log(arcs3);
        var arcs4 = svg4.selectAll("g")
            .data(monthHeightpiedata)
            .enter()
            .append("g")
            .attr("transform","translate("+ (width/2) +","+ (width/2) +")");
                      
        arcs4.append("path")
            .attr('stroke-linecap', 'round')
            .attr("fill",function(d,i){
                return heightColor[i];
            })
            .attr("d",function(d){
                return arc(d);
            });
        var arcs5 = svg5.selectAll("g")
            .data(monthLowpiedata)
            .enter()
            .append("g")
            .attr("transform","translate("+ (width/2) +","+ (width/2) +")");
                      
        arcs5.append("path")
            .attr('stroke-linecap', 'round')
            .attr("fill",function(d,i){
                return lowColor[i];
            })
            .attr("d",function(d){
                return arc(d);
            });
        //周
        arcs.append("text")
            .attr("text-anchor","middle")
            .text(function(d){
                return weekNormaldataset[0]+"%";
            });
        arcs1.append("text")
            .attr("text-anchor","middle")
            .text(function(d){
                return weekHeightdataset[0]+"%";
            });
        arcs2.append("text")
            .attr("text-anchor","middle")
            .text(function(d){
                return weekLowdataset[0]+"%";
            });
        //月
        arcs3.append("text")
            .attr("text-anchor","middle")
            .text(function(d){
                return monthNormaldataset[0]+"%";
            });
        arcs4.append("text")
            .attr("text-anchor","middle")
            .text(function(d){
                return monthHeightdataset[0]+"%";
            });
        arcs5.append("text")
            .attr("text-anchor","middle")
            .text(function(d){
                return monthLowdataset[0]+"%";
            });
    };
}).call(this);