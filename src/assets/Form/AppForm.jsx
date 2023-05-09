import { Field, Form, Formik, ErrorMessage } from "formik";
import { Heading, Text, Box, Image, Wrap, WrapItem, AbsoluteCenter, Divider, Button, ChakraProvider, Flex, Spacer} from '@chakra-ui/react'
import '../../App.css'

function AppForm() {
    return (
        <ChakraProvider>
        <Formik
            initialValues={{ message: "Hola, te contacto por..." }}
            validate={values => {
                let errors = {};
                if (!values.name) {
                    errors.name = "Este campo es requerido";
                } else if (!values.email) {
                    errors.email = "Este campo es requerido";
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = "El correo no es valido";
                }
                return errors;
            }}
            onSubmit={
                (values, { setSubmitting }) => {
                    let url = "https://formspree.io/f/mayzaogk";
                    let formData = new FormData();
                    formData.append("name", values.name);
                    formData.append("email", values.email);
                    formData.append("message", values.message);

                    fetch(url, {
                        method: "POST",
                        body: formData,
                        headers: {
                            'Accept': 'application.json'
                        }
                    }).then(response => {
                        setSubmitting(false);
                        alert("Gracias por contactarme");
                    })

                }
            }
        >
            {
                ({ isSubmitting, values }) => (
                    <Flex justifyContent={"center"}>
                    <Form className="form">
                        <Spacer>

                        <div className="divNombre">
                            <label htmlFor="name">Nombre:</label>
                            <Field type="text" name="name" className="nombre"></Field>
                            <ErrorMessage name="name" component="p" />

                        </div>
                        </Spacer>

                        <Spacer>

                        <div className="divEmail">
                            <label htmlFor="email">Correo electrónico:</label>
                            <Field type="email" name="email" className="nombre"></Field>
                            <ErrorMessage name="email" component="p" />
                        </div>
                        </Spacer>

                        <Spacer>

                        <div className="divMensaje">
                            <label htmlFor="message" className="cajaMensaje">Mensaje:</label>
                            <Field component="textarea" value={values.message} name="message" className="nombre"></Field>
                        </div>
                        </Spacer>

                        <button type="submit" disabled={isSubmitting} className="button">
                            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                        </button>

                    </Form>
                    </Flex>
                )
            }


        </Formik>
        </ChakraProvider>
    )
}

export default AppForm;