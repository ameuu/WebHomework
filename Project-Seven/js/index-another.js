
// indexOne initial
const control = document.getElementById("control");
const IndexOne = document.getElementById('index-one');
const IndexImg = document.getElementById("index-img");
const p_img00 = "./img/index-one/1.png";
const p_img01 = "./img/index-one/2.png";
const p_img02 = "./img/index-one/3.png";
const p_img03 = "./img/index-one/4.png";
const p_img04 = "./img/index-one/5.png";
const p_img05 = "./img/index-one/6.png";
const p_img06 = "./img/index-one/7.png";
const p_img07 = "./img/index-one/8.png";
const p_img08 = "./img/index-one/9.png";
const p_img09 = "./img/index-one/10.png";
const img00 = document.getElementById("img00");
const img01 = document.getElementById("img01");
const img02 = document.getElementById("img02");
const img03 = document.getElementById("img03");
const img04 = document.getElementById("img04");
const img05 = document.getElementById("img05");
const img06 = document.getElementById("img06");
const img07 = document.getElementById("img07");
const img08 = document.getElementById("img08");
const img09 = document.getElementById("img09");
const IndexBg = document.getElementById("index-bg");
const maxImg = document.getElementById("max-img");
const returnBt = document.getElementById("Return");
const jsbt = document.getElementsByClassName('JS');

const imgPath = {
    0:p_img00, 1:p_img01, 2:p_img02, 3:p_img03, 4:p_img04, 5:p_img05, 6:p_img06, 7:p_img07, 8:p_img08, 9:p_img09
}
const Elements = {
    0:img00, 1:img01, 2:img02, 3:img03, 4:img04, 5:img05, 6:img06, 7:img07, 8:img08, 9:img09
}

// indexTwo initial
const IndexTwo = document.getElementById('index-two');
const selectMenu = document.getElementById('select');
const changeBt = document.getElementsByClassName('js-change');
const viewOne = document.getElementById('view-one');
const viewTwo = document.getElementById('view-two');
const viewThr = document.getElementById('view-thr');
const views = {
    0:viewOne, 1:viewTwo, 2:viewThr
}

// indexThree initial
const IndexThr = document.getElementById('index-thr');
const data = document.getElementById('data');
const add = document.getElementsByClassName("js-add");
const deleteBt = document.getElementsByClassName('js-delete');

/**
 * action
 * @param index
 * @param imgPath
 */
function imgClick() {
    for(let i = 0;i <= 9;i++) {
        Elements[i].onclick = (event) => {
            maxImg.style.backgroundSize = '100%';
            maxImg.style.backgroundImage = 'url('+imgPath[i]+')';
            IndexBg.style.display = "block";
            maxImg.style.display = "block";
        }
    }
    IndexBg.onclick = (event) => {
        IndexBg.style.display = "none";
        maxImg.style.display = "none";
    }
    maxImg.onclick = (event) => {
        IndexBg.style.display = "none";
        maxImg.style.display = "none";
    }
}

function changeBtClick() {
    for(let i = 0;i < changeBt.length;i++){
        changeBt[i].onclick = (event) => {
            changeBt[i].classList.add('js-active');
            views[i].style.display = 'block';
            for(let j = 0;j < changeBt.length;j++){
                if(j!=i){
                    changeBt[j].classList.remove('js-active');
                    views[j].style.display = 'none';
                }
            }
        }
    }
}

function init() {
    IndexBg.style.display = "none";
    maxImg.style.display = "none";
    // data[0].insertBefore();

    for(let i = 0;i < 3;i++){
        views[i].style.display = 'none';
    }

    for(let i = 0;i < deleteBt.length;i++){
        deleteBt[i].onclick = (event) => {
            deleteBt[i].parentNode.parentNode.removeChild(deleteBt[i].parentNode);
        }
    }

    imgClick();
    changeBtClick();

    jsbt[0].onclick = (event) => {
        IndexOne.style.display = 'block';
        IndexTwo.style.display = 'block';
        IndexThr.style.display = 'block';
        control.style.display = 'none';
    }

    add[0].onclick = (event) => {
        var len = data.children.length;
        var newDiv = document.createElement('div');
        var newSpanOne = document.createElement('span');
        var newSpanTwo = document.createElement('span');
        var newDelBt = document.createElement('button');
        newDiv.classList.add('js-info');
        newSpanOne.classList.add('js-order');
        newSpanTwo.classList.add('js-information');
        newDelBt.classList.add('js-delete');
        newSpanOne.innerHTML = len+1;
        newDelBt.innerHTML = 'Delete';
        newDelBt.onclick = (event) => {
            newDelBt.parentNode.parentNode.removeChild(newDelBt.parentNode);
        }
        data.appendChild(newDiv);
        newDiv.appendChild(newSpanOne);
        newDiv.appendChild(newSpanTwo);
        newDiv.appendChild(newDelBt);
    }

    returnBt.onclick = (event) => {
        IndexOne.style.display = 'none';
        IndexTwo.style.display = 'none';
        IndexThr.style.display = 'none';
        control.style.display = 'block';
    }
}

// exec
init();