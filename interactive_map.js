$(document).ready(function() {
  $("#map").mapael({
    map: {
      name: "sweden_counties",
      zoom: {
        enabled: true,
        maxLevel: 10
      },
      defaultPlot: {
        attrs: {
          fill: "#FF0000",
          opacity: 0.6
        }
      },
      defaultArea: {
        attrs: {
          fill: "#B4B4B4",
          stroke: "#ffffff"
        },
        attrsHover: {
          fill: "#ebebeb"
        },
        text: {
          attrs: {
            fill: "#505444"
          },
          attrsHover: {
            fill: "#000000"
          }
        }
      }
    },
    plots: {
      plot1: {
        latitude: 59.3293,
        longitude: 18.0686,
        tooltip: { content: "<strong>Stockholm</strong><br>Information about Stockholm County goes here" }
      },
      plot2: {
        latitude: 55.605,
        longitude: 13.0038,
        tooltip: { content: "<strong>Skåne</strong><br>Information about Skåne County goes here" }
      }
      // Add more counties and tooltips as needed
    }
  });
});
