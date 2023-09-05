
const image = [[1,1,0],[1,0,1],[0,0,0]];

var flipAndInvertImage = function(image) 
{
   let newImage = image.map(x=>x.reverse().map((y)=>y?0:1)); 
   //let finalNewImage = newImage.map((y)=>y?0:1);
   return newImage;
};

console.log(flipAndInvertImage(image));