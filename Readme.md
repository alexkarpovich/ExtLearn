# Setting up

1. качаете вот эту херовину https://www.sencha.com/products/sencha-cmd/
2. качаете вот эту херовину https://www.sencha.com/products/extjs/evaluate/
3. устанавливаем sencha cmd
***после пункта 3 выполнить в терминале: 
 - `echo 'export PATH=$PATH:$HOME/bin/Sencha/Cmd/6.1.0.65' >>  ~/.bashrc`
4. git clone https://github.com/alexkarpovich/Learn.git
5. потом из папки, где лежит sencha sdk (из пункта 2), выполняем вот эту команду sencha generate workspace /path/to/Learn
6. cd /path/to/Learn 
7. Install mongo - https://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/
8. npm installations:
 - `sudo npm i -g concurrently supervisor`
 - `npm i`
9. Run `npm run dev`
