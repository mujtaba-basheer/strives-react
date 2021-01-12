const accordianItemHeaders = document.querySelectorAll(
  ".accordian-item-header"
);
/* console.log(accordianItemHeaders); */
accordianItemHeaders.forEach((accordianItemHeader) => {
    accordianItemHeader.addEventListener("click", (event) => {
    /* console.log("clicked"); */
    accordianItemHeader.classList.toggle("active");
  });
});
