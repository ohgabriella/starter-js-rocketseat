import axios from 'axios';
import Github from './GitHub';

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(response)
        } catch (err) {
            console.warn('Erro na api')
        }

    }
}

Api.getUserInfo('ohgabriella')


async function getUserFromGithub(user) {
    try {
        await axios.get(`https://api.github.com/users/${user}`)
    } catch (err) {
        console.log('Usuário não existe');
    }
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');
