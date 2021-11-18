/*  Copyright (C) Solar MD (Pty) ltd - All Rights Reserved
 * 
 *  Unauthorized copying of this file, via any medium is strictly prohibited
 *  Proprietary and confidential
 *  
 *  Written by Nathan Brill, 2021
 *  
 *  For more information http://www.solarmd.co.za/ 
 *  email: info@solarmd.co.za
 *  7 Alternator Ave, Montague Gardens, Cape Town, 7441 South Africa
 *  Phone: 021 555 2181
 *  
 */

// function init() {
function whatsNewCard1(imageUrl, newList) {

    let newCard = document.createElement("div");
    newCard.classList.add('blog-card');
    document.body.appendChild(newCard);
    let wrapper = document.createElement('div');
    wrapper.classList.add("meta");
    newCard.appendChild(wrapper);

    if (imageUrl.includes("http")) {

        let cardImage = document.createElement("div");
        cardImage.classList.add("photo");
        wrapper.appendChild(cardImage);
        cardImage.style = "background-image:" + imageUrl
    }

    // detailsList = function (author, page) {
    let ul = document.createElement("ul");
    ul.classList.add("details")
    wrapper.appendChild(ul)

    // author = function (txt) {

    let list = document.createElement("li");
    list.classList.add("author")
    list.innerText = "SolarMD";
    ul.appendChild(list)
    // }

    let currentDate = document.createElement("li");

    let getDate = function () {
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth();
        let day = d.getDay();
        return day + month + year;
    }

    currentDate.classList.add("date");
    currentDate.innerText = getDate();
    ul.appendChild(currentDate);

    // }

    // descriptionList = function () {
    let descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add("description");
    newCard.appendChild(descriptionDiv);

    let headerH1 = document.createElement("h1");
    headerH1.innerText = "Logger v6.410";
    descriptionDiv.appendChild(headerH1)

    let headerH2 = document.createElement("h2");
    descriptionDiv.appendChild(headerH2);
    headerH2.innerText = "Logger v6.410 release date:18.09.2019";

    let descriptList = document.createElement("ul");
    descriptionDiv.appendChild(descriptList)

    let descriptions1 = document.createElement("li");
    descriptList.appendChild(descriptions1);
    descriptions1.innerHTML = "Sungrow SG/PL Series Inverter Support @RS485 Interfaces.";
    let descriptions2 = document.createElement("li");
    descriptList.appendChild(descriptions2);
    descriptions2.innerHTML = "Carlo Gavazzi Energy Meter Support EM/ET Series @RS485 Interfaces.";
    let descriptions3 = document.createElement("li");
    descriptList.appendChild(descriptions3);
    descriptions3.innerHTML = "Logger Device Page -> Interfaces bug fix, added real time data for interface. RS485 interfaces has Setting for changing baudrate.";
    let descriptions4 = document.createElement("li");
    descriptList.appendChild(descriptions4);
    descriptions4.innerHTML = "Dynamic start and stop logger device support when enable or disable. No logger reboot required.";
    let descriptions5 = document.createElement("li");
    descriptList.appendChild(descriptions5);
    descriptions5.innerHTML = "Small bug fix for realtime device control.";
    

    // this.descriptionList = newList;

    // if (typeof newList ==="") {
    //     let dList = document.createElement("li");
    //     descriptList.appendChild(dList)
    //     dList.innerText = newLIst;

    // }

    let readMoreBtn = document.createElement("p");
    readMoreBtn.classList.add("read-more");
    descriptionDiv.appendChild(readMoreBtn);

    let readMoreLink = document.createElement("a");
    readMoreLink.innerText = "Read More";
    readMoreLink.href = "#";
    readMoreBtn.appendChild(readMoreLink);
    // }

}
// }

// $(document).ready(function () {
//     init();
// });
whatsNewCard1("url(https://www.mltpower.com/products/image/cache/catalog/Captu333re-500x500.PNG)", "Sungrow SG/PL Series Inverter Support @RS485 Interfaces.");


