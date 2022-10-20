

const makeUserBusinessLogic = ({store, entity, helper}) => {
    const {storeUser} = store 
    const {validateUserCreation} = entity 

  
    const createUser = async ({data}) => {
       var userEntity = await validateUserCreation({data}) 
       var userData = await storeUser({data:userEntity}) 
       return userData
    } 

    return {createUser}
}

module.exports = {makeUserBusinessLogic}