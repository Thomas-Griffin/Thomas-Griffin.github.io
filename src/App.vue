<template>
  <div id="content">
    <img id="profile-pic" alt="" src="/assets/img/profile-pic.jpg">
    <username-header :username="headerUsername"/>

    <div id="links">
      <link-button v-for="link in links" :key="link.text" v-bind="link"/>
    </div>

    <username-footer :username="footerUsername"/>
  </div>
</template>

<script setup>
const headerUsername = "Thomas Griffin"
const footerUsername = "@ThomasGriffin"
const links = [
  {
    text: "GitHub",
    websiteLink: "https://github.com/",
    imageFile: "github-icon.svg",
    username: "thomas-griffin"
  },
  {
    text: "LinkedIn",
    websiteLink: "https://www.linkedin.com/in/",
    imageFile: "linkedin-icon.svg",
    username: "thomasjamesgriffin"
  },
  {
    text: "Docker",
    websiteLink: "https://hub.docker.com/u/",
    imageFile: "docker-icon.svg",
    username: "thomasgriffin"
  },
  {
    text: "Twitter",
    websiteLink: "https://twitter.com/",
    imageFile: "twitter-icon.svg",
    username: "Thomas_Griffin_"
  },
  {
    text: "Postman",
    websiteLink: "https://www.postman.com/",
    imageFile: "postman-icon.svg",
    username: "thomas-griffin"
  },
  {
    text: "Stack Overflow",
    websiteLink: "https://stackoverflow.com/users/",
    imageFile: "stackoverflow-icon.svg",
    username: "11799865/thomas-griffin"
  },
  {
    text: "SoundCloud",
    websiteLink: "https://soundcloud.com/",
    imageFile: "soundcloud-icon.svg",
    username: "thomas-griffin-music"
  }
]
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');

:root {
  font-family: 'Mulish', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  text-rendering: optimizeLegibility;
  --color: rgb(255, 255, 255);
}

body {
  background: #1f2023
}

#content {
  color: var(--color);
  margin: 0;
  padding: 0;
  position: relative;
}

#profile-pic {
  width: 100px;
  height: 120px;
  display: block;
  margin: 20px auto 20px;
  border-radius: 25px;
  border: solid var(--color) 3px;
}

#links {
  max-width: 90%;
  width: 300px;
  display: block;
  margin: 25px auto;
}
</style>
