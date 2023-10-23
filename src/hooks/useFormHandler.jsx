import Swal from "sweetalert2"

const useFormHandler = () => {

  const formHandler = (e, formData, handleSubmit) => {
    // Prevenimos la recarga de la pagina
    e.preventDefault()
    // Obtenemos los datons ingresados en el formulario
    const { name, email, country, subject, message } = formData;
    // Verificamos que se hayan rellenado todos los datos y en caso contrario se muestra alerta con el error
    if (!name || !email || !country || !subject || !message) {
      Swal.fire({
        icon: "info",
        title: "Atención",
        text: "Todos los campos son obligatorios",
        showConfirmButton: true
      })
      return
    }
    //Creamos expresión regular para validar el correo electrónico proporcionado
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // Se testea el correo proporcionado con la expresion regular y en caso de fallar se setea el error 
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "info",
        title: "Atención",
        text: "El correo ingresado no es válido",
        showConfirmButton: true
      })
      return
    }

    // En caso de que todos los inputs sean validados exitosamente:
    // Se llama a la funcion de envio de @formspree/react:
    handleSubmit(e);
  }

  // Funcion en caso de envio exitoso:
  const submittedForm = (setFormData) => {
    // Se muestra alerta de exito
    Swal.fire({
      icon: "success",
      title: "Éxito!",
      text: "Su mensaje fue enviado",
      showConfirmButton: false,
      timer: 2000
    });
    // Se reestablecen los inputs
    setFormData({ name: "", email: "", country: "", subject: "", message: "" });
  }

  return { formHandler, submittedForm }

}

export default useFormHandler;