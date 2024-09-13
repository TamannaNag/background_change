document.getElementById('btn1').addEventListener('click', function(){
    var happy = document.getElementById('p');
    happy.textContent = 'Background color: red';
    document.getElementById('you').style.backgroundImage = "url('image5.jpg')" ;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
})

document.getElementById('btn2').addEventListener('click', function(){
    var btn = document.getElementById('p');
    btn.textContent = 'Background color: pink';
    document.getElementById('you').style.backgroundImage = "url('image3.jpg')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
})

document.getElementById('btn3').addEventListener('click', function(){
    var p = document.getElementById('p');
    p.textContent = 'Background color: green';
    document.getElementById('you').style.backgroundImage = "url('image4.jpg')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    

})

document.getElementById('btn4').addEventListener('click', function(){
    var u = document.getElementById('p');
    u.textContent =  'Background color: blue';
    document.getElementById('you').style.backgroundImage = "url('image2.jpg')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
})

document.getElementById('btn5').addEventListener('click', function(){
    var u = document.getElementById('p');
    u.textContent =  'Background color: orange';
    document.getElementById('you').style.backgroundImage = "url('image1.jpg')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
})

let r = document.getElementById('btn1');
    r.style.color = 'red';
    r.style.fontSize = "30px";
    r.style.borderRadius = '19px 1px'
let p = document.getElementById('btn2');
    p.style.color = 'pink';
    p.style.fontSize = '30px';
    p.style.borderRadius = '19px 1px'
     
let g = document.getElementById('btn3')
    g.style.color = 'green';
    g.style.fontSize = "30px"
    g.style.borderRadius = '19px 1px'
let b = document.getElementById('btn4');
    b.style.color = 'blue';
    b.style.fontSize = '30px'
    b.style.borderRadius = '19px 1px'
let o = document.getElementById('btn5');
    o.style.color = 'orange';
    o.style.fontSize = '30px'
    o.style.borderRadius = '19px 1px'
