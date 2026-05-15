import axios from 'axios';//fetch 함수와 동일. axios는 HTTP 요청을 보내는 라이브러리로, fetch 함수와 유사한 역할을 합니다. 하지만 axios는 더 간편한 API와 추가 기능을 제공하여 HTTP 요청을 보다 쉽게 처리할 수 있도록 도와줍니다. 예를 들어, axios는 자동으로 JSON 데이터를 변환해주고, 요청과 응답에 대한 인터셉터를 지원하며, 에러 처리를 간소화하는 등의 기능을 제공합니다. 따라서 axios를 사용하면 HTTP 요청을 보다 효율적으로 관리할 수 있습니다.

/**
 * 배열을 n개씩 묶어 2차원 배열로 반환
 */
export const groupByRows = (array, number) => {
  return (array ?? []).reduce((acc, cur, idx) => {
    if (idx % number === 0) acc.push([cur]);
    else acc[acc.length - 1].push(cur);
    return acc;
  }, []);
};

/**
 * public/data 폴더의 JSON 파일을 fetch
 */
// export const axiosData = async (url) => {
//   const response = await axios.get(url);
//   return response.data;
// };
export const axiosGet  = async (path) => {
  const url=`http://localhost:9000${path}`;
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
};
