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
                script {
                    docker.image('node:18').inside {
                        sh 'npm install'
                    }
                }
            }
        }
        stage('Run Playwright Tests') {
            steps {
                script {
                    docker.image('mcr.microsoft.com/playwright/python:v1.37.0-jammy').inside {
                        sh 'npm ci'
                        sh 'npx playwright test playwright/demoblaze.spec.ts --reporter html'
                    }
                }
            }
            post {
                always {
                    archiveArtifacts artifacts: 'playwright-report/**'
                }
            }
        }
        stage('Run Artillery Load Test') {
            steps {
                script {
                    docker.image('node:18').inside {
                        sh 'npm install -g artillery'
                        sh 'artillery run artillery/jsonplaceholder.yml --output artillery-report.json'
                    }
                }
            }
            post {
                always {
                    archiveArtifacts artifacts: 'artillery-report.json'
                }
            }
        }
    }
}