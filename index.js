const header = document.getElementById('productName');
header.textContent = 'ゴミトリ';

const trash_disposal_methods = new Array('資源ゴミ', '資源ゴミ', '資源ゴミ');

const select = document.querySelector('[name="trash"]');

select.onchange = event => {
  const answer = document.getElementById('answer');
  answer.textContent = trash_disposal_methods[select.selectedIndex];
}