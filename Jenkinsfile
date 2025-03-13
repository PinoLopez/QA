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
                sh 'npm install artillery --save-dev'
            }
        }
        stage('Playwright Tests') {
            steps {
                sh 'npx playwright test playwright/demoblaze.spec.ts --reporter html'
            }
            post {
                always {
                    archiveArtifacts artifacts: 'playwright-report/**'
                }
            }
        }
        stage('Artillery Tests') {
            steps {
                sh 'artillery run artillery/jsonplaceholder.yml --output artillery-report.json'
            }
            post {
                always {
                    archiveArtifacts artifacts: 'artillery-report.json'
                }
            }
        }
    }
}