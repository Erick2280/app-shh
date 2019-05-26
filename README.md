# App *Shh!*

## Executando o app

É preciso ter o [Node.js](https://nodejs.org/en/) instalado na máquina para executar no navegador. Além disso, é preciso ter o [Android SDK](https://developer.android.com/studio/) para executar no Android (certifique-se que a variável de ambiente `ANDROID_SDK_ROOT` está corretamente configurada).

### Configurando
Clone o repositório para um diretório da sua preferência.

Instale o Ionic e o Cordova:

    npm install -g ionic cordova

Instale as dependências do projeto:

    npm install

### Executando no navegador

*Os recursos nativos, como vibração e controle de brilho do dispositivo, não funcionam no navegador.*

Dentro da pasta raiz do repositório, execute:

    ionic serve

Uma página abrirá no navegador com o app. É possível usar o inspetor do Chrome (`F12` e depois `Ctrl` + `Shift` + `M`) para ver como ficaria num smartphone.

### Executando em um dispositivo Android

Dentro da pasta raiz do repositório, execute:

    npm install
    ionic cordova prepare android

Toda vez que quiser gerar um novo arquivo `.apk`, execute:

    ionic cordova run android

O comando automaticamente instalará o `.apk` em um dispositivo conectado ao PC com a Depuração USB ativada ou uma instância do emulador do Android. Caso não haja nenhum desses, uma nova instância do emulador do Android será iniciada com o aplicativo.