const authenticationRouter = require(`${BASE_DIR}/auth`);
const productsRouter = require(`${BASE_DIR}/auth`);


class BaseRouter {
    static init() {
        const router = express.Router();
        return BaseRouter.registerRouters(router);
    }

    static registerRouters(router) {

        router.use('/auth', authenticationRouter);
        router.use('/products', productsRouter);
        
        return router
    }
}

module.exports = BaseRouter.init();