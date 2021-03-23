import { Router } from 'express';
import UserRouter from './Users';
import AuthRouter from './Auth';
import SectionRouter from './SectionRouter';
import AllSectionsRouter from './AllSectionsRouter';
import LoginRouter from './LoginRouter';
import UploadRouter from './UploadRouter';
import AdvertRouter from './AdvertRouter';
import ContactsRouter from './ContactsRouter';
// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/auth', AuthRouter);

router.use('/allsections', AllSectionsRouter);
router.use('/section', SectionRouter);
router.use('/login', LoginRouter);
router.use('/upload', UploadRouter);
router.use('/advert', AdvertRouter);
router.use('/contacts', ContactsRouter);

// Export the base-router
export default router;
