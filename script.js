function calculateVolumes() {
    const samples = parseInt(document.getElementById('samples').value);
    const concentration = parseFloat(document.getElementById('concentration').value);

    if (isNaN(samples) || isNaN(concentration)) {
        alert('Please enter valid numbers for both inputs.');
        return;
    }

    // Placeholder logic: All volumes are set to the number of samples
    const ammoniumVolume = 100*(311*samples+1550)/concentration+1000;
    const acetonitrileVolume = 342*samples+1250+1000;
    const waterVolume = 298*samples+1250 - ammoniumVolume+2000;
    const bufferVolume = ((samples/8)+50)*8+1000;

    // Display results
    document.getElementById('ammonium-volume').textContent = `Ammonium Acetate Volume: ${ammoniumVolume} µL`;
    document.getElementById('acetonitrile-volume').textContent = `Acetonitrile Volume: ${acetonitrileVolume} µL`;
    document.getElementById('water-volume').textContent = `Water Volume: ${waterVolume} µL`;
    document.getElementById('buffer-volume').textContent = `Digestion Buffer Volume: ${bufferVolume} µL`;

    document.getElementById('results').style.display = 'block';
}
