// here 1 layer is present to check the band/layer click on LAYER and Setting Button add a custom value of 78.44 to 5253.5 in 1 band and click APPLY
var image = ee.Image('CGIAR/SRTM90_V4');
Map.setCenter(70.02, 30.2841, 2);
Map.addLayer(image, {}, 'Default Visualization');

// Custom visualization with min and max values
Map.addLayer(image, {min: 0, max: 3000}, 'Custom Visualization');

// Custom visualization with min, max, and a color palette
Map.addLayer(image, {min: 0, max: 3000, palette: ['blue', 'green', 'red']}, 
    'Custom Palette');

//////////////////////////////////////////////////////////////////////////////////////////

