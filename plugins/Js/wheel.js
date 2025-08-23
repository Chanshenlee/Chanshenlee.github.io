const canvas = document.getElementById("wheelCanvas");
const ctx = canvas.getContext("2d");
const resultDiv = document.getElementById("result");
let rotation = 0;

// ✅ 食物選項（可自行更換）
let options = ["壽司", "拉麵", "牛肉麵", "韓式炸雞", "鍋燒意麵", "燒肉", "咖哩飯", "滷肉飯"];

// ✅ 設計用配色（極簡灰階＋橘）
const colors = ["#ececec", "#ff914d"];

function drawWheel() {
  const radius = canvas.width / 2;
  const angle = 2 * Math.PI / options.length;

  for (let i = 0; i < options.length; i++) {
    ctx.beginPath();
    ctx.moveTo(radius, radius);
    ctx.fillStyle = colors[i % 2]; // 交錯用灰與橘
    ctx.arc(radius, radius, radius, i * angle, (i + 1) * angle);
    ctx.fill();

    // 寫文字
    ctx.save();
    ctx.translate(radius, radius);
    ctx.rotate(i * angle + angle / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#333";
    ctx.font = "bold 14px 'Noto Sans TC', sans-serif";
    ctx.fillText(options[i], radius - 12, 4);
    ctx.restore();
  }
}
drawWheel();

canvas.addEventListener("click", () => {
  const spinAngle = Math.random() * 360 + 720;
  const finalAngle = (rotation + spinAngle) % 360;
  rotation += spinAngle;

  canvas.style.transition = "transform 3s ease-out";
  canvas.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    const sectorAngle = 360 / options.length;
    const pickedIndex = Math.floor((360 - (finalAngle % 360)) / sectorAngle) % options.length;
    resultDiv.innerText = `今天吃：${options[pickedIndex]} 🍽️`;
  }, 3100);
});
