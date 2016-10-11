d3.json("data.json", function (data){

    var canvas = d3.select("body")
        .append("svg")
        .attr("width", 500)
        .attr("height", 500);

    canvas.selectAll("rect")
        .data(data)
        .enter()
            .append("rect")
            .attr("width", function(d){ return d.age *10})
            .attr("height", 48)
            .attr("y", function(d,i){return i*50})
            .attr("fill", "blue");

    canvas.selectAll("text")
        .data(data)
        .enter()
            .append("text")
            .attr("y", function(d,i){return (i*50)+20})
            .attr("fill", "white")
            .text( function(d){ return d.name })

})