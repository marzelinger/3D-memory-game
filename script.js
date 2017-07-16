        // var boxes = ["one", "two" ,"three", "four", "five", "six", "seven", "eight", "nine"]
        // for(var i = 0; i < boxes.length;i++){
        fetch("https://api.giphy.com/v1/gifs/search?q=pizza&api_key=dfb264acffa3492f819190272fefc95d&limit=6")
            .then(function(data) {
                return data.json()
            })
        .then(function(json) {
            console.log(json)
            var data = json.data
            var images = []
            for(var j = 0; j < data.length; j++){
                images.push(data[j].images.fixed_height.url)
                var newimg = document.createElement("img")
                newimg.setAttribute("src", data[j].images.fixed_height.url)
                newimg.setAttribute("id", "gif" + j)
                document.getElementById("assets").appendChild(newimg)
            }
            console.log(document.getElementById("assets"))
            
        })
        
        var box1 = document.getElementById("one")
        box1.addEventListener("click", function(){
            box1.setAttribute("shader", "gif")
            box1.setAttribute('src', "#gif0")
            box1.setAttribute('color', "")
            setTimeout(function(){
                box1.emit('return')
                box1.setAttribute('src', "");
                box1.setAttribute('color', "tomato");
                box1.setAttribute("shader", "")

            }, 3000);
            
        })
        // }