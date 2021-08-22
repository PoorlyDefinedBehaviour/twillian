const auth = require("./auth")
// @ponicode
describe("auth.getUser", () => {
    test("0", async () => {
        await auth.getUser()
    })
})

// @ponicode
describe("auth.getToken", () => {
    test("0", async () => {
        await auth.getToken()
    })
})

// @ponicode
describe("auth.authenticate", () => {
    test("0", async () => {
        await auth.authenticate("Anas", "keyword")
    })

    test("1", async () => {
        await auth.authenticate("Anas", "define")
    })

    test("2", async () => {
        await auth.authenticate("Pierre Edouard", "/*")
    })

    test("3", async () => {
        await auth.authenticate("Anas", "access_token")
    })

    test("4", async () => {
        await auth.authenticate("Jean-Philippe", "call")
    })

    test("5", async () => {
        await auth.authenticate(undefined, undefined)
    })
})
