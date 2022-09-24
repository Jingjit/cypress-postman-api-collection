# SOFEWARE TESTING
## CYPRESS
### How to install cypress
- Download and install [Node.js](https://nodejs.org/en/download/)
- Install yarn package
```shell
> npm install --global yarn
```
If you found error like `AppData\Roaming\npm\yarn.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies` you can fix follow below
```shell
> set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```
or
```shell
> C:\Users\<your account>\AppData\Roaming\npm\yarn.ps1
```
- Install cypress locally as a dev dependency for your project.
```shell
> cd /your/project/path
> yarn add cypress --dev
```

### Cypress open
```shell
> cd /your/project/path
> yarn run cypress open
```