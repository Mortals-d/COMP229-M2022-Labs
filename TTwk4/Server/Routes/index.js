"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Homepage of Haibo Dong', page: 'home' });
});
router.get('/home', function (req, res) {
    res.render('index', { title: 'Homepage of Haibo Dong', page: 'home' });
});
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About Me', page: 'about' });
});
router.get('/projects', function (req, res, next) {
    res.render('index', { title: 'My Projects', page: 'projects' });
});
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'My Services', page: 'services' });
});
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact Me', page: 'contact' });
});
router.post('/contact', function (req, res, next) {
    const { firstName, lastName, contactNumber, email, message } = req.body;
    res.redirect('/');
});
exports.default = router;
//# sourceMappingURL=index.js.map