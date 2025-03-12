FROM jenkins/jenkins:lts-jdk11
USER root
RUN apt-get update && apt-get install -y docker.io
RUN usermod -aG docker jenkins
USER jenkins