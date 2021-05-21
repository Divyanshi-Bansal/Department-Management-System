import {Router, text} from 'express';
import {get_employees , get_home , put_employees , post_employees , delete_employees, errorPage} from '../controllers/index_controllers';

const router = Router();

router.get('/' , get_home);

router.get('/employees' , get_employees);

router.put('/put' , put_employees);

router.post('/post' , post_employees);

router.delete('/delete' , delete_employees);

router.get('*' , errorPage);

export default router;
