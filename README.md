# turf-lineToPolygon

Transforms a LineString geometry to a (closed) Polygon geometry.


    var lineToPolygon = require('turf-lineToPolygon');

    var lineFeature = {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [ [ 0,0 ], [ 0,1 ], [ 1,1 ], [ 1,0 ] ]
      }
    };

    var polyFeature = lineToPolygon(lineFeature);
