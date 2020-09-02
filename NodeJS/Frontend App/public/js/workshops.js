"use strict";
fetch("https://workshops-server.herokuapp.com/workshops").
    then(function (response) {
    return response.json();
}).then(function (workshops) {
    console.log(workshops);
    var tbody = document.querySelector("tbody");
    workshops.forEach(function (workshop) {
        tbody.innerHTML += "<tr>\n                                <td>\n                                    <img class= \"thumbnail\"src=\"" + workshop.imageUrl + "\" alt=\"\">\n                                </td>\n                                <td>" + workshop.name + "</td>\n                                <td>" + workshop.location.city + "</td>\n                                <td>" + workshop.description + "</td>\n                            </tr>";
    });
}).catch(function (error) { return console.log(error); });
