#!/bin/sh

name=${1:-"hero_image"}
echo $name
path="src/components/images/${name}/"
echo $path

for width in 360 682 768 1080 1184
do
  sips -Z ${width} ${path}image.jpg --out ${path}image@${width}.jpg
  cwebp -lossless ${path}image@${width}.jpg -o ${path}image@${width}.webp
done