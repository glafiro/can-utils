const btn_abbaglianti = document.getElementById("abbaglianti");
const btn_luciInterne = document.getElementById("luci_interne");
const btn_porta = document.getElementById("porta");
const btn_baule = document.getElementById("baule");

const toggles = {
    "abbaglianti": {
        "isOn": false,
        "off_text": "abbaglianti: off",
        "on_text": "abbaglianti: on"
    },
    "luci_interne": {
        "isOn": false,
        "off_text": "luci interne: off",
        "on_text": "luci interne: on"
    },
    "porta": {
        "isOn": false,
        "off_text": "porta: chiusa",
        "on_text": "porta: aperta"
    },
    "baule": {
        "isOn": false,
        "off_text": "baule: chiuso",
        "on_text": "baule: aperto"
    },

}

const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        getCmd(btn.id);

        if (toggles[btn.id]["isOn"] == false) {
            toggles[btn.id]["isOn"] = true;
            btn.classList.add("btn-active");
            btn.children[1].innerHTML = toggles[btn.id]["on_text"]
        } else {
            toggles[btn.id]["isOn"] = false;
            btn.classList.remove("btn-active");
            btn.children[1].innerHTML = toggles[btn.id]["off_text"]
        }
    })
});

function getCmd(cmd) {
    const url = 'http://localhost:5000/' + cmd;
    fetch(url)
    .then(console.log("request sent")); 
}