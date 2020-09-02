fetch("https://workshops-server.herokuapp.com/workshops").
then(function(response){
    return response.json();
}).then(function(workshops){
    console.log(workshops);
    const tbody = <HTMLElement>document.querySelector("tbody");
    workshops.forEach((workshop: { imageUrl: any; name: any; location: { city: any; }; description: any; }) => {
        tbody.innerHTML += `<tr>
                                <td>
                                    <img class= "thumbnail"src="${workshop.imageUrl}" alt="">
                                </td>
                                <td>${workshop.name}</td>
                                <td>${workshop.location.city}</td>
                                <td>${workshop.description}</td>
                            </tr>`
    });
}).catch(error=>console.log(error));

