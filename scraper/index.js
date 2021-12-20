const fetch = require('node-fetch');
const parser = require("node-html-parser");

const url = 'https://www.autoscout24.be/nl/aanbod/ford-ka-ka-1-2i-benzine-zwart-ba9b9481-2ccc-43be-9405-24b5d92a9b61';
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