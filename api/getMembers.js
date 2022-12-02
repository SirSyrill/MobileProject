import axios from 'axios';

async function getMembers(){
  const res = await axios.get('http://localhost:3000')
  return res
}
// async function getMembers(){
//     const result =  await fetch('http://localhost:3000')//PUT URL FOR FETCH HERE
//     .then((res) => res.json())
//     .then((json) => {
//       console.log(json)
//       return json;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//     return result
// }

export default getMembers;