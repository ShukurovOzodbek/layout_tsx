import { Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
    image: string,
    image2: string,
    image3: string,
    text: string
}

const Theatre: React.FC<Props> = ({ image, text, image2, image3 }) => {
    return (
        <Stack sx={{ alignItems: 'center', width: '70%', justifyContent: 'center' }}>
            <Text fontSize={{ xl: '6xl', lg: '6xl', md: '5xl', sm: '4xl' }} display="flex" gap="15px" fontWeight='100' sx={{ color: "white" }}> <Text sx={{ color: "brand.orange" }}>О</Text> Театре</Text>
            <Stack sx={{ flexDirection: ({ lg: "row", sm: 'column' }), gap: '25px', justifyContent: 'space-between', alignItems: ({ lg: 'flex-start' }) }}>
                <Stack sx={{ gap: '30px', width: ({ xl: "300px", lg: "470px", md: '380px' }), justifyContent: 'center', }}>
                    <Text fontSize={{ lg: '15px', md: '15px', sm: '16px' }}>Самый лучший театр СПБ</Text>
                    <Text sx={{ fontSize: ({ lg: '13px', md: '10.8px', sm: '11px' }), width: '100%' }}>
                        {text}
                    </Text>
                </Stack>
                <Stack sx={{ gap: '30px', alignItems: 'flex-start' }}>
                    <Text fontSize={{ lg: '15px', md: '15px', sm: '16px' }}>немного о цифрах</Text>
                    <Stack sx={{ flexDirection: ({ xl: 'column', lg: 'column', sm: 'row' }), gap: ({md: '10px', sm: '150px'})  }}>
                        <Image width={{ xl: '300px', lg: '200px', sm: '210px' }} src={image2} alt="" />
                        <Image width={{ xl: '300px', lg: '200px', sm: '210px' }} src={image3} alt="" />
                    </Stack>
                </Stack>
                <Stack display={{ lg: 'none', xl: 'block', sm: 'none' }}>
                    <img src={image} alt="" />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Theatre
