add = document.getElementById("add");
add.addEventListener("click", GetAndUpdate);
update();

// ---------------------------Fuction1 Getandupdate----------------------------------------
function GetAndUpdate() {
  til = document.getElementById("titel").value;
  desc = document.getElementById("description").value;
  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    itemJsonArray.push([til, desc]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonarray));
  } else {
    itemJsonArraystr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArraystr);
    itemJsonArray.push([til, desc]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  }
  update();
}
// ----------------------------Function2 Update---------------------------------------------

function update() {
  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonarray));
  } else {
    itemJsonArraystr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArraystr);
  }

  //   populate the table
  let tabelbody = document.getElementById("tabelbody");
  let str = "";
  itemJsonArray.forEach((element, index) => {
    str += `
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${element[0]}</td>
                        <td>${element[1]}</td>
                        <td> <button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
                     </tr> `;
  });
  tabelbody.innerHTML = str;
}

// -------------------------------Function3 Delete---------------------------------------

function deleted(itemindex) {
  console.log("Delete", itemindex);
  itemJsonArraystr = localStorage.getItem("itemsJson");
  itemJsonArray = JSON.parse(itemJsonArraystr);

  itemJsonArray.splice(itemindex, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  update();
}
// ---------------------------------------***************--------------------------------
