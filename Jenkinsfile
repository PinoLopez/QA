pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'master', url: 'https://github.com/PinoLopez/QA.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npx playwright install --with-deps'
            }
        }
        stage('Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
        stage('Artillery Tests') {
            steps {
                sh 'npx artillery run test.yml'
            }
        }
    }
}