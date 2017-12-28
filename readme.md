i haven't deleted the dummy data (watch min 7,8 of 131)

#git commands

git init - Create a new git repo
git status - View the changes to your project code
git add - Add files to staging area
git commit - Creates a new commit with files from staging area
git log - View recent commits



#Webpack_Notes

change use : [ 'css-loader','sass-loader ] && cheap-module-eval-source-map ---> use: [{loader:'css-loader',options : {sourceMap:true}},{loader:'sass-loader',options:{sourceMap:tru}}] &&
inline-source-map