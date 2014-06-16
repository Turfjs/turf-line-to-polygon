var test = require('tape');
var lineToPolygon = require('./');

test('lineToPolygon', function(t){
  t.plan(7);

  var openFeature = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "LineString",
      "coordinates": [ [ 0,0 ], [ 0,1 ], [ 1,1 ], [ 1,0 ] ]
    }
  };
  var openGeometry = {
    "type": "LineString",
    "coordinates": [ [ 0,0 ], [ 0,1 ], [ 1,1 ], [ 1,0 ] ]
  };
  var closedFeature = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "LineString",
      "coordinates": [ [ 0,0 ], [ 0,1 ], [ 1,1 ], [ 1,0 ], [ 0,0 ] ]
    }
  };
  var closedGeometry = {
    "type": "LineString",
    "coordinates": [ [ 0,0 ], [ 0,1 ], [ 1,1 ], [ 1,0 ], [ 0,0 ] ]
  };

  var shortLine = {
    "type": "LineString",
    "coordinates": [ [ 0,0 ], [ 0,1 ] ]
  };

  var feature = lineToPolygon(openFeature);
  t.equal(feature.geometry.type, 'Polygon', 'Open Feature is polygon');
  t.equal(feature.geometry.coordinates[0].length, 5, 'Open Feature LineString was closed');

  var geometry = lineToPolygon(openGeometry);
  t.equal(geometry.type, 'Polygon', 'Open Geometry is polygon');
  t.equal(geometry.coordinates[0].length, 5, 'Open Geometry LineString was closed');

  feature = lineToPolygon(closedFeature);
  t.equal(feature.geometry.coordinates[0].length, 5, 'Closed Feature LineString unmodified');

  geometry = lineToPolygon(closedGeometry);
  t.equal(geometry.coordinates[0].length, 5, 'Closed Geometry LineString unmodified');

  t.throws(function() {lineToPolygon(shortLine);}, '2 position LineString throws error.');


});
