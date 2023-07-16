'use server';
import axios from 'axios';
import 'dotenv/config';
const url = `http://${process.env.API_HOST}:${process.env.API_PORT}/api/submitkey`;
export async function LinkKey(key: string, address: string): Promise<{
    verified: boolean, data: {
        message: string,
        color: string
    }
}> {
    let returnData: {
        verified: boolean, data: {
            message: string,
            color: string
        }
    } = {
        verified: false,
        data: {
            message: 'We were unable to verify your key. Please try again later, if the problem persists, contact simon.',
            color: StatusColors.ERROR
        }
    }
    try {
        axios.post(url, { key, address }).then((response) => {

            const data: {
                message: string,
                status: 'ERROR' | 'SUCCESS',
            } = response.data;

            if (response.status === 200) {
                returnData ={
                    verified: true,
                    data: {
                        message: data.message,
                        color: data.status === 'ERROR' ? StatusColors.ERROR : StatusColors.SUCCESS
                    }
                }
            }
        }).catch((error) => {
            console.log(error.response?.data)
            returnData = {
                verified: false,
                data: {
                    message: error.response?.data.message,
                    color: error.response?.data.status === 'ERROR' ? StatusColors.ERROR : StatusColors.SUCCESS
                }
            }
        })

    } catch (error) {
        console.log(error);
        returnData ={
            verified: false,
            data: {
                message: 'We were unable to verify your key. Please try again later, if the problem persists, contact simon.',
                color: StatusColors.ERROR
            }
        }
    }
    return returnData;
}

enum StatusColors {
    ERROR = 'rgb(212, 20, 6)',
    SUCCESS = 'rgb(0, 128, 0)'
}