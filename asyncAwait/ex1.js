// The function below uses plain old Promises. Rewrite it as an "async" method!

let getDogsOwnersBestFriend = () => {
  return get('/dog/1').then(dog => {
    return get(`/owner/${dog.owner}`)
  }).then(owner => {
    return get(`/friend/${owner.bestFriend}`)
  }).then(friend => {
    return friend.name
  })
}

let getDogsOwnersBestFriendEs6 = async () => {
  const dog = await axios.get('/dog/1')
  let findowner = async (dog) => {
    const owner = await axios.get('/owner/${dog.owner}')
    let findBestFriend = async (owner) => {
      const friend = await axios.get('/friend/${owner.bestfriend}')
      return friend.name
    }
  }
}

let getDogsOwnersBestFriend2Es6 = async () => {
  try {
    let response1 = await get('/dog/1')
    let response2 = await get('/owner/${response1.owner}')
    let response3 = await get('/friend/${response2.bestfriend}')
    return response3.name
  } catch (err) {
    console.log(err)
  }
}
