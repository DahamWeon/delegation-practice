
const contents = getNode('.contents');
const textField = getNode('#comment37');

function clearText(target){
  target.value="";
}

function handler(e){
  let target = e.target;

  // console.log(target);
  // 데이터 네임이 있는 부모가 있을 때까지 찾아 올라감
  while(!attr(target,'data-name')){
    target = target.parentNode;

    if(target.nodeName === 'BODY'){
      target = null;
      return;
    }
  }

  if(target.dataset.name === 'like'){
    console.log('like');
    toggleClass(target,'active');
  }

  if(target.dataset.name === 'comment'){
    textField.focus();
  }

  if(target.dataset.name === 'send'){
    console.log(textField.value);
    if(textField.value === ''){
      console.log('입력해주세요');
      return;
    }
    let template = `
    <div class="id">
    <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
        <div class="comment_field">
            <div class="text_container">
                <div class="name"><a href="#">십란</a></div>
                <div class="text_field">${textField.value}</div>
            </div>
        </div>
    </div>
    `
    insertLast('.comment_container',template);
    clearText(textField);
  }
}

contents.addEventListener('click',handler)

// Enter 키로 입력 전송하기
textField.addEventListener('keydown',(e)=>{

  if(e.keyCode === 13){
    textField.value

    let template = `
      <div class="id">
      <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
          <div class="comment_field">
              <div class="text_container">
                  <div class="name"><a href="#">심선범</a></div>
                  <div class="text_field">${textField.value}</div>
              </div>
          </div>
      </div>
      `
      insertLast('.comment_container',template);

      clearText(textField)
  }
})

// const off = bindEvent(contents,'click',handler)


















