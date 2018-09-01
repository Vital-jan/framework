function writeRound(s, x, y, size, radius, start, end, userStyle) {
    // возвращаеи html-код для отрисовки текста по радиусу.
    // writeRound (<текст>,<коорд x>,<коорд y>,<разм. шрифта>,<радиус>,<нач. угол>,<кон. угол>, <направление> [,<польз. css>])
    // s - строка текста;
    // x, y - координаты центра окружности базовой линии текста в px;
    // size - размер шрифта в px;
    // radius - радиус окружности базовой линии текста в px;
    // start, end - начальный и конечный угол сегмента окружности базовой линии текста в deg;
    // userStyle - необязательный параметр - пользовательский css стиль;
    var t = '';
    var direction = start < end ? 1 : -1;
    var charStyle = `
        position: absolute;
        text-align:center;
        width: ${size}px;
        height: ${size}px;
        font-size:${size}px;
        top: ${y + radius * -direction - size / 2}px;
        left: ${x - size / 2}px;
        transform-origin: ${size / 2}px ${radius * direction + size / 2}px;
        border: 1px solid black;
        margin: 0;
        padding: 0;
        `;
    var deg = start - 180 * (direction - 1) / -2;
    var degPlus = (end-start)/(s.length-1);
    for (var n = 0; n < s.length; n++) {
        var charStyle2 =` transform: rotate(${deg}deg);`;
        deg += degPlus;
        t += `<div style='${charStyle} ${charStyle2} ${userStyle}'>${s[n]}</div>`;
    }
    return t;
}
