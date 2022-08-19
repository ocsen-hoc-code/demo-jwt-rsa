const jwt = require("jsonwebtoken");
const fs = require("fs");

const index = () => {
  const privateKey = fs.readFileSync("./keys/private.key");
  console.log(`Private Key: ${privateKey}`);
  const publicKey = fs.readFileSync("./keys/public.key");
  console.log(`Public Key: ${privateKey}`);
  const payload = { msg: "OcSen Hoc Code  ^.^!" };
  const token = jwt.sign(payload, privateKey, { algorithm: "RS256" });
  console.log(`Token: ${token}`);
  const decodeInfo = jwt.verify(token, publicKey, { algorithm: "RS256" });
  console.log(`Decode Info:`, decodeInfo);
};

index();
