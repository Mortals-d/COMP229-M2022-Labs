import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req:express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index'/* template */, { title: 'Home' }/* object passed to the template */);//generate / draw a page
});

export default router;
