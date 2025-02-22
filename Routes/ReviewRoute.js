import express from 'express'
import { 
    createReview, deleteReview, getBookByReview5Star, getReviewsByBook, inforReviewBook, updateReview,
} from '../Controllers/ReviewController.js';
import { verifyjson } from '../middleware/jwt.js';

const routerReview = express.Router()
routerReview.post('/create/:id',verifyjson, createReview)
routerReview.get('/:id', getReviewsByBook)
routerReview.delete('/delete/:id', verifyjson, deleteReview)
routerReview.put('/update/:id', verifyjson, updateReview);
routerReview.get('/list/star', verifyjson, getBookByReview5Star)
routerReview.get('/infor/:id', inforReviewBook)
export default routerReview;