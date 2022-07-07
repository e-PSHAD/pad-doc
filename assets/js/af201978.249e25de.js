"use strict";(self.webpackChunkdoc_epshad=self.webpackChunkdoc_epshad||[]).push([[95],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:5},i="Environnement local",l={unversionedId:"developpement/setup-local",id:"developpement/setup-local",title:"Environnement local",description:"Le d\xe9p\xf4t principal PAD+ contient une configuration Docker Compose pour lancer facilement un environnement de d\xe9veloppement en local. Les pr\xe9requis sont donc git et Docker (version Desktop par exemple).",source:"@site/docs/developpement/setup-local.md",sourceDirName:"developpement",slug:"/developpement/setup-local",permalink:"/pad-doc/developpement/setup-local",draft:!1,editUrl:"https://github.com/e-PSHAD/pad-doc/edit/main/docs/developpement/setup-local.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Guide du d\xe9veloppeur",permalink:"/pad-doc/developpement/guide"},next:{title:"Personnalisation de la langue",permalink:"/pad-doc/developpement/custom-lang"}},s={},p=[{value:"Installation locale PAD+",id:"installation-locale-pad",level:2},{value:"R\xe9cup\xe9ration du d\xe9p\xf4t de code",id:"r\xe9cup\xe9ration-du-d\xe9p\xf4t-de-code",level:3},{value:"Lancement des services sous Docker",id:"lancement-des-services-sous-docker",level:3},{value:"Acc\xe8s aux services sous Docker",id:"acc\xe8s-aux-services-sous-docker",level:3},{value:"Configuration PAD+ sous Docker",id:"configuration-pad-sous-docker",level:3},{value:"Lancement des tests unitaires sous Docker",id:"lancement-des-tests-unitaires-sous-docker",level:3},{value:"Compilation des modules Javascript",id:"compilation-des-modules-javascript",level:3},{value:"D\xe9veloppement Moodle sous VS Code",id:"d\xe9veloppement-moodle-sous-vs-code",level:2},{value:"Moodle CodeChecker / PHP Sniffer",id:"moodle-codechecker--php-sniffer",level:3},{value:"D\xe9bogage avec Xdebug",id:"d\xe9bogage-avec-xdebug",level:3},{value:"Environnement Windows WSL",id:"environnement-windows-wsl",level:2},{value:"Docker Desktop et WSL",id:"docker-desktop-et-wsl",level:3},{value:"Int\xe9gration Visual Studio Code et WSL",id:"int\xe9gration-visual-studio-code-et-wsl",level:3},{value:"Installation de Git sous WSL",id:"installation-de-git-sous-wsl",level:3}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"environnement-local"},"Environnement local"),(0,o.kt)("p",null,"Le ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/e-PSHAD/PAD"},"d\xe9p\xf4t principal PAD+")," contient une configuration ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose")," pour lancer facilement un environnement de d\xe9veloppement en local. Les pr\xe9requis sont donc ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"git")," et ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," (version Desktop par exemple)."),(0,o.kt)("h2",{id:"installation-locale-pad"},"Installation locale PAD+"),(0,o.kt)("p",null,"Sous Windows, il est vivement recommand\xe9 de faire cette ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"#environnement-windows-wsl"},"installation sous WSL")," (Windows Subsystem for Linux)"),"."),(0,o.kt)("h3",{id:"r\xe9cup\xe9ration-du-d\xe9p\xf4t-de-code"},"R\xe9cup\xe9ration du d\xe9p\xf4t de code"),(0,o.kt)("p",null,"R\xe9cup\xe9rez le d\xe9p\xf4t de code de la PAD+ dans un r\xe9pertoire projets, ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/projets")," par exemple. Cela cr\xe9era le d\xe9p\xf4t ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/projets/PAD")," en local."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/e-PSHAD/PAD.git\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Windows et performances")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Sous Windows, il faut que ce dossier soit h\xe9berg\xe9 dans le ",(0,o.kt)("strong",{parentName:"p"},"syst\xe8me de fichiers WSL")," et pas dans le syst\xe8me de fichiers natif Windows pour obtenir des performances correctes (si on garde des fichiers sous Windows, cela risque de d\xe9grader les performances et mener \xe0 un \xe9chec \xe0 l'installation par exemple, car les services Docker sont sous Linux). Pour cela, ouvrir un terminal WSL et taper ",(0,o.kt)("inlineCode",{parentName:"p"},"cd $HOME")," pour se placer dans son r\xe9pertoire personnel WSL. On peut ouvrir un explorateur Windows avec ",(0,o.kt)("inlineCode",{parentName:"p"},"explorer.exe .")," \xe0 cet endroit."))),(0,o.kt)("h3",{id:"lancement-des-services-sous-docker"},"Lancement des services sous Docker"),(0,o.kt)("p",null,"Le fichier ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," d\xe9finit les trois services essentiels au fonctionnement de la PAD+ :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"webserver")," : un serveur Apache configur\xe9 pour PHP 7.4"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"db")," : une base de donn\xe9es MariaDB en 10.5"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mailhog"),": un service de mail catcher")),(0,o.kt)("p",null,"Les \xe9tapes :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Copiez le fichier ",(0,o.kt)("inlineCode",{parentName:"li"},"config-docker.php")," en ",(0,o.kt)("inlineCode",{parentName:"li"},"config.php")," (configuration sp\xe9cialis\xe9e pour prendre en charge les variables d'environnement du projet Docker)"),(0,o.kt)("li",{parentName:"ol"},"Copiez le fichier ",(0,o.kt)("inlineCode",{parentName:"li"},".env.example")," en ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," (contient les variables propres \xe0 votre environnement Docker, charg\xe9 automatiquement par Docker Compose)"),(0,o.kt)("li",{parentName:"ol"},"Editez le fichier ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," pour configurer la variable ",(0,o.kt)("inlineCode",{parentName:"li"},"MOODLE_DOCKER_WWWROOT")," (les autres variables peuvent \xeatre laiss\xe9es par d\xe9faut)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MOODLE_DOCKER_WWWROOT=$HOME/projets/PAD\n")),(0,o.kt)("p",null,"Ceci permet \xe0 Docker de trouver le code source dans votre syst\xe8me de fichiers."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Lancez Docker compose avec ",(0,o.kt)("inlineCode",{parentName:"li"},"docker compose up -d")," dans le dossier des sources"),(0,o.kt)("li",{parentName:"ol"},"Allez sur ",(0,o.kt)("strong",{parentName:"li"},"http://localhost:8000")," pour tester les services et finaliser l'installation Moodle via l'interface web")),(0,o.kt)("p",null,"Pour arr\xeater les services Docker, tapez ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose stop")," depuis le dossier des sources. Pour d\xe9truire les services (recommencer \xe0 z\xe9ro), tapez ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose down"),". Pour ouvrir une ligne de commande sur le serveur web (par exemple), tapez ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose exec webserver /bin/bash"),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Droits des fichiers")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Comme la configuration Docker utilise le syst\xe8me de fichiers local dans son environnement, cela peut poser des ",(0,o.kt)("strong",{parentName:"p"},"probl\xe8mes de droits d'acc\xe8s")," si vous utilisez l'UI Moodle pour installer des fichiers en local (plugins, th\xe8mes...). Par exemple, pour permettre \xe0 n'importe quel usager d'\xe9crire dans le dossier th\xe8me, on peut utiliser ",(0,o.kt)("inlineCode",{parentName:"p"},"chmod a+w theme"),"."))),(0,o.kt)("p",null,"Le service ",(0,o.kt)("inlineCode",{parentName:"p"},"webserver")," est customis\xe9 pour aider au d\xe9veloppement :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fichier config ",(0,o.kt)("inlineCode",{parentName:"li"},"custom-php.ini")," avec 100Mo par d\xe9faut pour ",(0,o.kt)("inlineCode",{parentName:"li"},"upload_max_filesize")," et ",(0,o.kt)("inlineCode",{parentName:"li"},"post_max_size")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://xdebug.org/"},"extension Xdebug")," pour PHP charg\xe9e"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://moosh-online.com/"},"outil Moosh")," (MOOdle SHell) install\xe9")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"La configuration Docker est largement bas\xe9e sur le ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodle-docker"},"projet moodle-docker")," en le simplifiant."))),(0,o.kt)("h3",{id:"acc\xe8s-aux-services-sous-docker"},"Acc\xe8s aux services sous Docker"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Serveur web")," (instance PAD+) : ",(0,o.kt)("strong",{parentName:"p"},"http://localhost:8000")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Service mailhog")," (interface web pour le mail) : ",(0,o.kt)("strong",{parentName:"p"},"http://localhost:8025"),". Cette interface permet de consulter les mails envoy\xe9s par le serveur web en d\xe9veloppement, par exemple les notifications de visioconf\xe9rence."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Base de donn\xe9es")," : pour interagir avec la base de donn\xe9es, il est possible d'utiliser l'outil ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.adminer.org/"},"Adminer"))," (un fichier php \xe0 d\xe9poser sur le serveur web, accessible par exemple sous http://localhost:8000/adminer.php). Les param\xe8tres de connexion sont \xe0 prendre dans l'environnement de votre projet Docker."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Serveur : ",(0,o.kt)("inlineCode",{parentName:"li"},"db")," (nom du service docker-compose)"),(0,o.kt)("li",{parentName:"ul"},"Utilisateur : ",(0,o.kt)("inlineCode",{parentName:"li"},"MOODLE_DOCKER_DBUSER")," (.env)"),(0,o.kt)("li",{parentName:"ul"},"Mot de passe : ",(0,o.kt)("inlineCode",{parentName:"li"},"MOODLE_DOCKER_DBPASS")," (.env)"),(0,o.kt)("li",{parentName:"ul"},"Base de donn\xe9es : ",(0,o.kt)("inlineCode",{parentName:"li"},"MOODLE_DOCKER_DBNAME")," (.env)")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Interface de connexion \xe0 Adminer",src:n(7505).Z,width:"390",height:"280"})),(0,o.kt)("h3",{id:"configuration-pad-sous-docker"},"Configuration PAD+ sous Docker"),(0,o.kt)("p",null,"Apr\xe8s l'installation initiale, il est recommand\xe9 de reproduire la ",(0,o.kt)("a",{parentName:"p",href:"/installation/configuration"},"configuration post-installation d'une instance PAD+")," afin d'avoir un comportement fid\xe8le en d\xe9veloppement. La configuration automatique d'un projet Docker peut se faire aussi avec Ansible, en utilisant le playbook d\xe9di\xe9 ",(0,o.kt)("inlineCode",{parentName:"p"},"docker_post_config.yml")," et un inventaire local : voir la ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/e-PSHAD/pad-infra#configuration-automatique-dune-installation-locale-sous-docker"},"d\xe9marche Ansible pour Docker"),"."),(0,o.kt)("h3",{id:"lancement-des-tests-unitaires-sous-docker"},"Lancement des tests unitaires sous Docker"),(0,o.kt)("p",null,"La configuration Docker permet aussi de ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodle-docker#use-containers-for-running-phpunit-tests"},"lancer les tests unitaires dans le conteneur")," Moodle webserver."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker compose exec webserver /bin/bash\n\n> php admin/tool/phpunit/cli/init.php\n# [..]\n\n> vendor/bin/phpunit -c theme/padplus/padplus_phpunit.xml [--debug]\n# [..]\n")),(0,o.kt)("h3",{id:"compilation-des-modules-javascript"},"Compilation des modules Javascript"),(0,o.kt)("p",null,"Il faut ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Javascript_Modules"},"installer la cha\xeene de compilation des modules Javascript")," pour pouvoir mettre \xe0 jour certains modules si besoin. Il s'agit des modules r\xe9sidant dans les sous-dossiers ",(0,o.kt)("inlineCode",{parentName:"p"},"amd")," uniquement (le Javascript dans les fichiers mustache n'est pas concern\xe9). Pour r\xe9sumer, la proc\xe9dure d'installation est la suivante :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"installer nvm puis nodejs"),(0,o.kt)("li",{parentName:"ul"},"installer les packages node"),(0,o.kt)("li",{parentName:"ul"},"installer le package grunt-cli globalement (",(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Grunt"},"d'autres modules peuvent \xeatre n\xe9cessaires"),")")),(0,o.kt)("p",null,"Pour utiliser la compilation incr\xe9mentale, le plus simple est d'utiliser la commande ",(0,o.kt)("inlineCode",{parentName:"p"},"grunt watch")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nvm use\ngrunt watch\n")),(0,o.kt)("p",null,"Celle-ci d\xe9tecte les changements sur les fichiers Javascripts \xe0 la sauvegarde et reg\xe9n\xe8re les modules Javascripts dans ",(0,o.kt)("inlineCode",{parentName:"p"},"amd/build")," (fichiers ",(0,o.kt)("inlineCode",{parentName:"p"},".min.js")," et ",(0,o.kt)("inlineCode",{parentName:"p"},".min.js.map"),"). ",(0,o.kt)("strong",{parentName:"p"},"Les modules g\xe9n\xe9r\xe9s doivent \xeatre commit\xe9s avec les sources.")),(0,o.kt)("h2",{id:"d\xe9veloppement-moodle-sous-vs-code"},"D\xe9veloppement Moodle sous VS Code"),(0,o.kt)("p",null,"Voir les extensions et instructions pour le ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Setting_up_VSCode"},"d\xe9veloppement Moodle sous VS Code")," (debugger, linter, etc)."),(0,o.kt)("h3",{id:"moodle-codechecker--php-sniffer"},"Moodle CodeChecker / PHP Sniffer"),(0,o.kt)("p",null,"L'extension ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://marketplace.visualstudio.com/items?itemName=wongjn.php-sniffer"},"PHP Sniffer"))," demande une configuration sp\xe9ciale pour utiliser le style de code Moodle :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/CodeSniffer#Installing_codechecker"},"Installer le plugin CodeChecker")," comme plugin local \xe0 Moodle"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/moodlehq/moodle-local_moodlecheck"},"Installer le plugin MoodleCheck")," (optionnel, pour la v\xe9rification phpdoc)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ne pas commiter ces plugins !")," Ajouter les chemins ",(0,o.kt)("inlineCode",{parentName:"li"},"/local/codechecker/")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"/local/moodlecheck/")," dans le fichier ",(0,o.kt)("inlineCode",{parentName:"li"},".git/info/exclude")," (m\xeame effet qu'un ajout dans ",(0,o.kt)("inlineCode",{parentName:"li"},".gitignore")," sans changer la version locale)"),(0,o.kt)("li",{parentName:"ul"},"Suivre les ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/moodlehq/moodle-local_codechecker#information"},"instructions CodeChecker")," pour configurer le chemin vers l'ex\xe9cutable ",(0,o.kt)("inlineCode",{parentName:"li"},"phpcs")," sous ",(0,o.kt)("inlineCode",{parentName:"li"},"local/codechecker/phpcs/bin"),", par exemple en changeant le ",(0,o.kt)("inlineCode",{parentName:"li"},"PATH")," sous ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.profile")," ou ",(0,o.kt)("inlineCode",{parentName:"li"},".bashrc")," :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# <PAD_HOME> est le chemin d\'acc\xe8s au code PAD\nPATH="<PAD_HOME>/local/codechecker/phpcs/bin:$PATH"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Il faut enregistrer le chemin de CodeChecker pour ajouter le standard Moodle dans phpcs  :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# enregistrer le standard Moodle dans phpcs\nphpcs --config-set installed_paths <PAD_HOME>/local/codechecker\n# configurer le standard Moodle comme d\xe9faut pour phpcs\nphpcs --config-set default_standard moodle\n# v\xe9rifier avec\nphpcs -i\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sous VS Code, configurer ",(0,o.kt)("em",{parentName:"li"},"PHP Sniffer")," pour utiliser le standard Moodle :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    "phpSniffer.standard": "moodle",\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"si ",(0,o.kt)("em",{parentName:"li"},"PHP Sniffer")," ne trouve pas phpcs ou le standard moodle, changer dans les settings :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    "phpSniffer.executablesFolder": "<PAD_HOME>/local/codechecker/phpcs/bin"\n')),(0,o.kt)("h3",{id:"d\xe9bogage-avec-xdebug"},"D\xe9bogage avec Xdebug"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=xdebug.php-debug"},"L'extension PHP Debug")," permet de lancer des sessions de d\xe9bogage avec le conteneur Docker Moodle (qui contient l'extension Xdebug). Quand on rajoute une configuration ",(0,o.kt)("em",{parentName:"p"},"Listen for Xdebug"),", il faut faire attention \xe0 quelques param\xe8tres :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"le port est 9003 (pour Xdebug 3)"),(0,o.kt)("li",{parentName:"ul"},"le hostname est localhost"),(0,o.kt)("li",{parentName:"ul"},"le pathMappings doit indiquer le chemin d'acc\xe8s aux sources de la PAD+ dans votre workspace"),(0,o.kt)("li",{parentName:"ul"},"le param\xe8tre log peut \xeatre utile pour d\xe9boguer la configuration")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'        {\n            "name": "Listen for Xdebug",\n            "type": "php",\n            "request": "launch",\n            "port": 9003,\n            // "log": true,\n            "pathMappings": {\n                "/var/www/html": "${workspaceFolder}/PAD"\n            },\n            "hostname": "localhost"\n        },\n')),(0,o.kt)("h2",{id:"environnement-windows-wsl"},"Environnement Windows WSL"),(0,o.kt)("p",null,"Instructions pour la pr\xe9paration de l'environnement WSL (Windows Subsystem for Linux) avec Docker + Visual Studio Code + git."),(0,o.kt)("h3",{id:"docker-desktop-et-wsl"},"Docker Desktop et WSL"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Installer ",(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop"),"."),(0,o.kt)("li",{parentName:"ul"},"Suivre le tutorial Windows pour la ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/setup/environment"},"configuration WSL pour d\xe9veloppeurs")," (Autre ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/windows/wsl/#develop-with-docker-and-wsl-2"},"r\xe9f\xe9rence chez Docker"),").")),(0,o.kt)("p",null,"Dans une ligne de commande, on va installer une Ubuntu sous WSL et la d\xe9finir comme syst\xe8me par d\xe9faut :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wsl --set-default-version 2\nwsl --install -d Ubuntu\nwsl -s Ubuntu\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Attention")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Activer l'int\xe9gration avec Ubuntu WSL dans les ",(0,o.kt)("a",{parentName:"p",href:"https://moodle.org/mod/forum/discuss.php?d=420197"},"param\xe8tres Docker Desktop")," (pour que la CLI Docker puisse marcher sous Ubuntu)."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Optionnel")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Installation de Windows terminal : ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/terminal/"},"https://docs.microsoft.com/en-us/windows/terminal/")))),(0,o.kt)("h3",{id:"int\xe9gration-visual-studio-code-et-wsl"},"Int\xe9gration Visual Studio Code et WSL"),(0,o.kt)("p",null,"Cela permet d'acc\xe9der au code h\xe9berg\xe9 sous WSL avec ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-vscode"},"l'interface VS Code sous Windows (tutorial)"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Installation de VScode + extension VSCode remote sous Windows."),(0,o.kt)("li",{parentName:"ul"},"Installation de VS Code server sous WSL, taper ",(0,o.kt)("inlineCode",{parentName:"li"},"code .")," dans un terminal WSL.")),(0,o.kt)("h3",{id:"installation-de-git-sous-wsl"},"Installation de Git sous WSL"),(0,o.kt)("p",null,"Voir le ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-git"},"tutorial Git sous WSL")," pour :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"mettre \xe0 jour la derni\xe8re version de Git sous Ubuntu"),(0,o.kt)("li",{parentName:"ul"},"la configuration de Git et de Git Credential Manager")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Vous pouvez maintenant lancer ",(0,o.kt)("a",{parentName:"p",href:"#installation-locale-pad"},"l'installation PAD+ sous WSL"),"."))))}c.isMDXComponent=!0},7505:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/adminer-54b022226297921c668c69996bab6261.png"}}]);