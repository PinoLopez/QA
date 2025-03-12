pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npx playwright install'
                sh 'npm install -g artillery'
            }
        }
        stage('Playwright Tests') {
            steps {
                sh 'npx playwright install --with-deps'
                sh 'npm test'
            }
            post {
                always {
                    archiveArtifacts artifacts: 'playwright-report/**'
                }
            }
        }
        stage('Artillery Tests') {
            steps {
                sh 'artillery run artillery.yml --output artillery-report.json'
            }
        }
        stage('Generate Reports') {
            steps {
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: false,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Report'
                ])
                sh 'artillery report artillery-report.json --output artillery-report.html'
                archiveArtifacts artifacts: 'artillery-report.html'
            }
        }
    }
}