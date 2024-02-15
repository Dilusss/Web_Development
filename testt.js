document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("booking-form");
    const destinationSelect = document.getElementById("destination");
    const formMessages = document.getElementById("form-messages");

    // Define room availability and restaurant data based on destinations
    const destinationData = {
        Kandy: {
            rooms: ["Room A", "Room B", "Room C"],
            restaurants: ["Restaurant X", "Restaurant Y", "Restaurant Z"]
        },
        Trinco: {
            rooms: ["Room 1", "Room 2", "Room 3"],
            restaurants: ["Trinco Restaurant A", "Trinco Restaurant B"]
        },
        Galle: {
            rooms: ["Galle Room 1", "Galle Room 2"],
            restaurants: ["Galle Restaurant A", "Galle Restaurant B", "Galle Restaurant C"]
        },
        Ella: {
            rooms: ["Ella Room 1", "Ella Room 2"],
            restaurants: ["Ella Restaurant X", "Ella Restaurant Y"]
        },
        Sigiriya: {
            rooms: ["Sigiriya Room A", "Sigiriya Room B"],
            restaurants: ["Sigiriya Restaurant 1", "Sigiriya Restaurant 2"]
        },
        "Nuwara Eliya": {
            rooms: ["NE Room 1", "NE Room 2", "NE Room 3"],
            restaurants: ["NE Restaurant A", "NE Restaurant B"]
        }
    };

    destinationSelect.addEventListener("change", function () {
        const selectedDestination = destinationSelect.value;
        const roomsSelect = document.getElementById("rooms");
        const restaurantsSelect = document.getElementById("restaurants");

        // Populate rooms based on the selected destination
        roomsSelect.innerHTML = "";
        destinationData[selectedDestination].rooms.forEach(room => {
            const option = document.createElement("option");
            option.text = room;
            roomsSelect.add(option);
        });

        // Populate restaurants based on the selected destination
        restaurantsSelect.innerHTML = "";
        destinationData[selectedDestination].restaurants.forEach(restaurant => {
            const option = document.createElement("option");
            option.text = restaurant;
            restaurantsSelect.add(option);
        });
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // You can add form validation logic here if needed

        // AJAX request to submit form data to the server
        const formData = new FormData(form);
        fetch("process.php", {
            method: "POST",
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            formMessages.textContent = data.message;
            if (data.success) {
                form.reset();
            }
        })
        .catch(error => {
            formMessages.textContent = "An error occurred. Please try again.";
        });
    });
});
