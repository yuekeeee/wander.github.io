let myHeading = document.querySelector('h1')
// myHeading.textContent = 'Hello world!';
let myVariable;
myVariable = '李雷';

//选择语句
if (myHeading === 'chocolate'){
    alert('我最喜欢巧克力冰激凌了.');
}else{
    alert('但是巧克力才是我的最爱啊')
}

//函数
function multiply(num1, num2){
    let result = num1 * num2;
    return result;
}

//事件
document.querySelector('h1').onclick = function(){
    alert('hurt!')
} //其实际调用了一个匿名函数

let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src')
    if (mySrc === 'images/image1.png'){
        myImage.setAttribute('src', 'images/image2.png');
    }else{
        myImage.setAttribute('src', 'images/image1.png')
    }
}
let myButton = document.querySelector('button')
function setUserName(){
    let myName = prompt('请输入你的名字');
    if(!myName||myName===null){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Oh, how nice to meet you, '+ myName
    }
    ;
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let nameInfo = localStorage.getItem('name');
    myHeading.textContent = 'Oh, how nice to meet you, '+ nameInfo;
}
myButton.onclick = function(){
    setUserName();
}
