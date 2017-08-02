var began = false

function startGame(){
        var boxes = ["one", "two" ,"three", "four", "five", "six", "seven", "eight", "nine", "ten","eleven", "twelve"]
        var originalboxes = boxes;
        var gif = {}
        document.getElementById("input").style.display = "none"
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

for(var i = 1; i < 13;i++){
    boxVars[i-1] = document.getElementById(originalboxes[i-1])
    boxVars[i-1].addEventListener("click", function(){
        if(!began){
            countdown()
            began = true
        }
        this.setAttribute("shader", "gif")
        this.setAttribute('src', gif[this.getAttribute("id")])
        this.setAttribute('color', "")
        var currBox = this
        setTimeout(function(){
            currBox.emit('return')
            currBox.setAttribute('src', "");
                if(lastClick == gif[currBox.getAttribute("id")] && lastBox != currBox){
                    if(currBox.getAttribute("color")!="green"){
                        points++
                        console.log(points)
                        if(points == 6 ){
                            stop("win")
                        }
                    }
                    currBox.setAttribute('color', "green");
                    lastBox.setAttribute('color', "green")
                }
                else{
                currBox.setAttribute('color', "tomato");
                }
                currBox.setAttribute("shader", "")
                lastClick = gif[currBox.getAttribute("id")]
                lastBox = currBox
        }, 2000);
    })
    
}
}
var timer;
function countdown(){
    console.log("in countdown")
    timer = setInterval(function(){
        
      var timeEl = document.getElementById("time")
      var currt = Number(timeEl.getAttribute("value"))
      console.log(currt)
      currt = currt-1
      timeEl.setAttribute("value", currt)
        if(currt==0){
          stop("lose")
      }
    },1000)

}
function stop(game){
    clearInterval(timer)
    document.getElementById("time").setAttribute("visible", "false")
    document.getElementById(game).setAttribute("visible", true)
}