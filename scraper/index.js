const fetch = require('node-fetch');
const parser = require("node-html-parser");

const url = 'https://www.autoscout24.be/nl/aanbod/skoda-octavia-1-4-tsi-benzine-zwart-9c7b6844-e49e-47c2-9c8b-89b6315a5e75';
const images = [];
(async () => {
    try {
        const response = await fetch(url);
        const body = await response.text();
        const root = parser.parse(body);
        const imgs = root.querySelectorAll("img[src]");
        if (imgs) {
            imgs.map((item) => {
                const url = item._rawAttrs['data-src'];

                if (url) {
                    const parts = url.split("/");
                    if (parts.length >= 5) {
                        images.push(`https://prod.pictures.autoscout24.net/listing-images/${parts[4]}`);
                    }
                }
            });
        }

        for (const fileName of images) {
            console.log(fileName);
        }
    } catch (error) {
        console.log(error);
    }
})();