import { Router } from 'express';
import SectionRouter from './SectionRouter';
import AllSectionsRouter from './AllSectionsRouter';
import LoginRouter from './LoginRouter';
import UploadRouter from './UploadRouter';
import AdvertsRouter from './AdvertsRouter';
import ContactsRouter from './ContactsRouter';
// Init router and path
const router = Router();

// Add sub-routes
router.use('/allsections', AllSectionsRouter);
router.use('/section', SectionRouter);
router.use('/login', LoginRouter);
router.use('/upload', UploadRouter);
router.use('/adverts', AdvertsRouter);
router.use('/contacts', ContactsRouter);

// Export the base-router
export default router;
