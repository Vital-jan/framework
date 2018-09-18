//=================================================================================
    function writeRound(s, x, y, size, radius, start, sector, userStyle) {
//=================================================================================
    // возвращает html-код для отрисовки текста по радиусу.
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

//=================================================================================
    function starRateWrite (rate = 0, path = 'http://explorer.org.ua/framework/img/') {
//=================================================================================
    // отображает рейтинг в виде частично закрашенных звезд по 5-бальной шкале
    // rate - рейтинг (число от 0 до 5 с 1 знаком после запятой)
    // path - путь к изображениям left.png и right.png
    // возвращает html-код
    function starRate (k, path) {
        // вспомагательная функция для starRateWrite
        // отрисовка 1-й звезды;
        // k - число от 0 до 1
            starDiv = `
            overflow: hidden;
            position: relative;
            display: block;
            height: 20px;`;
            starSpan = `
            position: relative;
            display: inline-block;
            width: 20px;
            `;
            starImg = `
            width: 20px;
            height: 20px;
            display: block;
            `;
            k *= 20;
            right = k;
            left = 20 - k;
            s=`
            <div style='width:${right}px; ${starDiv}'>
                <span style='${starSpan}'> <img style='${starImg}' src="${path}left.png">
                </span>
            </div>
            <div style='width:${left}px; ${starDiv}'>
                <span style='${starSpan} left:-${right}px;'> <img style='${starImg}' src="${path}right.png">
                </span>
            </div>
            `;

            return s;
        }
    var s = '';
    for (var i = 1; i <= 5; i++) {
        var x = 0;
        if (i < rate) x = 1;
        if (i == rate) x = 1;
        if (i < rate & i == Math.floor(rate)) x = Math.floor((rate - i) * 10) / 10;
        if (i >Math.ceil(rate)) x = 0;
        s += (starRate(x, path));
    }
    s = `<div style='
        display: flex;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        justify-content:center;
        width: 100px;
        height: 20px;
    '>${s}</div>`;
    return s;
    }
// ========================================================================
    function $_ (s) { // возвращает ссылку на document.getElementById(s)
// ========================================================================

        return document.getElementById(s);
    }
//======================================================================
    function toNumber (a) { //преобразует строку в число, отбрасывая все ненужные символы в перед и после цифр.
//======================================================================
// если строка не содержит цифр, возвращает NaN ()
        if (a.length == 0) return NaN;
        while (isNaN(parseFloat(a)) &a.length > 0) a = a.substring(1,a.length);
        a = parseFloat(a);
        return a;
    }
// ========================================================================
    function numberToString (num, dec = 0) { //возвращает строку в виде числа с разделителями групп разрядов
// ========================================================================

        // numberToString (num [,dec])
        // num - исходное число (вещественное), dec - к-во знаков после десятичной точки, необязательный аргумент.
        num = 0 + toNumber(num);
        if (isNaN(num)) return NaN;
        dec = Math.abs(dec);
        var res = num < 0 ? '-' : '';
        num = Math.abs(num).toFixed(dec);
        var end = dec > 0 ? num.substr(num.indexOf('.', dec)) : '';
        var end = dec > 0 ? `.${num.substr(num.length - dec, dec)}` : '';
        num = dec > 0 ? num.substr(0, num.length - dec - 1) : num;
    
        var arr = num.split('');
        arr.forEach(function(item, n, arr) {
            if ((arr.length - n) % 3 == 0 & n != 0) res += ' ';
            res += item;
        });
        return res + end;
    }
//======================================================================
// возвращает случайное целое число между <min> и <max> включительно.
    function rnd (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

