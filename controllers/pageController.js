const Page = require('../models/Page');

exports.getHomePage = (req, res) => {
  res.render('home', { title: 'Home' });
};

exports.getPage = (req, res) => {
  const slug = req.params.slug;
  Page.findOne({ slug: slug }, (err, page) => {
    if (err || !page) {
      res.status(404).send('Page not found');
    } else {
      res.render('page', { pageTitle: page.title, pageContent: page.content });
    }
  });
};

exports.getEditPage = (req, res) => {
  const id = req.params.id;
  Page.findById(id, (err, page) => {
    if (err || !page) {
      res.status(404).send('Page not found');
    } else {
      res.render('admin/editPage', { title: 'Edit Page', page: page });
    }
  });
};

exports.editPage = (req, res) => {
  const id = req.params.id;
  const updatedPage = {
    title: req.body.title,
    slug: req.body.slug,
    content: req.body.content
  };
  Page.findByIdAndUpdate(id, updatedPage, { new: true }, (err, page) => {
    if (err || !page) {
      res.status(404).send('Page not found');
    } else {
      res.redirect('/admin/dashboard');
    }
  });
};
