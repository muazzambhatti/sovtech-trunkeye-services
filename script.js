let headings = document.querySelectorAll(".service_type_headings");
let content = document.querySelectorAll(".services_box");

for (let index = 0; index < headings.length; index++) {
    headings[index].addEventListener("click", function () {
        showServiceDetails(index);
    });
}
function showServiceDetails(service) {
    for (let index = 0; index < headings.length; index++) {
        headings[index].style.backgroundColor = "rgba(255,255,255,.2)";
        headings[index].style.color = "white";
    }
    for (let index = 0; index < content.length; index++) {
        content[index].classList.add("hidden");    
    }
    headings[service].style.backgroundColor = "white";
    headings[service].style.color = "black";
    content[service].classList.remove("hidden");
}