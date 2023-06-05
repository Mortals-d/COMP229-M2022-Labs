import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req:express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index'/* template in Views index.ejs*/, { title: 'Home' , page: 'home'}/* object passed to the template, title is a property */);//generate / draw a page
});

export default router;
