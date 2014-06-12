# turf-lineToPolygon

[![Build Status](https://travis-ci.org/cspanring/turf-lineToPolygon.svg)](https://travis-ci.org/cspanring/turf-lineToPolygon)

Transforms a LineString geometry to a (closed) Polygon geometry.

## Usage

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

Returns:

    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [ [ [ 0,0 ], [ 0,1 ], [ 1,1 ], [ 1,0 ], [ 0,0 ] ] ]
      }
    }
