var Number;
var Step = 1;
var Display =   document.getElementById('Display');
var Input =     document.getElementById('Input');
var Alert =     document.getElementById('alert');
var Txt =       document.getElementById('Txt');


function Start(obj){
    // < --------------- > alert Step and step ++
    alert(`Step : ${Step}`)
    Step ++;
    // < --------------- >


    // < --------------- > edite color div-alert and text = 0
    Alert.className = 'alert alert-info'
    Alert.innerHTML = '0'
    // < --------------- >


    // < --------------- > edite display form
    var clsstring = `
    ${Display.classList[0]} 
    ${Display.classList[1]}
    ${Display.classList[2]}
    inline`;
    Display.className = clsstring;
    // < --------------- >

    // < --------------- > edite text button and edite onclick
    obj.innerHTML = 'Submit'
    obj.onclick = function(){
        Send();
    }
    // < --------------- >

    SetNumber(); // Set Number Random
}

function Send(){
    var input = parseInt(Input.value);
    var ClassAlert = 'alert '
    // ---------------------

    if(input == Number){ // Check (Number and input)
        ClassAlert+= 'alert-success'
        Alert.className = ClassAlert // edite color div-alert
        var time = setInterval(function(){
            clearInterval(time);
            Start(document.getElementById('Btn'))
        }, 3000)
    }
    
    else{
        ClassAlert+= 'alert-danger'
        Alert.innerHTML = parseInt(Alert.innerHTML) + 1
        Alert.className = ClassAlert
    }
    
}

function SetNumber(){
    Number = Math.floor(Math.random() * 11)
    Txt.innerHTML = 'Enter a number from 0 to 10 to guess the number'
}
