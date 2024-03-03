const accordionBtn = document.querySelectorAll(".accordion-btn");
const description = document.querySelectorAll(".description");
accordionBtn.forEach(btn => {
  btn.addEventListener("click", function() {
    const desc = this.nextElementSibling;
    const borderWidth = 4;
    let height = desc.scrollHeight + borderWidth;
    console.log("🚀 ~ btn.addEventListener ~ height:", height)

    if (desc.style.height) {
      desc.style.height = null;
      accordionBtn.forEach(btn => {
        btn.classList.remove('active')
      })
    }else {
      accordionBtn.forEach((btn) => {
        btn.nextElementSibling.style.height = null;
        btn.classList.remove("active");
      });
      this.classList.add('active')
      desc.style.height = `${height}px`;
    }
    console.log(btn);
  })
})

//!<<--------------------------------------------------------->>
//?          you can use this function to change the         ?// 
//?         height of description by active class only       ?//
//!<<--------------------------------------------------------->>

// let button = Array.from(accordionBtn);

// accordionBtn.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     button.find((btn) => {
//       btn.classList.remove("active");
//     });
//     this.classList.add("active");
//   });
// });


const domYear = document.getElementById("year");
const year = new Date().getFullYear();

domYear.textContent = year