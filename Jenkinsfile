pipeline {
    agent any

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }
        stage('Checkout Code') {
            steps {
                git branch: 'master', url: 'https://github.com/PinoLopez/QA.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    isUnix() {
                        withEnv([]) {
                            sh 'docker inspect -f . node:18'
                        }
                    }
                }
                steps {
                    withDockerContainer(image: 'node:18', args: '-u 128:138 -w /var/lib/jenkins/workspace/QA-Pipeline -v /var/lib/jenkins/workspace/QA-Pipeline:/var/lib/jenkins/workspace/QA-Pipeline:rw,z -v /var/lib/jenkins/workspace/QA-Pipeline@tmp:/var/lib/jenkins/workspace/QA-Pipeline@tmp:rw,z') {
                        sh 'npm install'
                        sh 'sudo chown -R node:node /.npm'
                        sh 'npx playwright install --with-deps'
                    }
                }
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