import axios from "axios";

const url = `https://53d9-102-89-33-58.ngrok-free.app`;
export async function login(payload) {
  console.log(payload);
  const response = await axios.post(
    `${url}/api/V1/skyshowNG/Admin/dashboar/login`,
    payload
  );
  return response.data;
}

export async function analysis() {
  const response = await axios.get(
    "https://53d9-102-89-33-58.ngrok-free.app/api/V1/skyshowNG/Admin/dashboar/salesAnalyis"
  );
  return response.data;
}

export async function userAnalysis() {
  const response = await axios.get(`${url}/api/skyshow/usersAnalysis`);
  return response.data;
}

// export async function getAllTransaction() {
//   const response = await axios.get(`${url}/api/V1/skyshowNG/allTransactions`);
//   return response.data;
// }
