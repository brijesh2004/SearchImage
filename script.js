
function show()
 {

  const input = document.getElementById("inp").value;

  const image = document.getElementById("image");
 
  const img = document.getElementById("img");
 
 image.src = `https://source.unsplash.com/random/300×300/?${input}`;
  
img.src = `https://source.unsplash.com/random/900×600/?${input}`;


 

}