const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const botResult = document.querySelector(".bot_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");

const botImages = ["rock.png", "paper.png", "scissors.png"];
const outcomes = {
    RR: "seri bos",
    RP: "yah kalah",
    RS: "anjay menang",
    PP: "seri bos",
    PR: "anjay menang",
    PS: "yah kalah",
    SS: "seri bos",
    SR: "yah kalah",
    SP: "anjay menang"
};

function handleOptionClick(event) {
    const clickedImage = event.currentTarget;
    const clickedIndex = Array.from(optionImages).indexOf(clickedImage);

    userResult.src = botResult.src = "rock.png";
    result.textContent = "tunggu...";

    optionImages.forEach((image, index) => {
    image.classList.toggle("active", index === clickedIndex);
});

    gameContainer.classList.add("start");
        setTimeout(() => {
        gameContainer.classList.remove("start");
    
        const userImageSrc = clickedImage.querySelector("img").src;
        userResult.src = userImageSrc;
    
        const randomNumber = Math.floor(Math.random() * botImages.length);
    
        const botImageSrc = botImages[randomNumber];
        botResult.src = botImageSrc;

        const userValue = ["R", "P", "S"][clickedIndex];
        const botValue = ["R", "P", "S"][randomNumber];
        const outcomeKey = userValue + botValue;
        const outcome = outcomes[outcomeKey] || "Unknown";

        result.textContent = userValue === botValue ? "seri bos" : `${outcome} `;
    }, 2500);
}

optionImages.forEach(image => {
    image.addEventListener("click", handleOptionClick);
});