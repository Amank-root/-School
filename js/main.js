                    // footer //               


var foot =  '<footer class="text-gray-400 bg-gray-900 body-font">'+
                '<div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">'+
                    '<a class="flex title-font font-medium items-center md:justify-start justify-center text-white">'+
                        '<img src="./img/icons8-book-64.png" alt="" />'+
                        '<span class="ml-3 text-xl">My Data</span>'+
                    '</a>'+
                    '<p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">&copy; 2020 My Data —'+
                        '<a href="https://instagram.com/amankushwaha_28" class="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@AmanKushwaha_28</a>'+
                    '</p>'+
                    '<span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">'+
                        '<a class="text-gray-400 ico" href="https://www.instagram.com/amankushwaha_28">'+
                            '<img src="https://img.icons8.com/nolan/50/instagram-new.png">'+
                        '</a>'+
                        '<a class="ml-3 text-gray-400 ico toltipp">'+
                            '<span class="toltipptext">Unable On This Platform!</span>'+
                            '<img src="https://img.icons8.com/nolan/50/facebook-circled.png">'+
                        '</a>'+
                        '<a class="ml-3 text-gray-400 ico" href="https://github.com/Amank-root">'+
                            '<img src="https://img.icons8.com/nolan/50/github.png">'+
                        '</a>'+
                    '</span>'+
                '</div>'+
            '</footer>';


document.getElementById("foot").innerHTML = foot

                            // End footer //

                        // start of Fake_Users //

// if (sessionStorage.passcode === "Something Useless") {
//     passcode = none
// }
// else{
//     var passcode = prompt('Something To Say!!');
//     sessionStorage.setItem('passcode', passcode)
//     if (sessionStorage.passcode === "Something Useless") {
//       dash = confirm('Your Page Is Loaded On Your Screen.')
//       console.log('Lucifer Here.');
//       console.log(dash)
//       if (sessionStorage.passcode != "Something Useless"){
//           document.documentElement.remove()
//       }
//     }
//     else {
//       confirm('Wait A Bit Your Site Is On The Way!!!')
//       document.querySelector('Body').innerHTML = '';
//       var tag = document.createElement("p");
//       tag.setAttribute("id","Hell");
//       var text = document.createTextNode("Wrong input check the source code for the correct input!! 😛😛");
//       tag.appendChild(text);
//       var element = document.getElementById("bash");
//       document.querySelector('Body').appendChild(tag);
//     }
// }

//                         // End of Fake_Users //


//                         // Not Known Links //

MyName = document.getElementById('MyName')

MyName.addEventListener("click", () => {
    location = 'https://amankushwaha.tk/about'
})