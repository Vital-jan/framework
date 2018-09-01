function writeRound(s, x, y, size, radius, start, end, userStyle) {
    // возвращаеи html-код для отрисовки текста по радиусу.
    // writeRound (<текст>,<коорд x>,<коорд y>,<разм. шрифта>,<радиус>,<нач. угол>,<кон. угол>[,<польз. css>])
    // s - строка текста;
    // x, y - координаты центра окружности базовой линии текста в px;
    // size - размер шрифта в px;
    // radius - радиус окружности базовой линии текста в px;
    // start, end - начальный и конечный угол сегмента окружности базовой линии текста в deg;
    // userStyle - необязательный параметр - пользовательский css стиль;
    var t = '';
    var charStyle = `
        position: absolute;
        text-align:center;
        width: ${size}px;
        height: ${size}px;
        font-size:${size}px;
        top: ${y}px;
        left: ${x}px;
        transform-origin: ${size/2}px ${radius}px;`;
    var deg = start;
    var degPlus = (end-start)/(s.length-1);
    for (var n = 0; n < s.length; n++) {
        var charStyle2 = ` transform: rotate(${deg}deg);`;
        deg += degPlus;
        t += `<div style='${charStyle} ${charStyle2} ${userStyle}'>${s[n]}</div>`;
    }
    return t;
}
