import {auth, database} from './base'

const getAuthFunction = (context, dataBaseName, stateDataName) => {

    auth.onAuthStateChanged(user => {
        if (user) {
            context.reviewRef = database.syncState(dataBaseName+user.email.split('@')[0], {
                context: context,
                state: stateDataName
            });
        }
        else {
            console.log('onAuthStateChanged -- out')
            if(context.reviewRef)
                database.removeBinding(context.reviewRef);
        }
    })
    return ({

        signIn: async (email, password) => {
            auth.signInWithEmailAndPassword(email, password)
                .then(user => {

                    context.setState({user})

                })
                .catch(function (error) {
                    context.setState({
                        errorMessage: "Помилка авторизації"
                    })
                });
        },
        signOut: async () => {
            auth.signOut()
                .then(() => {
                    context.setState({user: undefined})
                })
                .catch(function (error) {
                    context.setState({
                        errorMessage: "Помилка sign-out"
                    })
                })
        },
        signUp: async (email, password) => {
            auth.createUserWithEmailAndPassword(email, password)
                .then(user => {
                    context.setState({user})
                })
                .catch(function (error) {
                    context.setState({
                        errorMessage: "Помилка sign-up"
                    })
                });
        }
    })
}

export {getAuthFunction}