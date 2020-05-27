async function isLoggedIn () {
    const token = store.get('token')
    if (!token) return false
}

async function basiclogin (email, password) {
    const response = await zlFetch.post(loginEndpoint, {
        auth: {
            username: email,
            password: password
        },
        body: { /*...*/ }
    })
}

async function basiclogin (email, password) {
    const response = await zlFetch.post(/*...*/)
    const { token } = response.body

    localStorage.setItem('token', token)
}

var string = window.documentURI