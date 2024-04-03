const User = require('../models/User');
const Page = require('../models/Page');

exports.getLoginPage = (req, res) => {
  res.render('admin/login', { title: 'Login' });
};

exports.login = (req, res) => {
  // Implement login functionality here
};

exports.getDashboardPage = (req, res) => {
  res.render('admin/dashboard', { title: 'Dashboard' });
};

exports.getAddPagePage = (req, res) => {
  res.render('admin/addPage', { title: 'Add Page' });
};

exports.addPage = (req, res) => {
  // Implement addPage functionality here
};

exports.getEditPagePage = (req, res) => {
  res.render('admin/editPage', { title: 'Edit Page' });
};

exports.editPage = (req, res) => {
  // Implement editPage functionality here
};
