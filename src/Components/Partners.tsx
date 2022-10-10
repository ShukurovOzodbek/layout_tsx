import { Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
    gaz: string
}

const Partners: React.FC<Props> = ({ gaz }) => {
    return (
        <Stack width="70%" alignItems={'center'} >
            <Text fontSize={{xl:'6xl', lg: '6xl', md: '5xl', sm: '4xl'}} display="flex" gap="15px" fontWeight='100' sx={{ color: "white" }}> <Text sx={{ color: "brand.orange" }}>наши</Text> партнеры</Text>
            <Stack sx={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', gap:'70px', justifyContent: 'center' }}>
                <img src={gaz} width="20%" alt="" />
                <img src={gaz} width="20%" alt="" />
                <img src={gaz} width="20%" alt="" />
                <img src={gaz} width="20%" alt="" />
                <Image src={gaz} width="20%" alt="" />
                <Image src={gaz} width="20%" alt="" />
                <Image src={gaz} width="20%" display={{xl: 'block', lg: 'none', sm: "none"}} alt="" />
                <Image src={gaz} width="20%" display={{xl: 'block', lg: 'none', sm: "none"}} alt="" />
            </Stack>
        </Stack>
    )
}

export default Partners
