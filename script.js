const countrylist = [
  { id: 1, country: "India" },
  { id: 2, country: "America" },
  { id: 3, country: "China" },
  { id: 4, country: "Russia" },
  { id: 5, country: "Bangladesh" },
  { id: 6, country: "Korea" },
  { id: 7, country: "Desh" },
  { id: 8, country: "North Korea" },
  { id: 9, country: "Netherland" },
  { id: 10, country: "South Korea" },
  { id: 11, country: "Japan" },
];

let temp = document.querySelector(".country");
let ul = document.querySelector(".country1");
let input = document.querySelector("#search");
let li_click;
function logic(event) {
  let inp = input.value.toLowerCase();
  console.log(inp);
  currlist = [];
  currlist = countrylist.filter((obj) =>
    obj.country.toLowerCase().startsWith(inp) ? temp : ""
  );
  console.log(currlist);
  ul.textContent = " ";
  showlist(currlist);
}
input.addEventListener("keyup", logic);

function showlist(countrylist) {
  for (let i of countrylist) {
    const li = document.createElement("Li");
    li.setAttribute("id", i.country);
    li.appendChild(document.createTextNode(i.country));
    // console.log(li);
    // console.log(i.country);

    ul.appendChild(li);
  }
}
let count = 0;
temp.addEventListener("click", () => {
  console.log("clicked");
  ul.classList.remove("hide");
  if (count == 0) {
    count++;
    showlist(countrylist);
  }
});

ul.addEventListener("click", (e) => {
  let temp = [];
  if (e.target.class != "country1" || e.target.class != "country-list") {
    input.value = e.target.id;
    temp.push({ id: 1, country: e.target.id });
    console.log(temp);
    ul.textContent = " ";
    showlist(temp);
  }
});
// Deep Copy -> we have to traverse the object and check if the key is object itself then use recursion to copy it .
