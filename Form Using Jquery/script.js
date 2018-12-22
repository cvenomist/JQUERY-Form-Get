// $(document).ready(function() {
//     $("h4#head").click(function() {
//         $(this).hide();
//     });
// });
s = 1;
$(document).ready(function() {
    $("h4#head").click(function() {
        var head = $("<div></div>")
        //console.log(head)
        $("h5#addHead").append(head);
        //console.log($("h5#addHead").append("<h5>head</h5>"))
        $(head).attr("id",s)
        //console.log($(head).attr("id",s))
        s++;
        //console.log()
        //Head Variable Appending With Head Tag
        $(head).append("<h4>Heading</h4>")
        //Also It Is Appending With Delete Button 
        $(head).append("<button>Delete</button>")
        //Setting Its Attribute Onclick To remove Full Div
        $(head).attr("onclick","this.remove()")
    });
});

$(document).ready(function() {
    $("h4#para").click(function() {

        var para = $("<div></div>")

        $("h5#addPara").append(para);

        $(para).attr("id",s)

        s++;

        $(para).append("<h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>")

        $(para).append("<button>Delete</button>")

        $(para).attr("onclick","this.remove()")
        
    });
});

$(document).ready(function() {
    $("h4#input").click(function() {

        var input = $("<div></div>")

        $("h5#addInput").append(input);

        $(input).attr("id",s)

        s++;

        $(input).append("<h5>Input Field</h5>")

        $(input).append("<button>Delete</button>")

        $(input).attr("onclick","this.remove()")
    });
});
