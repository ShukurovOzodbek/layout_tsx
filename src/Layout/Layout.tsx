import React from 'react'
import { Box, Stack, Text, Button, Input, Link, Image } from '@chakra-ui/react'
import backImg from '../../public/images/backImg.png'
import movImg from '../../public/images/movImg.png'
import prev from '../../public/images/prev.png'
import insta from '../../public/images/insta.png'
import facebook from '../../public/images/facebook.png'
import vk from '../../public/images/vk.png'
import youtube from '../../public/images/youtube.png'
import next from '../../public/images/next.png'
import { Textarea } from "@chakra-ui/react"
import menu from '../../public/images/menu.png'

interface Props {
    children: JSX.Element
}

const Layout: React.FC<Props> = ({ children }: Props) => {
    return (
        <Box sx={{ width: '100%', }}>
            <Stack sx={{ display: 'flex', justifyContent: 'center', gap: '130px', alignItems: 'center', color: 'white', width: '100%', padding: '40px', background: `url(${backImg.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', flexDirection: 'column' }}>
                <Stack sx={{ flexDirection: ({ '2xl': 'row', lg: 'column', md: "column", sm: 'column' }), justifyContent: 'space-between', alignItems: 'center', gap: '15px', width: '85%' }}>
                    <Stack sx={{ alignItems: 'center', gap: "55px", flexDirection: 'row', width: '100%', display: ({sm: 'block', msm: 'none'}) }}>
                        <Link href={'/'} sx={{ fontSize: ({ xl: '16px', lg: '12px', md: '11px', sm: '11px' }) }}>Главная</Link>
                        <Link href={'/'} sx={{ fontSize: ({ xl: '16px', lg: '12px', md: '11px', sm: '11px' }) }}>о театре</Link>
                        <Link href={'/'} sx={{ fontSize: ({ xl: '16px', lg: '12px', md: '11px', sm: '11px' }) }}>Наши постановки</Link>
                        <Link href={'/'} sx={{ fontSize: ({ xl: '16px', lg: '12px', md: '11px', sm: '11px' }) }}>партнеры театра</Link>
                        <Link href={'/'} sx={{ fontSize: ({ xl: '16px', lg: '12px', md: '11px', sm: '11px' }) }}>контакты</Link>
                    </Stack>
                    <Image display={{sm: 'none', msm: 'block'}} src={menu.src} />
                    <Box>
                        <Link href={'/'} sx={{ fontSize: ({ xl: '16', lg: '14px', md: '13px' }) }}>+7 495 123-45-67</Link>
                        <Box sx={{ width: ({ xl: '125px', lg: '125px', md: '107px' }), borderTop: '2px solid #D1A954' }}></Box>
                    </Box>
                </Stack>
                <Stack sx={{ flexDirection: 'row', width: '85%', gap: '150px', alignItems: 'center' }}>
                    <Stack sx={{ width: '50%', gap: '40px' }}>
                        <Text fontSize={{ '2xl': '6xl', lg: '2xl', md: '3xl', sm: '3xl' }} width={{ xl: '500px', md: "250px", sm: "250px" }}>Большой театр</Text>
                        <Text fontSize={{ xl: 'sm', lg: '12px', md: '12px', sm: '12px' }} color={'#FFFFFF'}>Большо́й теа́тр — петербургский театр, существовавший в 1784—1886 годах, с 1886 года — Петербургская консерватория. Первое постоянное в Санкт-Петербурге, крупнейшее в России и одно из крупнейших театральных зданий в Европе XVIII.</Text>
                        <Button sx={{ backgroundColor: 'brand.orange', width: ({ lg: '60%', xl: '30%' }), borderRadius: '1px' }}>афиша</Button>
                    </Stack>
                    <Stack sx={{ gap: '20px', display: ({sm: 'block', msm: 'none'}) }}>
                        <img width={'340px'} src={`${movImg.src}`} alt="" />
                        <Stack sx={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <img style={{ cursor: "pointer" }} width={'90px'} src={`${prev.src}`} alt="" />
                            <img style={{ cursor: "pointer" }} width={'90px'} src={`${next.src}`} alt="" />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack style={{ gap: "70px", paddingTop: '150px', paddingBottom: '150px', width: '100%', background: '#333333', color: "white", alignItems: 'center', justifyContent: 'center' }}>
                {children}
            </Stack>
            <Stack sx={{ width: '100%', padding: '20px', gap: '60px', background: "brand.grey", justifyContent: 'center', alignItems: 'center' }} >
                <Text fontSize={{ xl: '6xl', lg: '6xl', md: '5xl', sm: '4xl' }} display="flex" gap="15px" sx={{ color: "white", fontWeight: '400 !important' }}> <Text sx={{ color: "brand.orange" }}>Стать</Text> Меценатом</Text>
                <Stack sx={{ flexDirection: ({ md: 'row', sm: 'column-reverse' }), gap: '50px', color: 'white' }} >
                    <Stack sx={{ flexDirection: ({ sm: 'row', md: 'column' }), justifyContent: ({ md: 'inherit', sm: 'space-between' }) }}>
                        <Stack>
                            <Text sx={{ fontSize: ({ xl: '18px', lg: '18px', md: '14px' }) }} >+7 (812) 123-45-55</Text>
                            <Text sx={{ fontSize: ({ xl: '18px', lg: '18px', md: '14px' }) }} >+7 (812) 123-45-55</Text>
                        </Stack>
                        <Stack>
                            <Text sx={{ fontSize: ({ xl: '18px', lg: '18px', md: '14px' }) }} >info@theater.ru</Text>
                            <Text sx={{ fontSize: ({ xl: '18px', lg: '18px', md: '14px' }) }} >г. санкт-петербург, невский 140</Text>
                        </Stack>
                    </Stack>
                    <Stack>
                        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                            <Stack sx={{ display: 'flex', flexDirection: 'row', gap: "10px", alignItems: 'center' }}>
                                <Stack sx={{ flexDirection: 'row', gap: '10px', flexWrap: 'wrap', width: ({ lg: '450px', md: '370px' }) }}>
                                    <Input sx={{ width: ({ lg: '220px', md: '180px' }) }} placeholder='Имя' />
                                    <Input sx={{ width: ({ lg: '220px', md: '180px' }) }} placeholder='Компания' />
                                    <Input sx={{ width: ({ lg: '220px', md: '180px' }) }} placeholder='Телефон' />
                                    <Input sx={{ width: ({ lg: '220px', md: '180px' }) }} placeholder='E-mail' />
                                </Stack>
                                <Stack h={'90px'}>
                                    <Textarea
                                        value=""
                                        placeholder="Сообщение"
                                        size="sm"
                                        sx={{ height: '100%', width: ({ lg: '200px', md: '150px', sm: '280px' }) }}
                                    />
                                </Stack>
                            </Stack>
                            <Stack sx={{ flexDirection: 'row', gap: ({ md: '30px', sm: '65px' }), alignItems: "center", width: ({ md: '540px', lg: '660px', sm: '100%' }) }}>
                                <Text sx={{ width: '450px', color: '#b6b6b6', fontSize: ({ xl: '14px', lg: '14px', md: '11px', sm: '12px' }) }}>* Ваши данные не будут переданы третьим лицам, 100% вероятность. Конфиденциальность мы гарантируем, и защищаем персональные данные согласно законку ФЗ-52.</Text>
                                <Button sx={{ backgroundColor: 'brand.orange', width: '30%', borderRadius: '1px' }}>отправить</Button>
                            </Stack>
                        </form>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Layout
