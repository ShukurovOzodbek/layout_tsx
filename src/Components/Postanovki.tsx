import { Box, Stack, Text } from '@chakra-ui/react'
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
            <Text fontSize={'6xl'} display="flex" gap="15px" fontWeight='100' sx={{ color: "white" }}> <Text sx={{ color: "brand.orange" }}>наши</Text> постановки</Text>
            <Stack sx={{ postion: "relative", flexDirection: 'row', paddingLeft: '50%', height: '400px', width: '100%', paddingBottom: '100px' }}>
                <Stack position={'absolute'} left="20%">
                    <img width='300px' src={image} alt="" />
                    <Stack position={'absolute'} width="200px" height='90%' justifyContent={'space-between'} padding="15px" paddingBottom={""} >
                        <Text>ОСКАР 2020</Text>
                        <Text sx={{ transform: 'rotate(90deg)' }}>сентябрь 2020</Text>
                    </Stack>
                </Stack>
                <Stack position={'absolute'} left="40%">
                    <img width='300px' src={image2} alt="" />
                </Stack>
                <Stack position={'absolute'} left="60%">
                    <img width='300px' src={image4} alt="" />
                    <Stack position={'absolute'} width="200px" height='90%' justifyContent={'space-between'} padding="15px" paddingBottom={""} >
                        <Text>золотой грамофон</Text>
                        <Text sx={{ transform: 'rotate(90deg)' }}>июль 2020</Text>
                    </Stack>
                </Stack>
                <Stack position={'absolute'} left={"80%"}>
                    <img width='300px' src={image3} alt="" />
                    <Stack position={'absolute'} width="200px" height='90%' justifyContent={'space-between'} padding="15px" >
                        <Text>ОСКАР 2020</Text>
                        <Text sx={{ transform: 'rotate(90deg)' }}>сентябрь 2020</Text>
                    </Stack>
                </Stack>
            </Stack>
            <Stack width="100%">
                <Box sx={{ backgroundImage: `url(${rect.src})`, width: "100%", padding: '120px', backgroundRepeat: 'no-repeat' }} >
                    <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text w="300px" fontSize={'6xl'} color={'brand.orange'} padding='30px'>
                            2018
                            2019
                            2020
                        </Text>
                        <Stack sx={{ gap: '20px' }}>
                            <img width="200px" src={stars} alt="" />
                            <Stack>
                                <Text fontSize={'4xl'}>лучший театр</Text>
                                <Text fontSize={'4xl'}>по мнению театральных</Text>
                                <Text fontSize={'4xl'}>критиков парижа</Text>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Stack>
    )
}

export default Postanovki
