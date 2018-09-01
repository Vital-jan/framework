function writeRound(s, x, y, size, radius, start, sector, userStyle) {
    // возвращаеи html-код для отрисовки текста по радиусу.
    // writeRound (<текст>,<коорд x>,<коорд y>,<разм. шрифта>,<радиус>,<нач. угол>,<сектор> [,<польз. css>])
    // s - строка текста;
    // x, y - координаты центра окружности базовой линии текста в px;
    // size - размер шрифта в px;
    // radius - радиус окружности базовой линии текста в px;
    // start - начальный угол поворота текста в deg;
    // sector - угол сектора окружности, в котором размещается текст;
    //          положительное значение - по часовой стрелке, и наоборот.
    // userStyle - необязательный параметр - пользовательский css стиль;
    var t = '';
    var direction = sector / Math.abs(sector);
    var charStyle = `
        position: absolute;
        text-align:center;
        width: ${size}px;
        height: ${size}px;
        font-size:${size}px;
        top: ${y + radius * -direction - size / 2}px;
        left: ${x - size / 2}px;
        transform-origin: ${size / 2}px ${radius * direction + size / 2}px;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        `;
    var deg = start - 180 * (direction - 1) / -2;
    var degPlus = (start + sector - start)/(s.length-1);
    for (var n = 0; n < s.length; n++) {
        var charStyle2 =` transform: rotate(${deg}deg);`;
        deg += degPlus;
        t += `<div style='${charStyle} ${charStyle2} ${userStyle}'>${s[n]}</div>`;
    }
    return t;
}
