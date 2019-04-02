const router = require('express').Router();

// example Controller;
const exampleController = require('../../../controllers/example.ctrl');

// Create routes
router.get('/create', exampleController.example_create_get);
router.post('/create', exampleController.example_create_post);

// Delete routes
router.get('/:exampleId/delete', exampleController.example_delete_get);
router.post('/:exampleId/delete', exampleController.example_delete_post);

// Update routes
router.get('/:exampleId/update', exampleController.example_update_get);
router.post('/:exampleId/update', exampleController.example_update_post);

// Get Routes
// api/example
router.get('/', exampleController.get_all_examples);

// api/example/:id
router.get('/:exampleId', exampleController.get_example_id);

module.exports = router;