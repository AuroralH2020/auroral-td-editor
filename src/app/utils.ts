export function  generateRandomColor() {
    const colors = [
        '#EB7181', // red
        '#468547', // green
        '#FFD558', // yellow
        '#3670B2', // blue
    ];
    const randomIndex = Math.floor(Math.random() * Math.floor(colors.length));
    const randomHue = -1 * Math.random();
    var base: string = colors[randomIndex];

    // validate hex string
    base = String(base).replace(/[^0-9a-f]/gi, '');
    if (base.length < 6) {
      base = base[0]+base[0]+base[1]+base[1]+base[2]+base[2];
    }
  
    // convert to decimal and change luminosity
    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(base.substr(i*2,2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * randomHue)), 255)).toString(16);
      rgb += ("00"+c).substr(c.length);
    }

    return rgb;
}