# turf-line-to-polygon

[![Build Status](https://travis-ci.org/Turfjs/turf-line-to-polygon.svg)](https://travis-ci.org/Turfjs/turf-line-to-polygon)

Transforms a LineString geometry to a (closed) Polygon geometry.

## Usage

    var lineToPolygon = require('turf-line-to-polygon');

    var lineFeature = {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [ [ 0,0 ], [ 0,1 ], [ 1,1 ], [ 1,0 ] ]
      }
    };

    var polyFeature = lineToPolygon(lineFeature);

Returns:

    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [ [ [ 0,0 ], [ 0,1 ], [ 1,1 ], [ 1,0 ], [ 0,0 ] ] ]
      }
    }
