import firebase from './Firebase';
const functions = firebase.functions();
const sgMail = require("@sendgrid/mail");
const cors = require("cors")({
  origin: true
});

export const SendEmail = functions.httpsCallable((req, res) => {
  const { name } = req.body;
  console.log(name);
  return cors(req, res, () => {
    var text = `<div>
      <h4>Information</h4>
      <ul>
        
    </div>`;
    const msg = {
      to: "tanwer.ubaid@gmail.com",
      from: "babadook1122@gmail.com",
      subject: `${name} sent you a new message`,
      text: text,
      html: text
    };
    sgMail.setApiKey(
      "SG.iBiP5aoYQSeLxdXlGQFihg.jGmmDenQnHD2AUGas1ishGYfScbbdGgAQ3DKf1iAgCc"
    );
    sgMail.send(msg);
    res.status(200).send("success");
  }).catch(() => {
    res.status(500).send("error");
  });
});