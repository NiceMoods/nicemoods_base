/*eslint-disable */
/**
 * @file 路由配置文件
 * @author tianzheng01@baidu.com
 */

/**
 * 路由工具
 *
 * @param {string} router 路由
 */
module.exports = function rootrouter(router) {
    router.use('^/$', yog.dispatcher.action('nicemoods_index/index').index);
    router.use('/index', yog.dispatcher.action('nicemoods_index/index').index);
};


