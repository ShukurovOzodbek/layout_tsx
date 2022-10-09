import { Stack, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
    image: string,
    image2: string,
    image3: string,
    text: string
}

const Theatre: React.FC<Props> = ({image, text, image2, image3}) => {
  return (
    <Stack sx={{alignItems: 'center', width: '70%', justifyContent: 'center'}}>
            <Text fontSize={'6xl'} display="flex" gap="15px" fontWeight='1 00' sx={{ color: "white" }}> <Text sx={{ color: "brand.orange" }}>О</Text> Театре</Text>
            <Stack sx={{flexDirection: "row", gap: '25px'}}>
                <Stack sx={{width: '34%', gap: '30px'}}>
                    <Text fontSize={'24px'}>Самый лучший театр СПБ</Text>
                    <p style={{fontSize: '12px'}}>
                        {text}
                    </p>
                </Stack>
                <Stack sx={{gap: '30px'}}>
                    <Text fontSize={'24px'}>немного о цифрах</Text>
                    <img width="400px" src={image2} alt="" />
                    <img width="400px" src={image3} alt="" />
                </Stack>
                <Stack>
                    <img src={image} alt="" />
                </Stack>
            </Stack>
    </Stack>
  )
}

export default Theatre
