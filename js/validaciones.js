function camposCorrectos({
  cpu,
  fuentePoder
}) {
  if (cpu == "" || cpu.trim() == "") {
    Swal.fire({
      title: "Falta el CPU!",
      text: "El cpu no puede estar vacio",
      imageUrl: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/ryzen.JPG",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image"
    });
    return false;
  }
  if (fuentePoder == "" || fuentePoder.trim() == "") {
    Swal.fire({
      title: "Falta la fuente!",
      text: "La fuente no puede estar vacia",
      imageUrl: "https://hardzone.es/app/uploads-hardzone.es/2021/08/Fuente-Gigabyte-GP-P750GM.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image"
    });
    return false;
  }
  return true;
}