const header = document.getElementById('productName');
header.textContent = 'ゴミトリ';

const trash_disposal_methods = new Array('', '燃えるゴミ', '資源ゴミ', '燃えないゴミ');

const select = document.querySelector('[name="trash"]');

select.onchange = event => {
  const answer = document.getElementById('answer');
  answer.textContent = trash_disposal_methods[select.selectedIndex];

  const image = document.getElementById('image');
  image.src = 'img/' + select.selectedIndex + '.png';
}