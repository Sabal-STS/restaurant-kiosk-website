const Jimp = require('jimp');

async function main() {
  const image = await Jimp.read('public/sts_logo.jpeg');
  
  // Iterate over every pixel
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const red = this.bitmap.data[idx + 0];
    const green = this.bitmap.data[idx + 1];
    const blue = this.bitmap.data[idx + 2];
    
    // If pixel is mostly white (e.g., > 220 in all RGB channels)
    if (red > 220 && green > 220 && blue > 220) {
      // Make it transparent
      this.bitmap.data[idx + 3] = 0; // Alpha channel
    }
  });

  await image.writeAsync('public/sts_logo.png');
  console.log("Saved transparent PNG");
}

main().catch(console.error);
