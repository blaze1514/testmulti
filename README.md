# testmulti
create two simple react apps

change content in app as you wish for app two

do npm run  build for app two

serve -s build app two

default run in 5000 port example url(http://localhost:5000)

now get script and css link from index.html inside build folder in app two(eg:     <script defer="defer" src="/static/js/main.3c60973b.js"></script>
    <link href="/static/css/main.073c9b0a.css" rel="stylesheet">)


now append serve url for the script and css src links(eg:http://localhost:5000/static/js/main.3c60973b.js

paste this in app one index.html inside  app one public folder (eg: <script type="text/javascript" src="http://localhost:5000/static/js/main.3c60973b.js"></script>)

make sure to create different id(instead of root for app) in index.html file and do npm start app one

Note: change tagging id in index.js in src folder to the same id changed in index.html in public folder


