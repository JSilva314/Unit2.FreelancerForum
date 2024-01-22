const name = ["Alice", "Bob", "Carol", "Jose", "Carlos"];
const occupation = [
  "Writer",
  "Teacher",
  "Programmer",
  "Gardener",
  "Contractor",
];
const startingPrice = ["30", "50", "70", "80", "100"];
const sectionIds = ["name", "occ", "prices"];
const averageArr = [];
const avgP = document.querySelector(`#average`);

function generateUl(arr) {
  for (let i = 0; i < arr.length; i++) {
    const section = document.querySelector(`#${arr[i]}`);
    const h3 = document.createElement("h3");
    if (arr[i] === "name") {
      h3.innerText = "Name";
    } else if (arr[i] === "occ") {
      h3.innerText = "Occupations";
    } else if (arr[i] === "prices") {
      h3.innerText = "Starting Prices";
    }
    section.appendChild(h3);
    const ul = document.createElement("ul");
    ul.id = `${arr[i]}-ul`;

    section.appendChild(ul);
  }
}
function displayData(idArr) {
  let index = 0;
  const displayInterval = setInterval(() => {
    displayLine(idArr);
  }, 1000);
  function displayLine(idArr) {
    for (let i = 0; i < idArr.length; i++) {
      const ul = document.querySelector(`#${idArr[i]}-ul`);
      const li = document.createElement("li");

      if (idArr[i] === "name") {
        li.innerText = name[index];
      } else if (idArr[i] === "occ") {
        li.innerText = occupation[index];
      } else if (idArr[i] === "prices") {
        li.innerText = `$${startingPrice[index]}`;
      }
      ul.appendChild(li);
    }
    averageArr.push(+startingPrice[index]);
    avgP.innerText = `The average starting price is $${calculateAverage(
      averageArr
    )}`;

    index++;
    if (index === name.length) {
      clearInterval(displayInterval);
    }
  }
}
function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((total, num) => total + num, 0);
  const average = sum / numbers.length;

  return average;
}

function render() {
  const dataContainer = document.querySelector("#data-container");
  dataContainer.style.display = "flex";
  generateUl(sectionIds);
  displayData(sectionIds, name, occupation, startingPrice);
}

render();