const chartWidth = 300;
const chartHeight = 300;
const backgroundColor = "#EAF2FA";
const landColor = "#09A573";
const landStroke = "#FCF5E9";
const markerColor = "#E26F99";
const labelOnWaterColor = "#504C57";
const labelOnLandColor = "#FAF9FB";

const svg = d3
  .select("body")
  .append("svg")
  .attr("title", "Map")
  .attr("width", chartWidth)
  .attr("height", chartHeight);

d3.json("germany.geo.json").then((geojson) => {
  // console.log(geojson);

  const pathGenerator = d3
    .geoPath()
    .projection(d3.geoMercator().fitSize([chartWidth, chartHeight], geojson));

  svg
    .append("g")
    .selectAll("path")
    .data(geojson.features)
    .join("path")
    .attr("d", pathGenerator)
    .attr("fill", "#555")
    .attr("stroke", "white")
    .attr("stroke-width", 0.5);

  const allStates = geojson.features.map((s) => s.properties.name);

  console.log(allStates);
});
