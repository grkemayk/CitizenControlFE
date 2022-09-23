import axios from "axios";

async function getCitizenList() {
    const apiUrl = "http://localhost:8002/citizen/getAll";
    const { data } = await axios(apiUrl);
    return data;
}
export { getCitizenList };