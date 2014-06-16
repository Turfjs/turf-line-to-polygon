// compare 2 arrays
function areIdentical(a,b) {
  return a.length === b.length && a.every(function(v,i) {
    return v === b[i];
  });
}

// accepts a Feature with a or just a LineString geometry.
module.exports = function lineToPolygon(f) {
  var geometry, firstVertex, lastVertex;

  if (f.type === 'Feature'){
    geometry = f.geometry;
  } else {
    geometry = f;
  }

  if (geometry.type !== 'LineString') {
    throw new Error('Only Linestring geometry type is supported.');
  }

  if (geometry.coordinates.length === 0) {
    throw new Error('Empty geometry.');
  }

  firstVertex = geometry.coordinates[0];
  lastVertex = geometry.coordinates[geometry.coordinates.length - 1];

  if (!areIdentical(firstVertex, lastVertex)) geometry.coordinates.push(firstVertex);

  if (geometry.coordinates.length < 4) {
    throw new Error('A Polygon needs to have 4 or more positions.')
  }

  geometry.type = 'Polygon';
  geometry.coordinates = [geometry.coordinates];

  return f;
};
