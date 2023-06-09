import express from 'express';
const router = express.Router();

/* Display home page. */
router.get('/', function(req:express.Request, res: express.Response, next: express.NextFunction)//a callback func? 
{
  res.render('index'/* template in Views index.ejs*/, { title: 'Homepage of Haibo Dong' , page: 'home'}/* object passed to the template, title is a property */);//generate / draw a page
});

/* Display home page. */
router.get('/home', function(req:express.Request, res: express.Response, next: express.NextFunction)//a callback func? 
{
  res.render('index', { title: 'Home' , page: 'home'});
});

/* Display about page. */
router.get('/about', function(req:express.Request, res: express.Response, next: express.NextFunction)//a callback func? 
{
  res.render('index', { title: 'About Us' , page: 'about'});
});

/* Display projects page. */
router.get('/projects', function(req:express.Request, res: express.Response, next: express.NextFunction)//a callback func? 
{
  res.render('index', { title: 'Our Projects' , page: 'projects'});
});

/* Display services page. */
router.get('/services', function(req:express.Request, res: express.Response, next: express.NextFunction)//a callback func? 
{
  res.render('index', { title: 'Our Services' , page: 'services'});
});

/* Display contact page. */
router.get('/contact', function(req:express.Request, res: express.Response, next: express.NextFunction)//a callback func? 
{
  res.render('index', { title: 'Contact Us' , page: 'contact'});
});

export default router;

