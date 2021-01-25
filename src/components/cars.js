import React from "react";
import useImageGalleryConfig from "../hooks/useImageGalleryConfig";
import ImageGallery from "react-image-gallery";
import { Link } from "gatsby";

const Cars = ({ data }) => {
  var config = useImageGalleryConfig;

  function compare(a, b) {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  }

  data = data.sort(compare);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center">
      {data.map((car) => {
        var images = car.autoscout24Images.map((c) => ({
          original: c,
        }));
        return (
          <div
            key={car.slug}
            className={car.autoscout24Images == null ? "hide" : ""}
            className="p-4 hover:shadow-lg"
          >
            <ImageGallery items={images} {...config} />
            <div className="text-gray-600 uppercase tracking-widest mt-4">
              {car.brandName}
            </div>

            <div className="font-bold text-xl mt-4">
              {car.modelName} {car.version}
            </div>

            <div className="grid grid-cols-3 mt-4">
              <div>
                <div className="text-gray-600 uppercase tracking-tight text-center text-xs sm:text-sm">
                  Inschrijving
                </div>
                <div className="text-center">{car.firstRegistration}</div>
              </div>
              <div>
                <div className="text-gray-600 uppercase tracking-tight text-center text-xs sm:text-sm">
                  Km
                </div>
                <div className="text-center">
                  {new Intl.NumberFormat("nl-BE").format(car.kilometers)}
                </div>
              </div>
              <div>
                <div className="text-gray-600 uppercase tracking-tight text-center text-xs sm:text-sm">
                  Vermogen
                </div>
                <div className="text-center">{car.horsePower} pk</div>
              </div>
            </div>

            <div className="font-bold text-2xl mt-4 text-center">
              <div>
                {new Intl.NumberFormat("nl-BE", {
                  style: "currency",
                  currency: "EUR",
                }).format(car.price)}
              </div>
            </div>

            <div className="mt-4 w-auto inline-block float-right">
              <Link
                className="flex items-center pr-4 hover:underline"
                to={car.slug}
              >
                <div className="relative">
                  <span className="font-bold uppercase pt-2 pr-3">
                    meer informatie
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cars;
