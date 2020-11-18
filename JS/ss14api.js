function gridProduct(products) {
    var g_html = "";
    for (var i=0;i<products.length;i++){
        g_html += "<div class=\"col-md-4\">\n" +
            "                    <div class=\"item text-center\">\n" +
            "                        <img class=\"product-image\" src=\""+products[i].image+"\"/>\n" +
            "                        <h2 class=\"product-name\">"+products[i].name+"</h2>\n" +
            "                        <div class=\"star\">\n" +
            "                            <div class=\"star-box\">\n" +
            "                                <div class=\"star-rate\" style=\"width: "+(products[i].star/5*100)+"%\"></div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <p class=\"price\">$"+products[i].price+"</p>\n" +
            "                        <a href=\"#\" class=\"add-to-cart text-uppercase\">Add To Cart</a>\n" +
            "                    </div>\n" +
            "                </div>";
    }

    return g_html;
}
function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            var rs = this.responseText; // nhan text/json tu api
            rs = JSON.parse(rs);// chuyen thanh object json
            var products = rs.data;
            // in html ra danh sach
            var grid = document.getElementById("grid-products");
            grid.innerHTML = gridProduct(products);
        }
    }
    xhttp.open("GET","https://foodgroup.herokuapp.com/api/today-special");
    xhttp.send();
}
loadData();