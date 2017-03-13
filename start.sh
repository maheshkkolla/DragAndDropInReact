echo "\n\t *** Installing dependencies *** \n"
npm install
cd public
npm install
cd ..
echo "\n\t *** Packing *** \n"
npm run webpack
echo "\n\t *** Starting Server *** \n"
node ./bin/www
