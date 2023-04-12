import {
	Avatar,
	AvatarBadge,
	AvatarGroup,
	Box,
	Button,
	CircularProgress,
	CircularProgressLabel,
	DarkMode,
	Flex,
	Grid,
	Icon,
	Image,
	Link,
	Switch,
	Text
} from '@chakra-ui/react';
import avatar11 from 'assets/img/avatars/avatar11.jpg';
// Images
import avatar2 from 'assets/img/avatars/avatar2.png';
import avatar3 from 'assets/img/avatars/avatar3.png';
import avatar4 from 'assets/img/avatars/avatar4.png';
import avatar6 from 'assets/img/avatars/avatar6.png';
import bgProfile from 'assets/img/backgroundProfile.jpg';
import ProjectImage1 from 'assets/img/ProjectImage1.png';
import ProjectImage2 from 'assets/img/ProjectImage2.png';
import ProjectImage3 from 'assets/img/ProjectImage3.png';
// Custom components
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';
import LineChart from 'components/Charts/LineChart';
import IconBox from 'components/Icons/IconBox';
import { CarIcon, FulgerIcon, FulgerWhiteIcon, } from 'components/Icons/Icons';
import { Separator } from 'components/Separator/Separator';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaCube, FaFacebook, FaInstagram, FaPencilAlt, FaPenFancy, FaTwitter } from 'react-icons/fa';
// Icons
import { IoDocumentsSharp } from 'react-icons/io5';
// Data
import {
	lineChartDataProfile1,
	lineChartDataProfile2,
	lineChartOptionsProfile1,
	lineChartOptionsProfile2
} from 'variables/charts';

