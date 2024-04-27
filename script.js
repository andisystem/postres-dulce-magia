let copyTexts = document.querySelectorAll(".copy-text");

copyTexts.forEach(copyText => {
    let button = copyText.querySelector("button");
    button.addEventListener("click", function () {
        let input = copyText.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function(){
            copyText.classList.remove("active");
        }, 2500);
    });
});