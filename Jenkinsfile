pipeline {
    agent {
        docker {
            image 'node:18-alpine' // Usa una imagen de Docker con Node.js
        }
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npx playwright install'
                sh 'npm install -g artillery'
            }
        }
        stage('Playwright Tests') {
            steps {
                sh 'npm test'
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