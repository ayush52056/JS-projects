// // Future JavaScript will go here
// 'use strict'


// window.onload=function(){

// const t = document.querySelector('.ok');
// const links = document.querySelector('#button1')
// let d = {}
// const addMoreLinks = document.querySelector('#button2')
// const buttons = document.querySelector('.button')
// // to add more Links

// addMoreLinks.addEventListener('click',function(){

//    const html = `<li style="display: flex; padding-left: 10px; ">
//     <input style="width: 80px; height: 23px; font: 1em sans-serif; box-sizing: border-box; border: 1px solid #999;" type="text" id="name" name="lname" value="Name" /><br /><br />
//     <input style="width: 235px; height: 23px; " type="text" id="link" name="link" value="Link Comes here" /><br /><br />
//     <button class="remove" style="width: 25px; height: 23px;" type="button" onclick="return this.parentNode.remove();" class="remove">X</button>
//     </li>`
//   buttons.insertAdjacentHTML('beforebegin', html);

// })

// links.addEventListener('click',function() {
//     const link = document.querySelectorAll('li')
//     console.log(link)
//     link.forEach(element => {
//         let name = element.childNodes[1].innerText
//         let link =  element.childNodes[3].value
//         if ((name.length > 0 ) && (link.length>0)){
//             d[name] = link
//             // console.log(name,link)

//         }
//     });
//    localStorage['some'] = JSON.stringify(d)

//    var stored = localStorage['some'];

//    if (stored) d = JSON.parse(stored);
//    else d = {} ;
//    console.log(d)
// })



// t.addEventListener("click",function() {
//     let text = t.previousElementSibling.value
//     if (text){
//         console.log(text)
//     }else
//     console.log('NOtOk');
// });
//   }