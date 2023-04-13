import axios from "axios";

export let getUser = async (url, token) => {
    const result = await axios.get(url, {
        headers: { authorization: `Bearer ${token}` }
    });
    return result;
}