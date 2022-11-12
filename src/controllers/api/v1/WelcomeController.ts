import * as Helpers from '../../../helpers/Helpers'

class WelcomeController {

    users(req: any, res: any){
        try {
            Helpers.apiResponse(res, 200, 'User Listing Successfully', [])
        } catch (error) {
            Helpers.apiResponse(res, 500, error, [])
        }
    }

}

export default new WelcomeController();