const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;
// if user press any key and release
inputBox.onkeyup = (e) => {
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if (userData) {
        if (userData == "voyager1") {
            icon.onclick = () => {
                webLink = `v1.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if (userData == "voyager2") {
            icon.onclick = () => {
                webLink = `v2.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if (userData == "international space station") {
            icon.onclick = () => {
                webLink = `iss.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if (userData == "mars natural satellites") {
            icon.onclick = () => {
                webLink = `mns.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if (userData == "jupiter natural satellites") {
            icon.onclick = () => {
                webLink = `jns.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if (userData == "saturn natural satellites") {
            icon.onclick = () => {
                webLink = `sns.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if (userData == "uranus natural satellites") {
            icon.onclick = () => {
                webLink = `uns.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if (userData == "neptune natural satellites") {
            icon.onclick = () => {
                webLink = `nns.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if (userData == "mars reconnaissance orbiter") {
            icon.onclick = () => {
                webLink = `mro.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if (userData == "tempel-tuttel") {
            icon.onclick = () => {
                webLink = `tt.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if (userData == "halley's comet") {
            icon.onclick = () => {
                webLink = `hc.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if (userData == "hale-bopp") {
            icon.onclick = () => {
                webLink = `hb.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if (userData == "hubble space telescope") {
            icon.onclick = () => {
                webLink = `hst.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if (userData == "Saturn V") {
            icon.onclick = () => {
                webLink = `sv.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if (userData == "SpaceX Falcon Heavy") {
            icon.onclick = () => {
                webLink = `sfh.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else {
            icon.onclick = () => {
                webLink = `${userData}.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        emptyArray = suggestions.filter((data) => {
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}
function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    if (selectData.length > 9) {
        if (selectData.length < 15) {
            document.getElementById("inputforjs").style.fontSize = "15px"
        }
    }
    else if (selectData.length > 15) {
        if (selectData.length < 20) {
            document.getElementById("inputforjs").style.fontSize = "12px"
        }
    }
    else if (selectData.length > 20) {
        document.getElementById("inputforjs").style.fontSize = "10px"
    }
    else {
        document.getElementById("inputforjs").style.fontSize = "18px"
    }
    if (selectData == "voyager1") {
        icon.onclick = () => {
            webLink = `v1.html`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
    }
    else if (selectData == "voyager2") {
        icon.onclick = () => {
            webLink = `v2.html`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
    }
    else if (selectData == "international space station") {
        icon.onclick = () => {
            webLink = `iss.html`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
    }
    else if (selectData == "mars natural satellites") {
        icon.onclick = () => {
            webLink = `mns.html`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
    }
    else if (selectData == "jupiter natural satellites") {
        icon.onclick = () => {
            webLink = `jns.html`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
    }
    else if (selectData == "saturn natural satellites") {
        icon.onclick = () => {
            webLink = `sns.html`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
    }
    else if (selectData == "uranus natural satellites") {
        icon.onclick = () => {
            webLink = `uns.html`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
    }
    else if (selectData == "neptune natural satellites") {
        icon.onclick = () => {
            webLink = `nns.html`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
    }
    else if (selectData == "mars reconnaissance orbiter") {
        icon.onclick = () => {
            webLink = `mro.html`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
    }
    else if (selectData == "tempel-tuttel") {
        icon.onclick = () => {
            webLink = `tt.html`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
    }
    else if (selectData == "halley's comet") {
        icon.onclick = () => {
            webLink = `hc.html`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
    }
    else if (selectData == "hale-bopp") {
        icon.onclick = () => {
            webLink = `hb.html`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
    }
    else if (selectData == "hubble space telescope") {
        icon.onclick = () => {
            webLink = `hst.html`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
    }
    else if (selectData == "Saturn V") {
        icon.onclick = () => {
            webLink = `sv.html`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
    }
    else if (selectData == "SpaceX Falcon Heavy") {
        icon.onclick = () => {
            webLink = `sfh.html`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
    }
    else {
        icon.onclick = () => {
            webLink = `${selectData}.html`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
    }

    searchWrapper.classList.remove("active");
}
function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}