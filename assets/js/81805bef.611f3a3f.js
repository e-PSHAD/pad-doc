"use strict";(self.webpackChunkdoc_epshad=self.webpackChunkdoc_epshad||[]).push([[554],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var r=n.createContext({}),u=function(e){var t=n.useContext(r),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=u(e.components);return n.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(i),m=a,f=c["".concat(r,".").concat(m)]||c[m]||d[m]||s;return i?n.createElement(f,o(o({ref:t},p),{},{components:i})):n.createElement(f,o({ref:t},p))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=i.length,o=new Array(s);o[0]=c;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=i[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},9829:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=i(7462),a=(i(7294),i(3905));const s={sidebar_position:1},o="Politiques d'utilisation",l={unversionedId:"legal/politiques",id:"legal/politiques",title:"Politiques d'utilisation",description:"Moodle int\xe8gre diff\xe9rents outils pour g\xe9rer les politiques d'utilisation. L'outil recommand\xe9 Politiques (tool_policy) permet plusieurs choses :",source:"@site/docs/legal/politiques.md",sourceDirName:"legal",slug:"/legal/politiques",permalink:"/pad-doc/legal/politiques",draft:!1,editUrl:"https://github.com/e-PSHAD/pad-doc/edit/main/docs/legal/politiques.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"M\xe9mento organisation et r\xf4les",permalink:"/pad-doc/organisation/memento"},next:{title:"Traitement des donn\xe9es",permalink:"/pad-doc/legal/rgpd"}},r={},u=[{value:"Activation de l&#39;outil de gestion des politiques",id:"activation-de-loutil-de-gestion-des-politiques",level:2},{value:"Configuration des politiques d&#39;utilisation",id:"configuration-des-politiques-dutilisation",level:2},{value:"Mise \xe0 jour d&#39;une politique",id:"mise-\xe0-jour-dune-politique",level:3},{value:"Affichage du consentement des utilisateurs",id:"affichage-du-consentement-des-utilisateurs",level:2}],p={toc:u};function d(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"politiques-dutilisation"},"Politiques d'utilisation"),(0,a.kt)("p",null,"Moodle int\xe8gre diff\xe9rents outils pour g\xe9rer les politiques d'utilisation. L'outil recommand\xe9 ",(0,a.kt)("strong",{parentName:"p"},"Politiques (tool_policy)")," permet plusieurs choses :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"d\xe9finir des documents de politiques d'utilisation"),(0,a.kt)("li",{parentName:"ul"},"afficher ces politiques en utilisant le th\xe8me de la plateforme"),(0,a.kt)("li",{parentName:"ul"},"demander l'accord des utilisateurs sur ces politiques pour leur ouvrir l'acc\xe8s \xe0 la plateforme"),(0,a.kt)("li",{parentName:"ul"},"permettre les mises \xe0 jour des politiques, afficher les r\xe9ponses des utilisateurs, ...")),(0,a.kt)("h2",{id:"activation-de-loutil-de-gestion-des-politiques"},"Activation de l'outil de gestion des politiques"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Seul un administrateur a les autorisations pour cette action.")),(0,a.kt)("p",null,"L'activation se fait dans ",(0,a.kt)("em",{parentName:"p"},"Administration du site / Utilisateurs / (Protection des donn\xe9es et politiques) / ",(0,a.kt)("strong",{parentName:"em"},"R\xe9glages des politiques"),".")," Il faut s\xe9lectionner l'outil ",(0,a.kt)("strong",{parentName:"p"},"Politiques (tool_policy)")," comme ",(0,a.kt)("em",{parentName:"p"},"Gestionnaire des politiques du site")," puis enregistrer les modifications. Les autres champs sont \xe0 ignorer."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Activation de l&#39;outil &#39;Politiques&#39; dans l&#39;administration",src:i(488).Z,width:"584",height:"162"})),(0,a.kt)("p",null,"Cette activation rend deux nouvelles options disponibles sous ",(0,a.kt)("em",{parentName:"p"},"Administration du site / Utilisateurs / Protection des donn\xe9es et politiques")," :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"G\xe9rer les politiques")," pour cr\xe9er et modifier des politiques"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Accords des utilisateurs")," pour afficher le consentement des utilisateurs aux politiques")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Nouvelles options activ\xe9es pour les politiques d&#39;utilisation dans l&#39;administration",src:i(7933).Z,width:"622",height:"218"})),(0,a.kt)("p",null,"Ces deux nouvelles options deviennent aussi disponibles pour un gestionnaire d'instance."),(0,a.kt)("h2",{id:"configuration-des-politiques-dutilisation"},"Configuration des politiques d'utilisation"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Administrateurs et gestionnaires d'instance ont acc\xe8s \xe0 cette page.")),(0,a.kt)("p",null,"Une fois l'outil activ\xe9, il est possible de cr\xe9er et g\xe9rer des politiques sous ",(0,a.kt)("em",{parentName:"p"},"Administration du site / Utilisateurs / (Protection des donn\xe9es et politiques) / ",(0,a.kt)("strong",{parentName:"em"},"G\xe9rer les politiques"),".")," Pour l'exemple d'une charte d'utilisation, voici les champs \xe0 remplir :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nom : ",(0,a.kt)("em",{parentName:"li"},"Charte d'utilisation")),(0,a.kt)("li",{parentName:"ul"},"Type : politique de site"),(0,a.kt)("li",{parentName:"ul"},"Consentement utilisateur : ",(0,a.kt)("strong",{parentName:"li"},"utilisateur authentifi\xe9")),(0,a.kt)("li",{parentName:"ul"},"Version : date de publication"),(0,a.kt)("li",{parentName:"ul"},"R\xe9sum\xe9 & Politique compl\xe8te : les deux champs sont requis et seront affich\xe9s avec le th\xe8me de la plateforme"),(0,a.kt)("li",{parentName:"ul"},"Accord optionnel : ",(0,a.kt)("strong",{parentName:"li"},"Non")," - rend l'accord obligatoire pour acc\xe9der \xe0 la plateforme ; si oui, l'utilisateur choisit entre accepter ou refuser la politique mais a acc\xe8s dans tous les cas \xe0 la plateforme, ce qui sera visible via sa page profil)"),(0,a.kt)("li",{parentName:"ul"},"Statut de la politique : ",(0,a.kt)("strong",{parentName:"li"},"Active"))),(0,a.kt)("p",null,"Enregistrer la nouvelle politique. Elle appara\xeet alors dans le tableau des politiques avec un r\xe9sum\xe9 des informations importantes. Entre autre on peut voir le nombre d'utilisateurs ayant accept\xe9 la politique, l'afficher, la modifier ou l'inactiver (une politique inactiv\xe9e est conserv\xe9e mais ne peut plus \xeatre r\xe9activ\xe9e - on peut la recr\xe9er par copie)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tableau des politiques d&#39;utilisation",src:i(6819).Z,width:"873",height:"279"})),(0,a.kt)("h3",{id:"mise-\xe0-jour-dune-politique"},"Mise \xe0 jour d'une politique"),(0,a.kt)("p",null,"Dans le menu d'actions d'une politique, il est possible de l'\xe9diter pour la modifier. Avant la sauvegarde, il est possible d'indiquer s'il s'agit d'une modification mineure ou non :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"si mineure (corrections typographiques, orthographiques...), l'accord des utilisateurs n'est pas redemand\xe9 ;"),(0,a.kt)("li",{parentName:"ul"},"sinon (le fond de la politique a chang\xe9), alors les utilisateurs devront redonner leur accord \xe0 la prochaine connexion.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Choix de modification mineure pour l&#39;enregistrement d&#39;une politique",src:i(5898).Z,width:"827",height:"233"})),(0,a.kt)("h2",{id:"affichage-du-consentement-des-utilisateurs"},"Affichage du consentement des utilisateurs"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Administrateurs et gestionnaires d'instance ont acc\xe8s \xe0 cette page.")),(0,a.kt)("p",null,"La page disponible sous ",(0,a.kt)("em",{parentName:"p"},"Administration du site / Utilisateurs / (Protection des donn\xe9es et politiques) / ",(0,a.kt)("strong",{parentName:"em"},"Accords des utilisateurs")," ")," permet de consulter l'accord des utilisateurs pour chaque politique d\xe9finie."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Acc\xe8s pour l'utilisateur")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Les utilisateurs peuvent consulter leur consentement personnel depuis leur page ",(0,a.kt)("em",{parentName:"p"},"Profil / Protection des donn\xe9es et politiques / ",(0,a.kt)("strong",{parentName:"em"},"Politiques et accords")," ")," et le modifier dans le cas d'un consentement optionnel."))))}d.isMDXComponent=!0},488:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/politique-activation-8f7c837be78aa8d95fc7c920d420d264.png"},7933:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/politique-admin-4a4ac6091b52b30643b4dd252f3e34fa.png"},6819:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/politique-manage-a63f515fa6e7f99256c534dd6fde0a1e.png"},5898:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/politique-update-c228df58b30bf0c0393d63745d673679.png"}}]);