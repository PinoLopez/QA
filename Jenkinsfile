pipeline {
    agent any

    environment {
        NODE_OPTIONS = "--max-old-space-size=4096"
    }

    stages {
        stage('Cleanup Workspace') {
            steps {
                deleteDir()
            }
        }

        stage('Checkout Code') {
            steps {
                git branch: 'master', url: 'https://github.com/PinoLopez/QA.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npm run install-playwright'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npm test'
            }
            post {
                always {
                    archiveArtifacts 'playwright-report/**'
                }
            }
        }

        stage('Run Artillery Load Test') {
            steps {
                sh 'npm run artillery'
                sh 'npm run artillery-report'
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
            archiveArtifacts artifacts: 'playwright-report/**, artillery-report.html', allowEmptyArchive: true
        }
    }
}
