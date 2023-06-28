const auth = [
    { usuario: "dd", senha: "dd" },
    { usuario: "deivid", senha: "deivid123" },
    { usuario: "jeferson", senha: "jeferson123" },
    { usuario: "professor", senha: "prof123" }
]

class UsersService {
    static authentication(request, response) {
        const { usuario, senha } = request.body

        auth.forEach(user => {
            if (user.usuario === usuario && user.senha === senha) {
                return response.json({ res: "true" })
            }
        });
        return response.json({ res: "false" })
    }

    static register(request, response) {

    }
}

export default UsersService