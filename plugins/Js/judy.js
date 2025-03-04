document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = window.scrollY; // 記錄滾動位置
    let btn = document.createElement("button");
    btn.className = "button-60";
    btn.innerText = "Judy說要減肥";
    btn.style.position = "fixed";
    btn.style.bottom = "50px";
    btn.style.right = "50px";
    btn.style.padding = "10px 20px";
    btn.style.fontSize = "16px";
    btn.style.background = "#dbdbdb";
    btn.style.color = "#fff";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    btn.style.display="none";
    
    document.body.appendChild(btn);

    window.addEventListener("scroll", function () {
        let currentScroll = window.scrollY;
        if (currentScroll < lastScrollTop) { 
            // 滾輪向上
            btn.style.display = "block";
        }
        lastScrollTop = currentScroll;
    });

    btn.addEventListener("click", function () {
       

        let judy = document.createElement("img");
        judy.src = "/images/judy.png"; 
        judy.style.position = "absolute";
        judy.style.bottom = "10px";
        judy.style.left = "-100px";
        judy.style.width = "150px";
        document.body.appendChild(judy);

        let pos = -100;
        function moveJudy() {
            pos += 5;
            judy.style.left = pos + "px";
            if (pos < window.innerWidth) {
                requestAnimationFrame(moveJudy);
            } 
        }
        moveJudy();
    });
});
