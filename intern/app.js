// Get references to HTML elements
const textarea = document.getElementById("textarea1");
const customFilenameInput = document.getElementById("customFilename");
const fontSelect = document.getElementById("fontSelect");



function changeFont(e) {
    let selectedFont = e.value;
    textarea.style.fontFamily = selectedFont;
}

// Function to change font size
function f1(e) {
    let value = e.value;
    textarea.style.fontSize = value + "px";
}

// Function to toggle bold text
function f2(e) {
    if (textarea.style.fontWeight === "bold") {
        textarea.style.fontWeight = "normal";
        e.classList.remove("active");
    } else {
        textarea.style.fontWeight = "bold";
        e.classList.add("active");
    }
}

// Function to toggle italic text
function f3(e) {
    if (textarea.style.fontStyle === "italic") {
        textarea.style.fontStyle = "normal";
        e.classList.remove("active");
    } else {
        textarea.style.fontStyle = "italic";
        e.classList.add("active");
    }
}

// Function to toggle underline text
function f4(e) {
    if (textarea.style.textDecoration === "underline") {
        textarea.style.textDecoration = "none";
        e.classList.remove("active");
    } else {
        textarea.style.textDecoration = "underline";
        e.classList.add("active");
    }
}

// Function to align text left
function f5() {
    textarea.style.textAlign = "left";
}

// Function to align text center
function f6() {
    textarea.style.textAlign = "center";
}

// Function to align text right
function f7() {
    textarea.style.textAlign = "right";
}

// Function to toggle text transform (uppercase)
function f8(e) {
    if (textarea.style.textTransform === "uppercase") {
        textarea.style.textTransform = "none";
        e.classList.remove("active");
    } else {
        textarea.style.textTransform = "uppercase";
        e.classList.add("active");
    }
}

// Function to reset text styles and clear text
function f9() {
    textarea.style.fontWeight = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontStyle = "normal";
    textarea.style.textDecoration = "none";
    textarea.style.textTransform = "none";
    customFilenameInput.value = "";
    textarea.value = "";
}

// Function to change text color
function f10(e) {
    let value = e.value;
    textarea.style.color = value;
}

// Function to save data with custom filename
function saveData() {
    const savedData = textarea.value;
    const customFilename = customFilenameInput.value.trim();

    if (savedData) {
        const filename = customFilename || "savedText.txt";
        const blob = new Blob([savedData], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = filename;

        // Simulate a click on the link to trigger the download
        a.click();

        alert("File saved successfully as " + filename);
    } else {
        alert("Please enter some text before saving.");
    }
}

// Load any saved data on page load
window.addEventListener("load", () => {
    const savedText = localStorage.getItem("savedText");

    if (savedText) {
        textarea.value = savedText;
    }
});

window.addEventListener('load', () => {
    textarea.value = "";
});
