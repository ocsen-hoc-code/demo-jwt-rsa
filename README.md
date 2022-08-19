# demo-jwt-rsa

Create new RSA private key and public key
ssh-keygen -t rsa -b 1024 -m PEM -f keys/rsa.key
openssl rsa -in keys/rsa.key -pubout -outform PEM -out keys/rsa.key.pub
