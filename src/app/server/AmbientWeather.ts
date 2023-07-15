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
        if (response.status === 200) {
            return {
                verified: true,
                data: {
                    message: response.data.message,
                    color: response.data.color
                }
            }
        } else {
            return {
                verified: false,
                data: {
                    message: response.data.message,
                    color: response.data.color
                }
            }
        }
    } catch (error) {
        return {
            verified: false,
            data: {
                message: 'We were unable to verify your key. Please try again later, if the problem persists, contact simon.',
                color: 'red'
            }
        }
    }
}