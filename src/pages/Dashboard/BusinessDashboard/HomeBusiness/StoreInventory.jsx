import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  GridItem,
  Container,
  Flex,
  Stack,
  Input,
  InputLeftElement,
  InputGroup,
  FormControl,
  FormErrorMessage,
  Text,
  Center,
  Box,
  Avatar,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spacer,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

// import { BsSortUp } from "react-icons/bs";
// import { MdFilterAlt, MdAddchart } from "react-icons/md";
// import user1 from "../../../../assets/user1.png";
// import { FaAngleDown } from "react-icons/fa";
// import { RiHomeSmile2Line } from "react-icons/ri";
// import { IoExitOutline, IoBusinessOutline } from "react-icons/io5";
// import { BiStore } from "react-icons/bi";
// import { GiBanknote } from "react-icons/gi";
import AddProduct from "./addProduct";
import { useSelector, useDispatch } from "react-redux";
// import BusinessLayout from "../../../../components/Layout/BusinessLayout";
// import {getProduct} from '../../../../ReduxContianer/BussinessRedux/BusinessAction';
const columns = [
	{ id: 'name', label: 'Name', minWidth: 170 },
	{ id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
	{
		id: 'population',
		label: 'Population',
		minWidth: 170,
		align: 'right',
		format: (value) => value.toLocaleString('en-US'),
	},
	{
		id: 'size',
		label: 'Size\u00a0(km\u00b2)',
		minWidth: 170,
		align: 'right',
		format: (value) => value.toLocaleString('en-US'),
	},
	{
		id: 'density',
		label: 'Density',
		minWidth: 170,
		align: 'right',
		format: (value) => value.toFixed(2),
	},
];
function createData(name, code, population, size) {
	const density = population / size;

	return { name, code, population, size, density };
}

const rows = [
	createData('India', 'IN', 1324171354, 3287263),
	createData('China', 'CN', 1403500365, 9596961),
	createData('Italy', 'IT', 60483973, 301340),
	createData('United States', 'US', 327167434, 9833520),
	createData('Canada', 'CA', 37602103, 9984670),
	createData('Australia', 'AU', 25475400, 7692024),
	createData('Germany', 'DE', 83019200, 357578),
	createData('Ireland', 'IE', 4857000, 70273),
	createData('Mexico', 'MX', 126577691, 1972550),
	createData('Japan', 'JP', 126317000, 377973),
	createData('France', 'FR', 67022000, 640679),
	createData('United Kingdom', 'GB', 67545757, 242495),
	createData('Russia', 'RU', 146793744, 17098246),
	createData('Nigeria', 'NG', 200962417, 923768),
	createData('Brazil', 'BR', 210147125, 8515767),
];


export default function StoreInventory() {
  const yellowbtn = useColorModeValue("yellow.500");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const products = [];
  //   const businessSignIn = useSelector((state) => state.businessSignIn);
  //   const { user } = businessSignIn;
  //   const { businessDetails } = user;
  //   const { message } = businessDetails;

  const [search, setSearch] = useState("");
  //   const [businessId] = useState(message.business_id);
  //   const fetchProduct = useSelector((state) => state.fetchProduct);
  //   const { products, loading, error } = fetchProduct;

  return (
		<Container maxW='container' mt='40px' overflow='hidden'>
			{/* <TabPanels> */}

			<Flex
				// w='800px'
				direction='row'
				alignItems='center'
				justifyContent='space-between'>
				<Stack>
					<Text fontWeight='bold' fontSize='30px'>
						Store Inventory
					</Text>
				</Stack>
				<Formik>
					{() => (
						<Form>
							<Field name='text'>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.name && form.touched.name}>
										<InputGroup>
											<InputLeftElement
												pointerEvents='none'
												m='25px 1px'
												fontSize='20px'
												color='yellow.500'
												children=''
											/>
											<Input
												{...field}
												onChange={(e) => setSearch(e.target.value)}
												type='text'
												placeholder='Search'
												value={search}
												padding='30px 10px'
												// width="300px"
												// h="60px"
												borderRadius='0px 11px 11px 11px'
											/>
										</InputGroup>
										<FormErrorMessage>{form.errors.name}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
						</Form>
					)}
				</Formik>
				<Stack>
					<AddProduct />
				</Stack>
			</Flex>

			{/* <Container maxW='container.lg' mt='40px'>
				<Table variant='simple' size='lg'>
					<Thead>
						<Tr>
							<Th>
								<Text color='black' fontSize='16px'>
									All Products
								</Text>
							</Th>
							<Th></Th>
							<Th>
								<Stack
									direction='row'
									color='black'
									alignItems='center'
									pr='30px'>
									<BsSortUp />
									<Text color='black' fontSize='16px'>
										Sort
									</Text>
								</Stack>
							</Th>
							<Th>
								<Stack direction='row' alignItems='center'>
									<MdFilterAlt />
									<Text color='black' fontSize='16px'>
										Filter
									</Text>
								</Stack>
							</Th>
						</Tr>
					</Thead>
					<Thead>
						<Tr>
							<Th>
								<Text color='gray' fontSize='14px'>
									Product Name
								</Text>
							</Th>
							<Th>
								<Text color='gray' fontSize='14px'>
									Price
								</Text>
							</Th>
							<Th>
								<Text color='gray' fontSize='14px'>
									Category
								</Text>
							</Th>
							<Th>
								<Text color='gray' fontSize='14px'>
									Status
								</Text>
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						{!loading &&
							products?.details?.map((product) => {
								return (
									<Tr>
										<Td>
											<Text>{product.title}</Text>
										</Td>
										<Td>
											<Text fontSize='14px' color='red.500'>
												₦{product.price}
											</Text>
										</Td>
										<Td>
											{' '}
											<Text fontSize='14px' color='gray'>
												{product.category}
											</Text>
										</Td>
										<Td>
											{' '}
											<Text fontSize='14px' color='gray'>
												{product.status}
											</Text>
										</Td>
									</Tr>
								);
							})}
					</Tbody>
				</Table> */}
				{/* <Box
									px='30px'
									w='60vw'
									boxSizing='border-box'
									borderWidth='1px'
									borderRadius='0px 21px 21px 21px'
									overflow='hidden'
									display='flex'
									direction='row'
									alignItems='center'
									justifyContent='space-between'>
									<Stack>
										<Text color='black' fontSize='16px'>
											All Products
										</Text>
									</Stack>
									<Flex h='10vh' direction='row' alignItems='center'>
										<Stack
											direction='row'
											color='black'
											alignItems='center'
											pr='30px'>
											<BsSortUp />
											<Text color='black' fontSize='16px'>
												Sort
											</Text>
										</Stack>
										<Stack direction='row' alignItems='center'>
											<MdFilterAlt />
											<Text color='black' fontSize='16px'>
												Filter
											</Text>
										</Stack>
									</Flex>
								</Box>
								<Box
									px='30px'
									w='60vw'
									boxSizing='border-box'
									borderWidth='1px'
									borderRadius='0px 21px 21px 21px'
									overflow='hidden'>
									<Stack
										h='10vh'
										display='flex'
										direction='row'
										alignItems='center'
										justifyContent='space-between'>
										<Text color='gray' fontSize='14px'>
											Product Name
										</Text>
										<Text color='gray' fontSize='14px'>
											Price
										</Text>
										<Text color='gray' fontSize='14px'>
											Category
										</Text>
										<Text color='gray' fontSize='14px'>
											Status
										</Text>
									</Stack>
								</Box>

								{!loading &&
									products?.details?.map((product) => {
										return (
											<Box
												px='25px'
												h='100px'
												w='60vw'
												border='0.5px solid #D9D9D9'
												display='flex'
												alignItems='center'
												justifyContent='space-between'>
												<Stack>
													<Text textAlign='left'>{product.title}</Text>
													<Text textAlign='left' color='gray' fontSize='12px'>
														{product.updateAt}
													</Text>
												</Stack>

												<Text textAlign='left' fontSize='12px' color='red.500'>
													₦{product.price}
												</Text>
												<Text textAlign='left' fontSize='12px' color='gray'>
													{product.category}
												</Text>
												<Text textAlign='left' fontSize='12px' color='gray'>
													{product.status}
												</Text>
											</Box>
										);
									})} */}
			{/* </Container> */}
			{/* </TabPanels> */}
		</Container>
	);
}
