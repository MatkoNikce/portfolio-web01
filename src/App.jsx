import { } from 'react'
import './App.css'
import { Heading, Text, Box, Image, Divider, Button, ButtonGroup, Stack, Link } from '@chakra-ui/react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import AppForm from './assets/Form/AppForm.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'


function App() {

  return (
    <ChakraProvider>
      <div className="App" >

        <Box bg='#1D1D1D' color='white' p={8} fontSize={{ base: '5px', md: '8px', '2xl': '13px' }}>





          <Flex marginBottom={100} id='inicio' >
            <Spacer>
              <Breadcrumb fontSize={12} separator='' fontSize={{ base: '5px', md: '8px', '2xl': '13px' }}>

                <Spacer>

                  <BreadcrumbItem margin={5}  >
                    <BreadcrumbLink href='#acercaDe'>ACERCA DE</BreadcrumbLink>
                  </BreadcrumbItem>

                </Spacer>



                <Spacer>

                  <Flex direction={'column'}>
                    <Spacer>
                      <BreadcrumbItem >
                        <BreadcrumbLink href='#educacion'>EDUCACIÓN</BreadcrumbLink>
                      </BreadcrumbItem>
                    </Spacer>

                    <Spacer>
                      <BreadcrumbItem>
                        <BreadcrumbLink href='#habilidades'>HABILIDADES</BreadcrumbLink>
                      </BreadcrumbItem>
                    </Spacer>

                    <Spacer>
                      <BreadcrumbItem>
                        <BreadcrumbLink href='#testimonios'>TESTIMONIOS</BreadcrumbLink>
                      </BreadcrumbItem>
                    </Spacer>

                    <Spacer>
                      <BreadcrumbItem>
                        <BreadcrumbLink href='#contacto'>CONTACTO</BreadcrumbLink>
                      </BreadcrumbItem>
                    </Spacer>
                  </Flex>
                </Spacer>





              </Breadcrumb>
            </Spacer>
          </Flex>



          <Flex direction={'column'}>
            <Box>


              <Flex direction={'row'} maxH={'sm'} alignItems={'flex-start'}>
                <Box>

                  <Heading fontSize={{ base: '50px', md: '100px', '2xl': '150px' }} marginLeft={10} id='acercaDe'>MATK</Heading>

                </Box>

                <Box  >

                  <Image src='/src/assets/img/HablemosEspañol.png' alt='Matko' objectFit={'cover'} boxSize={{ base: '50px', md: '100px', '2xl': '150px' }} borderRadius={'full'} border={2} borderColor={'blackAlpha.100'} />

                </Box>
                <Box>

                  <Text w={300} fontSize={{ base: '5px', md: '8px', '2xl': '13px', }}
                    width={[
                      '100%', // 0-30em
                      '50%', // 30em-48em
                      '25%', // 48em-62em
                      '15%', // 62em+
                    ]}
                  >Soy un programador Junior en Desarrollo Web, tengo años de auto educación y recientemente comencé a formarme con cursos certificados en la Universidad Tecnológica Nacional, con el propósito de afianzar mis conocimientos y convertirme en un profesional.</Text>

                </Box>
              </Flex>
            </Box>

            <Heading fontSize={{ base: '50px', md: '100px', '2xl': '150px' }} marginLeft={10} >NIKCEVICH</Heading>
          </Flex>



          <Flex justifyContent={'space-around'} marginBottom={20} >
            <Spacer fontSize={13} color={'#434343'}>
              <Text id='educacion'>Educación</Text>
            </Spacer>
            <Spacer>
              <Text w={400} fontSize={{ base: '10px', md: '15px', '2xl': '20px', }}
                width={[
                  '100%', // 0-30em
                  '100%', // 30em-48em
                  '100%', // 48em-62em
                  '100%', // 62em+
                ]}
              >
                Con el paso de los años me convertí en una persona capaz de trabajar en grupos, eficaz y trabajadora, con un sentimiento de dedicación hacia lo que hago, que me permite lograrlo sea lo difícil que sea, y me lleve cuanto tiempo me lleve.
              </Text>
            </Spacer>
          </Flex>

          <Divider borderColor={'#434343'} />


          <Flex marginBottom={10}>
            <Spacer>Colegio Secundario(2013/2018)</Spacer>
            <Spacer>Dr. Carlos Primo López Piacentini - Orientación en Gestión de Empresas y Economía</Spacer>
          </Flex>

          <Divider borderColor={'#434343'} />

          <Flex flexDirection={'row'} justifyContent={'center'}>
            <Spacer>Cursos completados</Spacer>
            <Spacer>
              <Flex flexDirection={'column'} >
                <Spacer mt={1} mb={1}>UTN Front-End</Spacer>
                <Divider borderColor={'#434343'} />
                <Spacer mt={1} mb={1}>Henry Coding Challenge</Spacer>
              </Flex>
            </Spacer>
          </Flex>

          <Divider borderColor={'#434343'} />

          <Flex flexDirection={'row'} justifyContent={'center'} mb={10}>
            <Spacer>Auto-educación</Spacer>
            <Spacer>
              <Flex flexDirection={'column'} >
                <Spacer mt={1} mb={1}>Henry Prep-Course</Spacer>
                <Divider borderColor={'#434343'} />
                <Spacer mt={1} mb={1}>"Soy Dalto" Curso de Javascript Junior</Spacer>
              </Flex>
            </Spacer>
          </Flex>


          <Heading fontSize={{ base: '50px', md: '100px', '2xl': '150px' }} id='habilidades'>HABILIDADES</Heading>
          <Flex justifyContent={'space-between'}>
            <Flex flexDirection={'column'} w={500}>
              <Text color={'#434343'}>Habilidades blandas</Text>
              <Text>Me considero un gran líder debido a mi capacidad de resolver problemas con eficacia y mi empatía con las personas, asimismo, puedo escuchar y recibir órdenes de un líder y ayudar a mis compañeros para que todos sigamos por el mismo camino.</Text>
            </Flex>

            <Flex flexDirection={'column'}>
              <Text color={'#434343'}>Idiomas</Text>
              <Text>Español - Nativo</Text>
              <Text>Inglés - B2</Text>
              <Text>Portugues - C2</Text>
            </Flex>

            <Flex flexDirection={'column'}>
              <Text color={'#434343'}>Tecnologías</Text>
              <Text>HTML/HTML5</Text>
              <Text>CSS</Text>
              <Text>Javascript/React.js</Text>
            </Flex>
          </Flex>
          <Image src='/src/assets/img/matko.jpg' alt='Matko' borderRadius={10} boxSize={{}} />

          <Heading fontSize={{ base: '50px', md: '100px', '2xl': '150px' }} id='testimonios' mb={10}>TESTIMONIOS</Heading>
          <Flex justifyContent={'space-between'}>

            <Card maxW='sm'>
              <CardBody>
                <Image
                  src='/src/assets/img/sophi.jpg'
                  alt='Sophia Aguilar'
                  borderRadius='lg'
                  maxH={500}
                />

                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Sophia Aguilar</Heading>
                  <Text>
                    "Matko es un chico proactivo, con ganas de crecer y desarrollarse profesionalmente en este mundo del desarrollo web. Diría que sus cualidades más importantes son la honestidad, la responsabilidad y el compromiso."
                  </Text>

                </Stack>
              </CardBody>

            </Card>
            <Card maxW='sm'>
              <CardBody>
                <Image
                  src='/src/assets/img/madre.jpg'
                  alt='Sophia Aguilar'
                  borderRadius='lg'
                  maxH={500}
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Mónica Magallanes</Heading>
                  <Text>
                    "Considero a mi hijo como una gran persona, empática, llena de sueños y con muchas ganas de aprender. Logró todo lo que se propuso durante toda su vida debido a su gran dedicación, y estoy segura que podrá lograr todo lo que se dedique con su pasión por el desarrollo web."
                  </Text>

                </Stack>
              </CardBody>

            </Card>
            <Card maxW='sm'>
              <CardBody>
                <Image
                  src='/src/assets/img/padre.jpg'
                  alt='Sophia Aguilar'
                  borderRadius='lg'
                  maxH={500}
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Emilio Nikcevich</Heading>
                  <Text>
                    "Matko tiene una capacidad de razonamiento increíblemente alta, dispuesto a trabajar en cualquier momento. Desde adolescente me ayudó con las finanzas de la familia, es un gran gestor de la economía y tiene rapidez para solucionar los problemas que se le presentan"
                  </Text>

                </Stack>
              </CardBody>

            </Card>

          </Flex>


          <Flex flexDirection={'column'} alignItems={'center'} mt={10}>

            <Text color={'#434343'} id='contacto'>Contáctame</Text>
            <Heading fontSize={{ base: '20px', md: '30px', '2xl': '50px' }} mb={10} color={'#434343'}>MATKONIKCE@GMAIL.COM</Heading>

          </Flex>

          <AppForm />






          <Flex justifyContent={'space-between'} mt={10}>




            <Flex flexDirection={'column'}>
              <Spacer>

                <Text>Argentina</Text>
              </Spacer>
              <Spacer>

                <Text>+54362415075371</Text>
              </Spacer>

            </Flex>



            <Flex >

              <Stack direction={'row'} >

                <Link href='https://discord.com/users/Overnite#7484' isExternal>
                  <Button colorScheme='#1D1D1D' variant='outline' size={'sm'} borderRadius={20} _hover={{ bg: 'gray' }}
                    fontSize={{ base: '5px', md: '8px', '2xl': '13px' }}>
                    Discord</Button>
                </Link>
                <Link href='https://github.com/MatkoNikce' isExternal>
                  <Button colorScheme='#1D1D1D' variant='outline' size={'sm'} borderRadius={20} _hover={{ bg: 'gray' }}
                    fontSize={{ base: '5px', md: '8px', '2xl': '13px' }}
                  >GitHub</Button>
                </Link>

                <Link href='https://www.linkedin.com/in/matko-nikcevich-b47942258/' isExternal>
                  <Button colorScheme='#1D1D1D' variant='outline' size={'sm'} borderRadius={20} _hover={{ bg: 'gray' }}
                  fontSize={{base:'5px', md:'8px', '2xl': '13px'}}
                  >LinkedIn</Button>
                </Link>
              </Stack>

            </Flex>




            <Flex flexDirection={'column'} justifyContent={'flex-end'} >

              <Spacer>
                <Breadcrumb separator=''>
                  <BreadcrumbItem >
                    <BreadcrumbLink href='#inicio' color={'#434343'} >Inicio de página</BreadcrumbLink>
                  </BreadcrumbItem>
                  <ArrowUpIcon color={'#434343'} />
                </Breadcrumb>
              </Spacer>
              <Spacer>
                <Text>All Rights Reserved</Text>
              </Spacer>

            </Flex>


          </Flex>

        </Box>

      </div>
    </ChakraProvider>
  )
}

export default App