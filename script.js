function orderFlower(flowerName) {

    let flower = document.getElementById("flower");

    if (flowerName === "Roses") {
        flower.value = "500";
    } 
    else if (flowerName === "Tulips") {
        flower.value = "400";
    } 
    else if (flowerName === "Sunflowers") {
        flower.value = "300";
    }

    calculateTotal();

    document.getElementById("order").scrollIntoView({
        behavior: "smooth"
    });
}


function calculateTotal() {

    let flowerPrice = Number(document.getElementById("flower").value);
    let quantity = Number(document.getElementById("quantity").value);

    let total = flowerPrice * quantity;

    document.getElementById("total").innerText =
        "Total Price: ₹" + total;
}


function placeOrder(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let flower = document.getElementById("flower");
    let flowerName = flower.options[flower.selectedIndex].text;
    let quantity = document.getElementById("quantity").value;
    let address = document.getElementById("address").value;

    if (name === "" || phone === "" || address === "") {
        alert("🌸 Please fill in all the details.");
        return;
    }

    alert(
        "🌸 Order Confirmed!\n\n" +
        "Customer: " + name + "\n" +
        "Flower: " + flowerName + "\n" +
        "Quantity: " + quantity + "\n\n" +
        "Thank you for ordering from Bloom Flower Shop! 💐"
    );
}