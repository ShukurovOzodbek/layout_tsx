import { Box, Stack, Text, Image } from '@chakra-ui/react'
import React from 'react'
import rect from '../../public/images/rect.png'
interface Props {
    image: string
    image2: string
    image3: string
    image4: string,
    stars: string
}

const Postanovki: React.FC<Props> = ({ image, image2, image3, image4, stars }) => {
    return (
        <Stack sx={{ alignItems: 'center', width: '70%', gap: '70px', justifyContent: 'center' }}>
            <Text fontSize={{ xl: '6xl', lg: '6xl', md: '5xl', sm: '4xl' }} display="flex" gap="15px" fontWeight='100' sx={{ color: "white" }}> <Text sx={{ color: "brand.orange" }}>наши</Text> постановки</Text>
            <Stack sx={{ postion: "relative", flexDirection: 'row', paddingLeft: '50%', height: '400px', width: '100%', paddingBottom: '100px' }}>
                <Stack position={'absolute'} left="20%">
                    <img width='300px' src={image} alt="" />
                    <Stack position={'absolute'} width="200px" height='90%' justifyContent={'space-between'} padding="15px" paddingBottom={""} >
                        <Text>ОСКАР 2020</Text>
                        <Text sx={{ transform: 'rotate(90deg)' }}>сентябрь 2020</Text>
                    </Stack>
                </Stack>
                <Stack position={'absolute'} left={{lg:"40%", md: '57%'}}>
                    <img width='300px' src={image2} alt="" />
                </Stack>
                <Stack position={'absolute'} sx={{ display: ({ xl: 'block', lg: 'block', sm: 'none' }) }} left="60%">
                    <img width='300px' src={image4} alt="" />
                </Stack>
            </Stack>
            <Stack width={{lg:"100%", md: '142%'}}>
                <Box sx={{ backgroundImage: `url(${rect.src})`, width: "100%", padding: '120px', backgroundRepeat: 'no-repeat' }} >
                    <Stack sx={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <Stack w="300px" display={'flex'} flexDirection={'column'} fontSize={{ xl: '6xl', lg: '5xl', md: '4xl', sm: '5xl' }} color={'brand.orange'} padding='30px'>
                            <Text>2018</Text>
                            <Text>2019</Text>
                            <Text>2020</Text>
                        </Stack>
                        <Stack sx={{ gap: '20px' }}>
                            <img width="200px" src={stars} alt="" />
                            <Stack sx={{ gap: '15px' }}>
                                <Text fontSize={{ lg: '24px', md: '20px' }} width={{ lg: '340px', xl: '400px', md: '300px' }}>лучший театр</Text>
                                <Text fontSize={{ lg: '24px', md: '20px' }} width={{ lg: '340px', xl: '400px', md: '300px', sm: '240px' }}>по мнению театральных</Text>
                                <Text fontSize={{ lg: '24px', md: '20px' }} width={{ lg: '340px', xl: '400px', md: '300px' }}>критиков парижа</Text>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Stack>
    )
}

export default Postanovki
