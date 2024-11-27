document.getElementById('searchbutton').addEventListener('click', function() {
    var input = document.getElementById('searchbox').value.toLowerCase();
    if (!input) return; // 空の入力を無視します。

    var elements = document.querySelectorAll('p, td, th, h3'); // 検索対象の要素を選択します
    var found = false; // マッチした要素が見つかったかどうかのフラグ

    elements.forEach(element => {
        if (element.querySelector("span.search-highlight")) {
            element.innerHTML = element.textContent; // 以前の検索結果をリセット
        }

        var text = element.textContent.toLowerCase();
        var index = text.indexOf(input);

        if (index >= 0 && !found) {
            found = true;
            element.scrollIntoView({ behavior: 'smooth', block: 'center' }); // 要素を画面の中央にスクロールします
        }

        const regex = new RegExp(`(${input})`, 'gi');
        element.innerHTML = element.innerHTML.replace(regex, '<span style="background-color: #ffe46f;">$1</span>'); // ハイライトを適用します
    });
});
