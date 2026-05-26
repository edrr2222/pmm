Para iniciar el proyecto
***debes tener composer y postgresql y opcional si quieres trabajar o ver la db pgadmin instalado***
posdata en la instalaciond e postgresl al estar en le paso del builder stack instalar la erramienta de migrationsToolKits
## Crear una rama basada en develop

    Clonar el repositorio:

    ```bash
    git clone https://github.com/edrr2222/pmm.git
    cd pmm

    Traer todas las ramas remotas:

    git fetch --all
    Cambiar a la rama develop:

    git checkout develop

    Si la rama no existe localmente:

    git checkout -b develop origin/develop

    Crear una nueva rama basada en develop:

    git checkout -b feature_nombre-de-la-rama

##  Instala las dependencias del proyecto
    composer install
    luego creo que hay que ejecutar 
        php artisan key:generate
    


Luego de Tener el proyecto  configura en el  .env su base de datos postgresql

DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=pmm
DB_USERNAME=postgres
DB_PASSWORD=123456

***REcuerda tener instalado Xamp para hacer pruebas locales y que los siguientes comandos no se estallen***
    configura el php ini de xamp
        php --ini
            Te mostrará algo como:
                Loaded Configuration File: C:\xampp\php\php.ini
                    Abre el archivo y busca estas líneas:
                        ;extension=pgsql
                        ;extension=pdo_pgsql
                    Debe quedar:
                        extension=pgsql
                        extension=pdo_pgsql
despues de configurar el .env y configurar tu entorno local, realiza la migracion con el comando 
    php artisan migrate