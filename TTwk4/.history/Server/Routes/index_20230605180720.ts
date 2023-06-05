import express from 'express';
const router = express.Router();

/* Display home page. */
router.get('/', function(req:express.Request, res: express.Response, next: express.NextFunction)//a callback func? 
{
  res.render('index'/* template in Views index.ejs*/, { title: 'Home' , page: 'home'}/* object passed to the template, title is a property */);//generate / draw a page
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

export default router;

