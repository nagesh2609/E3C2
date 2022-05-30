
// Add the coffee to local storage with key "coffee"

async function collection() {
    let url = "https://masai-mock-api.herokuapp.com/coffee/menu"
    let res = await fetch(url);
    // console.log(res)
    let data = await res.json();


    // console.log(data.menu.data)
    return data.menu.data;

}

async function coffeeData() {
    let coffees = await collection();
    console.log(coffees)
    append(coffees);

}
coffeeData();

function append(coffees){
    let div=document.createElement("div");
    let mydata =coffees;
    mydata.forEach(function(ele){
        let coffee=document.createElement("p");
        coffee.innerText=ele.title;
        let img=document.createElement("img");
        img.src=ele.image;
        img.style.height="100px";
        img.style.width="100px"
        let price=document.createElement("p");
        price.innerText=ele.price
        let btn=document.createElement("button");
        btn.innerText="Add to Bucket"
        btn.addEventListener("click",function(){
            myfunction(ele);
        })
        

        div.append(coffee,img,price,btn);
        document.getElementById("mydata").append(div);

    })
}
function myfunction(data){
    let myData=JSON.parse(localStorage.getItem("dataArr")) || [];
    myData.push(data);
    localStorage.setItem("dataArr",JSON.stringify(myData))

    let count=JSON.parse(localStorage.getItem("dataArr")) || [];
    Document.getElementById("coffee_count").innerText=count.length;
    
}

// coffee, image, price and add to bucket button