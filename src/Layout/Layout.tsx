import React from 'react'
import { Box, Stack, Text, Button, Input } from '@chakra-ui/react'
import backImg from '../../public/images/backImg.png'
import movImg from '../../public/images/movImg.png'
import prev from '../../public/images/prev.png'
import insta from '../../public/images/insta.png'
import facebook from '../../public/images/facebook.png'
import vk from '../../public/images/vk.png'
import youtube from '../../public/images/youtube.png'
import next from '../../public/images/next.png'
import Link from 'next/link';
import { Textarea } from "@chakra-ui/react"

interface Props {
    children: JSX.Element
}

const Layout: React.FC<Props> = ({ children }: Props) => {
    return (
        <Box sx={{ width: '100%', }}>
            <Stack sx={{ display: 'flex', justifyContent: 'center', gap: '130px', alignItems: 'center', color: 'white', width: '100%', padding: '40px', background: `url(${backImg.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', flexDirection: 'column' }}>
                <Stack sx={{ flexDirection: 'row', width: '70%' }}>
                    <Stack sx={{ alignItems: 'center', gap: "55px", flexDirection: 'row', width: '100%' }}>
                        <Link href={'/'}>Главная</Link>
                        <Link href={'/'}>о театре</Link>
                        <Link href={'/'}>Наши постановки</Link>
                        <Link href={'/'}>партнеры театра</Link>
                        <Link href={'/'}>контакты</Link>
                    </Stack>
                    <Box>
                        <Link href={'/'}>+7 495 123-45-67</Link>
                        <Box sx={{ width: '125px', borderTop: '2px solid #D1A954' }}></Box>
                    </Box>
                </Stack>
                <Stack sx={{ flexDirection: 'row', width: '70%', gap: '150px', alignItems: 'center' }}>
                    <Stack sx={{ width: '50%', gap: '40px' }}>
                        <Text fontSize={'6xl'}>Большой театр</Text>
                        <Text fontSize={'sm'} color={'#FFFFFF'}>Большо́й теа́тр — петербургский театр, существовавший в 1784—1886 годах, с 1886 года — Петербургская консерватория. Первое постоянное в Санкт-Петербурге, крупнейшее в России и одно из крупнейших театральных зданий в Европе XVIII.</Text>
                        <Button sx={{ backgroundColor: 'brand.orange', width: '30%', borderRadius: '1px' }}>афиша</Button>
                    </Stack>
                    <Stack sx={{ gap: '20px' }}>
                        <img width={'340px'} src={`${movImg.src}`} alt="" />
                        <Stack sx={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <img style={{ cursor: "pointer" }} width={'90px'} src={`${prev.src}`} alt="" />
                            <img style={{ cursor: "pointer" }} width={'90px'} src={`${next.src}`} alt="" />
                        </Stack>
                    </Stack>
                </Stack>
                <Stack sx={{ left: '-23%', position: 'absolute', flexDirection: 'flex-end', width: '49.1%', padding: '20px', height: '250px', alignItems: 'center', background: 'rgba(51, 51, 51, 0.75)', transform: 'rotate(-90deg)', gap: '30px' }}>
                    <Stack sx={{flexDirection: 'row', gap: '25px', alignItems: 'center', transform: 'translate(20px, 130%)'}}>
                        <Stack sx={{ marginTop: '10px', flexDirection: 'row-reverse', gap: '15px', alignItems: 'center', justifyContent: 'center' }}>
                            <img style={{ transform: 'rotate(90deg)' }} width={'20px'} src={`${insta.src}`} alt="" />
                            <img style={{ transform: 'rotate(90deg)' }} width={'20px'} src={`${facebook.src}`} alt="" />
                            <img style={{ transform: 'rotate(90deg)' }} width={'20px'} src={`${vk.src}`} alt="" />
                            <img style={{ transform: 'rotate(90deg)' }} width={'20px'} src={`${youtube.src}`} alt="" />
                        </Stack>
                        <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: "30px" }}>
                            <Box sx={{ width: '100px', borderTop: '2px solid #fff' }}></Box>
                            <Text>контактная информация</Text>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack style={{ gap: "70px", paddingTop: '150px', paddingBottom: '150px', width: '100%', background: '#333333', color: "white", alignItems: 'center', justifyContent: 'center' }}>
                {children}
            </Stack>
            <Stack sx={{ width: '100%', gap: '60px', background: "brand.grey", justifyContent: 'center', alignItems: 'center' }} >
                <Text fontSize={'6xl'} display="flex" gap="15px" sx={{ color: "white", fontWeight: '400 !important' }}> <Text sx={{ color: "brand.orange" }}>Стать</Text> Меценатом</Text>
                <Stack sx={{ flexDirection: 'row', gap: '50px', color: 'white' }} >
                    <Stack>
                        <Text sx={{ fontSize: '18px' }} >+7 (812) 123-45-55</Text>
                        <Text sx={{ fontSize: '18px' }} >+7 (812) 123-45-55</Text>
                        <Text sx={{ fontSize: '18px' }} >info@theater.ru</Text>
                        <Text sx={{ fontSize: '18px' }} >г. санкт-петербург, невский 140</Text>
                    </Stack>
                    <Stack>
                        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                            <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Stack sx={{ flexDirection: 'row', gap: '10px', flexWrap: 'wrap', width: '450px' }}>
                                    <Input placeholder='Имя' />
                                    <Input placeholder='Компания' />
                                    <Input placeholder='Телефон' />
                                    <Input placeholder='E-mail' />
                                </Stack>
                                <Stack h={'90px'}>
                                    <Textarea
                                        value=""
                                        placeholder="Сообщение"
                                        size="sm"
                                        sx={{ height: '100%' }}
                                    />
                                </Stack>
                            </Stack>
                            <Stack sx={{ flexDirection: 'row', gap: '67px', alignItems: "center" }}>
                                <p style={{ width: '450px', color: '#b6b6b6', fontSize: '14px' }}>* Ваши данные не будут переданы третьим лицам, 100% вероятность. Конфиденциальность мы гарантируем, и защищаем персональные данные согласно законку ФЗ-52.</p>
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
