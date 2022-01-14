---
sidebar_position: 1
---
# Prérequis au déploiement automatique

## Prérequis logiciels Moodle

Voir les prérequis de [Moodle 3.11](https://docs.moodle.org/dev/Moodle_3.11_release_notes#Server_requirements).

En résumé :
- serveur Apache installé avec module PHP (PHP 7.3.x ou PHP 7.4.x)
- base de données MariaDB installé, 10.2.29 <= version <= 10.5

> PHP version: minimum PHP 7.3.0. PHP 7.4.x is supported too. PHP 8.0 support is not ready for production yet.
> - PHP extension sodium is recommended.
> - PHP setting max_input_vars is recommended to be >= 5000 for PHP 7.x installations.

:::info Environnement pour Moodle
Moodle vérifie automatiquement l'environnement et signalera les défauts à l'installation. Après installation, il est aussi possible de consulter l'environnement depuis l'interface Moodle dans *Administration du site > Serveur > Environnement* et *Administration du site > Serveur > Info PHP*.
:::

:::caution MariaDB 10.6
Moodle utilise une configuration marquée comme dépréciée dans MariaDB 10.6. "The setting ROW_FORMAT=COMPRESSED is deprecated in MariaDB 10.6." - voir https://tracker.moodle.org/browse/MDL-72131. Il est recommandé de rester sur MariaDB 10.5.
:::


### Exemple : changement de max_input_vars

Il est recommandé de [passer le réglage PHP max_input_vars à 5000](https://docs.moodle.org/3x/fr/Environnement_-_max_input_vars) (au lieu de 1000 par défaut). Cela se fait en éditant le fichier de configuration `php.ini` (voir *Administration du site > Serveur > Info PHP* pour la localisation du fichier sur le serveur).

Par exemple avec un serveur Debian + Apache, on peut le trouver sous `/etc/php/7.4/apache2/php.ini`.

Editer le fichier et rechercher ou ajouter la ligne suivante :
```
max_input_vars = 5000
```

Après sauvegarde, il peut être nécessaire de relancer le serveur web, par exemple avec `sudo service apache2 restart`.


### Sous Debian 9

A tite d'informations, voici la liste des packages installés pour le serveur https://www.eig-epshad.com/. S'agissant d'une **Debian 9**, il y a quelques configurations de dépôts supplémentaires pour obtenir les versions requises de PHP et MariaDB.


**Apache2 et PHP 7.4**

```
sudo apt update
sudo apt install apache2

# dépôt pour PHP
sudo apt install curl wget gnupg2 ca-certificates apt-transport-https
wget -q https://packages.sury.org/php/apt.gpg -O- | sudo apt-key add -
echo "deb https://packages.sury.org/php/ stretch main" | sudo tee /etc/apt/sources.list.d/php.list

sudo apt update
sudo apt upgrade

# from https://docs.moodle.org/311/en/Installing_Moodle_on_Debian_based_distributions
sudo apt install -y php7.4 php7.4-cli php7.4-common php7.4-mysql libapache2-mod-php7.4 php7.4-gd php7.4-curl php7.4-xmlrpc php7.4-intl php7.4-zip php7.4-mbstring php7.4-iconv php7.4-tokenizer php7.4-soap php7.4-simplexml php7.4-dom php7.4-xml php7.4-xmlreader php7.4-json

# packages supplémentaires
# sudo apt install -y php7.4-ssh2 php7.4-exif php7.4-ftp php7.4-imagick php7.4-posix php7.4-sockets
# sudo apt install php-pear php7.4-imap php7.4-memcache php7.4-pspell php7.4-snmp php7.4-tidy php7.4-xsl
# sudo apt install libapache2-mod-perl2 php7.4-dev php7.4-odbc

# activation du module PHP sous Apache
sudo a2enmod php7.4
sudo service apache2 restart
```


**MariaDB 10.5**

Pour installer MariaDB en version 10.5, il faut d'abord [enregistrer un dépôt officiel](https://mariadb.org/download/?t=repo-config&d=Debian+9+%22stretch%22&v=10.6&r_m=cnrs).

```
sudo apt-get install software-properties-common dirmngr apt-transport-https
sudo apt-key adv --fetch-keys 'https://mariadb.org/mariadb_release_signing_key.asc'
sudo add-apt-repository 'deb [arch=amd64,i386,ppc64el,arm64] https://ftp.igh.cnrs.fr/pub/mariadb/repo/10.5/debian stretch main'

sudo apt-get update
sudo apt-get install mariadb-server
```

On peut ensuite finaliser l'installation avec la création des accès au serveur de base de données :

```
# configuration du mot de passe root
mysql_secure_installation

mysql -u root -p

> GRANT ALL PRIVILEGES ON *.* TO root@'localhost' IDENTIFIED BY '***';
> FLUSH PRIVILEGES;

# création d'un compte dédié pour l'accès Moodle
> CREATE USER 'moodledb'@'localhost' IDENTIFIED BY '***';
> GRANT ALL PRIVILEGES ON *.* TO moodledb@'localhost' IDENTIFIED BY '***';
> FLUSH PRIVILEGES;
```


## Prérequis déploiement

Le dépôt [pad-infra](https://github.com/e-PSHAD/pad-infra) contient des scripts [Ansible](https://docs.ansible.com/ansible) pour le déploiement et la configuration automatique de Moodle. Ansible est un outil de configuration et déploiement automatique avec un minimum de prérequis. Il faut un accès SSH sur les machines cibles. Voir le [guide d'installation Ansible](https://docs.ansible.com/ansible/latest/installation_guide/index.html). Basiquement cela se fait avec pip (Python 3.8+ sur la machine de contrôle).

La page suivante explique le [déploiement](deploiement).