import axios from "axios";
import { config } from "../config/config";

const findProducts = async () => {

    const res = await axios.get(config.API+'products/get-products', {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
    });
    return res || [];
};

export { findProducts };