function getMembers(){
    return fetch('')//PUT URL FOR FETCH HERE
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
}

export default getMembers;