        var boxes = ["one", "two" ,"three", "four", "five", "six", "seven", "eight", "nine", "ten","eleven", "twelve"]
        var originalboxes = boxes;
        var gif = {}
        fetch("https://api.giphy.com/v1/gifs/search?q=pizza&api_key=dfb264acffa3492f819190272fefc95d&limit=6")
            .then(function(data) {
                return data.json()
            })
        .then(function(json) {
            console.log(json)
            var data = json.data
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


var box1 = document.getElementById("one")
box1.addEventListener("click", function(){
    box1.setAttribute("shader", "gif")
    box1.setAttribute('src', gif["one"])
    box1.setAttribute('color', "")
    setTimeout(function(){
        box1.emit('return')
        box1.setAttribute('src', "");
        box1.setAttribute('color', "tomato");
        box1.setAttribute("shader", "")
    }, 3000);
})
var box2 = document.getElementById("two")
box2.addEventListener("click", function(){
    box2.setAttribute("shader", "gif")
    box2.setAttribute('src', gif["two"])
    box2.setAttribute('color', "")
    setTimeout(function(){
        box2.emit('return')
        box2.setAttribute('src', "");
        box2.setAttribute('color', "tomato");
        box2.setAttribute("shader", "")
    }, 3000);
})
var box3 = document.getElementById("three")
box3.addEventListener("click", function(){
    box3.setAttribute("shader", "gif")
    box3.setAttribute('src', gif["three"])
    box3.setAttribute('color', "")
    setTimeout(function(){
        box3.emit('return')
        box3.setAttribute('src', "");
        box3.setAttribute('color', "tomato");
        box3.setAttribute("shader", "")
    }, 3000);
})
var box4 = document.getElementById("four")
box4.addEventListener("click", function(){
    box4.setAttribute("shader", "gif")
    box4.setAttribute('src', gif["four"])
    box4.setAttribute('color', "")
    setTimeout(function(){
        box4.emit('return')
        box4.setAttribute('src', "");
        box4.setAttribute('color', "tomato");
        box4.setAttribute("shader", "")
    }, 3000);
})
var box5 = document.getElementById("five")
box5.addEventListener("click", function(){
    box5.setAttribute("shader", "gif")
    box5.setAttribute('src', gif["five"])
    box5.setAttribute('color', "")
    setTimeout(function(){
        box5.emit('return')
        box5.setAttribute('src', "");
        box5.setAttribute('color', "tomato");
        box5.setAttribute("shader", "")
    }, 3000);
})
var box6 = document.getElementById("six")
box6.addEventListener("click", function(){
    box6.setAttribute("shader", "gif")
    box6.setAttribute('src', gif["six"])
    box6.setAttribute('color', "")
    setTimeout(function(){
        box6.emit('return')
        box6.setAttribute('src', "");
        box6.setAttribute('color', "tomato");
        box6.setAttribute("shader", "")
    }, 3000);
})
var box7 = document.getElementById("seven")
box7.addEventListener("click", function(){
    box7.setAttribute("shader", "gif")
    box7.setAttribute('src', gif["seven"])
    box7.setAttribute('color', "")
    setTimeout(function(){
        box7.emit('return')
        box7.setAttribute('src', "");
        box7.setAttribute('color', "tomato");
        box7.setAttribute("shader", "")
    }, 3000);
})
var box8 = document.getElementById("eight")
box8.addEventListener("click", function(){
    box8.setAttribute("shader", "gif")
    box8.setAttribute('src', gif["eight"])
    box8.setAttribute('color', "")
    setTimeout(function(){
        box8.emit('return')
        box8.setAttribute('src', "");
        box8.setAttribute('color', "tomato");
        box8.setAttribute("shader", "")
    }, 3000);
})
var box9 = document.getElementById("nine")
box9.addEventListener("click", function(){
    box9.setAttribute("shader", "gif")
    box9.setAttribute('src', gif["nine"])
    box9.setAttribute('color', "")
    setTimeout(function(){
        box9.emit('return')
        box9.setAttribute('src', "");
        box9.setAttribute('color', "tomato");
        box9.setAttribute("shader", "")
    }, 3000);
})
var box10 = document.getElementById("ten")
box10.addEventListener("click", function(){
    box10.setAttribute("shader", "gif")
    box10.setAttribute('src', gif["ten"])
    box10.setAttribute('color', "")
    setTimeout(function(){
        box10.emit('return')
        box10.setAttribute('src', "");
        box10.setAttribute('color', "tomato");
        box10.setAttribute("shader", "")
    }, 3000);
})
var box11 = document.getElementById("eleven")
box11.addEventListener("click", function(){
    box11.setAttribute("shader", "gif")
    box11.setAttribute('src', gif["eleven"])
    box11.setAttribute('color', "")
    setTimeout(function(){
        box11.emit('return')
        box11.setAttribute('src', "");
        box11.setAttribute('color', "tomato");
        box11.setAttribute("shader", "")
    }, 3000);
})
var box12 = document.getElementById("twelve")
box12.addEventListener("click", function(){
    box12.setAttribute("shader", "gif")
    box12.setAttribute('src', gif["twelve"])
    box12.setAttribute('color', "")
    setTimeout(function(){
        box12.emit('return')
        box12.setAttribute('src', "");
        box12.setAttribute('color', "tomato");
        box12.setAttribute("shader", "")
    }, 3000);
})


