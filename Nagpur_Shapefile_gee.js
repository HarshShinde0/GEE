// Load administrative boundary dataset (GADM Level 2)
var gadm = ee.FeatureCollection("FAO/GAUL/2015/level2");

// Filter for Nagpur district (change 'Nagpur' based on available data)
var nagpur = gadm.filter(ee.Filter.eq('ADM2_NAME', 'Nagpur'));

// Display on the map
Map.centerObject(nagpur, 10);
Map.addLayer(nagpur, {color: 'red'}, 'Nagpur Boundaries');

// Export the shapefile as a .zip archive containing .shp, .shx, .dbf, .prj
Export.table.toDrive({
  collection: nagpur,
  description: 'Nagpur_Zipcode_Shapes',
  folder: 'GEE_Exports',
  fileFormat: 'SHP',
  fileNamePrefix: 'Nagpur_Zipcode_Shapes'
});
