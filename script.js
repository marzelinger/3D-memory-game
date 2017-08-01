function startGame(){
        var boxes = ["one", "two" ,"three", "four", "five", "six", "seven", "eight", "nine", "ten","eleven", "twelve"]
        var originalboxes = boxes;
        var gif = {}
        document.getElementById("button").style.display = "none"
        document.getElementById("userInput").style.display= "none"
        document.getElementById("scene").setAttribute("visible", true)
        var searchTerm = document.getElementById("userInput").value;
        fetch("https://api.giphy.com/v1/gifs/search?q="+ searchTerm + "&api_key=dfb264acffa3492f819190272fefc95d&limit=9&rating=pg")
            .then(function(data) {
                return data.json()
            })
        .then(function(json) {
            console.log(json.data)
            var data=[]
            var a = Math.floor(Math.random()*(json.data.length-1))
            data.push(json.data[a])
            console.log(json.data[a])
            json.data.splice(a, 1)
            var b = Math.floor(Math.random()*(json.data.length-1))
            data.push(json.data[b])
            console.log(json.data[b])
            json.data.splice(b, 1)
            var c = Math.floor(Math.random()*(json.data.length-1))
            data.push(json.data[c])
            json.data.splice(c, 1)
            var d = Math.floor(Math.random()*(json.data.length-1))
            data.push(json.data[d])
            json.data.splice(d, 1)
            var e= Math.floor(Math.random()*(json.data.length-1))
            data.push(json.data[e])
            json.data.splice(e, 1)
            var f = Math.floor(Math.random()*(json.data.length-1))
            data.push(json.data[f])
            json.data.splice(f, 1)
            console.log(data)
            var images = []
            var boxVars
            for(var j = 0; j < data.length; j++){
                images.push(data[j].images.fixed_height.url)
                var newimg = document.createElement("img")
                newimg.setAttribute("src", data[j].images.fixed_height.url)
                newimg.setAttribute("id", "gif" + j)
                document.getElementById("assets").appendChild(newimg)
                // console.log(document.getElementById("assets"))

                var element = Math.floor(Math.random()*(boxes.length-1))
                var boxId = boxes[element]
                boxes.splice(element,1)
                var element2 = Math.floor(Math.random()*(boxes.length-1))
                var boxId2 = boxes[element2]
                boxes.splice(element2,1)
                

                gif[boxId] = "#gif" + j
                gif[boxId2] = "#gif" + j
            }
        })
var boxVars = []
var points = 0
var lastClick = ""
var lastBox = ""
var box1 = document.getElementById("one")
box1.addEventListener("click", function(){
    box1.setAttribute("shader", "gif")
    box1.setAttribute('src', gif["one"])
    box1.setAttribute('color', "")
    setTimeout(function(){
        box1.emit('return')
        box1.setAttribute('src', "");
        if(lastClick == gif["one"] && lastBox != box1){
            if(box1.getAttribute("color")!="green"){
                points++
                console.log(points)
                if(points == 6 ){
                    document.getElementById("win").setAttribute("visible", true)
                }
            }
            box1.setAttribute('color', "green");
            lastBox.setAttribute('color', "green")
        }
        else{
        box1.setAttribute('color', "tomato");
        }
        box1.setAttribute("shader", "")
        lastClick = gif["one"]
        lastBox = box1
    }, 2000);

})
var box2 = document.getElementById("two")
box2.addEventListener("click", function(){
    box2.setAttribute("shader", "gif")
    box2.setAttribute('src', gif["two"])
    box2.setAttribute('color', "")
    setTimeout(function(){
        box2.emit('return')
        box2.setAttribute('src', "");
        if(lastClick == gif["two"] && lastBox != box2){
            if(box2.getAttribute("color")!="green"){
                points++
                console.log(points)
                if(points == 6 ){
                    document.getElementById("win").setAttribute("visible", true)
                }
            }
            box2.setAttribute('color', "green");
            lastBox.setAttribute('color', "green")
        }
        else{
        box2.setAttribute('color', "tomato");
        }
        box2.setAttribute("shader", "")
        lastClick = gif["two"]
        lastBox = box2
    }, 2000);

})
var box3 = document.getElementById("three")
box3.addEventListener("click", function(){
    box3.setAttribute("shader", "gif")
    box3.setAttribute('src', gif["three"])
    box3.setAttribute('color', "")
    setTimeout(function(){
        box3.emit('return')
        box3.setAttribute('src', "");
        if(lastClick == gif["three"] && lastBox != box3){
            if(box3.getAttribute("color")!="green"){
                points++
                console.log(points)
                if(points == 6){
                    document.getElementById("win").setAttribute("visible", true)
                }
            }
            box3.setAttribute('color', "green");
            lastBox.setAttribute('color', "green")
        }
        else{
        box3.setAttribute('color', "tomato");
        }
        box3.setAttribute("shader", "")
        lastClick = gif["three"]
        lastBox = box3
    }, 2000);
})
var box4 = document.getElementById("four")
box4.addEventListener("click", function(){
    box4.setAttribute("shader", "gif")
    box4.setAttribute('src', gif["four"])
    box4.setAttribute('color', "")
    setTimeout(function(){
        box4.emit('return')
        box4.setAttribute('src', "");
        if(lastClick == gif["four"] && lastBox != box4){
            if(box4.getAttribute("color")!="green"){
                points++
                console.log(points)
                if(points == 6){
                    document.getElementById("win").setAttribute("visible", true)
                }
            }
            box4.setAttribute('color', "green");
            lastBox.setAttribute('color', "green")
        }
        else{
        box4.setAttribute('color', "tomato");
        }
        box4.setAttribute("shader", "")
        lastClick = gif["four"]
        lastBox = box4
    }, 2000);
})
var box5 = document.getElementById("five")
box5.addEventListener("click", function(){
    box5.setAttribute("shader", "gif")
    box5.setAttribute('src', gif["five"])
    box5.setAttribute('color', "")
    setTimeout(function(){
        box5.emit('return')
        box5.setAttribute('src', "");
        if(lastClick == gif["five"] && lastBox != box5){
            if(box5.getAttribute("color")!="green"){
                points++
                console.log(points)
                if(points == 6){
                    document.getElementById("win").setAttribute("visible", true)
                }
            }
            box5.setAttribute('color', "green");
            lastBox.setAttribute('color', "green")
        }
        else{
        box5.setAttribute('color', "tomato");
        }
        box5.setAttribute("shader", "")
        lastBox = box5
        lastClick = gif["five"]
    }, 2000);
})
var box6 = document.getElementById("six")
box6.addEventListener("click", function(){
    box6.setAttribute("shader", "gif")
    box6.setAttribute('src', gif["six"])
    box6.setAttribute('color', "")
    setTimeout(function(){
        box6.emit('return')
        box6.setAttribute('src', "");
        if(lastClick == gif["six"] && lastBox != box6){
            if(box6.getAttribute("color")!="green"){
                points++
                console.log(points)
                if(points == 6){
                    document.getElementById("win").setAttribute("visible", true)
                }
            }
            box6.setAttribute('color', "green");
            lastBox.setAttribute('color', "green")
        }
        else{
        box6.setAttribute('color', "tomato");
        }
        box6.setAttribute("shader", "")
        lastBox = box6
        lastClick = gif["six"]
    }, 2000);
})
var box7 = document.getElementById("seven")
box7.addEventListener("click", function(){
    box7.setAttribute("shader", "gif")
    box7.setAttribute('src', gif["seven"])
    box7.setAttribute('color', "")
    setTimeout(function(){
        box7.emit('return')
        box7.setAttribute('src', "");
        if(lastClick == gif["seven"] && lastBox != box7){
            if(box7.getAttribute("color")!="green"){
                points++
                console.log(points)
                if(points == 6){
                    document.getElementById("win").setAttribute("visible", true)
                }
            }
            box7.setAttribute('color', "green");
            lastBox.setAttribute('color', "green")
        }
        else{
        box7.setAttribute('color', "tomato");
        }
        box7.setAttribute("shader", "")
        lastBox = box7
        lastClick= gif["seven"]
    }, 2000);
})
var box8 = document.getElementById("eight")
box8.addEventListener("click", function(){
    box8.setAttribute("shader", "gif")
    box8.setAttribute('src', gif["eight"])
    box8.setAttribute('color', "")
    setTimeout(function(){
        box8.emit('return')
        box8.setAttribute('src', "");
        if(lastClick == gif["eight"] && lastBox != box8){
            if(box8.getAttribute("color")!="green"){
                points++
                console.log(points)
                if(points == 6){
                    document.getElementById("win").setAttribute("visible", true)
                }
            }
            box8.setAttribute('color', "green");
            lastBox.setAttribute('color', "green")
        }
        else{
        box8.setAttribute('color', "tomato");
        }
        box8.setAttribute("shader", "")
        lastBox = box8
        lastClick= gif["eight"]
    }, 2000);
})
var box9 = document.getElementById("nine")
box9.addEventListener("click", function(){
    box9.setAttribute("shader", "gif")
    box9.setAttribute('src', gif["nine"])
    box9.setAttribute('color', "")
    setTimeout(function(){
        box9.emit('return')
        box9.setAttribute('src', "");
        if(lastClick == gif["nine"] && lastBox != box9){
            if(box9.getAttribute("color")!="green"){
                points++
                console.log(points)
                if(points == 6){
                    document.getElementById("win").setAttribute("visible", true)
                }
            }
            box9.setAttribute('color', "green");
            lastBox.setAttribute('color', "green")
        }
        else{
        box9.setAttribute('color', "tomato");
        }
        box9.setAttribute("shader", "")
        lastBox = box9
        lastClick= gif["nine"]
    }, 2000);
})
var box10 = document.getElementById("ten")
box10.addEventListener("click", function(){
    box10.setAttribute("shader", "gif")
    box10.setAttribute('src', gif["ten"])
    box10.setAttribute('color', "")
    setTimeout(function(){
        box10.emit('return')
        box10.setAttribute('src', "");
        if(lastClick == gif["ten"] && lastBox != box10){
            if(box10.getAttribute("color")!="green"){
                points++
                console.log(points)
                if(points == 6){
                    document.getElementById("win").setAttribute("visible", true)
                }
            }
            box10.setAttribute('color', "green");
            lastBox.setAttribute('color', "green")
        }
        else{
        box10.setAttribute('color', "tomato");
        }
        box10.setAttribute("shader", "")
        lastBox = box10
        lastClick = gif["ten"]
    }, 2000);
})
var box11 = document.getElementById("eleven")
box11.addEventListener("click", function(){
    box11.setAttribute("shader", "gif")
    box11.setAttribute('src', gif["eleven"])
    box11.setAttribute('color', "")
    setTimeout(function(){
        box11.emit('return')
        box11.setAttribute('src', "");
        if(lastClick == gif["eleven"] && lastBox != box11){
            if(box11.getAttribute("color")!="green"){
                points++
                console.log(points)
                if(points == 6){
                    document.getElementById("win").setAttribute("visible", true)
                }
            }
            box11.setAttribute('color', "green");
            lastBox.setAttribute('color', "green")
        }
        else{
        box11.setAttribute('color', "tomato");
        }
        box11.setAttribute("shader", "")
        lastBox = box11
        lastClick = gif["eleven"]
    }, 2000);
})
var box12 = document.getElementById("twelve")
box12.addEventListener("click", function(){
    box12.setAttribute("shader", "gif")
    box12.setAttribute('src', gif["twelve"])
    box12.setAttribute('color', "")
    setTimeout(function(){
        box12.emit('return')
        box12.setAttribute('src', "");
        if(lastClick == gif["twelve"] && lastBox != box12){
            if(box12.getAttribute("color")!="green"){
                points++
                console.log(points)
                if(points == 6){
                    document.getElementById("win").setAttribute("visible", true)
                }
            }
            box12.setAttribute('color', "green");
            lastBox.setAttribute('color', "green")
        }
        else{
        box12.setAttribute('color', "tomato");
        }
        box12.setAttribute("shader", "")
        lastBox = box12
        lastClick = gif["twelve"]
    }, 2000);
})

}

var spin = false
var clicks = 0;
function changeSpin(){
    if(clicks == 0){
        clicks++
    }
    if(clicks == 1){
        spin = true;
        clicks = 0;
    }
    
}
while(clicks == 0){
    var cam = document.getElementById("cam")
    var camRot = cam.getAttribute("rotation")
    var newCamy = camRot.y + 3
    cam.setAttribute("rotation",camRot.x + " " + newCamy + " " + camRot.z )
}