function whatsNewCard2(imageUrl, newList) {

    let newCard = document.createElement("div");
    newCard.classList.add('blog-card');
    newCard.style.flexDirection = "row-reverse";
    document.body.appendChild(newCard); 
    let wrapper = document.createElement('div');
    wrapper.classList.add("meta");
    newCard.appendChild(wrapper);

    if (imageUrl.includes("http")) {

        let cardImage = document.createElement("div");
        cardImage.classList.add("photo");
        wrapper.appendChild(cardImage);
        cardImage.style = "background-image:" + imageUrl
    }

    // detailsList = function (author, page) {
    let ul = document.createElement("ul");
    ul.classList.add("details")
    wrapper.appendChild(ul)

    // author = function (txt) {

    let list = document.createElement("li");
    list.classList.add("author")
    list.innerText = "SolarMD";
    ul.appendChild(list)
    // }

    let currentDate = document.createElement("li");

    let getDate = function () {
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth();
        let day = d.getDay();
        return day + month + year;
    }

    currentDate.classList.add("date");
    currentDate.innerText = getDate();
    ul.appendChild(currentDate);

    // }

    // descriptionList = function () {
    let descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add("description");
    newCard.appendChild(descriptionDiv);

    let headerH1 = document.createElement("h1");
    headerH1.innerText = "Logger version Older than";
    descriptionDiv.appendChild(headerH1)

    let headerH2 = document.createElement("h2");
    descriptionDiv.appendChild(headerH2);
    headerH2.innerText = "V6.410";

    let descriptList = document.createElement("ul");
    descriptionDiv.appendChild(descriptList)

    let descriptions1 = document.createElement("li");
    descriptList.appendChild(descriptions1);
    descriptions1.innerHTML = "On request.";



    let readMoreBtn = document.createElement("p");
    readMoreBtn.classList.add("read-more");
    descriptionDiv.appendChild(readMoreBtn);

    let readMoreLink = document.createElement("a");
    readMoreLink.innerText = "Read More";
    readMoreLink.href = "#";
    readMoreBtn.appendChild(readMoreLink);
    // }

}
whatsNewCard2("url(https://static.wixstatic.com/media/8aa5ba_324d1a8c30b9404db8d6237db9dc66eb~mv2.png/v1/fill/w_648,h_600,al_c,lg_1,q_90/Artboard%201%20copy%206-17.webp)")

function whatsNewCard3(imageUrl, newList) {

    let newCard = document.createElement("div");
    newCard.classList.add('blog-card');
    document.body.appendChild(newCard); 
    let wrapper = document.createElement('div');
    wrapper.classList.add("meta");
    newCard.appendChild(wrapper);

    if (imageUrl.includes("http")) {

        let cardImage = document.createElement("div");
        cardImage.classList.add("photo");
        wrapper.appendChild(cardImage);
        cardImage.style = "background-image:" + imageUrl
    }

    // detailsList = function (author, page) {
    let ul = document.createElement("ul");
    ul.classList.add("details")
    wrapper.appendChild(ul)

    // author = function (txt) {

    let list = document.createElement("li");
    list.classList.add("author")
    list.innerText = "SolarMD";
    ul.appendChild(list)
    // }

    let currentDate = document.createElement("li");

    let getDate = function () {
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth();
        let day = d.getDay();
        return day + month + year;
    }

    currentDate.classList.add("date");
    currentDate.innerText = getDate();
    ul.appendChild(currentDate);

    // }

    // descriptionList = function () {
    let descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add("description");
    newCard.appendChild(descriptionDiv);

    let headerH1 = document.createElement("h1");
    headerH1.innerText = "Charts update";
    descriptionDiv.appendChild(headerH1)

    let headerH2 = document.createElement("h2");
    descriptionDiv.appendChild(headerH2);
    headerH2.innerText = "Logger v6.410 release date:18.09.2019";

    let descriptList = document.createElement("ul");
    descriptionDiv.appendChild(descriptList)

    let descriptions1 = document.createElement("li");
    descriptList.appendChild(descriptions1);
    descriptions1.innerHTML = "The power types you can monitor are generated from connected devices.";
    let descriptions2 = document.createElement("li");
    descriptList.appendChild(descriptions2);
    descriptions2.innerHTML = "The power chart defines the work done per unit time in your system.";
    let descriptions3 = document.createElement("li");
    descriptList.appendChild(descriptions3);
    descriptions3.innerHTML = "Energy chart represents the overall work done on your system.";
    let descriptions4 = document.createElement("li");
    descriptList.appendChild(descriptions4);
    descriptions4.innerHTML = "Live data chart is a real time representation of the work done in your system.";

    // this.descriptionList = newList;

    let readMoreBtn = document.createElement("p");
    readMoreBtn.classList.add("read-more");
    descriptionDiv.appendChild(readMoreBtn);

    let readMoreLink = document.createElement("a");
    readMoreLink.innerText = "Read More";
    readMoreLink.href = "#";
    readMoreBtn.appendChild(readMoreLink);
    // }

}
whatsNewCard3("url(https://user-images.githubusercontent.com/72873730/96557015-03172e80-12ba-11eb-921e-74d744aadfcf.png)")

