import axios from 'axios';
import UserActionType from '../constants/UserActionType';
import OrderActionType from '../constants/OrderActionType';

const baseUrl = `https://finosell.link/api/v2`;

export const businessUserSignUp =
	(name, phone_number, email, password, address, industry, account_type) =>
	async (dispatch) => {
		dispatch({
			type: UserActionType.DATA_REQUEST,
		});
		try {
			const { data } = await axios.post(baseUrl + `/auths/firststage`, {
				name,
				phone_number,
				email,
				password,
				address,
				industry,
				account_type,
			});
			dispatch({
				type: UserActionType.SIGN_UP_SUCCESS,
				payload: data,
			});

			localStorage.setItem('businessDetails', JSON.stringify(data));
		} catch (error) {
			dispatch({
				type: UserActionType.SIGN_UP_ERROR,
				payload: error.response && error.response.data.message,
			});
		}
	};

export const businessUserLogin =
	(phonenumber, password) => async (dispatch) => {
		dispatch({
			type: UserActionType.DATA_REQUEST,
		});
		try {
			const { data } = await axios.post(baseUrl + `/auths/login`, {
				phonenumber,
				password,
			});
			dispatch({
				type: UserActionType.SIGN_IN_SUCCESS,
				payload: data,
			});

			localStorage.setItem('businessDetails', JSON.stringify(data));
		} catch (error) {
			dispatch({
				type: UserActionType.SIGN_IN_ERROR,
				payload: error.response && error.response.data.message,
			});
		}
	};


	export const creditUserAccount = (amount,user_id,balance_type,ref,platform) => async(dispatch,getState) => {
		dispatch({
			type: UserActionType.DATA_REQUEST
		});
		try {
			const {
				businessUserSign: { businessDetails },
			} = getState();
			const { data } = await axios.post(baseUrl + `/finance/credit`, amount, user_id, balance_type, ref, platform , {
				headers: {
					Authorization: `Bearer ${businessDetails.password}`,
				}
			})
			dispatch({
				type: UserActionType.CREDIT_USER_SUCCESS,
				payload: data
			});
		}catch (error) {
			dispatch({
				type: UserActionType.CREDIT_USER_ERROR,
				payload: error.response && error.response.data.message,
			});
		}
	}

	export const getOrders = (business_id) => async (dispatch) => {
		try{
			const {data} = await axios.get(baseUrl + `/order/fetch?business_id=${business_id}`)
			dispatch({
				type: OrderActionType.GET_ORDER_SUCCESS,
				payload: data
			})
		}catch (error){
			 dispatch({
					type: OrderActionType.GET_ORDER_ERROR,
					payload: error.response && error.response.data.message,
				});
		}
} 
	

export const createCustomers = (customer_name,customer_email,customer_id,customer_phonenumber,customer_address,business_id) => async (dispatch,getState) => {
	try {
		const {
			businessSignIn: { user:
				{ businessDetails: { message } },
				},
		} = getState();
		 const config = {
				headers: {
					Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIzNDgxNDQ4NjIwMDQiLCJpYXQiOjE2MTYyMzc4Mjc2NzN9.8QjRI7kI-jkhu7WOXEDSVGEdwp_03v9HEKVmBEvE1yU`,
				},
			};
		const { data } = await axios.post(
			baseUrl + `/customer/create`,
			{
				customer_name,
				customer_email,
				customer_id,
				customer_phonenumber,
				customer_address,
				business_id,
			},
		 config
		); 
			dispatch({
				type: UserActionType.CREATE_CUSTOMER_SUCCESS,
				payload: data
			})
	} catch (error) {
		    dispatch({
					type: UserActionType.CREATE_CUSTOMER_ERROR,
					payload:
						error.response && error.response.data.message
							? error.response.data.message
							: error.message,
				});
		}
}



