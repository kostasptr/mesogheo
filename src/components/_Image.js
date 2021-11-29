const Image = ({path, half = false, alt = "", classes =""}) => {
  const imagesWidths = [
    360,
    768,
    1024,
    1440,
    1920
  ];
  // Creates the following:
  // srcset="name@360.webp   360w,
  //         name@768.webp   768w,
  //         name@1024.webp  1024w,
  //         name@1280.webp  1280w,
  //         name@1440.webp  1440w,
  //         name@1920.webp  1920w"
  const srcsetWebp = imagesWidths.map((width) => `${require(`${path}/image@${width}.webp`).default} ${width}w`).join(",");
  const srcsetJpg = imagesWidths.map((width) => `${require(`${path}/image@${width}.jpg`).default} ${width}w`).join(",");
  const sizes = "(min-width: 1920px) 1920px, 100vw";
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
        src={`${path}/image@1280.jpg`} // fallback image
        alt={alt}
        class={classes}
      />
    </picture>
  );
};

export default Image;