function whatsNewCard4(imageUrl, newList) {

    let newCard = document.createElement("div");
    newCard.classList.add('blog-card');
    newCard.style.flexDirection = "row-reverse";
    document.body.appendChild(newCard); 
    let wrapper = document.createElement('div');
    wrapper.classList.add("meta");
    newCard.appendChild(wrapper);

    if (imageUrl.includes("http")) {

        let cardImage = document.createElement("div");
        cardImage.classList.add("photo");
        wrapper.appendChild(cardImage);
        cardImage.style = "background-image:" + imageUrl
    }

    // detailsList = function (author, page) {
    let ul = document.createElement("ul");
    ul.classList.add("details")
    wrapper.appendChild(ul)

    // author = function (txt) {

    let list = document.createElement("li");
    list.classList.add("author")
    list.innerText = "SolarMD";
    ul.appendChild(list)
    // }

    let currentDate = document.createElement("li");

    let getDate = function () {
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth();
        let day = d.getDay();
        return day + month + year;
    }

    currentDate.classList.add("date");
    currentDate.innerText = getDate();
    ul.appendChild(currentDate);

    // }

    // descriptionList = function () {
    let descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add("description");
    newCard.appendChild(descriptionDiv);

    let headerH1 = document.createElement("h1");
    headerH1.innerText = "Solar Yield Estimator";
    descriptionDiv.appendChild(headerH1)

    let headerH2 = document.createElement("h2");
    descriptionDiv.appendChild(headerH2);
    headerH2.innerText = "V8.0.1 2021-11-10";

    let descriptList = document.createElement("ul");
    descriptionDiv.appendChild(descriptList)

    let descriptions1 = document.createElement("li");
    descriptList.appendChild(descriptions1);
    descriptions1.innerHTML = "Calculate Solar Yield.";
    let descriptions2 = document.createElement("li");
    descriptList.appendChild(descriptions2);
    descriptions2.innerHTML = "Set tilt and panel direction to determine total yield.";
    let descriptions3 = document.createElement("li");
    descriptList.appendChild(descriptions3);
    descriptions3.innerHTML = "Compare different position by adding a series to the graph.";

    // this.descriptionList = newList;

    let readMoreBtn = document.createElement("p");
    readMoreBtn.classList.add("read-more");
    descriptionDiv.appendChild(readMoreBtn);

    let readMoreLink = document.createElement("a");
    readMoreLink.innerText = "Read More";
    readMoreLink.href = "#";
    readMoreBtn.appendChild(readMoreLink);
    // }

}
whatsNewCard4("url(https://www.dowell.com.au/media/dowellimages/thermaline/sun_path_3.jpg)")