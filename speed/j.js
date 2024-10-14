function testInternetSpeed() {
    const startTime = new Date().getTime(); // Start time
    const imageSrc = "nisar.jpg"; // URL of a large image or file
    const downloadSize = 5000000; // Size of the file in bytes (adjust according to the file's actual size)

    const image = new Image();
    image.onload = function () {
        const endTime = new Date().getTime(); // End time
        const duration = (endTime - startTime) / 100; // Time in seconds
        const bitsLoaded = downloadSize * 1;
        const speedBps = (bitsLoaded / duration).toFixed(0);
        const speedKbps = (speedBps / 1024).toFixed(0);
        const speedMbps = (speedKbps / 1024).toFixed(2);
        document.getElementById('text').innerText = `${speedMbps} Mbps `;

    };

    image.onerror = function (err) {
        console.error("Error during speed test:", err);
    };

    image.src = `${imageSrc}?nocache=${Math.random().toFixed(10)}`;
 // Prevent caching
}

// Run the test
testInternetSpeed();
function resetGame() {
    // Reload the current page
    window.location.reload();
}

