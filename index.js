const header = document.getElementById('productName');
header.textContent = 'ゴミトリ';

const trash_disposal_methods = new Array('', '燃えるゴミ', '資源化物', '燃えないゴミ', '粗大ゴミ(大)');

// ここはゴミの種類のドロップダウンの選択情報
const select = document.querySelector('[name="trash"]');

select.onchange = event => {
  const answer = document.getElementById('answer');
  answer.textContent = trash_disposal_methods[select.selectedIndex];
  
  //ここがゴミの種類の画像表示
  if (select.selectedIndex != 0) {
    const image = document.getElementById('image');
    image.src = 'img/' + select.selectedIndex + '.png'; 
    image.style = 'display:on';
  }
  else {
    const image = document.getElementById('image');
    image.style = 'display:none';
  }
}
// ここにはゴミのカテゴリのドロップダウンの選択情報
const select_category = document.querySelector('[name="trash_category"]');

//ゴミのカテゴリごとの画像表示
select_category.onchange = event => {
  if (select_category.selectedIndex != 0) {
    const category_image = document.getElementById('category_image');
    category_image.src = 'img/' + select_category.value + '.png';
    category_image.style = 'display:on';
  }
  else {
    const category_image = document.getElementById('category_image');
    category_image.style = 'display:none';
  }
}






  
