function Create(){
    let container = document.getElementById("container");
    
    container.innerHTML=`<form action="">
    <h1>Area Of Triangle</h1>
    <label>Base:
    <input id="base" type="text" placeholder="base">
     
    </input>
    <br>
    <br>
    </label>
    <label>Height:
         <input id="height" type="text" placeholder="height">
         
        </input>
        </label>
        <br>
        <button id="Button" type="button" onclick="calculate()">Calculate</button>
        <p id="output"></p>
    </form>`
    
    }
    
    Create()
    
    
    
    function calculate(){
        let height = document.getElementById('height').value;
        let base = document.getElementById('base').value;
        let calculate = eval(1/2 * base * height);
        let output = document.getElementById('output')
        // console.log(converter)
        output.innerHTML= calculate + " cm²";
    }
    