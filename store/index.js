//State
export const state = ()=>({
    email: "Test",
})

//getters 
export const getters={

}

//Actions
export const actions = {
    getValue(emailVal){
        commit("email", emailVal)
        return emailVal
    }
}

//Mutations
export const mutations ={
    GETEMAIL(state, email){
    }
}