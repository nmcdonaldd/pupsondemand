document.addEventListener("DOMContentLoaded", event => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      const resp = JSON.parse(xhr.responseText);
      const image = document.createElement("img");
      image.src = resp.message;
      document.getElementById("cutenessOverload").appendChild(image);
    }
  };
  xhr.send();
});
