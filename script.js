let price = document.getElementById("Price");
let ItemName = document.getElementById("Item");
let TableNumber = document.getElementById("Table");

var form = document.querySelector("form");

form.addEventListener("click", Submit);

let maps=new Map()

function Submit(e) {
  if (e.target.classList.contains("btn-Submit")) {
    if (
      TableNumber.value == "Select Table" ||
      price.value == null ||
      ItemName.value == null
    ) {
      alert("Please Check The Details");
    } 
    else {
      if (TableNumber.value == "Table-1") {
        let Details = {
            Table: `T1:${Table.value}`,
            Item: Item.value,
            Price: price.value,
          };
        let Table1 = document.getElementById("Table-1");
        let order = document.createElement("li");
        order.innerHTML = `T1:Item:${ItemName.value}.........Price:${price.value}.Rs <Button>Delete</Button>`;
        Table1.appendChild(order);
        axios.post(
            "https://crudcrud.com/api/3efb9c6c73f240b39572646c915f6f36/Order",
            Details)
            .then((res) => {
                console.log(res)
                maps.set(order.innerText , res.data._id)
                console.log(maps)
            })

      }
       else if (TableNumber.value == "Table-2") {

        let Details = {
            Table: `T2:${Table.value}`,
            Item: Item.value,
            Price: price.value,
          };
        let Table2 = document.getElementById("Table-2");
        let order = document.createElement("li");
        order.innerHTML = `(T2)Item:${ItemName.value}.........Price:${price.value}.Rs <Button>Delete</Button>`;
        Table2.appendChild(order);

        axios.post(
            "https://crudcrud.com/api/3efb9c6c73f240b39572646c915f6f36/Order",
            Details)
            .then((res) => {
                console.log(res)
                maps.set(order.innerText , res.data._id)
                console.log(maps)
            })
      }
       else if (TableNumber.value == "Table-3") {

        let Details = {
            Table: `T3:${Table.value}`,
            Item: Item.value,
            Price: price.value,
          };
        let Table3 = document.getElementById("Table-3");
        let order = document.createElement("li");
        order.innerHTML = `(T3)Item:${ItemName.value}.........Price:${price.value}.Rs <Button>Delete</Button>`;
        Table3.appendChild(order);

        axios.post(
            "https://crudcrud.com/api/3efb9c6c73f240b39572646c915f6f36/Order",
            Details)
            .then((res) => {
                console.log(res)
                maps.set(order.innerText , res.data._id)
                console.log(maps)
            })
      }

      
    }
  }
}



// Load Details

function LoadDetails(){
    axios.get('https://crudcrud.com/api/3efb9c6c73f240b39572646c915f6f36/Order')
    .then((res) => {
        let Data=res.data

        Data.forEach((e) => {
            if (e.Table == 'T1:Table-1'){
                let Table1 = document.getElementById("Table-1");
                let order = document.createElement("li");
                order.innerHTML = `T1:Item:${e.Item}.........Price:${e.Price}.Rs <Button>Delete</Button>`;
                Table1.appendChild(order);
            }
            else if (e.Table == 'T2:Table-2'){
                let Table2 = document.getElementById("Table-2");
                let order = document.createElement("li");
                order.innerHTML = `T2:Item:${e.Item}.........Price:${e.Price}.Rs <Button>Delete</Button>`;
                Table2.appendChild(order);
            }
            else if (e.Table == 'T3:Table-3'){
                let Table3 = document.getElementById("Table-3");
                let order = document.createElement("li");
                order.innerHTML = `T3:Item:${e.Item}.........Price:${e.Price}.Rs <Button>Delete</Button>`;
                Table3.appendChild(order);
            }
        });
    })
}
LoadDetails()

let object=new Map()

console.log(object)