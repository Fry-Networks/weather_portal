'use server';
import axios from 'axios';
import 'dotenv/config';
const url = `http://${process.env.API_HOST}:${process.env.API_PORT}/api/submitkey`;
export async function LinkKey(key: string, address: string): Promise<{verified: boolean, data: {
    message: string,
    color: string
}}> {
    try {
        const response = await axios.post(url, { key, address });

        const data: {
            message: string,
            status: 'ERROR' | 'SUCCESS',
        } = response.data;

        if (response.status === 200) {
            return {
                verified: true,
                data: {
                    message: data.message,
                    color: data.status === 'ERROR' ? StatusColors.ERROR : StatusColors.SUCCESS
                }
            }
        } else {
            return {
                verified: false,
                data: {
                    message: data.message,
                    color: data.status === 'ERROR' ? StatusColors.ERROR : StatusColors.SUCCESS
                }
            }
        }
    } catch (error) {
        return {
            verified: false,
            data: {
                message: 'We were unable to verify your key. Please try again later, if the problem persists, contact simon.',
                color: StatusColors.ERROR
            }
        }
    }
}

enum StatusColors {
    ERROR = 'rgb(212, 20, 6)',
    SUCCESS = 'rgb(0, 128, 0)'
}