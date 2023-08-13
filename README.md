# Drag and Drop Boxes/Layouts/List_items

# To check the status of github ACTION
github action status: <br>
<img src='https://github.com/Akash9611/Drag_and_Drop_boxes/workflows/My-GitHub-Action-tutorial/badge.svg?branch=main'><br>


## Run Following Scripts/Commands on terminal 

In the project directory, you can run:

### `npm install`
Install all dependencies and node_module folder.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#   D r a g _ a n d _ D r o p _ b o x e s 
 
#GitHub ACTION 
In this project I have also implimented GitHub Action workflow to deploy the APP....
To know -how github ACTION workflow works
-In future we can also use it to create an pipeline with aws by building an CI/CD pipeline using this github Action workflow and integrate it with AWS or other cloud services TO Deploy the app on webservers or etc.

I have deleted the wokrflow file that resides inside the .github/workflows/my-pipeline.yml
code as follows- 
# ----------------------------
# Learning git Action
# ----------------------------

name: My-GitHub-Action-tutorial
env : 
  APPLICATION_NAME : "Drag_And_Drop_App"
  DEPLOY_PACKAGE_NAME: "dragDrop-app-ver-${{github.sha}}"
  
on:
  push:
    branches:
      - main

jobs:
  testing:
    runs-on: [ubuntu-latest]

    steps:
      - name: Print message from testing job
        run : echo "Hello World"

      - name: Execute multiple messages
        run : |
          echo "Hello msg 1"
          echo "Hello msg 2"
          echo "Printing Global Env Varialbe ${{env.DEPLOY_PACKAGE_NAME}}"

      - name: list current folder
        run : ls -la
        
      - name: Clone my repo
        uses: actions/checkout@v1
      
      - name: list folder after cloning git repo
        run : ls -la
        
  deploy:
    runs-on: [ubuntu-latest]
    needs: [testing]
    env:
      VAR1 : "this env variables inside the jobs act as a Local env Variables"
      VAR2 : "Darag and Drop Application"

    steps:
      - name: Print message from deploy job
        run: echo "Project Deployed msg"

      - name: list current folder
        run : ls -la

      - name: Printing Global env variable
        run : echo " App Name - ${{env.APPLICATION_NAME}}"

      - name: Printing Local env variable
        run : echo " VAR1 = ${{env.VAR1}}"

      - name: Printing Super Local env variable
        run : echo "this is a super local variable $SUPER_VAR"
        env : 
          SUPER_VAR : "Hello I am local variable"
    
