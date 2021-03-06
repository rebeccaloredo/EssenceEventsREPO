'use strict';

import config from '../../config/environment';
import User from '../user/user.model';
var nodemailer = require('nodemailer');


/*
  For this email to work, please use a gmail account and put it in the developent.js
  It should follow this format:

  essEventsEmail: {
    user:   'GMAILUSERNAME',
    password: 'GMAILPASSWORD',
    address:  'emailAddressthatTheGmailIsSendingTheEmailTo'
  }

*/

export function email(req, res)
{
  var email = req.body;
  var user = config.essEventsEmail.user;  //truncated email
  var pass = config.essEventsEmail.password;
  var transporter = nodemailer.createTransport('smtps://' + user + '%40gmail.com:' + pass + '@smtp.gmail.com');
  var mailOptions = {
    from: email.address,
    to: config.essEventsEmail.address,
    subject: 'Contact Request from ' + email.firstName + ' ' + email.lastName,
    text: ((!email.message)? '' : email.message + '\n\n') + 'Phone: ' + email.phone + '\nEmail: ' + email.address
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      throw error;
      res.status(400).end();
    }
    else {
      res.send('Message sent: ' + info.response);
    }
  });
}

export function resetPass(req, res) {
  User.findOne({email: req.body.email}, function(err, user) {
    if (err) {
      throw err;
      res.status(400).send(err);
    }
    else if (!user)
      res.status(400).end();
    else if (req.body.phoneNumber != user.phoneNumber)
      res.status(400).end();
    else {
      var newPass = '';
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for( var i=0; i < 6; i++ )
        newPass += possible.charAt(Math.floor(Math.random() * possible.length));
      user.password = newPass;
      user.save(function(err) {
	if (err) {
	  throw err;
	  res.status(400).send(err);
	}
	else {
          var transporter = nodemailer.createTransport('smtps://' + config.essEventsEmail.user + '%40gmail.com:' + config.essEventsEmail.password + '@smtp.gmail.com');
          var mailOptions = {
            to: req.body.email,
	    subject: 'Password Reset',
	    text: 'Your new password is: ' + newPass,
          };
	  transporter.sendMail(mailOptions, function(error, info) {
	    if (error) {
	      throw error;
	      res.status(400).send(err);
	    }
	    else {
	      res.send('Message sent: ' + info.response);
	    }
	  });
        }
      });
    }
  });
}
