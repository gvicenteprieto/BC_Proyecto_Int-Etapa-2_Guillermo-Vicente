import React from "react";

const Shops = () => {
  const shops = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const dataJson = await data.json();
      renderShops(dataJson);
    } catch (error) {
      console.log(error);
    }
  };

  const renderShops = (data) => {
    const container = document.getElementById("container");
    data.forEach((item) => {
      let section = document.createElement("section");
      section.setAttribute("class", "section__shops");
      container.appendChild(section);

      let username = document.createElement("h3");
      username.textContent = item.username;
      section.appendChild(username);

      let address = document.createElement("p");
      address.textContent =
        item.address.street +
        " " +
        item.address.suite +
        " " +
        item.address.city +
        " " +
        item.address.zipcode;
      section.appendChild(address);

      let website = document.createElement("p");
      website.textContent = "https://" + item.website;
      section.appendChild(website);
    });
  }

  shops();

  return (
    <main className="main__shops">
      <h1>Shops</h1>
      <div id="container">
      </div>
    </main>
  );
};

export default Shops;
