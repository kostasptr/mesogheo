const Image = ({path, imagesWidths, sizes, alt = "", classes = ""}) => {
  imagesWidths = imagesWidths || [
    360,
    768,
    682,
    1080,
    1184
  ];
  // Creates the following:
  // srcset="name@360.webp   360w,
  //         name@682.webp   682w,
  //         name@768.webp   768w,
  //         name@1280.webp  1080w,
  //         name@1440.webp  1184w"
  const srcsetWebp = imagesWidths.map((width) => `${require(`./images/${path}/image@${width}.webp`).default} ${width}w`).join(",");
  const srcsetJpg = imagesWidths.map((width) => `${require(`./images/${path}/image@${width}.jpg`).default} ${width}w`).join(",");
  sizes = sizes ||
    `(max-width: 360px) 360px,
    (max-width: 768px) 768px,
    (max-width: 1152px) 768px,
    (max-width: 1440px) 1080px,
    (max-width: 1920px) 1184px,
    1184px`;
  return (
    <picture>
      <source 
        srcSet={srcsetWebp}
        sizes={sizes}
        type="image/webp"
      />
      
      <img 
        srcSet={srcsetJpg}
        sizes={sizes}                       
        src={`./images/${path}/image@${imagesWidths.pop()}}.jpg`} // fallback image (the largest one)
        alt={alt}
        className={classes}
      />
    </picture>
  );
};

export default Image;