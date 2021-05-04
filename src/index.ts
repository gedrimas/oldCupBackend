import './pre-start'; // Must be the first import
import app from '@server';
import logger from '@shared/Logger';
import mongoose from 'mongoose';

const port = Number(process.env.PORT || 3001);

// Connect to db
mongoose
  .connect('mongodb://localhost:27017/oldcupdb', {
    useNewUrlParser: true,
  })
  .then(() => {
    //Start the server
    app.listen(port, () => {
      logger.info('Express server started on port: ' + port);
    });
  })
  .catch((err) => console.log('Error with connection to DB', err));