function Profile() {
	return (
		<Flex direction='column' mt={{ sm: '25px', md: '0px' }}>
			<Box
				mb={{ sm: '24px', md: '50px', xl: '20px' }}
				borderRadius='15px'
				px='0px'
				display='flex'
				flexDirection='column'
				justifyContent='center'
				align='center'>
				{/* Header */}
				<Card
					direction={{ sm: 'column', md: 'row' }}
					mx='auto'
					maxH='330px'
					w={{ sm: '90%', xl: '100%' }}
					justifyContent={{ sm: 'center', md: 'space-between' }}
					align='center'
					p='24px'
					borderRadius='20px'
					mt='100px'>
					<Flex align='center' direction={{ sm: 'column', md: 'row' }}>
						<Flex
							align='center'
							mb={{ sm: '10px', md: '0px' }}
							direction={{ sm: 'column', md: 'row' }}
							w={{ sm: '100%' }}
							textAlign={{ sm: 'center', md: 'start' }}>
							<Avatar me={{ md: '22px' }} src={avatar11} w='80px' h='80px' borderRadius='15px'>
								<AvatarBadge
									cursor='pointer'
									borderRadius='8px'
									border='transparent'
									bg='linear-gradient(138.78deg, rgba(6, 11, 40, 0.94) 17.44%, rgba(10, 14, 35, 0.49) 93.55%, rgba(10, 14, 35, 0.69) 93.55%)'
									boxSize='26px'
									backdropFilter='blur(120px)'>
									<Icon h='12px' w='12px' color='#fff' as={FaPencilAlt} />
								</AvatarBadge>
							</Avatar>
							<Flex direction='column' maxWidth='100%' my={{ sm: '14px' }}>
								<Text
									fontSize={{ sm: 'lg', lg: 'xl' }}
									color='#fff'
									fontWeight='bold'
									ms={{ sm: '8px', md: '0px' }}>
									Nicolas Brito
								</Text>
								<Text fontSize={{ sm: 'sm', md: 'md' }} color='gray.400'>
									nicolasbcruz@gmail.com
								</Text>
							</Flex>
						</Flex>
						<Flex direction={{ sm: 'column', lg: 'row' }} w={{ sm: '100%', md: '50%', lg: 'auto' }}>
							<Button
								borderRadius='12px'
								bg='#239645'
								_hover={{ opacity: '0.8' }}
								_active={{ opacity: '0.9' }}
								me={{ base: 'none', lg: '20px' }}
								leftIcon={<Icon color='white' as={FaCube} me='6px' />}>
								<Text fontSize='xs' color='#fff' fontWeight='bold'>
									VISÃO GERAL
								</Text>
							</Button>

							<Link
								href='#'
								color='teal.300'
								fontSize='lg'
								me='10px'
								_hover={{ color: 'teal.300' }}>
								<Button
									borderRadius='12px'
									bg='transparent'
									_hover={{
										bg: '#239645'
									}}
									_active={{
										bg: '#239645'
									}}
									leftIcon={<Icon color='white' as={FaPenFancy} me='6px' />}>
									<Text fontSize='xs' color='#fff' fontWeight='bold'>
										DASHBOARD
									</Text>
								</Button>
							</Link>


						</Flex>
					</Flex>
				</Card>
			</Box>
			<Grid
				templateColumns={{
					sm: '1fr',
					xl: 'repeat(2, 1fr)',
					'2xl': '1fr 2fr 1.2fr'
				}}
				gap='22px'
				mb='24px'>
				{/* Welcome Card */}
				<Card
					bgImage={bgProfile}
					bgSize='cover'
					maxW={{ sm: '325px', md: '725px', lg: '980px' }}
					h={{ sm: '270px', lg: '350px', xl: '410px' }}
					gridArea={{ xl: '1 / 1 / 2 / 2', '2xl': 'auto' }}>
					<Flex direction='column' h='100%'>
						<Text color='#fff' fontSize='30px' fontWeight='bold' mb='3px'>
							Bem Vindo de Volta!
						</Text>
						<Text color='#fff' fontSize='sm' mb='auto'>
							Bom te ver novamente, Nicolas Brito!
						</Text>
						<Button alignSelf='flex-start' variant='no-hover' bg='transparent' p='0px'>
							<Text
								fontSize='xs'
								color='#fff'
								me='5px'
								cursor='pointer'
								transition='all .3s ease'
								_hover={{ me: '6px' }}>
								Tab to record
							</Text>
							<Icon
								as={BsArrowRight}
								w='13px'
								h='13px'
								color='#fff'
								transition='all .3s ease'
								cursor='pointer'
								_hover={{ transform: 'translateX(20%)' }}
							/>
						</Button>
					</Flex>
				</Card>
				{/* Car Informations */}
				<Card
					p='16px'
					maxH={{ lg: '410px' }}
					maxW={{ sm: '325px', md: '725px', lg: '980px', xl: '100%' }}
					gridArea={{ xl: '2 / 1 / 3 / 3', '2xl': 'auto' }}>
					<CardHeader p='12px 5px' mb='12px'>
						<Flex direction='column'>
							<Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>
								Informações da Smart Watch
							</Text>
							<Text fontSize='sm' color='gray.400'>
								Um pequeno relatorio diario sobre você.
							</Text>
						</Flex>
					</CardHeader>
					<CardBody w='100%'>
						<Flex w='100%' direction={{ sm: 'column', md: 'row' }}>
							<Flex
								direction='column'
								align='center'
								me={{ md: '16px', lg: '50px' }}
								mb={{ sm: '12px', md: '0px' }}>
								<CircularProgress
									size={200}
									value={68}
									thickness={6}
									color='green.400'
									variant='vision'>
									<CircularProgressLabel>
										<Flex direction='column' justify='center' align='center'>
											<Text color='#fff' fontSize='36px' fontWeight='bold' mb='6px'>
												68%
											</Text>
											<Text color='gray.400' fontSize='sm'>
												Bateria Restante
											</Text>
										</Flex>
									</CircularProgressLabel>
								</CircularProgress>
								<Flex direction='column' mt='18px' align='center'>
									<Text color='#fff' fontSize='lg' fontWeight='bold' mb='2px'>
										6h 58 min
									</Text>
									<Text color='gray.500' fontSize='sm'>
										Tempo restante de Bateria
									</Text>
								</Flex>
							</Flex>
							<Grid
								templateColumns={{ sm: '1fr', md: 'repeat(2, 1fr)' }}
								gap='24px'
								w='100%'
								alignSelf='flex-start'>
								<Flex
									align='center'
									p='18px'
									justify='space-between'
									bg='linear-gradient(126.97deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 0.5) 91.2%)'
									borderRadius='20px'>
									<Flex direction='column' me='auto'>
										<Text fontSize='xs' color='gray.400' mb='3px'>
											Bateria do Smartphone
										</Text>
										<Text color='#fff' fontSize='22px' fontWeight='bold'>
											96%
										</Text>
									</Flex>
									<IconBox bg='#239645' w='56px' h='56px'>
										<FulgerWhiteIcon w='24px' h='24px' color='#fff' />
									</IconBox>
								</Flex>
								<Flex
									align='center'
									p='18px'
									pe='0px'
									justify='space-between'
									bg='linear-gradient(126.97deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 0.5) 91.2%)'
									borderRadius='20px'>
									<Flex direction='column' me='auto'>
										<Text fontSize='xs' color='gray.400' mb='3px'>
											Tempo de Sono
										</Text>
										<Text color='#fff' fontSize='22px' fontWeight='bold'>
											7h25m
										</Text>
									</Flex>
									<Box maxH='75px'>
										<LineChart
											lineChartData={lineChartDataProfile1}
											lineChartOptions={lineChartOptionsProfile1}
										/>
									</Box>
								</Flex>
								<Flex
									align='center'
									p='18px'
									justify='space-between'
									bg='linear-gradient(126.97deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 0.5) 91.2%)'
									borderRadius='20px'>
									<Flex direction='column' me='auto'>
										<Text fontSize='xs' color='gray.400' mb='3px'>
											Passos
										</Text>
										<Text color='#fff' fontSize='22px' fontWeight='bold'>
											1.535
										</Text>
									</Flex>
									<IconBox bg='#239645' w='56px' h='56px'>
										<FulgerWhiteIcon w='24px' h='24px' color='#fff' />
									</IconBox>
								</Flex>
								<Flex
									align='center'
									p='18px'
									pe='0px'
									justify='space-between'
									bg='linear-gradient(126.97deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 0.5) 91.2%)'
									borderRadius='20px'>
									<Flex direction='column' me='auto'>
										<Text fontSize='xs' color='gray.400' mb='3px'>
											Essa semana
										</Text>
										<Text color='#fff' fontSize='22px' fontWeight='bold'>
											4.645
										</Text>
									</Flex>
									<Box maxH='75px'>
										<LineChart
											lineChartData={lineChartDataProfile2}
											lineChartOptions={lineChartOptionsProfile2}
										/>
									</Box>
								</Flex>
							</Grid>
						</Flex>
					</CardBody>
				</Card>
				{/* Profile Information */}
				<Card
					p='16px'
					maxH={{ md: '410px' }}
					maxW={{ sm: '325px', md: '725px', lg: '980px' }}
					gridArea={{ xl: '1 / 2 / 2 / 3', '2xl': 'auto' }}>
					<CardHeader p='12px 5px' mb='12px'>
						<Text fontSize='lg' color='#fff' fontWeight='bold'>
							Informações Pessoais
						</Text>
					</CardHeader>
					<CardBody px='5px'>
						<Flex direction='column'>
							<Text fontSize='sm' color={'gray.400'} fontWeight='400' mb='15px'>
								Olá, sou Nicolas Brito, Decisões: Se você não consegue decidir, a resposta é não. Se dois igualmente
								caminhos difíceis, opte por aquele mais doloroso a curto prazo (evitar a dor é
								criando ilusão de igualdade).
							</Text>
							<Separator mb='30px' />
							<Flex align='center' mb='18px'>
								<Text fontSize='sm' color={'gray.400'} me='10px'>
									Nome Completo:{' '}
								</Text>
								<Text fontSize='sm' color='#fff' fontWeight='400'>
									Nicolas Brito da Cruz
								</Text>
							</Flex>
							<Flex align='center' mb='18px'>
								<Text fontSize='sm' color={'gray.400'} me='10px'>
									Celular:{' '}
								</Text>
								<Text fontSize='sm' color='#fff' fontWeight='400'>
									(11) 96592-7889
								</Text>
							</Flex>
							<Flex align='center' mb='18px'>
								<Text fontSize='sm' color={'gray.400'} me='10px'>
									Email:{' '}
								</Text>
								<Text fontSize='sm' color='#fff' fontWeight='400'>
									mark@simmmple.com
								</Text>
							</Flex>
							<Flex align='center' mb='18px'>
								<Text fontSize='sm' color={'gray.400'} me='10px'>
									Localização:{' '}
								</Text>
								<Text fontSize='sm' color='#fff' fontWeight='400'>
									Brazil - São Paulo - SP
								</Text>
							</Flex>
							<Flex align='center' mb='18px'>
								<Text fontSize='sm' color={'gray.400'} me='10px'>
									Redes Sociais:{' '}
								</Text>
								<Flex>
									<Link
										href='#'
										color='teal.300'
										fontSize='lg'
										me='10px'
										_hover={{ color: 'teal.300' }}>
										<Icon color='white' as={FaFacebook} w='12px' h='12px' />
									</Link>
									<Link
										href='#'
										color='teal.300'
										fontSize='lg'
										me='10px'
										_hover={{ color: 'teal.300' }}>
										<Icon color='white' as={FaInstagram} w='12px' h='12px' />
									</Link>
									<Link
										href='#'
										color='teal.300'
										fontSize='lg'
										me='10px'
										_hover={{ color: 'teal.300' }}>
										<Icon color='white' as={FaTwitter} w='12px' h='12px' />
									</Link>
								</Flex>
							</Flex>
						</Flex>
					</CardBody>
				</Card>
			</Grid>
		</Flex>
	);
}

export default Profile;
