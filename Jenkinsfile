pipeline {
    agent any

    environment {
        NODE_OPTIONS = "--max-old-space-size=4096"
    }

    stages {
        stage('Checkout') {
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
                sh 'npm test'
            }
            post {
                always {
                    archiveArtifacts 'playwright-report/**'
                }
            }
        }

        stage('Artillery Tests') {
            steps {
                sh 'npm run artillery'
                sh 'artillery report artillery-report.json --output artillery-report.html'
            }
            post {
                always {
                    archiveArtifacts 'artillery-report.html'
                }
            }
        }
    }

    post {
        always {
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])
        }
    }
}
